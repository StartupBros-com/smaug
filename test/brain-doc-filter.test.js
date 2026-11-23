import assert from 'node:assert/strict';
import { test } from 'node:test';
import { docFilter } from '../src/brain/doc-filter.js';

const inputs = [
  ['no filters', {}, [], []],
  ['category only', { category: 'articles' }, ['category = ?'], ['articles']],
  ['source only', { source: 'bookmarks' }, ['source = ?'], ['bookmarks']],
  [
    'both filters stay in binding order',
    { category: 'tools', source: 'knowledge' },
    ['category = ?', 'source = ?'],
    ['tools', 'knowledge']
  ],
  ['empty filters stay absent', { category: '', source: '' }, [], []],
  ['filter text stays in a parameter', { category: "reader's notes?" }, ['category = ?'], ["reader's notes?"]]
];

for (const [label, filters, predicates, params] of inputs) {
  test(`recent doc filter: ${label}`, () => {
    assert.deepEqual(docFilter(filters, { requireIngestedAt: true }), {
      where: ['ingested_at IS NOT NULL', ...predicates],
      params
    });
  });
  test(`random doc filter: ${label}`, () => {
    assert.deepEqual(docFilter(filters), { where: ['1 = 1', ...predicates], params });
  });
}

test('a caller can append its limit without changing another result', () => {
  const filters = { source: 'bookmarks' };
  docFilter(filters).params.push(3);
  assert.deepEqual(docFilter(filters).params, ['bookmarks']);
});
