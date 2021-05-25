function numberRepeat() {
  let numbers = [2, 3, 2, 5, 8, 2, 3];
  let sameNumber = 0;
  let result = 0;
  let xRepeat = 0;

  for (let index in numbers) {

    for (let index2 = 0; index2 < numbers.length; index2 += 1){
      if (numbers[index] === numbers[index2]) {
        sameNumber += 1;
      }
    }
    if (sameNumber > xRepeat) {
      xRepeat = sameNumber;
      result = numbers[index]
    }
    sameNumber = 0;  
  }
  return result;
};

console.log(numberRepeat());

// O programa recebe um array de inteiros e retorna o inteiro que mais se repete.
