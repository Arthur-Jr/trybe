const exercise = require('./exercise-01-02-03');

describe('Test getRandomNumber function', () => {
  
  afterEach(() => {
    exercise.getRandomNumber.mockReset();
  });
  
  it('should test the funtion', () => { 
    expect.assertions(4);

    exercise.getRandomNumber = jest.fn()
      .mockImplementation((n1, n2, n3) => n1 * n2 * n3);
    
    expect(exercise.getRandomNumber(2, 2, 2)).toBe(8);
    expect(exercise.getRandomNumber).toHaveBeenCalled();
    expect(exercise.getRandomNumber).toHaveBeenCalledTimes(1);
    expect(exercise.getRandomNumber).toHaveBeenCalledWith(2, 2, 2);
  });

  it('should test the funtion with new implementation', () => {
    expect.assertions(5);
    expect(exercise.getRandomNumber).toHaveBeenCalledTimes(0);
    
    exercise.getRandomNumber = jest.fn()
      .mockImplementation((n) => n * 2);
    
    expect(exercise.getRandomNumber(5)).toBe(10);
    expect(exercise.getRandomNumber).toHaveBeenCalled();
    expect(exercise.getRandomNumber).toHaveBeenCalledTimes(1);
    expect(exercise.getRandomNumber).toHaveBeenLastCalledWith(5);

  });
});