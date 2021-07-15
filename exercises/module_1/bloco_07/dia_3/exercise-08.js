const assert = require('assert');

function sumAllNumbers(numbers) {
  let result = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    result += numbers[index];
  }
  return result;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);

// Uma funtion foi criada a partir das const e dos testes unitários.
