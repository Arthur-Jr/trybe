const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  const newArray = arrays.reduce((acc, array) => {
    array.forEach((value) => acc.push(value));
    return acc
  }, []);
  return newArray;
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);

// Trasnforma multiplos arrays em um só.