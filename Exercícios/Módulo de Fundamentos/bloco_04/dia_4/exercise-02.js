function verificaPalindrome(param1) {
  let save = '';
  
  for (index = param1.length - 1; index <= param1.length && index >= 0; index -= 1) {
    save += param1[index];
  }
  if (save === param1) {
    return true
  }else{
    return false
  }
}

console.log(verificaPalindrome('arara'));
console.log(verificaPalindrome('desenvolvimento'));

// O programa recebe uma string e retorna true se for um palíndromo , ou false , 
// se não for.
