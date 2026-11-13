import assert from 'node:assert/strict';
import { before, test } from 'node:test';
import { PDFDocument } from 'pdf-lib';

const { P2_LOCAL_BASE_URL, SUPABASE_URL, P2_LOCAL_ADMIN_EMAIL, P2_LOCAL_ADMIN_PASSWORD, P2_LOCAL_REQUEST_ID } = process.env;
const enabled = Boolean(P2_LOCAL_BASE_URL && SUPABASE_URL && P2_LOCAL_ADMIN_EMAIL && P2_LOCAL_ADMIN_PASSWORD && P2_LOCAL_REQUEST_ID);
const skip = enabled ? false : 'Configure .env.local e execute `pnpm run test:local`.';
let base;
let requestPath;
let cookie;

function localUrl(value) {
  const url = new URL(value);
  assert.equal(url.protocol, 'http:', 'somente HTTP local é permitido');
  assert.ok(['localhost', '127.0.0.1', '[::1]'].includes(url.hostname), 'somente loopback é permitido');
  return url;
}

function endpoint(path) {
  return new URL(path, base);
}

function authenticated(path, options = {}) {
  return fetch(endpoint(path), {
    ...options,
    headers: { Cookie: cookie, ...options.headers },
  });
}

function json(method, body) {
  return { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) };
}

before(async () => {
  if (!enabled) return;
  base = localUrl(P2_LOCAL_BASE_URL);
  localUrl(SUPABASE_URL);
  requestPath = `/api/painel/solicitacoes/${encodeURIComponent(P2_LOCAL_REQUEST_ID)}`;
  const login = await fetch(endpoint('/api/auth/login'), {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ email: P2_LOCAL_ADMIN_EMAIL, password: P2_LOCAL_ADMIN_PASSWORD }),
    redirect: 'manual',
  });
  assert.equal(login.status, 303);
  cookie = login.headers.get('set-cookie')?.split(';', 1)[0];
  assert.ok(cookie, 'login local deve criar sessão');
});

test('API-02: solicitação pública rejeita campos insuficientes', { skip }, async () => {
  const beforeList = await authenticated('/api/painel/solicitacoes');
  assert.equal(beforeList.status, 200);
  const beforeIds = (await beforeList.json()).solicitacoes.map((item) => item.id).sort();
  const response = await fetch(endpoint('/api/solicitacoes'), json('POST', {
    name: 'A', phone: '123', request: 'curto',
  }));
  assert.equal(response.status, 400);
  assert.match((await response.json()).message, /Preencha nome/);
  const afterList = await authenticated('/api/painel/solicitacoes');
  assert.equal(afterList.status, 200);
  assert.deepEqual((await afterList.json()).solicitacoes.map((item) => item.id).sort(), beforeIds);
});

test('API-03: item de orçamento pode ser criado, consultado, alterado e removido', { skip }, async () => {
  const path = `${requestPath}/itens`;
  let itemId;
  try {
    const create = await authenticated(path, json('POST', {
      descricao: 'Item temporário API P2', quantidade: 2, valorUnitario: 12.5,
    }));
    assert.equal(create.status, 200);
    itemId = (await create.json()).id;
    assert.ok(itemId);

    const list = await authenticated(path);
    assert.equal(list.status, 200);
    assert.ok((await list.json()).itens.some((item) => item.id === itemId && Number(item.quantidade) === 2));

    const update = await authenticated(path, json('POST', {
      itemId, descricao: 'Item temporário API P2 editado', quantidade: 3, valorUnitario: 10,
    }));
    assert.equal(update.status, 200);
    const updatedList = await authenticated(path);
    assert.equal(updatedList.status, 200);
    assert.ok((await updatedList.json()).itens.some((item) => item.id === itemId && Number(item.quantidade) === 3));
  } finally {
    if (itemId) {
      const remove = await authenticated(`${path}/${encodeURIComponent(itemId)}`, { method: 'DELETE' });
      assert.equal(remove.status, 200, 'limpeza do item temporário');
    }
  }
  const finalList = await authenticated(path);
  assert.equal(finalList.status, 200);
  assert.ok(!(await finalList.json()).itens.some((item) => item.id === itemId));
});

test('API-04: proposta persiste alteração e volta ao valor inicial', { skip }, async () => {
  const path = `${requestPath}/proposta/dados`;
  const initialResponse = await authenticated(path);
  assert.equal(initialResponse.status, 200);
  const initial = (await initialResponse.json()).proposta;
  const changedValidity = initial.validade_dias === 16 ? 17 : 16;
  try {
    const save = await authenticated(path, json('POST', {
      validadeDias: changedValidity,
      prazoEntrega: initial.prazo_entrega ?? '',
      condicoesPagamento: initial.condicoes_pagamento ?? '',
      observacoes: initial.observacoes ?? '',
    }));
    assert.equal(save.status, 200);
    const reread = await authenticated(path);
    assert.equal(reread.status, 200);
    assert.equal((await reread.json()).proposta.validade_dias, changedValidity);
  } finally {
    const restore = await authenticated(path, json('POST', {
      validadeDias: initial.validade_dias,
      prazoEntrega: initial.prazo_entrega ?? '',
      condicoesPagamento: initial.condicoes_pagamento ?? '',
      observacoes: initial.observacoes ?? '',
    }));
    assert.equal(restore.status, 200, 'restauração da proposta inicial');
  }
  const restored = await authenticated(path);
  assert.equal((await restored.json()).proposta.validade_dias, initial.validade_dias);
});

