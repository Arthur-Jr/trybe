function getLongest(sentence) {
  let word = '';
  let longestWord = '';
  for (let index = 0; index <= sentence.length; index += 1) {
    if (sentence[index] === ' ' || index === sentence.length) {
      word.length > longestWord.length ? longestWord = word : word = '';
      word = '';
    } else {
      word += sentence[index];
    }
  }
  return longestWord;
}

console.log(getLongest('Antônio foi no banheiro e não sabemos o que aconteceu'));

// O programa recebe uma frase e retorna a maior palavra.