const uppercase = require('./exercise-01');

describe('Test uppercase function', () => {
  it('should return the first param on uppercase', (done) => {
    uppercase('test', (result) => {
      expect(result).toBe('TEST');
      done();
    });
  });
});