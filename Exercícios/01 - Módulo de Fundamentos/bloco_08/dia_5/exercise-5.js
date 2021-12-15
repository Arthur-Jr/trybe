const assert = require('assert');

const myList = [1, 2, 3];

const swap = ([index0, index1, index2]) => [index2, index1, index0];

const swappedList = swap(myList);

assert.strictEqual(swappedList[0], 3);
assert.strictEqual(swappedList[1], 2);
assert.strictEqual(swappedList[2], 1);

// Peguei a dica de usar o array destructuring no parâmetro no gabarito.

// Dado um array de 3 elementos, a função retorna um novo array com o primeiro e terceiro elementos trocados.