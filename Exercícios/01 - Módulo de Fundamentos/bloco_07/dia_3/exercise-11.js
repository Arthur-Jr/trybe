const removeVowels = (word) => {
  const characters = word.split('');
  let vowelsNumber = 0;
  let results = '';

  for (let index = 0; index < characters.length; index += 1) {
    if (
      characters[index] === 'a' ||
      characters[index] === 'o' ||
      characters[index] === 'i' ||
      characters[index] === 'e' ||
      characters[index] === 'u'
    ) {
      vowelsNumber += 1
      results += vowelsNumber;
    } else {
      results += characters[index];
    }
  }
  return results;
};


const parameter = 'Dayane';
const result = 'D1y2n3';

const assert = require('assert');

assert.deepStrictEqual(removeVowels(parameter), result);