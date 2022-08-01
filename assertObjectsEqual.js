const eqObjects = require('./eqObjects');

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    return console.log(`✅✅✅: ${inspect(actual)} === ${inspect(expected)}`);
  }
  return console.log(`🛑🛑🛑: ${inspect(actual)} !== ${inspect(expected)}`);
}

module.exports = assertObjectsEqual;

// Test code
// assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });
// assertObjectsEqual({ a: ['1', '2', '3'], b: 2 }, { b: 2, a: ['1', '2', '3'] });
// assertObjectsEqual({ a: ['1', '2', '3'], b: 2 }, { b: 2, a: ['1', '2'] });
// assertObjectsEqual({ a: ['1', '2'], b: 2 }, { b: 2, a: ['1', '2', '3'] });
// assertObjectsEqual({ a: '1', b: 2, c: 3 }, { b: 2, a: '1' });
// assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1', c: 3 });