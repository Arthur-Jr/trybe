const { encode, decode } = require('./exercise-01');

describe('Test function encode', () => {
  it('should be a funtion', () => {
    expect(encode('a')).toBeDefined();
  });

  it('should return 1, 2, 3, 4, 5, if a, e, i, o, u is given as param', () => {
    expect(encode('aeiou')).toBe('12345');
  });

  it('should not encode consonants', () => {
    expect(encode('bcdrthjgl')).toBe('bcdrthjgl');
  });

  it('should not have change on length', () => {
    expect(encode('arthur')).toHaveLength(6);
  });
});

describe('Test function decode', () => {
  it('should return a, e ,i , o, u if 1, 2, 3, 4, 5 is given as param', () => {
    expect(decode('12345')).toBe('aeiou');
  });

  it('should not decode number bigger than five', () => {
    expect(decode('67890')).toBe('67890');
  });

  it('should not have change on length', () => {
    expect('1rth4r').toHaveLength(6);
  });
});