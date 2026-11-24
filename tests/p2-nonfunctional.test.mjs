import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';
import { cpus, totalmem } from 'node:os';
import { after, before, test } from 'node:test';
import webdriver from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';
import edge from 'selenium-webdriver/edge.js';

const { Builder, Browser, By, until } = webdriver;
const { P2_LOCAL_BASE_URL, SUPABASE_URL, P2_LOCAL_ADMIN_EMAIL, P2_LOCAL_ADMIN_PASSWORD, P2_LOCAL_REQUEST_ID } = process.env;
const enabled = Boolean(P2_LOCAL_BASE_URL && SUPABASE_URL && P2_LOCAL_ADMIN_EMAIL && P2_LOCAL_ADMIN_PASSWORD && P2_LOCAL_REQUEST_ID);
const skip = enabled ? false : 'Configure .env.local e execute `pnpm run test:nonfunctional`.';
const evidencePath = process.env.P2_NF_EVIDENCE_PATH || 'test-results/p2-nonfunctional-local.json';
const timingRepetitions = 20;
const evidence = { at: new Date().toISOString(), commit: process.env.P2_RUN_COMMIT || 'não informado', node: process.version, platform: process.platform, cpu: cpus()[0]?.model, memoryBytes: totalmem(), category: 'Execução automatizada local; critérios preliminares sujeitos à validação do grupo/professor', tests: [] };
let base;
let cookie;

function loopback(value) {
  const url = new URL(value);
  assert.equal(url.protocol, 'http:');
  assert.ok(['localhost', '127.0.0.1', '[::1]'].includes(url.hostname));
  return url;
}
function url(path) { return new URL(path, base); }
function json(method, body) { return { method, headers: { 'Content-Type': 'application/json', Cookie: cookie }, body: JSON.stringify(body) }; }
function record(id, detail) { evidence.tests.push({ id, ...detail }); }
function summarizeTiming(values) {
  const sorted = [...values].sort((a,b) => a-b);
  const midpoint = sorted.length / 2;
  return { maxMs: sorted.at(-1), medianMs: (sorted[midpoint-1] + sorted[midpoint]) / 2 };
}

before(async () => {
  if (!enabled) return;
  base = loopback(P2_LOCAL_BASE_URL);
  loopback(SUPABASE_URL);
  const response = await fetch(url('/api/auth/login'), {
    method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ email: P2_LOCAL_ADMIN_EMAIL, password: P2_LOCAL_ADMIN_PASSWORD }), redirect: 'manual',
  });
  assert.equal(response.status, 303);
  cookie = response.headers.get('set-cookie')?.split(';', 1)[0];
  assert.ok(cookie);
});

after(async () => {
  if (!enabled) return;
  await mkdir(dirname(evidencePath), { recursive: true });
  await writeFile(evidencePath, JSON.stringify(evidence, null, 2));
});

test('TNF-01: quatro recursos comerciais recusam acesso anônimo', { skip }, async () => {
  const paths = [
    '/api/painel/solicitacoes',
    `/api/painel/solicitacoes/${P2_LOCAL_REQUEST_ID}/itens`,
    `/api/painel/solicitacoes/${P2_LOCAL_REQUEST_ID}/historico`,
    `/api/painel/solicitacoes/${P2_LOCAL_REQUEST_ID}/proposta`,
  ];
  const statuses = [];
  for (const path of paths) {
    const response = await fetch(url(path));
    statuses.push(response.status);
    assert.equal(response.status, 401, path);
    assert.ok(!(await response.text()).includes('Cliente de Teste P2'));
  }
  record('TNF-01', { paths, statuses, conclusion: 'Atende no ambiente local' });
});

test('TNF-02: três entradas inválidas recebem 400 sem campo de segredo', { skip }, async () => {
  const id = P2_LOCAL_REQUEST_ID;
  const inputs = [
    ['/api/solicitacoes', { name:'A', phone:'123', request:'curto' }],
    [`/api/painel/solicitacoes/${id}/status`, { status:'inexistente' }],
    [`/api/painel/solicitacoes/${id}/itens`, { descricao:'X', quantidade:0, valorUnitario:-1 }],
  ];
  const statuses = [];
  for (const [path, payload] of inputs) {
    const response = await fetch(url(path), json('POST', payload));
    statuses.push(response.status);
    assert.equal(response.status, 400, path);
    assert.doesNotMatch(await response.text(), /api.?key|password|secret|token/i);
  }
  record('TNF-02', { paths: inputs.map(([path]) => path), statuses, conclusion: 'Atende no ambiente local' });
});

test('TNF-03: início e login em vinte medições por operação', { skip }, async () => {
  const result = {};
  for (const kind of ['inicio','login']) {
    const samples = [];
    for (let i=0; i<timingRepetitions; i++) {
      const start = performance.now();
      const response = kind==='inicio' ? await fetch(url('/')) : await fetch(url('/api/auth/login'), {
        method:'POST', headers:{ 'Content-Type':'application/x-www-form-urlencoded' },
        body:new URLSearchParams({email:P2_LOCAL_ADMIN_EMAIL,password:P2_LOCAL_ADMIN_PASSWORD}), redirect:'manual',
      });
      await response.arrayBuffer();
      assert.equal(response.status, kind==='inicio' ? 200 : 303);
      samples.push(Math.round((performance.now()-start)*10)/10);
    }
    result[kind] = { samplesMs:samples, repetitions:timingRepetitions, ...summarizeTiming(samples) };
    assert.ok(result[kind].maxMs <= 3000, `${kind}: máximo preliminar acima de 3 s`);
  }
  record('TNF-03', { ...result, repetitionsPerOperation:timingRepetitions, thresholdMs:3000, conclusion:'Atende ao critério preliminar local' });
});

