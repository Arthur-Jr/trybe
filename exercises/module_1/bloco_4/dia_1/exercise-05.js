let anguloA = 50;
let anguloB = -10;
let anguloC = 80;
let soma = anguloA + anguloB + anguloC;
 if (soma === 180) {
   console.log('True');
  }else if (soma !== 180 && anguloA > 0 && anguloB > 0 && anguloC > 0) {
    console.log('False');
  }else if (anguloA < 0 || anguloB < 0 || anguloC < 0) {
   console.log('Valor de angulo inválido.');
 } 
  
//  Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.