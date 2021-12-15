function checkWord(word, ending) {
  let hits = 0;
  if (word[word.length - 1] !== ending[ending.length - 1]) {
    return false;
  }  
  for (let index = word.length - 1; index <= word.length && index >= 0 ; index -= 1) {     
    for (let index2 = ending.length - 1; index2 <= ending.length && index2 >= 0; index2 -= 1) {
      if (word[index] === ending[index2] ) {
        hits += 1;
        break;
      }  
    }
  } 
  if (hits >= ending.length) {
    return true;
  }
}

console.log(checkWord('trybe', 'be'));
console.log(checkWord('joaofernando', 'fernan'));
console.log(checkWord('Junior', 'unior'));

// O programa recebe uma string word e outra string ending, e Verifca se a 
// string ending é o final da string word. 