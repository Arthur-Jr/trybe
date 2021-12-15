function nome(name) {
  let maiorNome = name[0];

  for (let index in name) {
    if (name[index].length > maiorNome.length)
      maiorNome = name[index];
  }
  return maiorNome;
};

console.log(nome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// O programa recebe um array de nomes e retorna o nome com a maior quantidade de caracteres.
