const myRemove = require('./exercise-02');

describe('Test function myRemove', () => {
  test('If the right number is being removed', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toContain(3);
  });

  test('If the return is correct', () => {
    expect(myRemove([1, 2, 3, 4], 4)).not.toEqual([1, 2, 3, 4]);
  });

  test('If the number of second param is not in the array, if the array return without alteration', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
  })
});
