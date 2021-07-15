const { obj1, obj2, obj3 } = require('./exercise-05');

describe('Check Objects', () => {
  test('If obj1 and obj2 are equal', () => {
    expect(obj1).toEqual(obj2);
  });

  test('If obj1 and obj3 are different', () => {
    expect(obj1).not.toEqual(obj3);
  });

  test('If obj2 and obj3 are different', () => {
    expect(obj2).not.toEqual(obj3);
  });
});
