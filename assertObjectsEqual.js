const eqArrays = (first, second) => {
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = (object1, object2) => {
  let result = true;
  
  // check first for same lengths
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;

  for (let key in object1) {
    if (Array.isArray(object1[key])) {
      // check whether arrays are equal. If they are different values, eqArray won't see that so we'll measure them
      if (!eqArrays(object1[key], object2[key]) || object1[key].length !== object2[key].length) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return result;
};

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    return console.log(`✅✅✅: ${inspect(actual)} === ${inspect(expected)}`);
  }
  return console.log(`🛑🛑🛑: ${inspect(actual)} !== ${inspect(expected)}`);
};


// Test code
assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });
assertObjectsEqual({ a: ['1', '2', '3'], b: 2 }, { b: 2, a: ['1', '2', '3'] });
assertObjectsEqual({ a: ['1', '2', '3'], b: 2 }, { b: 2, a: ['1', '2'] });
assertObjectsEqual({ a: ['1', '2'], b: 2 }, { b: 2, a: ['1', '2', '3'] });
assertObjectsEqual({ a: '1', b: 2, c: 3 }, { b: 2, a: '1' });
assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1', c: 3 });