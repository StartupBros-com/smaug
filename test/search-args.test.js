import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';

const cli = new URL('../src/brain/cli.js', import.meta.url).href;
const defaults = { query: 'needle', category: null, since: null, author: null, limit: 10 };
const cases = [];
function valid(name, args, options = {}, json = false) {
  cases.push({ name, args, expected: { ...defaults, ...options }, json: Boolean(json) });
}
function invalid(name, args) { cases.push({ name, args, invalid: true }); }

valid('bare query', ['needle']);
valid('query first', ['needle', '--author', '@fixture'], { author: '@fixture' });
valid('query last', ['--author', '@fixture', 'needle'], { author: '@fixture' });
valid('equals before query', ['--author=@fixture', 'needle'], { author: '@fixture' });
valid('all flags around query', ['--category', 'articles', '--since', '30d', 'needle', '--author', '@fixture', '--limit', '2', '--json'],
  { category: 'articles', since: '30d', author: '@fixture', limit: 2 }, true);
for (const [flag, value, field, expected] of [
  ['--category', 'articles', 'category', 'articles'],
  ['--since', '30d', 'since', '30d'],
  ['--author', '@fixture', 'author', '@fixture'],
  ['--limit', '2', 'limit', 2]
]) {
  valid(`${flag} separate before query`, [flag, value, 'needle'], { [field]: expected });
  valid(`${flag} equals after query`, ['needle', `${flag}=${value}`], { [field]: expected });
  valid(`${flag} first duplicate wins`, ['needle', flag, value, `${flag}=other`], { [field]: expected });
  invalid(`${flag} value without query`, [flag, value]);
  invalid(`${flag} equals value without query`, [`${flag}=${value}`]);
  invalid(`${flag} missing value`, ['needle', flag]);
  invalid(`${flag} empty value`, ['needle', `${flag}=`]);
  invalid(`${flag} does not swallow json`, ['needle', flag, '--json']);
  invalid(`${flag} malformed later duplicate`, ['needle', `${flag}=${value}`, flag]);
  invalid(`${flag} empty later duplicate`, ['needle', `${flag}=${value}`, `${flag}=`]);
  invalid(`${flag} duplicate followed by json`, ['needle', `${flag}=${value}`, flag, '--json']);
}
valid('embedded equals retained', ['--author=a=b=c', 'needle'], { author: 'a=b=c' });
valid('equals value can begin with dash dash', ['--category=--json', 'needle'], { category: '--json' });
valid('limit keeps parseInt prefix', ['needle', '--limit=2tail'], { limit: 2 });
valid('limit keeps zero', ['needle', '--limit=0'], { limit: 0 });
valid('limit keeps negative', ['needle', '--limit=-2'], { limit: -2 });
// JSON serialization transports NaN as null; compare with the same representation.
valid('limit keeps NaN', ['needle', '--limit=bad'], { limit: null });
valid('json boolean', ['--json', 'needle'], {}, true);
valid('json empty string stays false', ['needle', '--json='], {}, false);
valid('json false string stays truthy', ['needle', '--json=false'], {}, true);
valid('json embedded equals stays truthy', ['needle', '--json=a=b'], {}, true);
valid('first empty json wins', ['needle', '--json=', '--json'], {}, false);
valid('first bare json wins', ['needle', '--json', '--json='], {}, true);
valid('first positional wins', ['needle', 'second']);
valid('unknown flag handling unchanged', ['--unknown', 'needle']);
invalid('no arguments', []);
invalid('json without query', ['--json']);
invalid('empty positional is not replaced', ['', 'needle']);
invalid('missing value before another value flag', ['needle', '--author', '--limit', '2']);
invalid('missing value before unknown flag', ['needle', '--author', '--unknown']);

