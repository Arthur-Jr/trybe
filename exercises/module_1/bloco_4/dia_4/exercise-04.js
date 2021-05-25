function menorValor() {
  let numbers = [2, 4, 6, 7, 10, 0, -3];
  let menorNumero = numbers[0];
  let indexResult = 0;

  for (let index in numbers) {
    if (numbers[index] < menorNumero) {
      menorNumero = numbers[index];
      indexResult = index;
    }
  }
  return indexResult;
};

console.log(menorValor());

// O programa retorna o indice com o menor valor numérico.