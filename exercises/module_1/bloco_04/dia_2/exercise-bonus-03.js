let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersMulti = [];

for (index = 0; index < numbers.length; index += 1) {
  
  if (index + 1 <= numbers.length - 1){
  let multi = numbers[index] * numbers[index + 1];
  numbersMulti.push(multi); 
  }else{
  let multi2 = numbers[index] * 2;
  numbersMulti.push(multi2);
  }
}
console.log(numbersMulti);

// O valor do array numbersMulti deverá ser igual ao valor correspondente no array numbers multiplicado 
// pelo seguinte. Por exemplo: o primeiro valor do array numbersMulti deverá ser 45, pois é a 
// multiplicação de 5 (primeiro valor) e 9 (valor seguinte), e assim por diante. Caso não haja 
// próximo valor, a multiplicação deverá ser feita por 2. 