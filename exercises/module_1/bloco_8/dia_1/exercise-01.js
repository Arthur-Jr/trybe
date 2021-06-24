function createEmail(value) {
  if (typeof(value) !== 'string') {
    throw Error ('Nome Invalido!!')
  }
  let newString = '';
  for (let index = 0; index < value.length; index += 1) {
    if (value[index] === ' ') {
      newString += '_'
    } else {
      newString += value[index];
    }
  }
  return `${newString}@trybe.com`;
}

const newEmployees = () => {
  const employees = {
    id1: createEmail('Pedro Guerra'),
    id2: createEmail('Luiza Drumond'),
    id3: createEmail('Carla Paiva'),
  }
  return employees;
};

console.log(newEmployees());

const assert = require('assert');

assert.throws(() => {
  createEmail(null);
  createEmail(undefined);
  createEmail([ ]);
  createEmail({ });
  createEmail(1);
});