const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;

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

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }

  const dateList = document.querySelector('#days');
  
  for (let index = 0; index < dezDaysList.length; index += 1) {
    const dateListItem = document.createElement('li');
    dateListItem.className = 'day';
    dateListItem.innerText = dezDaysList[index];

    dateList.appendChild(dateListItem);
  }

  setHolidayFriday(dateList);

};

// Escreva seu código abaixo.