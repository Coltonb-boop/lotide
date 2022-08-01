const middle = (array) => {
  let output = [];
  if (array.length < 3) return output;
  let arrayMiddle = Math.floor(array.length / 2); // 5 => 2.5 => 2
  
  if (array.length % 2 === 0) {
    output.push(array[arrayMiddle - 1]);
    output.push(array[arrayMiddle]);
    return output;
  }
  output.push(array[arrayMiddle]);
  return output;
}

module.exports = middle;
