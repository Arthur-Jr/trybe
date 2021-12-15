const getLargestNumber = (array) => {
  let largestNumber = array[0];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > largestNumber) {
      largestNumber = array[index];
    }
  }
  return largestNumber;
}

const parameter = [45, 8, 2, 50, 1, 7, 99];
const result = 99;

const assert = require('assert');

assert.strictEqual(getLargestNumber(parameter), result);