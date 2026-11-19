import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = (path) => readFileSync(new URL(path, import.meta.url), 'utf8');
const shell = read('../src/components/ui-parts.tsx');
const home = read('../src/routes/index.tsx');
const review = read('../src/routes/mission-review.tsx');
const safety = read('../src/routes/safety-validator.tsx');
const output = read('../src/routes/mission-output.tsx');
const generator = read('../src/routes/mission-generator.tsx');
const schema = read('../src/data/mission-schema.ts');
const checks = read('../src/data/safety-checks.ts');
const readme = read('../README.md');

test('FieldOps pages persistently identify static demo scenarios', () => {
  assert.match(shell, /DEMO SCENARIO/);
  assert.match(shell, /no robot, field sensor, weather feed\\s+or approval service is connected/);
  assert.match(home, /DEMO SCENARIO/);
});

test('Mission review actions cannot imply an approval that is not connected', () => {
  assert.match(review, /Approval is not connected to a durable workflow/);
  assert.match(review, /disabled/);
  assert.match(review, /Approval unavailable/);
  assert.match(review, /Changes unavailable/);
  assert.doesNotMatch(review, /<button className="flex-1 rounded-md bg-primary/);
});

test('Safety checks are sample content and do not grant mission clearance', () => {
  assert.match(safety, /not live checks, sensor readings, a certified assessment/);
  assert.match(safety, /Not assessed/);
  assert.match(checks, /Sample: pass/);
  assert.match(checks, /Illustrative route fixture; not map-validated/);
});

test('Mission generator and output remain preview-only', () => {
  assert.match(generator, /does not parse your text or call an AI\/backend service/);
  assert.match(generator, /Illustrative sample intent/);
  assert.match(schema, /execution_mode: "preview_only"/);
  assert.match(output, /Static example JSON/);
  assert.match(output, /not been approved, exported to a backend, signed/);
});

test('FieldOps documentation explains the disconnected execution boundary', () => {
  assert.match(readme, /static scenario preview/);
  assert.match(readme, /no durable approval service is connected/);
  assert.match(readme, /Do not use this preview to plan or execute real-world robot operations/);
});
