const { getAnimal, getAnimalByAge } = require('./exercise-05');

describe('Testando promise - findAnimalByName', () => {
  
  describe('Quando existe o animal com o nome procurado', () => {

    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {

    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });

});

describe('Testing promise - findAnimalByAge', () => {
  
  describe('When there is an animal with the searched age', () => {

    it('should return the animal object', () => {
      expect.assertions(1);
      return getAnimalByAge(2).then((animal) => {
        expect(animal).toEqual({ name: 'Soneca', age: 2, type: 'Dog' },);
      });
    }); 
  });

  describe('When there is no animal with the searched age', () => {
    
    it('should return an error', () => {
      expect.assertions(1);
      return getAnimalByAge(7).catch((err) => {
        expect(err).toBe('Nenhum animal com esse idade!');
      });
    });
  });

});