# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @cbb89/lotide`

**Require it:**

`const _ = require('@cbb89/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: takes 2 arrays and returns a deep strict equals
* `assertEqual`: takes 2 primitives with a strict equals
* `assertObjectsEqual`: takes 2 objects using strict deep strict equals
* `countLetters`: takes a string and returns the count of each individual character
* `countOnly`: takes in an array of what to count and an object with true or false values for each value that should or shouldn't be counted
* `eqArrays`: takes 2 arrays and does a deep equal
* `eqObjects`: takes 2 objects and does a deep equal
* `findKey`: takes an object and a callback function uses the callback to return the first key
* `findKeyByValue`: takes an object and a value to search for. Returns first equal value
* `head`: takes an array and returns first element
* `letterPositions`: takes a sentence and a letter ('hello').l and returns an array of that letters indices
* `map`: takes an array and a callback function that it uses to sort and returns the results
* `middle`: takes an array and returns the middle element. Returns middle 2 elements if even
* `tail`: takes an array and returns the same array without the head
* `takeUntil`: takes an array and a callback that determines where to stop in the array. Returns an array up to that point
* `without`: takes 2 arrays. Returns the first array without the elements specified in the second array