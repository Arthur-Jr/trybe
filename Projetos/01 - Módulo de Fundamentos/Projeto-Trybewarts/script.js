/* Constantes que serão utilizadas no decorrer do código */
const inputLogin = document.querySelector('#login');
const inputPassword = document.querySelector('#password');
const agreement = document.querySelector('#agreement');
const button = document.querySelector('#submit-btn');
const textArea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');

// Checa se o login e a senha são validas.
document.querySelector('#btn-login').addEventListener('click', () => {
  if (inputLogin.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

// Quando o chceckbox sofrer uma alteração, o status do botão muda.
agreement.addEventListener('change', () => {
  if (button.disabled === true) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
/* Aprendi sobre button.disabled, neste link
   https://flexiple.com/disable-button-javascript/ */
});

/* Cria uma string contendo todos os itens preenchidos na checkbox de tarefas */
function getSubjectList() {
  const subjectArray = document.querySelectorAll('input[class="subject"]:checked');
  let subjectList = '';
  for (let index = 0; index < subjectArray.length; index += 1) {
    if (subjectList === '') {
      subjectList = `${subjectArray[index].value}`;
    } else {
      subjectList = `${subjectList}, ${subjectArray[index].value}`;
    }
  }
  return subjectList;
}

/* Cria um array contendo as informações preenchidas pelo usuário */
function getDataArray(parameter1) {
  const lastName = document.getElementById('input-lastname').value;
  const myArray = [
    'Nome: ', `${document.getElementById('input-name').value} `, `${lastName}`,
    'Email: ', `${document.getElementById('input-email').value}`, '',
    'Casa: ', `${document.getElementById('house').value}`, '',
    'Família: ', `${document.querySelector('input[name="family"]:checked').value}`, '',
    'Matérias: ', `${parameter1}`, '',
    'Avaliação: ', `${document.querySelector('input[name="rate"]:checked').value}`, '',
    'Observações: ', `${document.getElementById('textarea').value}`, ''];
  return myArray;
}

/* Apaga o conteúdo do formulário e cria uma ul vazia dentro dele */
function eraseAndInsert() {
  const enteredDataArea = document.getElementById('evaluation-form');
  enteredDataArea.innerHTML = '';
  const newUl = document.createElement('ul');
  newUl.className = 'entered-data-area';
  enteredDataArea.appendChild(newUl);
}

/* Assim que o botão de envio é clicado, o formulário é esvaziado, e seu espaço é preenchido
por uma ul com lis contendo as informações preenchidas. */
button.onclick = () => {
  const subjectListString = getSubjectList();
  const dataArray = getDataArray(subjectListString);
  eraseAndInsert();
  for (let index = 0; index < dataArray.length; index += 3) {
    const ul = document.querySelector('.entered-data-area');
    const newLi = document.createElement('li');
    newLi.innerText = `${dataArray[index]}${dataArray[index + 1]}${dataArray[index + 2]}`;
    ul.appendChild(newLi);
  }
};

/* Quando uma tecla é pressionada o contador é tem o valor 1 subtraido dele, enquanto o contador
for maior que 0. */
textArea.addEventListener('keypress', () => {
  if (counter.innerText > 0) {
    counter.innerText = parseInt(counter.innerText, 10) - 1;
  }
});

/* Quando a tecla delete ou Backspace é solta e o textArea não tiver conteudo,
o contador volta para 500. */
textArea.addEventListener('keyup', () => {
  if (textArea.value === '' && counter.innerText < 500) {
    counter.innerText = '500';
  }
});

/* Toda vez que a tecla Backspace é apertado o contador ganha +1, enquanto for menor que 500. */
textArea.addEventListener('keydown', (e) => {
  if (e.key === 'Backspace' && counter.innerText < 500) {
    counter.innerText = parseInt(counter.innerText, 10) + 1;
  }
});

/* Quando o "link" icon é clicado o menu de login aparece após a div header. */
document.querySelector('.icon').addEventListener('click', () => {
  const menu = document.querySelector('.trybewarts-login');
  const save = document.querySelector('.responsive-menu');
  if (menu.style.display === 'flex') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'flex';
    save.appendChild(menu);
  }
});
