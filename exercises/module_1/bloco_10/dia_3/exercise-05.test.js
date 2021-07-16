const exercise = require('./exercise-04-05');

describe('Testing changeCase function', () => {


  it('should return in lowercase', () => {

    expect(exercise.changeCase('abc')).toBe('ABC');
    
    jest.spyOn(exercise, 'changeCase')
      .mockImplementation((string) => string.toLowerCase());

    expect(exercise.changeCase('ABC')).toBe('abc');
    expect(exercise.changeCase).toHaveBeenCalled();
    expect(exercise.changeCase).toHaveBeenCalledTimes(1);
    expect(exercise.changeCase).toHaveBeenCalledWith('ABC');

    exercise.changeCase.mockRestore();
  });

  it('should return in uppercase', () => {
    
    expect(exercise.changeCase('abc')).toBe('ABC');
  });
});