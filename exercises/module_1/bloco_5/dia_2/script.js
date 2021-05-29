let body = document.querySelector('body');
function createTag (type, father, classN) {
  let tag = document.createElement(type);
  father.appendChild(tag);
  tag.className = classN;
}

//h1 title
createTag('h1', body, 'title');
document.querySelector('.title').innerText = 'Exercício 5.2 - JavaScript DOM';

//div main-content
createTag('div', body, 'main-content');
let mainContent = document.querySelector('.main-content'); 

//div center-content
createTag('div', mainContent, 'center-content');
let centerContent = document.querySelector('.center-content')
createTag('p', centerContent, 'textP');
centerContent.firstChild.innerText = 'Aprendendo DOM.'

//div left-content
createTag('div', mainContent, 'left-content');
createTag('img', mainContent.firstChild.nextSibling, 'small-image')
document.querySelector('.small-image').src= 'https://picsum.photos/200';
// Informei me como colocar o src no link: https://stackoverflow.com/questions/11722400/programmatically-change-the-src-of-an-img-tag

//div right-content
createTag('div', mainContent, 'right-content');
createTag('ul', mainContent.lastChild, 'ul');
let list = ['um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'nove', 'dez'];
for(let listIndex = 0; listIndex < list.length; listIndex += 1) {
  createTag('li', mainContent.lastChild.firstChild, 'li');
}

