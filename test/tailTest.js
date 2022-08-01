const assert = require('chai').assert;
const tail = require('../tail.js');

describe('#Tail Tests', () => {
  it('should return ["Lighthouse", "Labs"] when given ["Yo Yo", "Lighthouse", "Labs"]', () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    const result = tail(words);
    assert.deepEqual(result, ["Lighthouse", "Labs"]);
  });
  it('should return undefined when given []', () => {
    const words = [];
    const result = tail(words);
    assert.deepEqual(result[0], undefined);
  });
});