function maiorValor(numbers) {
  let numeroMaior = numbers[0];
  let indexresult = 0;

  for (let index in numbers) {
    if (numbers[index] > numeroMaior) {
      numeroMaior = numbers[index];
      indexresult = index
    }       
  }
  return indexresult;
};

console.log(maiorValor([2, 3, 6, 7, 10, 1]));

// O programa retorna o indice com o maior valor numérico.
