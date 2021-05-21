let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numeroMaior = numbers[0];
 
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > numeroMaior) {
  numeroMaior = numbers[index];
  }
}  
console.log(numeroMaior);

// Utilizando for , descubra qual o maior valor contido no array e imprima-o;
