function maiorValor() {
  let numbers = [2, 3, 6, 7, 10, 1];
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

console.log(maiorValor());

// O programa retorna o indice com o maior valor numérico.
