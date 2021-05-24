let n = 5;
let result = 0;

for (index = 1; index <= n; index += 1) {
  if (n % index === 0) {
    result += 1;
  }
}
if(result === 2) {
  console.log('O número ' + n + ' é número primo.')
}else{
  console.log('O número ' + n + ' não é número primo.')
}

// O programa informa se o número definido na variável é primo ou não.
