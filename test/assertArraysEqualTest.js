const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(['cheese', 'buns', 'are', 'tasty'], ['cheese', 'buns', 'are', 'tasty']);
assertArraysEqual(['cheese', 'buns', 'are', 'tasty'], ['buns', 'are', 'tasty']);