const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
const buttonContainer = document.querySelector('.buttons-container')

// Define as sextas e os feriados.
function setHolidayFriday(dateList) {
  for (let index = 0; index < dateList.children.length; index += 1) {
    if (index === 25 || index === 26 || index === 32) {
      dateList.children[index].classList.add('holiday'); 
    }
    if (index === 5 || index === 12 || index === 19 || index === 26) {
      dateList.children[index].classList.add('friday');
    }  
  }
}

window.onload = function start() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  // Adiciona os dias da semana.
  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }

  // Adiciona as datas do mês.
  const dateList = document.querySelector('#days');
  
  for (let index = 0; index < dezDaysList.length; index += 1) {
    const dateListItem = document.createElement('li');
    dateListItem.className = 'day';
    dateListItem.innerText = dezDaysList[index];

    dateList.appendChild(dateListItem);
  }

  setHolidayFriday(dateList);

};

// Cria botão com id definido.
function createButton(string, idName, father) {
  const tag = document.createElement('button');
  tag.id = idName;
  tag.innerText = string;
  father.appendChild(tag);
}

// Cria span com classe definida.
function createTask() {
  const inputValue = document.querySelector('#task-input').value;
  if (inputValue === '') {
    alert('Erro! Adicione algo na caixa de texo');
  } else {
    const tag = document.createElement('span');
    tag.className = 'tasks';
    tag.innerText = inputValue;
    document.querySelector('.my-tasks').appendChild(tag);
  }
}

// Cria uma div com backgroundColor.
function createDiv() {
  if (document.querySelector('#task-input').value !== '') {
    const colors = ['black', 'green', 'yellow', 'violet', 'grey', 'brown', 'red', 'blue', 'purple', 'pink',
    'orange', 'silver', 'gold', 'navy', 'aqua', 'darkred', 'darkorange', 'darkviolet', 'beige', 'coral'];
    const save = Math.floor(Math.random() * colors.length);
    const tag = document.createElement('div');
    tag.className = 'task';
    tag.style.backgroundColor = colors[save];
    document.querySelector('.my-tasks').appendChild(tag);
  }
}

// Criação de tags.
createButton('Feriados', 'btn-holiday', buttonContainer);

createButton('Sexta-feira', 'btn-friday', buttonContainer);

// Destaca os dias que são feriados.
function indentifyHoliday() {
  const holidays = document.querySelectorAll('.holiday');
  for (let index = 0; index < holidays.length; index += 1) {
    if (holidays[index].style.backgroundColor === 'yellow') {
      holidays[index].style.backgroundColor = 'rgb(238,238,238)';
    } else {
      holidays[index].style.backgroundColor = 'yellow';
    }
  }
}

// Destaca as sexta-feiras.
function indentifyFriday() {
  const days = document.querySelectorAll('.day');
  for (let index = 0; index < days.length; index += 1) {
    if (days[index].innerText === 'Sextou!') {
      days[index].innerText = index - 1;
    } else if (days[index].classList.contains('friday')) { 
      days[index].innerText = 'Sextou!';
    }
  }
}

// Dá zoom no dia, quando o mouse passa por cima.
function mouseEnterZoom(e) {
  if (e.target.classList.contains('day')){
    e.target.style.transform = 'scale(3.0)';
  }
}

// Retira o zoom quando o mouse sai de cima do elemento.
function mouseLeaveZoom(e) {
  if (e.target.classList.contains('day')){
    e.target.style.transform = 'scale(1.0)';
  }
  // aprendi sobre o transform, neste link:
  // https://www.w3schools.com/howto/howto_css_zoom_hover.asp
}

// Seleciona uma tarefa com click.
function clickSelected(e) {
  const task = document.querySelectorAll('#task');
  if (e.target.classList.contains('task')){
    if (e.target.classList.contains('selected')) {
      e.target.classList.remove('selected');
    } else {
      e.target.classList.add('selected');
    }
  }
}

// Adiciona o bgColor do selected no dia clicado.
function changeBgColor(e) {
  const selected = document.querySelector('.selected').style.backgroundColor;
  if (e.target.classList.contains('day')) {
    if (e.target.style.backgroundColor === selected) {
    e.target.style.backgroundColor = '#eee';  
    } else {
      e.target.style.backgroundColor = selected;
    }
  }
}

// Cria uma div com backgroundColor quando a tecla enter é pressionada.
function createDivKey(e) {
  if (e.key === 'Enter') {
    if (document.querySelector('#task-input').value !== '') {
      const colors = ['black', 'green', 'yellow', 'violet', 'grey', 'brown', 'red', 'blue', 'purple', 'pink',
      'orange', 'silver', 'gold', 'navy', 'aqua', 'darkred', 'darkorange', 'darkviolet', 'beige', 'coral'];
      const save = Math.floor(Math.random() * colors.length);
      const tag = document.createElement('div');
      tag.className = 'task';
      tag.style.backgroundColor = colors[save];
      document.querySelector('.my-tasks').appendChild(tag);
    }
  }
}

// Cria span com classe definida quando a tecla enter é pressionada..
function createTaskKey(e) {
  if (e.key === 'Enter') {
    const inputValue = document.querySelector('#task-input').value;
    if (inputValue === '') {
      alert('Erro! Adicione algo na caixa de texo');
    } else {
      const tag = document.createElement('span');
      tag.className = 'tasks';
      tag.innerText = inputValue;
      document.querySelector('.my-tasks').appendChild(tag);
    }
  }
}

// Event Listener
document.querySelector('#btn-holiday').addEventListener('click', indentifyHoliday);

document.querySelector('#btn-friday').addEventListener('click', indentifyFriday);

document.addEventListener('mouseover', mouseEnterZoom);
document.addEventListener('mouseout', mouseLeaveZoom);

document.querySelector('#btn-add').addEventListener('click', createTask);
document.querySelector('#btn-add').addEventListener('click', createDiv);

document.querySelector('#task-input').addEventListener('keypress', createTaskKey);
document.querySelector('#task-input').addEventListener('keypress', createDivKey);
// Aprendi sobre o keypress, neste link:
// https://www.w3schools.com/JSREF/event_key_keycode.asp

document.addEventListener('click', clickSelected);

document.addEventListener('click', changeBgColor);
