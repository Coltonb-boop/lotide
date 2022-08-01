const takeUntil = (array, callback) => {
  let stopPoint = 0;
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      stopPoint = i;
      break;
    }
  }
  return array.slice(0, stopPoint);
};

module.exports = takeUntil;

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// assertArraysEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]);

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// assertArraysEqual(takeUntil(data2, x => x === ','), [ "I've", 'been', 'to', 'Hollywood' ]);