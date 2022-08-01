const tail = require('../tail.js');
const assertEqual = require('../assertEqual');

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