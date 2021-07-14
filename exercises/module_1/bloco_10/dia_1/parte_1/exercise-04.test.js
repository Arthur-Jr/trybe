const myFizzBuzz = require('./exercise-04');

describe('Test function myFizzBuzz', () => {
  test('If fizzbuzz condition is working', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  test('If fizz condition is working', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });

  test('If buzz condition is working', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });

  test('If return the given number, if the number is not divisible by 3 or 5', () => {
    expect(myFizzBuzz(19)).toBe(19);
  });

  test('If return false if the param its not a number', () => {
    expect(myFizzBuzz('1')).toBe(false);
  })
});