const getUserName = require('./exercise-02-03');

describe('Test getUserName function', () => {

  it('should return the name that matchs with the id', () => {
    expect.assertions(1);
    return getUserName(4).then((result) => {
      expect(result).toBe('Mark');
    });    
  });

  it('should return a error message', () => {
    expect.assertions(1);
    return getUserName(6).catch((result) => {
      expect(result).toEqual({ error: 'User with 6 not found.' })
    });
  });

});
