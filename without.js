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
};

module.exports = without;

// without([1, 2, 3], [1]) // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
// without(["tree", "apple", "newton"], ["newton"]) // => ["1", "2"]
// without(["tree", "apple", "newton"], ["Newton"]) // => ["1", "2"]

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);
