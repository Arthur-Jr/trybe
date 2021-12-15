const carta = document.querySelector('#carta-gerada');
const input = document.querySelector('#carta-texto');
const styleClass = ['newspaper', 'magazine1', 'magazine2'];
const size = ['medium', 'big', 'reallybig'];
const rotate = ['rotateleft', 'rotateright'];
const incline = ['skewleft', 'skewright'];

// Cria Span com class 4 aleatórias e recebe o valor de innerText.
function createSpan(text) {
  const tag = document.createElement('span');
  tag.classList.add(styleClass[Math.floor(Math.random() * styleClass.length)]);
  tag.classList.add(size[Math.floor(Math.random() * size.length)]);
  tag.classList.add(rotate[Math.floor(Math.random() * rotate.length)]);
  tag.classList.add(incline[Math.floor(Math.random() * incline.length)]);
  tag.innerText = text;
  carta.appendChild(tag);
}

// Limpa os spans já existente em "carta gerada", apos o clik no botão.
function clearText() {
  const spans = carta.children;
  if (spans.length > 0) {
    for (let index = spans.length - 1; index < spans.length && index >= 0; index -= 1) {
      carta.removeChild(spans[index]);
    }
  }
}

// Checa se tem algo escrito no input.
function checkText() {
  if (input.value === '' || input.value === ' ') {
    carta.innerText = 'Por favor, digite o conteúdo da carta.';
  }
}

// Mostra na pagina a quatidade de palavras(span) usadas.
function wordCounter() {
  const count = carta.children.length;
  document.querySelector('#carta-contador').innerText = count;
}

// Ao clicar no botão "criar-carta", cria span e adiciona o valor do input "carta-texto"
// na span criada.
document.querySelector('#criar-carta').addEventListener('click', () => {
  clearText();
  checkText();

  let text = '';
  for (let index = 0; index <= input.value.length; index += 1) {
    if (input.value[index] === ' ' || index === input.value.length) {
      createSpan(text);
      text = '';
    } else {
      text += input.value[index];
    }
  }

  wordCounter();
});
