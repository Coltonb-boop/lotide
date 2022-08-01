const eqArrays = (first, second) => {
  for (let i = 0; i < first.length; i++) {
    // check lengths to make sure our second array isn't longer
    if (first.length !== second.length) return false;
    
    // check recursively if nested arrays are equal
    if (Array.isArray(first[i]) && Array.isArray(second[i])) {
      if (!eqArrays(first[i], second[i])) {
        return false;
      }
    } else if (first[i] !== second[i]) {
    // check if elements of equal index are equal
      return false;
    }
  }
  return true;
};


module.exports = eqArrays;
