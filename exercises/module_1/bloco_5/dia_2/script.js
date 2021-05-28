let body = document.querySelector('body');
function creatTag (type, father, classN) {
  let tag = document.createElement(type);
  father.appendChild(tag);
  tag.className = classN;
}

//h1 title
creatTag('h1', body, 'title');
document.querySelector('.title').innerText = 'Exercício 5.2 - JavaScript DOM';

//div main-content
creatTag('div', body, 'main-content');
let mainContent = document.querySelector('.main-content'); 

//div center-content
creatTag('div', mainContent, 'center-content');
creatTag('p', mainContent.firstChild, 'textP');
mainContent.firstChild.firstChild.innerText = 'Aprendendo DOM.'
