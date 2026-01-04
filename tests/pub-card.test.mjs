import { test } from 'node:test';
import assert from 'node:assert/strict';
import { formatDate } from '../lib/utils.js';

test('formatDate returns the year from an ISO date string', () => {
  assert.equal(formatDate('2024-02-29'), 2024);
});

test('formatDate accepts Date instances by coercing to string', () => {
  assert.equal(formatDate(new Date('2018-07-15')), 2018);
});
