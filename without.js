const eqArrays = (first, second) => {
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    return console.log(`✅✅✅: ${actual} === ${expected}`);
  } 
  return console.log(`🛑🛑🛑: ${actual} !== ${expected}`);
};

const without = (before, remove) => {
  let output = [];

  for (let currBefore of before) {
    let addCurr = true;
    for (let currRemove of remove) {
      if (currBefore === currRemove) {
        addCurr = false;
      }
    }
    if (addCurr) {
      output.push(currBefore);
    }
  }

  console.log(output);
}

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
without(["tree", "apple", "newton"], ["newton"]) // => ["1", "2"]
without(["tree", "apple", "newton"], ["Newton"]) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
