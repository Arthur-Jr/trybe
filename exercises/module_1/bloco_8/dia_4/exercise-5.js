const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  const transformString = names.reduce((acc, name) => `${acc}${name} `, '');
  const aCounter = transformString.split('').filter((word) => word === 'a' || word === 'A');
  return aCounter.length;
}
// Vi que era pra usar o split no gabarito e fui ver mais sobre ele neste link:
// https://www.w3schools.com/jsref/jsref_split.asp

assert.deepStrictEqual(containsA(), 20);

// Retorna a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.