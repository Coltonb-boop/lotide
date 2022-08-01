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
};

module.exports = letterPositions;

// assertArraysEqual(letterPositions("hello").e, [1]);
// assertArraysEqual(letterPositions("hello").l, [2, 3]);
// assertArraysEqual(letterPositions("lighthouse").h, [3, 5]);
