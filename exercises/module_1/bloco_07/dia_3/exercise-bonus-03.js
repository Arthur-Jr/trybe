const assert = require('assert');

function removeMiddle(array) {
  let result = [];
  const middle = Math.floor(array.length / 2);
  result.push(array[middle])
  
  return result;
}

let words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);
let string = output.toString();
for (let index = 0; index < words.length; index += 1) {
  if (string === words[index]) {
    words.splice(index, 1);
  }
}

assert.deepStrictEqual(output, expectedOutput);
assert.deepStrictEqual(words, expectedWords);

// Aprendi como mudar um array para string, neste link:
// https://www.w3schools.com/jsref/jsref_tostring_array.asp