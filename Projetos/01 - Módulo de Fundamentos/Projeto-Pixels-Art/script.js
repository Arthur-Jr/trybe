const main = document.querySelector('#paint');

// Cria tags com class defenida.
function createTag(type, classN, father) {
  const tag = document.createElement(type);
  tag.className = classN;
  father.appendChild(tag);
}

// Cria tag com id defenido.
function createTagId(type, idName, father) {
  const tag = document.createElement(type);
  tag.id = idName;
  father.appendChild(tag);
}

// Cria multiplas tags com classes.
function multiCreateTag(type, classN, father, limit) {
  for (let index = 1; index <= limit; index += 1) {
    createTag(type, classN, father);
  }
}

// Criação de tags.
createTagId('h1', 'title', document.querySelector('#header'));
document.querySelector('#title').innerText = 'Paleta de Cores';

createTagId('div', 'color-palette', main);
const colorPalette = document.querySelector('#color-palette');

multiCreateTag('div', 'color', colorPalette, 4);

createTagId('button', 'clear-board', main);
document.querySelector('#clear-board').innerText = 'Limpar';

createTagId('input', 'board-size', main);
const input = document.querySelector('#board-size');
input.type = 'number';
input.min = '1';
input.max = '50';
// aprendi sobre o max e min do input, neste link:
// https://www.w3schools.com/tags/att_input_max.asp

createTagId('button', 'generate-board', main);
document.querySelector('#generate-board').innerText = 'VQV';

createTagId('div', 'pixel-board', main);
const pixelBoard = document.querySelector('#pixel-board');

multiCreateTag('div', 'tr', pixelBoard, 5);
for (let index = 0; index < pixelBoard.children.length; index += 1) {
  multiCreateTag('div', 'td pixel', document.getElementsByClassName('tr')[index], 5);
}

// Assim que a pagina é carregada o backgroundColor da palheta de cores é definido.
window.onload = function start() {
  const colors = colorPalette.children;
  const colorChose = ['blue', 'red', 'yellow', 'orange', 'green', 'purple', 'grey',
    'brown', 'pink', 'violet', 'gold', 'silver'];

  document.querySelector('.color').style.backgroundColor = 'black';

  // Adicona cores randômicas na palheta de cores.
  for (let index = 1; index < colors.length; index += 1) {
    const randomColor = Math.floor(Math.random() * colorChose.length);
    colors[index].style.backgroundColor = colorChose[randomColor];
    colorChose.splice(randomColor, 1);
    // Aprendi sobre o Math.flor e Math.random, neste link:
    // https://www.w3schools.com/js/js_random.asp
    // e sobre o .splice, neste:
    // https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array
  }

  document.querySelector('.color').classList.add('selected');
};

// Adiciona a classe 'selected' ao div que foi clicado.
function setClass(e) {
  const colors = colorPalette.children;
  if (e.target.classList.contains('color')) {
    for (let index = 0; index < colors.length; index += 1) {
      colors[index].className = 'color';
    }
    e.target.className += ' selected';
  }
  // Aprendi como usar o e.currentTarget e o e.target, neste link:
  // https://developer.mozilla.org/pt-BR/docs/Web/API/Event/currentTarget
  // tentei usar o event.target que foi ensinado, mas não passou pelo lint, então usei o
  // e.currentTarget e o e.target para fazer o "trabalho" do event.target.
}

// Muda a cor dos pixels de acordo com a palheta de cor.
function changeColor(e) {
  const color = document.querySelector('.selected').style.backgroundColor;
  if (e.target.classList.contains('pixel')) {
    e.target.style.backgroundColor = color;
  }
  // Aprendi sobre o event bublbling, neste link:
  // https://gomakethings.com/attaching-multiple-elements-to-a-single-event-listener-in-vanilla-js/
}

// Limpa o pixel-board ao clicar no botão.
function clearBoard() {
  const rows = pixelBoard.children;
  for (let index = 0; index < rows.length; index += 1) {
    const pixels = rows[index].children;
    for (let index2 = 0; index2 < pixels.length; index2 += 1) {
      pixels[index2].style.backgroundColor = 'white';
    }
  }
}

// Remove os pixels.
function removePixels() {
  const pixels = pixelBoard.children;
  for (let index = pixels.length - 1; index <= pixels.length && index >= 0; index -= 1) {
    pixelBoard.removeChild(pixels[index]);
  }
}

function checkBoardSize() {
  let inputValue = input.value;
  if (inputValue < 5 && inputValue > 0) {
    inputValue = 5;
  } else if (inputValue > 50) {
    inputValue = 50;
  }
  return inputValue;
}

// Cria pixels de acordo com o valor definido no input.
function setBoardSize() {
  const inputValue = checkBoardSize();
  if (inputValue > 0) {
    removePixels();
    multiCreateTag('div', 'tr', pixelBoard, inputValue);
    for (let index = 0; index < pixelBoard.children.length; index += 1) {
      multiCreateTag('div', 'td pixel', document.getElementsByClassName('tr')[index], inputValue);
    }
  } else {
    alert('Board inválido!');
  }
}

// Event listener
document.addEventListener('click', setClass);

document.addEventListener('click', changeColor);

document.querySelector('#clear-board').addEventListener('click', clearBoard);

document.querySelector('#generate-board').addEventListener('click', setBoardSize);
