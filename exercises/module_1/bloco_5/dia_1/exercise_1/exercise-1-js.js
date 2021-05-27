let container = document.getElementById('header-container');
container.style.color = 'white';
container.style.backgroundColor = 'green';

function border(element) {
  for (let index = 0; index < element.length; index += 1) {
    element[index].style.border = '2px solid black';
    element[index].style.marginBottom = '10px';
  }
}
border(document.querySelectorAll('.emergency-tasks div'));
border(document.querySelectorAll('.no-emergency-tasks div'));

function colors(element) {
  for (let index = 0; index < element.length; index += 1) {
    element[index].style.color = 'black';
    element[index].style.backgroundColor = 'yellow';
  }
}
colors(document.querySelectorAll('h3'));

document.querySelectorAll('.emergency-tasks div')[0].style.backgroundColor = 'red';
document.querySelectorAll('.emergency-tasks div')[1].style.backgroundColor = 'red';
document.querySelectorAll('.no-emergency-tasks div')[0].style.backgroundColor = 'green';
document.querySelectorAll('.no-emergency-tasks div')[1].style.backgroundColor = 'green';

document.getElementById('footer-container').style.color = 'white';
document.getElementById('footer-container').style.backgroundColor = 'green';
