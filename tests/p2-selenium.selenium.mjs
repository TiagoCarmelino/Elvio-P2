import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { test } from 'node:test';
import webdriver from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';

const { Builder, By, until } = webdriver;
const { P2_LOCAL_BASE_URL, SUPABASE_URL, P2_LOCAL_ADMIN_EMAIL, P2_LOCAL_ADMIN_PASSWORD, P2_LOCAL_REQUEST_ID } = process.env;
const enabled = Boolean(P2_LOCAL_BASE_URL && SUPABASE_URL && P2_LOCAL_ADMIN_EMAIL && P2_LOCAL_ADMIN_PASSWORD && P2_LOCAL_REQUEST_ID);
const skip = enabled ? false : 'Configure .env.local e execute `pnpm run test:selenium`.';
let base;

async function saveScreenshot(driver, id) {
  const day = new Date().toISOString().slice(0, 10).replaceAll('-', '');
  const directory = join('test-results', `p2-agent-${day}`);
  await mkdir(directory, { recursive: true });
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const screenshot = join(directory, `${id}-${timestamp}.png`);
  await writeFile(screenshot, await driver.takeScreenshot(), 'base64');
  return screenshot;
}

function localUrl(value) {
  const url = new URL(value);
  assert.equal(url.protocol, 'http:');
  assert.ok(['localhost', '127.0.0.1', '[::1]'].includes(url.hostname));
  return url;
}

async function inBrowser(id, callback) {
  base = localUrl(P2_LOCAL_BASE_URL);
  localUrl(SUPABASE_URL);
  const options = new chrome.Options().addArguments('--headless=new', '--window-size=1440,1000', '--disable-gpu');
  const driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
  try {
    await callback(driver);
    await saveScreenshot(driver, `${id}-sucesso`);
  } catch (error) {
    const screenshot = await saveScreenshot(driver, `${id}-falha`);
    error.message += `\nCaptura da falha: ${screenshot}`;
    throw error;
  } finally {
    await driver.quit();
  }
}

function page(path) { return new URL(path, base).href; }
function located(driver, locator) { return driver.wait(until.elementLocated(locator), 15000); }

async function login(driver) {
  await driver.get(page('/login'));
  await (await located(driver, By.css('input[name="email"]'))).sendKeys(P2_LOCAL_ADMIN_EMAIL);
  await driver.findElement(By.css('input[name="password"]')).sendKeys(P2_LOCAL_ADMIN_PASSWORD);
  await driver.findElement(By.css('button[type="submit"]')).click();
  await driver.wait(until.urlContains('/sistema'), 15000);
  await located(driver, By.xpath('//h1[normalize-space()="Central comercial"]'));
}

test('SEL-01: visitante anônimo vê bloqueio de acesso ao painel', { skip }, async () => {
  await inBrowser('SEL-01', async (driver) => {
    await driver.get(page('/sistema'));
    await located(driver, By.xpath('//h1[normalize-space()="Acesso não autorizado"]'));
    assert.match(await driver.findElement(By.css('main')).getText(), /Voltar para o acesso/);
  });
});

test('SEL-02: visitante envia solicitação fictícia pelo formulário', { skip }, async () => {
  await inBrowser('SEL-02', async (driver) => {
    await driver.get(page('/contato'));
    await driver.wait(() => driver.executeScript(
      'return Object.keys(document.querySelector(".quote-form") || {}).some(key => key.startsWith("__reactFiber"))',
    ), 15000, 'formulário React deve estar pronto para o envio');
    const unique = Date.now().toString().slice(-9);
    await (await located(driver, By.css('.quote-form input[name="name"]'))).sendKeys(`Cliente Selenium P2 ${unique}`);
    await driver.findElement(By.css('.quote-form input[name="phone"]')).sendKeys(`149${unique}`);
    await driver.findElement(By.css('.quote-form textarea[name="request"]')).sendKeys('Solicitação fictícia de peça hidráulica para teste Selenium P2.');
    await driver.findElement(By.css('.quote-form button[type="submit"]')).click();
    const feedback = await located(driver, By.css('.quote-form [role="status"]'));
    await driver.wait(async () => (await feedback.getText()).includes('Solicitação enviada'), 15000);
    assert.match(await feedback.getText(), /Solicitação enviada/);
  });
});

