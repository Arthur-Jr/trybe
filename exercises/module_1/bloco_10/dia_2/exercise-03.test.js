const getUserName = require('./exercise-02-03');

describe('Test getUserName function', () => {

  it('should return the name that matchs with the id', async () => {
    expect.assertions(1);
    const result = await getUserName(5);
    expect(result).toBe('Paul');
  });

  it('should return a error message', async () => {
    expect.assertions(1);
    try {
      await getUserName(7);
    } catch (err) {
      expect(err).toEqual({ error: 'User with 7 not found.' });
    }
  });

});

// O exercício 2 so que com async no lugar da Promisse.
