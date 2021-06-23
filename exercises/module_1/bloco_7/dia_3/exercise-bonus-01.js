function checkValue(value, change) {
  let sum = 0;
  const save = value;
  let result = [];
  for (let index = 0; index < value.length; index += 1) {
    if (sum + value[index] > change) {
      value.splice(index, 1);
      index -= 1;
    } else if (sum + (value[index] + value[index]) === change) {
      result.push(value[index]);
      result.push(value[index]);
      sum += value[index] + value[index];
    } else {
      result.push(value[index]);
      sum += value[index];
    }
    if (index === value.length - 1 && sum < change) {
      index = 0;
    } 
  }
  return result;
}

function getChange(payable, paid) {
  const coins = [200, 100, 50, 20, 10, 5, 2, 1];
  let change = [];
  const { length } = coins;
  let remaining = paid - payable;
  if (payable > paid) throw Error ('paid value is not enough');
  for (let index = 0; index < length; index += 1) {
    if (remaining - coins[index] > 0) {
      change.push(coins[index]);
    }
  }
  change = checkValue(change, remaining);

  return change;
}

const assert = require('assert');

let result = getChange(1, 1); // no change/coins just an empty array
let expected = [];
assert.deepStrictEqual(result, expected);

result = getChange(215, 300); // expect an array containing [50, 20, 10, 5]
expected = [50, 20, 10, 5];
assert.deepStrictEqual(result, expected);

result = getChange(486, 600); // expect an array containing [100, 10, 2, 2]
expected = [100, 10, 2, 2];
assert.deepStrictEqual(result, expected);

result = getChange(12, 400); // expect an array containing [200, 100, 50, 20, 10, 5, 2, 1]
expected = [200, 100, 50, 20, 10, 5, 2, 1];
assert.deepStrictEqual(result, expected);

assert.throws(() => { getChange(100, 10); }, /^Error: paid value is not enough$/);