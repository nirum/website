import { test } from 'node:test';
import assert from 'node:assert/strict';
import { changeExtension } from '../lib/publications.js';

test('changeExtension swaps extension with png and prefixes pubs directory', () => {
  assert.equal(changeExtension('deep-retina-v1.yml'), '/pubs/deep-retina-v1.png');
});

test('changeExtension handles nested paths by stripping directories', () => {
  assert.equal(changeExtension('papers/notes/integration-geometry.yaml'), '/pubs/integration-geometry.png');
});
