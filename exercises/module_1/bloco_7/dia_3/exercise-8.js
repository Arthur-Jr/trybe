const assert = require('assert');

function wordLengths(array) {
  let wordLength = [];
  for (let index = 0; index < array.length; index += 1) {
    const word = array[index];
    wordLength.push(word.length);
  }
  return wordLength;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);

// Uma funtion foi criada a partir das const e dos testes unitários.