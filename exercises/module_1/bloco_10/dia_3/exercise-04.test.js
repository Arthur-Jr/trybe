const exercise = require('./exercise-04');
jest.mock("./exercise-04");

describe('Test changeCase function', () => {
  
  it('should return in lowercase', () => {
    expect.assertions(4);

    exercise.changeCase.mockImplementation((string) => string.toLowerCase());

    expect(exercise.changeCase('ABC')).toBe('abc');
    expect(exercise.changeCase).toHaveBeenCalled();
    expect(exercise.changeCase).toHaveBeenCalledTimes(1);
    expect(exercise.changeCase).toHaveBeenCalledWith('ABC');
  });
});

describe('Test getFirstLetter function', () => {
  
  it('should return last letter', () => {
    expect.assertions(4);

    exercise.getFirstLetter.mockImplementation((string) => string[string.length - 1]);

    expect(exercise.getFirstLetter('abc')).toBe('c');
    expect(exercise.getFirstLetter).toHaveBeenCalled();
    expect(exercise.getFirstLetter).toHaveBeenCalledTimes(1);
    expect(exercise.getFirstLetter).toHaveBeenCalledWith('abc');
  });
});

describe('Test getTogether function', () => {
  
  it('should return 2 string in one', () => {
    expect.assertions(4);

    exercise.getTogether
      .mockImplementation((str1, str2, str3) => str1.concat(str2, str3));
      // Aprendi sobre o concat no gabarito da trube, e olhei mais sobre ele, neste link:
      // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/concat
    
    expect(exercise.getTogether('a', 'b', 'c')).toBe('abc');
    expect(exercise.getTogether).toHaveBeenCalled();
    expect(exercise.getTogether).toHaveBeenCalledTimes(1);
    expect(exercise.getTogether).toHaveBeenCalledWith('a', 'b', 'c');
  });
});