test('TNF-04: listagem comercial em vinte medições', { skip }, async () => {
  const samples = [];
  for (let i=0; i<timingRepetitions; i++) {
    const start = performance.now();
    const response = await fetch(url('/api/painel/solicitacoes'), { headers:{ Cookie:cookie } });
    const body = await response.json();
    assert.equal(response.status, 200);
    assert.ok(Array.isArray(body.solicitacoes));
    samples.push(Math.round((performance.now()-start)*10)/10);
  }
  const timing = summarizeTiming(samples);
  assert.ok(timing.maxMs <= 3000, 'listagem: máximo preliminar acima de 3 s');
  record('TNF-04', { samplesMs:samples, repetitions:timingRepetitions, ...timing, thresholdMs:3000, conclusion:'Atende ao critério preliminar local' });
});

test('TNF-05: contato e login em Chrome e Edge desktop', { skip }, async () => {
  const versions = {};
  for (const [browser, options] of [
    [Browser.CHROME, new chrome.Options().addArguments('--headless=new','--window-size=1366,768')],
    [Browser.EDGE, new edge.Options().addArguments('--headless=new','--window-size=1366,768')],
  ]) {
    const builder = new Builder().forBrowser(browser);
    if (browser === Browser.CHROME) builder.setChromeOptions(options);
    else builder.setEdgeOptions(options);
    const driver = await builder.build();
    try {
      versions[browser] = (await driver.getCapabilities()).get('browserVersion');
      await driver.get(url('/contato').href);
      const name = await driver.wait(until.elementLocated(By.css('.quote-form input[name="name"]')), 15000);
      await driver.wait(() => driver.executeScript('return Object.keys(document.querySelector(".quote-form") || {}).some(k => k.startsWith("__reactFiber"))'), 15000);
      const unique = Date.now().toString().slice(-9);
      await name.sendKeys(`Cliente ${browser} P2 ${unique}`);
      await driver.findElement(By.css('.quote-form input[name="phone"]')).sendKeys(`149${unique}`);
      await driver.findElement(By.css('.quote-form textarea[name="request"]')).sendKeys('Solicitação fictícia de compatibilidade P2.');
      await driver.findElement(By.css('.quote-form button[type="submit"]')).click();
      const sent = await driver.wait(until.elementLocated(By.css('.quote-form [role="status"]')), 15000);
      await driver.wait(async () => (await sent.getText()).includes('Solicitação enviada'), 15000);
      await driver.get(url('/login').href);
      await (await driver.wait(until.elementLocated(By.css('input[name="email"]')), 15000)).sendKeys(P2_LOCAL_ADMIN_EMAIL);
      await driver.findElement(By.css('input[name="password"]')).sendKeys(P2_LOCAL_ADMIN_PASSWORD);
      await driver.findElement(By.css('button[type="submit"]')).click();
      await driver.wait(until.elementLocated(By.xpath('//h1[normalize-space()="Central comercial"]')), 15000);
    } finally { await driver.quit(); }
  }
  record('TNF-05', { versions, viewport:'1366x768', conclusion:'Envio e login concluídos nos dois navegadores locais' });
});

test('TNF-06: formulário público utilizável em largura móvel Chrome', { skip }, async () => {
  const options = new chrome.Options().addArguments('--headless=new').setMobileEmulation({ deviceMetrics:{ width:390, height:844, pixelRatio:1 } });
  const driver = await new Builder().forBrowser(Browser.CHROME).setChromeOptions(options).build();
  try {
    await driver.get(url('/contato').href);
    const field = await driver.wait(until.elementLocated(By.css('.quote-form input[name="name"]')), 15000);
    await driver.wait(() => driver.executeScript('return Object.keys(document.querySelector(".quote-form") || {}).some(k => k.startsWith("__reactFiber"))'), 15000);
    assert.ok(await field.isDisplayed());
    const width = await driver.executeScript('return window.innerWidth');
    const scrollWidth = await driver.executeScript('return document.documentElement.scrollWidth');
    assert.equal(width, 390, 'emulação deve usar a largura exigida');
    assert.ok(scrollWidth <= width+1, `rolagem horizontal: ${scrollWidth} > ${width}`);
    const unique = Date.now().toString().slice(-9);
    await field.sendKeys(`Cliente móvel P2 ${unique}`);
    await driver.findElement(By.css('.quote-form input[name="phone"]')).sendKeys(`149${unique}`);
    await driver.findElement(By.css('.quote-form textarea[name="request"]')).sendKeys('Pedido fictício pelo navegador em largura móvel.');
    await driver.findElement(By.css('.quote-form button[type="submit"]')).click();
    const status = await driver.wait(until.elementLocated(By.css('.quote-form [role="status"]')), 15000);
    await driver.wait(async () => (await status.getText()).includes('Solicitação enviada'), 15000);
    record('TNF-06', { viewport:`${width}x844`, documentScrollWidth:scrollWidth, conclusion:'Atende no Chrome automatizado; observação humana de usabilidade pendente' });
  } finally { await driver.quit(); }
});
