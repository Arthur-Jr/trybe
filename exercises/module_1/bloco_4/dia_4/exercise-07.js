function soma() {
  let n = 5;
  let result = 0;

  for (let index = 1; index <= n; index += 1) {
    result += index;
  }
  return result;
};

console.log(soma());

// O programa recebe um número inteiro N e retorna o somatório de todos os números de 1 até N.