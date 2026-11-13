import { readFile, writeFile } from 'node:fs/promises';

const path = 'coverage/p2/lcov.info';
const original = await readFile(path, 'utf8');
const normalized = original.replace(/^SF:(.+)$/gm, (_, source) => `SF:${source.replaceAll('\\', '/')}`);
const sources = [...normalized.matchAll(/^SF:(.+)$/gm)].map((match) => match[1]);
if (sources.length === 0 || sources.some((source) => !source.startsWith('app/lib/'))) {
  throw new Error('LCOV não contém apenas módulos reais de app/lib.');
}
await writeFile(path, normalized);
console.log(`LCOV P2 validado: ${sources.length} módulos em ${path}.`);
