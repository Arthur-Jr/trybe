let n = 5;
let result = '';
let space = '';
let symbol = '*';

for (line = 1; line < n - 1; line += 1) {
  if (line > 1){
    symbol += '**';
  }
  for (index = 0; index < n; index += 1) {
    if (index < n - line){
      space += ' ';
    }else if (index === n - line){
      result = space + symbol;
      break;
    }
  }
  console.log(result);
  space = '';
}

// O programa faz uma pirâmide com n asteriscos de base:
