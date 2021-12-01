const readLine = require('readline-sync');

const altura = readLine.questionFloat('Qual a sua altura? ');
const peso = readLine.questionInt('Qual a sua peso? ');

const IMC = (altura, peso) => {
  return (peso / Math.pow(altura / 100, 2)).toFixed(2);
};

const result = IMC(altura, peso);
console.log(result);

switch (true) {
  case result < 18.5:
    console.log('Abaixo do peso (magreza)');
    break;
  case result >= 18.5 && result < 24.9:
    console.log('Peso normal');
    break;
  case result >= 25.0 && result < 29.9:
    console.log('Acima do peso (sobrepeso)');
    break;
  case result >= 30.0 && result < 34.9:
    console.log('Obesidade grau I');
    break;
  case result >= 35.0 && result < 39.9:
    console.log('Obesidade grau II');
    break;
  default:
    console.log('Obesidade graus III e IV');
    break;
};
