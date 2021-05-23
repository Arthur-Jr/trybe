let n = 10;
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
