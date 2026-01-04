import { test } from 'node:test'
import assert from 'node:assert/strict'
import { hrefs, repositories } from '../components/metadata.js'

test('hrefs include primary profiles', () => {
  const expected = ['email', 'github', 'pinboard', 'scholar', 'twitter']
  assert.deepEqual(
    Object.keys(hrefs).sort(),
    expected.sort(),
    'hrefs should expose all expected keys',
  )
})

test('repositories list is not empty', () => {
  assert.ok(Array.isArray(repositories), 'repositories should be an array')
  assert.ok(repositories.length > 0, 'repositories should include entries')
})
