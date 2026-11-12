import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import ts from 'typescript';

const code = ts.transpileModule(await readFile(new URL('../app/lib/commercial-status.ts', import.meta.url), 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
}).outputText;
const { isCommercialStatus } = await import(`data:text/javascript;base64,${Buffer.from(code).toString('base64')}`);

test('status comercial aceita apenas chaves próprias do catálogo', () => {
  assert.equal(isCommercialStatus('novo'), true);
  assert.equal(isCommercialStatus('concluido'), true);
  assert.equal(isCommercialStatus('toString'), false);
  assert.equal(isCommercialStatus('constructor'), false);
  assert.equal(isCommercialStatus(null), false);
});
