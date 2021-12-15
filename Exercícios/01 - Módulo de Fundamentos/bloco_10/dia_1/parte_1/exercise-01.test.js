const sum = require('./exercise-01');

describe('Test function sum', () => {
  test('If sum two values', ()=> {
    expect(sum(4, 5)).toBe(9);
  });

  test('If 0 + 0 its equals 0', ()=> {
    expect(sum(0, 0)).toBe(0);
  });

  test('Check if throw a error when the param its not a number', () => {
    expect(() => {
      sum(4, '5')
    }).toThrowError(new Error('Parameters must be numbers'));
  });
});