test('API-05: status persiste, gera histórico e retorna ao estado inicial', { skip }, async () => {
  const inheritedStatus = await authenticated(`${requestPath}/status`, json('POST', { status: 'toString' }));
  assert.equal(inheritedStatus.status, 400, 'nome herdado não é status comercial');
  const listResponse = await authenticated('/api/painel/solicitacoes');
  assert.equal(listResponse.status, 200);
  const initial = (await listResponse.json()).solicitacoes.find((item) => item.id === P2_LOCAL_REQUEST_ID);
  assert.ok(initial, 'fixture local deve existir');
  const changedStatus = initial.status === 'em_atendimento' ? 'orcamento' : 'em_atendimento';
  try {
    const save = await authenticated(`${requestPath}/status`, json('POST', {
      status: changedStatus, observacao: 'Teste automatizado P2: mudança temporária',
    }));
    assert.equal(save.status, 200);
    const reread = await authenticated('/api/painel/solicitacoes');
    assert.equal(reread.status, 200);
    assert.equal((await reread.json()).solicitacoes.find((item) => item.id === P2_LOCAL_REQUEST_ID)?.status, changedStatus);
    const history = await authenticated(`${requestPath}/historico`);
    assert.equal(history.status, 200);
    assert.ok((await history.json()).historico.some((entry) => String(entry.descricao ?? '').includes('Teste automatizado P2')));
  } finally {
    const restore = await authenticated(`${requestPath}/status`, json('POST', {
      status: initial.status, observacao: 'Teste automatizado P2: restauração do status',
    }));
    assert.equal(restore.status, 200, 'restauração do status inicial');
  }
  const restored = await authenticated('/api/painel/solicitacoes');
  assert.equal((await restored.json()).solicitacoes.find((item) => item.id === P2_LOCAL_REQUEST_ID)?.status, initial.status);
});

test('API-06: senha incorreta não cria sessão administrativa', { skip }, async () => {
  const response = await fetch(endpoint('/api/auth/login'), {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ email: P2_LOCAL_ADMIN_EMAIL, password: 'senha-incorreta-p2' }),
    redirect: 'manual',
  });
  assert.equal(response.status, 303);
  assert.equal(new URL(response.headers.get('location')).pathname, '/login');
  assert.equal(new URL(response.headers.get('location')).searchParams.get('erro'), 'credenciais');
  assert.ok(!response.headers.get('set-cookie')?.includes('wg_admin_session='));
});

test('API-07: proposta da seed responde com assinatura e MIME de PDF', { skip }, async () => {
  const response = await authenticated(`${requestPath}/proposta`);
  assert.equal(response.status, 200);
  assert.match(response.headers.get('content-type') ?? '', /^application\/pdf/);
  assert.match(response.headers.get('content-disposition') ?? '', /attachment; filename="proposta-wg-/);
  const bytes = new Uint8Array(await response.arrayBuffer());
  assert.ok(bytes.length > 1000, 'PDF não pode estar vazio');
  assert.equal(new TextDecoder().decode(bytes.subarray(0, 5)), '%PDF-');
  const pdf = await PDFDocument.load(bytes);
  assert.ok(pdf.getPageCount() >= 1, 'PDF precisa conter página legível por parser');
});

test('API-08: validade respeita limites de 1 a 365 dias', { skip }, async () => {
  const path = `${requestPath}/proposta/dados`;
  const initial = (await (await authenticated(path)).json()).proposta;
  try {
    for (const [validadeDias, expectedStatus] of [[0, 400], [1, 200], [365, 200], [366, 400]]) {
      const beforeAttempt = await authenticated(path);
      assert.equal(beforeAttempt.status, 200);
      const previousValidity = (await beforeAttempt.json()).proposta.validade_dias;
      const expectedPersistedValue = expectedStatus === 200 ? validadeDias : previousValidity;
      const response = await authenticated(path, json('POST', {
        validadeDias,
        prazoEntrega: initial.prazo_entrega ?? '',
        condicoesPagamento: initial.condicoes_pagamento ?? '',
        observacoes: initial.observacoes ?? '',
      }));
      assert.equal(response.status, expectedStatus, `validade ${validadeDias}`);
      const saved = await authenticated(path);
      assert.equal(saved.status, 200);
      assert.equal((await saved.json()).proposta.validade_dias, expectedPersistedValue,
        `validade ${validadeDias} deve ${expectedStatus === 200 ? 'persistir' : 'preservar o estado anterior'}`);
    }
  } finally {
    const restore = await authenticated(path, json('POST', {
      validadeDias: initial.validade_dias,
      prazoEntrega: initial.prazo_entrega ?? '',
      condicoesPagamento: initial.condicoes_pagamento ?? '',
      observacoes: initial.observacoes ?? '',
    }));
    assert.equal(restore.status, 200, 'restauração da proposta após limites');
  }
  const final = await authenticated(path);
  assert.equal(final.status, 200);
  assert.equal((await final.json()).proposta.validade_dias, initial.validade_dias);
});
