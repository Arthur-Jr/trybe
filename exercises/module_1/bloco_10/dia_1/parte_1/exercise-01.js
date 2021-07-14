function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Parameters must be numbers');
  }

  return a + b;
}

module.exports = sum;

// Refaz o exercício do dia 3 do bloco 7, usando o Jest no lugar do assert.