test('SEL-03: administrador entra e consulta a solicitação inicial', { skip }, async () => {
  await inBrowser('SEL-03', async (driver) => {
    await login(driver);
    await located(driver, By.xpath('//article[contains(@class,"real-opportunity")][contains(.,"Cliente de Teste P2")]'));
    await driver.get(page(`/sistema/solicitacoes/${encodeURIComponent(P2_LOCAL_REQUEST_ID)}`));
    await located(driver, By.xpath('//h2[normalize-space()="Descrição da solicitação"]'));
    assert.match(await driver.findElement(By.css('.contact-card')).getText(), /Cliente de Teste P2/);
  });
});

test('SEL-04: administrador adiciona e remove item pela interface', { skip }, async () => {
  await inBrowser('SEL-04', async (driver) => {
    await login(driver);
    await driver.get(page(`/sistema/solicitacoes/${encodeURIComponent(P2_LOCAL_REQUEST_ID)}`));
    await located(driver, By.css('.quote-item'));
    // Recupera apenas resíduos com o prefixo reservado pela própria suíte.
    while (true) {
      const staleItems = await driver.findElements(By.css('.quote-item'));
      let stale;
      for (const candidate of staleItems) {
        if ((await candidate.getText()).includes('Item Selenium P2 ')) { stale = candidate; break; }
      }
      if (!stale) break;
      await stale.findElement(By.xpath('.//button[normalize-space()="Remover"]')).click();
      const cleanupDialog = await located(driver, By.css('dialog.confirm-dialog[open]'));
      await cleanupDialog.findElement(By.xpath('.//button[normalize-space()="Remover item"]')).click();
      await driver.wait(async () => (await driver.findElements(By.css('dialog.confirm-dialog[open]'))).length === 0, 15000);
    }
    const description = `Item Selenium P2 ${Date.now()}`;
    await (await located(driver, By.css('.item-form input[placeholder]'))).sendKeys(description);
    const quantity = await driver.findElement(By.css('.item-form input[type="number"]'));
    await quantity.clear();
    await quantity.sendKeys('2');
    await driver.findElement(By.css('.item-form input[type="number"][step="0.01"]')).sendKeys('15');
    await driver.findElement(By.xpath('//button[normalize-space()="+ Adicionar item"]')).click();
    const item = await located(driver, By.xpath(`//article[contains(@class,"quote-item")][contains(.,"${description}")]`));
    assert.match(await item.getText(), /R\$\s*30,00/);
    await item.findElement(By.xpath('.//button[normalize-space()="Remover"]')).click();
    const dialog = await located(driver, By.css('dialog.confirm-dialog[open]'));
    await dialog.findElement(By.xpath('.//button[normalize-space()="Remover item"]')).click();
    await driver.wait(async () => (await driver.findElements(By.xpath(`//article[contains(@class,"quote-item")][contains(.,"${description}")]`))).length === 0, 15000);
    assert.match(await driver.findElement(By.css('.quote-builder [role="status"]')).getText(), /Item removido/);
  });
});

test('SEL-05: formulário rejeita 9 caracteres e aceita 10', { skip }, async () => {
  await inBrowser('CT-003', async (driver) => {
    await driver.get(page('/contato'));
    await driver.wait(() => driver.executeScript(
      'return Object.keys(document.querySelector(".quote-form") || {}).some(key => key.startsWith("__reactFiber"))',
    ), 15000, 'formulário React deve estar pronto para o envio');
    await driver.findElement(By.css('.quote-form input[name="name"]')).sendKeys('Cliente CT003 P2');
    await driver.findElement(By.css('.quote-form input[name="phone"]')).sendKeys(`149${Date.now().toString().slice(-9)}`);
    const description = driver.findElement(By.css('.quote-form textarea[name="request"]'));
    await description.sendKeys('123456789');
    await driver.findElement(By.css('.quote-form button[type="submit"]')).click();
    assert.equal(await driver.executeScript('return arguments[0].validity.tooShort', description), true);
    assert.match(await driver.executeScript('return arguments[0].validationMessage', description), /10 caracteres/i);
    await saveScreenshot(driver, 'CT-003-9-caracteres-rejeitado');

    await driver.findElement(By.css('.quote-form input[name="phone"]')).clear();
    await driver.findElement(By.css('.quote-form input[name="phone"]')).sendKeys(`148${Date.now().toString().slice(-9)}`);
    await description.clear();
    await description.sendKeys('1234567890');
    await driver.findElement(By.css('.quote-form button[type="submit"]')).click();
    const feedback = await located(driver, By.css('.quote-form [role="status"]'));
    await driver.wait(async () => (await feedback.getText()).includes('Solicitação enviada'), 15000);
    assert.match(await feedback.getText(), /Solicitação enviada/);
  });
});

