const main = document.querySelector('#main');
let hits = 0;

// Cria uma tag com id definido.
function createTagId(type, idName, father) {
  const tag = document.createElement(type);
  tag.id = idName;
  father.appendChild(tag);
}

// Cria tags com o nome da classe definida.
function createTagClass(type, classN, father, limit) {
  for (let index = 1; index <= limit; index += 1) {
    const tag = document.createElement(type);
    tag.className = classN;
    father.appendChild(tag);
  }
}

// Criação de tag:
createTagId('h1', 'title', document.querySelector('#header'));
document.querySelector('#title').innerText = 'Color Guess';

createTagId('h2', 'rgb-color', main);
const question = document.querySelector('#rgb-color');

createTagId('div', 'ball-container', main);

createTagClass('div', 'ball', main.firstElementChild.nextElementSibling, 6);
const balls = document.querySelectorAll('.ball');

createTagId('h2', 'answer', main);
const answer = document.querySelector('#answer');
answer.innerText = 'Escolha uma cor';

createTagId('span', 'score-text', main);
document.querySelector('#score-text').innerText = 'Acertos: ';

createTagId('span', 'score', main);
document.querySelector('#score').innerText = 0;

createTagId('button', 'reset-game', main);
document.querySelector('#reset-game').innerText = 'Reiniciar';

window.onload = function start() {
  const colorsList = ['rgb(255, 0, 0)', 'rgb(255, 128, 0)', 'rgb(255, 255, 0)', 'rgb(0, 255, 0)',
    'rgb(0, 0, 255)', 'rgb(128, 0, 255)'];
  question.innerText = colorsList[Math.floor(Math.random() * colorsList.length)];
  for (let index = 0; index < balls.length; index += 1) {
    const randomNumber = Math.floor(Math.random() * colorsList.length);
    balls[index].style.backgroundColor = colorsList[randomNumber];
    colorsList.splice(randomNumber, 1);
  }
};

// Checa se a cor e o texto são iguais e aumenta o número de acertos.
function checkAnswer(e) {
  if (e.target.classList.contains('ball')) {
    if (e.target.style.backgroundColor === question.innerText) {
      answer.innerText = 'Acertou!';
      hits += 3;
      document.querySelector('#score').innerText = hits;
    } else {
      answer.innerText = 'Errou! Tente novamente!';
    }
  }
}

// Inicia ou renicia o jogo.
function restartGame() {
  const colorsL = ['rgb(255, 0, 0)', 'rgb(255, 128, 0)', 'rgb(255, 255, 0)', 'rgb(0, 255, 0)',
    'rgb(0, 0, 255)', 'rgb(128, 0, 255)'];

  question.innerText = colorsL[Math.floor(Math.random() * colorsL.length)];
  for (let index = 0; index < balls.length; index += 1) {
    const randomColor = Math.floor(Math.random() * colorsL.length);
    balls[index].style.backgroundColor = colorsL[randomColor];
    colorsL.splice(randomColor, 1);
  }
  answer.innerText = 'Escolha uma cor';
}

// Event Listener:
document.addEventListener('click', checkAnswer);

document.querySelector('#reset-game').addEventListener('click', restartGame);
