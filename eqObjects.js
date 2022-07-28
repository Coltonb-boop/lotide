const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    return console.log(`🛑🛑🛑: ${actual} !== ${expected}`);
  }
};

const eqArrays = (first, second) => {
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
};

// Fresh code beings here
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = (object1, object2) => {
  // set result default to true
  let result = true;
  
  // check first for same lengths
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;
  // loop through object1 and compare key-value to object2
  // return false the instant a difference is found
  for (let key in object1) {
    if (Array.isArray(object1[key])) {
      // check whether arrays are equal. If they are different values, eqArray won't see that so we'll measure them
      if (!eqArrays(object1[key], object2[key]) || object1[key].length !== object2[key].length) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }

  // return default true after
  return result;
}



// Test code
// test primitives
const ab = { a: '1', b: '2' };
const ba = { b: '2', a: '1' };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

// test objects
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false
