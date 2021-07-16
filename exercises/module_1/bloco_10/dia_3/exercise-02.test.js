const exercise = require('./exercise-01-02-03');

describe('Test getRandomNumber function', () => {
  
  it('should return', () => {
    
    exercise.getRandomNumber = jest.fn().mockImplementation((n1, n2) => n1 / n2 );

    expect(exercise.getRandomNumber(4, 2)).toBe(2);
    expect(exercise.getRandomNumber).toHaveBeenCalled();
    expect(exercise.getRandomNumber).toHaveBeenCalledTimes(1);
    expect(exercise.getRandomNumber).toHaveBeenLastCalledWith(4, 2);
  });
});