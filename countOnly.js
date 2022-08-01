const countOnly = (allItems, itemsToCount) => {
  // create blank object to store return
  let output = {};

  // loop through allItems and compare to itemsToCount
  // if it's being counted, add it to our blank object
  for (let item of allItems) {
    if (itemsToCount[item]) {
      !output[item] ? output[item] = 1 : output[item]++;
    }
  }

  // return our blank object
  return output;
};

module.exports = countOnly;

// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);
