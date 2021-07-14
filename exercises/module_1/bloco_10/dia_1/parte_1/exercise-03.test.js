const myRemoveWithoutCopy = require('./exercise-03')

describe('Test function myRemoveWithoutCopy', () => {
  test('If the right number is being removed', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toContain(3);
  });

  test('If the return is correct', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 2)).not.toEqual([1, 2, 3, 4]);
  });

  test('If the number of second param is not in the array, if the array return without alteration', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  })
});
