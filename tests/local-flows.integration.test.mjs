import assert from 'node:assert/strict';
import test from 'node:test';

const baseUrl = process.env.P2_LOCAL_BASE_URL;
const supabaseUrl = process.env.SUPABASE_URL;
const adminEmail = process.env.P2_LOCAL_ADMIN_EMAIL;
const adminPassword = process.env.P2_LOCAL_ADMIN_PASSWORD;
const requestId = process.env.P2_LOCAL_REQUEST_ID;
const enabled = Boolean(baseUrl && supabaseUrl && adminEmail && adminPassword && requestId);

test('fluxos locais: proteção, login administrativo e consulta comercial', {
  skip: enabled ? false : 'Configure .env.local e execute `pnpm run test:local`.',
}, async () => {
  const base = new URL(baseUrl);
  const database = new URL(supabaseUrl);
  const loopbackHosts = new Set(['localhost', '127.0.0.1', '[::1]']);

  assert.ok(loopbackHosts.has(base.hostname), 'a aplicação deve usar um host local');
  assert.ok(loopbackHosts.has(database.hostname), 'o Supabase deve usar um host local');
  assert.equal(base.protocol, 'http:');
  assert.equal(database.protocol, 'http:');

  const anonymous = await fetch(new URL('/api/painel/solicitacoes', base));
  assert.equal(anonymous.status, 401, 'o painel deve rejeitar acesso sem sessão');

  const login = await fetch(new URL('/api/auth/login', base), {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ email: adminEmail, password: adminPassword }),
    redirect: 'manual',
  });
  assert.equal(login.status, 303, 'o login administrativo deve redirecionar');
  assert.equal(new URL(login.headers.get('location')).pathname, '/sistema');

  const cookie = login.headers.get('set-cookie')?.split(';', 1)[0];
  assert.ok(cookie, 'o servidor deve emitir a sessão administrativa HTTP-only');

  const headers = { Cookie: cookie };
  const listResponse = await fetch(new URL('/api/painel/solicitacoes', base), { headers });
  assert.equal(listResponse.status, 200);
  const list = await listResponse.json();
  assert.ok(Array.isArray(list.solicitacoes));
  assert.ok(list.solicitacoes.some((item) => item.id === requestId));
  assert.ok(list.solicitacoes.some((item) => item.cliente_nome === 'Cliente de Teste P2'));

  const [itemsResponse, proposalResponse, historyResponse] = await Promise.all([
    fetch(new URL(`/api/painel/solicitacoes/${requestId}/itens`, base), { headers }),
    fetch(new URL(`/api/painel/solicitacoes/${requestId}/proposta/dados`, base), { headers }),
    fetch(new URL(`/api/painel/solicitacoes/${requestId}/historico`, base), { headers }),
  ]);

  assert.equal(itemsResponse.status, 200);
  const items = await itemsResponse.json();
  assert.ok(items.itens.some((item) => item.descricao === 'Kit de vedação (item fictício)'));

  assert.equal(proposalResponse.status, 200);
  const proposal = await proposalResponse.json();
  assert.equal(proposal.salva, true);
  assert.equal(proposal.proposta.validade_dias, 15);

  assert.equal(historyResponse.status, 200);
  const history = await historyResponse.json();
  assert.ok(history.historico.length > 0);
});
