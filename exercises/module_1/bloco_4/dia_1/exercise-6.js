let peca = "BISPO";
console.log(peca);

switch (peca.toLowerCase()){
  case 'rei':
    console.log('Qualquer direção, porém apenas uma casa por vez.');
    break;
  case 'dama':
    console.log('qualquer direção (vertical, horizontal e diagonal), porém quantas casas quiser, desde que estejam livres.'); 
    break;
  case 'torre':
    console.log('Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.');
    break;
  case 'bispo': 
    console.log('Move-se na diagonal, quantas casas quiser.');
    break;
  case 'cavalo':
    console.log('Em L, podendo saltar sobre as outras peças do tabuleiro.');  
    break;
  case 'peão':
    console.log('Move-se sempre uma casa para frente');
    break;
  default:
    console.log('Essa Peça é inexistente.')    
}

// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
//  Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.