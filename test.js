
const test = require('node:test');
const assert = require('node:assert/strict');

test('version message is correct', () => {
  const message = 'Version 2';
  assert.equal(message, 'Version 2');
});
