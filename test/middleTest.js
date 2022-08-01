const assert = require('chai').assert;
const middle = require('../middle');

describe('#Middle Tests', () => {
  it('should return [] when given [1]', () => {
    const words = [1];
    const result = middle(words);
    assert.deepEqual(result, []);
  });
  it('should return [] when given [1, 2]', () => {
    const words = [1, 2];
    const result = middle(words);
    assert.deepEqual(result, []);
  });
  it('should return [2] when given [1, 2, 3]', () => {
    const words = [1, 2, 3];
    const result = middle(words);
    assert.deepEqual(result, [2]);
  });
  it('should return [2, 3] when given [1, 2, 3, 4]', () => {
    const words = [1, 2, 3, 4];
    const result = middle(words);
    assert.deepEqual(result, [2, 3]);
  });
});

// assertArraysEqual(middle([1]), [])
// assertArraysEqual(middle([1, 2]), [])
// assertArraysEqual(middle([1, 2, 3]), [2])
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])