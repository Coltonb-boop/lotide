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

// Fresh code begins here

const letterPositions = (sentenceToIndex) => {
  const result = {};
  // logic to update results here
  for (let i = 0; i < sentenceToIndex.length; i++) {
    let letter = sentenceToIndex[i];
    if (letter === ' ') continue;
    // continue onto next letter if this is a space
    // could also split(' ').join('') to get a similar affect
    result[letter] ? result[letter].push(i) : result[letter] = [i];
  }
  
  return result;
}

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("lighthouse").h, [3, 5]);
