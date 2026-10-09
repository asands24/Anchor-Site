import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';

function fixture() {
  const scripts = [];
  class Script extends EventTarget {
    dataset = {};
    remove() { scripts.splice(scripts.indexOf(this), 1); }
  }
  const document = {
    baseURI: 'http://localhost/', scripts,
    createElement: () => new Script(),
    body: { appendChild: script => scripts.push(script) },
  };
  const code = ts.transpileModule(readFileSync(new URL('../src/lib/loadScript.ts', import.meta.url), 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  }).outputText;
  const context = { exports: {}, document, URL, setTimeout, clearTimeout };
  vm.runInNewContext(code, context);
  return { load: context.exports.loadScript, scripts };
}

test('concurrent callers wait for one script and reuse successful loads', async () => {
  const { load, scripts } = fixture();
  let resolved = false;
  const first = load('/widget.js');
  first.then(() => { resolved = true; });
  assert.equal(load('http://localhost/widget.js'), first);
  await Promise.resolve();
  assert.equal(resolved, false);
  assert.equal(scripts.length, 1);
  scripts[0].dispatchEvent(new Event('load'));
  await first;
  await load('/widget.js');
  assert.equal(scripts.length, 1);
});

test('failed downloads remove their script and can be retried', async () => {
  const { load, scripts } = fixture();
  const failed = load('/widget.js');
  scripts[0].dispatchEvent(new Event('error'));
  await assert.rejects(failed, /Failed to load/);
  assert.equal(scripts.length, 0);
  const retry = load('/widget.js');
  scripts[0].dispatchEvent(new Event('load'));
  await retry;
});

test('stalled downloads time out and permit retry', async () => {
  const { load, scripts } = fixture();
  await assert.rejects(load('/widget.js', 5), /Timed out/);
  assert.equal(scripts.length, 0);
  const retry = load('/widget.js', 50);
  scripts[0].dispatchEvent(new Event('load'));
  await retry;
});
