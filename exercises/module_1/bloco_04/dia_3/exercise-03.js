let n = 5;
let result = '';
let space = '';
let symbol = '';

for (line = 1; line <= n; line += 1) {
  symbol += '*';
  for (index = 0; index < n; index += 1) {
    if (index < n - line){
      space += ' ';
    }else if (index > n - line) {
      break;
    }else{
      result = space + symbol;
    }
  }
  console.log(result);
  space = '';
}

// O programa imprime um triângulo retângulo com 5 asteriscos de base com o lado invertido.
// Chequei o gabarito da trybe para ter uma base de como fazer.