const textInput = document.querySelector('#text-input');
const imageInput = document.querySelector('#meme-insert');
const image = document.querySelector('#meme-image');
const imageContainer = document.querySelector('#meme-image-container');

// Adiciona o valor do 'text-input' em um outro elemento.
function getInputTextValue() {
  document.querySelector('#meme-text').innerText = textInput.value;
}

// Pega o arquivo que foi selecionado e aplica o mesmo no elemento img.
function getInputImageValue(e) {
  image.src = URL.createObjectURL(e.target.files[0]);
  // Descobri que deveria usar, e como usar, o "URL.createObjectURL", neste link:
  // https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977
}

// Event Listener:
// Events referente ao 'text-input'.
textInput.addEventListener('keydown', getInputTextValue);
textInput.addEventListener('keyup', getInputTextValue);

// Event referent ao 'meme-insert'.
imageInput.addEventListener('change', getInputImageValue);
// Aprendi sobre o "change", neste link: https://www.w3schools.com/jsref/dom_obj_event.asp

// Events referente aos 3 botões, que muda a cor e o estilo da borda do container:
document.querySelector('#fire').addEventListener('click', () => {
  imageContainer.style.border = '3px dashed red';
});

document.querySelector('#water').addEventListener('click', () => {
  imageContainer.style.border = '5px double blue';
});

document.querySelector('#earth').addEventListener('click', () => {
  imageContainer.style.border = '6px groove green';
});
// Onde aprendi sobre o arrow-callback: https://eslint.org/docs/rules/prefer-arrow-callback

// Event referente ao default-meme, quando são clicados o container '#meme-image-container' recebe
// a imagem do item clicado.
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('dafault-meme')) {
    const save = e.target.src;
    image.src = save;
  }
});