test('SEL-06: dois itens produzem total adicional de R$ 120,00 e são restaurados', { skip }, async () => {
  await inBrowser('CT-020', async (driver) => {
    await login(driver);
    await driver.get(page(`/sistema/solicitacoes/${encodeURIComponent(P2_LOCAL_REQUEST_ID)}`));
    await located(driver, By.css('.quote-builder'));
    await driver.wait(async () => (await driver.findElements(By.css('.quote-item'))).length > 0, 15000);
    const total = async () => {
      const text = await driver.findElement(By.css('.quote-total strong')).getText();
      return Number(text.replace('R$', '').trim().replace(/\./g, '').replace(',', '.'));
    };
    const initialTotal = await total();
    const suffix = Date.now();
    const descriptions = [`Item CT020 P2 A ${suffix}`, `Item CT020 P2 B ${suffix}`];
    const add = async (description, quantityValue, priceValue) => {
      await driver.findElement(By.css('.item-form input[placeholder]')).sendKeys(description);
      const quantity = await driver.findElement(By.css('.item-form input[type="number"]'));
      await quantity.clear();
      await quantity.sendKeys(String(quantityValue));
      await driver.findElement(By.css('.item-form input[type="number"][step="0.01"]')).sendKeys(String(priceValue));
      await driver.findElement(By.xpath('//button[normalize-space()="+ Adicionar item"]')).click();
      await located(driver, By.xpath(`//article[contains(@class,"quote-item")][contains(. , "${description}")]`));
    };
    const remove = async (description) => {
      const rows = await driver.findElements(By.xpath(`//article[contains(@class,"quote-item")][contains(. , "${description}")]`));
      if (!rows.length) return;
      await rows[0].findElement(By.xpath('.//button[normalize-space()="Remover"]')).click();
      const dialog = await located(driver, By.css('dialog.confirm-dialog[open]'));
      await dialog.findElement(By.xpath('.//button[normalize-space()="Remover item"]')).click();
      await driver.wait(async () => (await driver.findElements(By.xpath(`//article[contains(@class,"quote-item")][contains(. , "${description}")]`))).length === 0, 15000);
    };

    try {
      await add(descriptions[0], 2, 30);
      await add(descriptions[1], 3, 20);
      const addedA = await driver.findElement(By.xpath(`//article[contains(@class,"quote-item")][contains(., "${descriptions[0]}")]`));
      const addedB = await driver.findElement(By.xpath(`//article[contains(@class,"quote-item")][contains(., "${descriptions[1]}")]`));
      assert.match(await addedA.getText(), /R\$\s*60,00/);
      assert.match(await addedB.getText(), /R\$\s*60,00/);
      assert.equal(await total(), initialTotal + 120);
      await saveScreenshot(driver, 'CT-020-total-adicional-120');
    } finally {
      await remove(descriptions[1]);
      await remove(descriptions[0]);
    }
    assert.equal(await total(), initialTotal, 'restaurar o total inicial após remover os itens temporários');
  });
});

test('SEL-07: ID fictício inexistente mostra estado seguro', { skip }, async () => {
  await inBrowser('CT-011', async (driver) => {
    await login(driver);
    await driver.get(page('/sistema/solicitacoes/ffffffff-ffff-4fff-8fff-fffffffffff1'));
    await located(driver, By.xpath('//h1[normalize-space()="Registro não encontrado"]'));
    assert.match(await driver.findElement(By.css('main')).getText(), /A solicitação pode ter sido removida ou o endereço está incorreto/i);
    assert.equal(await driver.findElement(By.css('main a[href="/sistema"]')).getText(), 'Voltar para o painel');
  });
});
