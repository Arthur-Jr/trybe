let salarioB = 3000.00;
let inss;
let ir;

if (salarioB <= 1556.94) {
  inss = 8 * salarioB / 100;
}else if (salarioB >= 1556.95 && salarioB < 2594.93) {
  inss = 9 * salarioB / 100;
}else if (salarioB >= 2594.93 && salarioB < 5189.82) {
  inss = 11 * salarioB / 100;
}else if (salarioB >= 5189.82) {
  inss = 570,88;
}else {
  console.log('Valor inválido');
}

let salarioMenosInss = salarioB - inss;

if (salarioB <= 1903.98) {
  ir = 0
}else if (salarioB >= 1903.99 && salarioB < 2826.66) {
  ir = (7.5 * salarioMenosInss / 100) - 142.80;
}else if (salarioB >= 2826.66 && salarioB < 3751.06) {
  ir = (15 * salarioMenosInss / 100) - 354.80; 
}else if (salarioB >= 3751.06 && salarioB < 4664.68) {
  ir = (22.5 * salarioMenosInss / 100)  - 636.13;
}else if (salarioB >= 4664.68) {
  ir = (27.5 * salarioMenosInss /100) - 869.36;
}

let resultado = salarioMenosInss - ir ;
console.log(resultado);