// Real native ESM loading of the unmodified CLI file and its real parser. Only
// database/index/search imports are substituted, before they can touch a corpus.
const stubs = {
  './db.js': `export function open() {
    globalThis.calls.push(['open']);
    if (globalThis.rejectDependencies) throw new Error('unexpected database access');
    return {close() { globalThis.calls.push(['close']); }};
  }`,
  './indexer.js': 'export function indexAll() { throw new Error("unexpected indexing"); }',
  './searcher.js': `export function search(db, options) {
    globalThis.calls.push(['search', options]); return [];
  }
  export function logQuery(db, options) { globalThis.calls.push(['log', options]); }
  export function stats() { throw new Error('unexpected stats'); }
  export function doctor() { throw new Error('unexpected doctor'); }`
};
const loader = `const stubs = ${JSON.stringify(stubs)};
export async function resolve(specifier, context, nextResolve) {
  if (context.parentURL === ${JSON.stringify(cli)} && Object.hasOwn(stubs, specifier)) {
    return {url: 'data:text/javascript,' + encodeURIComponent(stubs[specifier]), shortCircuit: true};
  }
  return nextResolve(specifier, context);
}`;
const loaderUrl = `data:text/javascript,${encodeURIComponent(loader)}`;
function run(script) {
  return spawnSync(process.execPath, ['--experimental-loader', loaderUrl, '--input-type=module', '--eval', script], {
    encoding: 'utf8', timeout: 10000, maxBuffer: 1024 * 1024,
    // Do not pass account credentials, preload hooks or an external executable path.
    env: { NODE_NO_WARNINGS: '1' }
  });
}
const execution = run(`
  const { runSearch } = await import(${JSON.stringify(cli)});
  const records = [];
  for (const item of ${JSON.stringify(cases)}) {
    for (const returns of [false, true]) {
      globalThis.calls = [];
      globalThis.rejectDependencies = Boolean(item.invalid);
      const out = [], err = [], exits = [];
      console.log = (...args) => out.push(args.join(' '));
      console.error = (...args) => err.push(args.join(' '));
      const exitSignal = {};
      process.exit = code => { exits.push(code); if (!returns) throw exitSignal; };
      let thrown = null;
      try { await runSearch(item.args); }
      catch (e) { if (e !== exitSignal) thrown = String(e); }
      const limit = calls.find(call => call[0] === 'search')?.[1].limit;
      records.push({ name: item.name, returns, calls, out, err, exits, thrown,
        limitType: typeof limit, limitIsNaN: Number.isNaN(limit) });
    }
  }
  process.stdout.write(JSON.stringify(records));
`);
assert.equal(execution.error, undefined);
assert.equal(execution.status, 0, execution.stderr);
const records = JSON.parse(execution.stdout);
for (const item of cases) {
  for (const returns of [false, true]) {
    test(`${item.name}; exit ${returns ? 'returns' : 'throws'}`, () => {
      const record = records.find(r => r.name === item.name && r.returns === returns);
      assert.ok(record);
      assert.equal(record.thrown, null);
      if (item.invalid) {
        assert.deepEqual(record.exits, [2]);
        assert.deepEqual(record.calls, []);
        assert.ok(record.err.some(line => line.startsWith('Usage: smaug search')));
        assert.deepEqual(record.out, []);
      } else {
        assert.deepEqual(record.exits, []);
        assert.deepEqual(record.err, []);
        assert.equal(record.limitType, 'number');
        assert.equal(record.limitIsNaN, item.expected.limit === null);
        assert.deepEqual(record.calls, [
          ['open'], ['search', item.expected],
          ['log', { query: item.expected.query, category: item.expected.category, results: 0 }], ['close']
        ]);
        if (item.json) {
          assert.deepEqual(JSON.parse(record.out[0]), { ...item.expected, count: 0, results: [] });
        } else {
          assert.deepEqual(record.out, [`No matches for "${item.expected.query}".`]);
        }
      }
    });
  }
}
test('native process exit is 2 before opening a database', () => {
  const result = run(`
    globalThis.calls = [];
    globalThis.rejectDependencies = true;
    const { runSearch } = await import(${JSON.stringify(cli)});
    await runSearch(['--author', '@fixture']);
    throw new Error('usage returned');
  `);
  assert.equal(result.error, undefined);
  assert.equal(result.status, 2, result.stderr);
  assert.equal(result.stdout, '');
  assert.match(result.stderr, /Usage: smaug search/);
  assert.doesNotMatch(result.stderr, /unexpected database access/);
});
