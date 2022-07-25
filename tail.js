const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    return console.log(`🛑🛑🛑: ${actual} !== ${expected}`);
  }
};

const tail = (array) => {
  if (array) {
    return array.slice(1);
  }
  return undefined;
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
const result = tail(words);
assertEqual(result.length, 2);
assertEqual(result[0], 'Lighthouse');
assertEqual(result[1], 'Labs');


let words2 = [];
let result2 = tail(words2);
assertEqual(result2.length, 0);
assertEqual(result2[0], undefined);