const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => {
  return new Promise((resolve, reject) => {
    const foundAnimal = Animals.find((animal) => name === animal.name);
    if (foundAnimal) return resolve(foundAnimal);
    return reject('Nenhum animal com esse nome!');
  });
};

const findAnimalByAge = (age) => {
  return new Promise((resolve, reject) => {
    const foundAnimal = Animals.find((animal) => age === animal.age);
    if(foundAnimal) return resolve(foundAnimal);
    return reject('Nenhum animal com esse idade!');
  });
};

const getAnimal = (name) => {
  return findAnimalByName(name)
    .then((animal) => animal);
};

const getAnimalByAge = (age) => {
  return findAnimalByAge(age)
    .then((animal) => animal);
}

module.exports = { getAnimal, getAnimalByAge };
