const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    return console.log(`🛑🛑🛑: ${actual} !== ${expected}`);
  }
};

// Fresh code beings here

// scan the object and return the first key which contains the given value
// If no key with that given value is found, then it should return undefined
const findKeyByValue = (object, value) => {
  // create empty string to store key in if found
  let result;
  
  // loop through object, looking for our matching value
  for (let key in object) {
    if (object[key] === value) {
      return key;
    }
  }
  
  return result;
}

// sample list
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);