import assert from 'node:assert/strict';
import test from 'node:test';
import { isCommercialStatus } from '../app/lib/commercial-status.ts';

test('status comercial aceita apenas chaves próprias do catálogo', () => {
  assert.equal(isCommercialStatus('novo'), true);
  assert.equal(isCommercialStatus('concluido'), true);
  assert.equal(isCommercialStatus('toString'), false);
  assert.equal(isCommercialStatus('constructor'), false);
  assert.equal(isCommercialStatus(null), false);
});
