const eqArrays = require('./eqArrays_recursive');

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    return console.log(`✅✅✅: ${actual} === ${expected}`);
  } 
  return console.log(`🛑🛑🛑: ${actual} !== ${expected}`);
};


module.exports = assertArraysEqual;