function textEdit (text) {
text.innerText = 'Daqui a dois anos me vejo trabalhando como desenvolvedor web.';
}
textEdit(document.getElementsByTagName('p')[1]);

function backgroundColorGreen(element) {
element.style.backgroundColor = 'rgb(76,164,109)';
}
backgroundColorGreen(document.getElementsByClassName('main-content')[0]);

function backgroundColorWhite(element) {
  element.style.backgroundColor = 'white';
  }
backgroundColorWhite(document.getElementsByClassName('center-content')[0]);

function textH1(text) {
  text.innerText = 'Exercício 5.1 - Javascript'
}
textH1(document.getElementsByTagName('h1')[0]);

function upperCase(text) {
  for(let index = 0; index < text.length; index += 1) {
    text[index].style.textTransform = 'uppercase'
  }
  // Informei me sobre o upperCase do dom neste link: https://www.tutorialspoint.com/css/css_text-transform.htm 
}
upperCase(document.getElementsByTagName('p'));

function logConsole(text) {
  for(let index = 0; index < text.length; index += 1) {
    console.log(text[index]);
  }
} 
logConsole(document.getElementsByTagName('p'));

/*
 O programa muda o texto na tag <p> para uma descrição de como eu me vejo daqui a 2 anos.
 O programa muda a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 O programa muda a cor do quadrado vermelho para branco.
 O programa corrije o texto da tag <h1>.
 O programa modifica todo o texto da tag <p> para maiúsculo.
 O programa exibe o conteúdo de todas as tags <p> no console.
  */
       