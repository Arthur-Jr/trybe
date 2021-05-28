let body = document.getElementsByTagName('body')[0];
function createTag(type, father) {
  let tag = document.createElement(type);
  return father.appendChild(tag);
}
createTag('h1', body);
createTag('div', body);

function addClass(tag, classN) {
  tag.className = classN;
}
addClass(document.querySelector('body div'),'main-content')

function addText(target ,text) {
  target.innerText = text;
}
addText(document.querySelector('body h1'), 'Exercício 5.2 - JavaScript DOM');





// Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
// Adicione a tag div com a classe main-content como filho da tag body ;
// Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;
// Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;
// Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;
// Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;
// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do div criado no passo 5;
// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6;
