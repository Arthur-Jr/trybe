const getFatorial = (number) => {
  let fatorial = number;
  for (let index = number - 1; index < number && index > 0; index -= 1) {
    fatorial = fatorial * index;
  }
  return fatorial;
}

console.log(getFatorial(4));

// A função recebe um npumero e retorna seu fatorial.