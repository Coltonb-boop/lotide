const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    return console.log(`✅✅✅: ${actual} === ${expected}`);
  } 
  return console.log(`🛑🛑🛑: ${actual} !== ${expected}`);
};

const eqArrays = (first, second) => {
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      console.log(first[i], second[i]);
      return false;
    }
  }
  return true;
};

const middle = (array) => {
  let output = [];
  if (array.length < 3) return output;
  let arrayMiddle = Math.floor(array.length / 2); // 5 => 2.5 => 2
  
  if (array.length % 2 === 0) {
    output.push(array[arrayMiddle - 1]);
    output.push(array[arrayMiddle]);
    return output;
  }
  output.push(array[arrayMiddle]);
  return output;
}

assertArraysEqual(middle([1]), []) // => []
assertArraysEqual(middle([1, 2]), [])// => []
assertArraysEqual(middle([1, 2, 3]), [2]) // => []
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])// => []
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]) // => []
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])// => []
