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
  