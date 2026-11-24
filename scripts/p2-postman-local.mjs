import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const newman = require('newman');
const { P2_LOCAL_BASE_URL, SUPABASE_URL, P2_LOCAL_ADMIN_EMAIL, P2_LOCAL_ADMIN_PASSWORD } = process.env;

for (const value of [P2_LOCAL_BASE_URL, SUPABASE_URL]) {
  assert.ok(value, 'Configure .env.local antes de executar a coleção.');
  const url = new URL(value);
  assert.equal(url.protocol, 'http:');
  assert.ok(['localhost', '127.0.0.1', '[::1]'].includes(url.hostname), 'somente loopback é permitido');
}
assert.ok(P2_LOCAL_ADMIN_EMAIL && P2_LOCAL_ADMIN_PASSWORD, 'Conta fictícia local ausente.');

const collection = JSON.parse(await readFile('docs/P2/postman/P2_WG_Hidraulica.postman_collection.json', 'utf8'));
const environment = JSON.parse(await readFile('docs/P2/postman/P2_local.postman_environment.json', 'utf8'));
const values = { baseUrl: P2_LOCAL_BASE_URL, adminEmail: P2_LOCAL_ADMIN_EMAIL, adminPassword: P2_LOCAL_ADMIN_PASSWORD };
environment.values = environment.values.map((entry) => ({ ...entry, value: values[entry.key] ?? entry.value }));

newman.run({ collection, environment, reporters: 'cli', timeoutRequest: 10000 }, (error, summary) => {
  if (error) {
    console.error('Falha ao iniciar Newman:', error.message);
    process.exitCode = 1;
    return;
  }
  const stats = summary.run.stats;
  const assertions = stats.assertions?.total ?? 0;
  const assertionFailures = summary.run.failures.filter((failure) => failure.error?.name === 'AssertionError').length;
  console.log(`P2_SUMMARY requests=${stats.requests?.total ?? 0} assertions=${assertions} assertionFailures=${assertionFailures} failures=${summary.run.failures.length}`);
  process.exitCode = summary.run.failures.length ? 1 : 0;
});
