const exercise = require('./exercise-01-02');

describe('Test getRandomNumber', () => {
  
  it('should return the specified value', () => {
    expect.assertions(3);
    
    exercise.getRandomNumber = jest.fn().mockReturnValue(10);
    exercise.getRandomNumber();
    expect(exercise.getRandomNumber).toHaveBeenCalled();
    expect(exercise.getRandomNumber()).toBe(10);
    expect(exercise.getRandomNumber).toHaveBeenCalledTimes(2);
  });
});