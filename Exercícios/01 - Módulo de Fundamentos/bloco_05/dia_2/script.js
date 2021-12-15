let body = document.querySelector('body');
function createTag (type, father, classN) {
  let tag = document.createElement(type);
  father.appendChild(tag);
  tag.className = classN;
}
function removeElements(father, target) {
  father.removeChild(target);
}

//body/ h1 
createTag('h1', body, 'title');
document.querySelector('.title').innerText = 'Exercício 5.2 - JavaScript DOM';

//body/ div 
createTag('div', body, 'main-content');
let mainContent = document.querySelector('.main-content'); 

//main-content/ div  center-content
createTag('div', mainContent, 'center-content');
let centerContent = document.querySelector('.center-content')
createTag('p', centerContent, 'textP');
centerContent.firstChild.innerText = 'Aprendendo DOM.'

//main-content/ div  left-content
createTag('div', mainContent, 'left-content');
createTag('img', mainContent.firstChild.nextSibling, 'small-image')
document.querySelector('.small-image').src= 'https://picsum.photos/200';
// Informei me como colocar o src no link: https://stackoverflow.com/questions/11722400/programmatically-change-the-src-of-an-img-tag

//main-content/ div  right-content
createTag('div', mainContent, 'right-content');
createTag('ul', mainContent.lastChild, 'ul');
let list = ['um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete','oito', 'nove', 'dez'];
for(let listIndex = 0; listIndex < list.length; listIndex += 1) {
  createTag('li', mainContent.lastChild.firstChild, 'li');
}

// main-content/ h3 h3
createTag('h3', mainContent, 'description');
createTag('h3', mainContent, 'description');
createTag('h3', mainContent, 'description');

// Remove / left-content
removeElements(mainContent, mainContent.firstChild.nextSibling);

// Edit/style right-content
document.querySelector('.right-content').style.margin = 'auto';

// Edit/style center-content
document.querySelector('.center-content').style.backgroundColor = 'green';

// Remove/ ul childs
removeElements(document.querySelector('.ul'), document.querySelector('.ul').lastChild);
removeElements(document.querySelector('.ul'), document.querySelector('.ul').lastChild);
