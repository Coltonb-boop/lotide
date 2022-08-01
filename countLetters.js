const countLetters = (sentenceToCount) => {
  // create blank object to store return
  let output = {};

  // loop through allItems and compare to itemsToCount
  // if it's being counted, add it to our blank object
  for (let letter of sentenceToCount) {
    if (letter === ' ') continue; // continue onto next letter if this is a space
    // could also split(' ').join('') to get a similar affect
    !output[letter] ? output[letter] = 1 : output[letter]++;
  }
  // console.log(output);
  // return our blank object
  return output;
};

module.exports = countLetters;

// countLetters('lighthouse in the house');