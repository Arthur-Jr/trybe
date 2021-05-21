let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let index = 0; index < numbers.length; index += 1) {
  soma += numbers[index];
}
let resultado = soma / numbers.length; 
console.log(resultado);

if (resultado > 20) {
  console.log('Valor maior que 20!')
}else {
  console.log('Valor igual ou menos que 20!')
}
