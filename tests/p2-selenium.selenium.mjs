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
  } catch (error) {
    const directory = join('test-results', 'selenium');
    await mkdir(directory, { recursive: true });
    const screenshot = join(directory, `${id}-${Date.now()}.png`);
    await writeFile(screenshot, await driver.takeScreenshot(), 'base64');
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
