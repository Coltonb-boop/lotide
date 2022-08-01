const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    return console.log(`✅✅✅: ${actual} === ${expected}`);
  }
  return console.log(`🛑🛑🛑: ${actual} !== ${expected}`);
};

const eqArrays = (first, second) => {
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
};



const words = ["ground", "control", "to", "major", "tom"];

// ourMap (array, callback)
const map = (array, callback) => {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(map(words, word => word), ["ground", "control", "to", "major", "tom"]);
assertArraysEqual(map(words, word => word.length), [6, 7, 2, 5, 3]);