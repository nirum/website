import { test } from 'node:test';
import assert from 'node:assert/strict';
import { pluralize } from '../lib/utils.js';

test('pluralize uses singular form for value of one', () => {
  assert.equal(pluralize(1, 'star'), '1 star');
});

test('pluralize defaults to plural form otherwise', () => {
  assert.equal(pluralize(2, 'star'), '2 stars');
  assert.equal(pluralize(0, 'star'), '0 stars');
});

test('pluralize accepts custom plural values', () => {
  assert.equal(pluralize(3, 'repository', 'repositories'), '3 repositories');
});
