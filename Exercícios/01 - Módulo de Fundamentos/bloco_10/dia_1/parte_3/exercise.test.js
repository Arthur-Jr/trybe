const searchEmployee = require('./exercise');

describe('Test function searchEmployee', () => {
  it('should be defined', () => {
    expect(searchEmployee).toBeDefined();
  });

  it('should return first name', () => {
    expect(searchEmployee('8579-6', 'firstName')).toBe('Ana');
  });

  it('should return last name', () => {
    expect(searchEmployee('9852-2-2', 'lastName')).toBe('Cook');
  });

  it('should return specialities', () => {
    expect(searchEmployee('1256-4', 'specialities')).toEqual(['Hooks', 'Context API', 'Tailwind CSS']);
  });

  it('should return erro, first param invalid', () => {
    expect( () => searchEmployee('1111', 'specialities')).toThrowError('ID não identificado');
  });

  it('should return erro, second param invalid', () => {
    expect( () => searchEmployee('1256-4', 'xablau')).toThrowError('Informação indisponível');
  });
});