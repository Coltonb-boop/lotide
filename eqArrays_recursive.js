const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    return console.log(`🛑🛑🛑: ${actual} !== ${expected}`);
  }
};

const eqArrays = (first, second) => {
  for (let i = 0; i < first.length; i++) {
    // check lengths to make sure our second array isn't longer
    if (first.length !== second.length) return false;
    
    // check recursively if nested arrays are equal
    if (Array.isArray(first[i]) && Array.isArray(second[i])) {
      if (!eqArrays(first[i], second[i])) {
        return false;
      }
    }
    // check if elements of equal index are equal
    else if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}


// eqArrays([1, 2, 3], [1, 2, 3]) // => true
// eqArrays([1, 2, 3], [3, 2, 1]) // => false

// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should PASS
// assertEqual(eqArrays([3, 2, 1], ['3', 2, 1]), false); // => should PASS

// Test code --- Recursion implementation
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); // => true

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false); // => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false); // => false
