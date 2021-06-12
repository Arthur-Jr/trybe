const saveInfo = document.querySelector('#save');

function getInfo(key, value) {
  const tag = document.createElement('p');
  tag.innerText = key + value;
  tag.className = ('savedInfo');
  saveInfo.appendChild(tag);
}

// Click do botão submit.
document.querySelector('#btn-submit').addEventListener('click', function(e) {
  
  // Condições.
  new JustValidate('.form', {
    rules: {
      date: {
        required: true
      },
      textArea1: {
        required: true,
        minLength: 5
      },
      textArea: {
        required: true,
        minLength: 5
      },
      cpf: {
        required: true,
        minLength: 11
      },
      radio: {
        required: true
      },
      text1: {
        required: true
      },
      text2: {
        required: true
      },
      text: {
        required: true
      },
    },
    messages: {
      textArea: {
        required: 'The field is required',
        minLength: 'The field must contain a minimum of 5 characters'
      },
      text: {
        required: 'The field is required'
      } 
    },
  });  

  // Salva value dos campos do formulário no sessionStorage.
  const name = document.querySelector('#full-name');
  const email = document.querySelector('#input-email');
  const cpf = document.querySelector('#input-cpf');
  const adress = document.querySelector('#input-adress');
  const city = document.querySelector('#input-city');
  const state = document.querySelector('#select-state');
  const abstract = document.querySelector('#input-abstract');
  const role = document.querySelector('#input-role');
  const description = document.querySelector('#input-description');
  const date = document.querySelector('#input-date');

  sessionStorage.setItem('name', name.value);
  sessionStorage.setItem('email', email.value);
  sessionStorage.setItem('cpf', cpf.value);
  sessionStorage.setItem('adress', adress.value);
  sessionStorage.setItem('city', city.value);
  sessionStorage.setItem('state', state.value);
  sessionStorage.setItem('abstract', abstract.value);
  sessionStorage.setItem('role', role.value);
  sessionStorage.setItem('description', description.value);
  sessionStorage.setItem('date', date.value);
  
});

// Pega as values salvas.
document.querySelector('#btn-show-last').addEventListener('click', function() {
  
  const name = sessionStorage.getItem('name');
  const email = sessionStorage.getItem('email');
  const cpf = sessionStorage.getItem('cpf');
  const adress = sessionStorage.getItem('adress');
  const city = sessionStorage.getItem('city');
  const state = sessionStorage.getItem('state');
  const abstract = sessionStorage.getItem('abstract');
  const role = sessionStorage.getItem('role');
  const description = sessionStorage.getItem('description');
  const date = sessionStorage.getItem('date');
  
  if (name && description !== null){
    getInfo('Nome completo: ', name);
    getInfo('Email: ', email);
    getInfo('CPF: ', cpf);
    getInfo('Endereço: ', adress);
    getInfo('Cidade: ', city);
    getInfo('Estado: ', state);
    getInfo('Resumo do curriculo: ', abstract);
    getInfo('cargo: ', role);
    getInfo('Descrição: ', description);
    getInfo('Data de inicio: ', date);
  }
});

// Limpar informações.
document.querySelector('#btn-clear').addEventListener('click', function() {
  const savedInfo = saveInfo.children;
  for(let index = savedInfo.length - 1; index <= savedInfo.length && index >= 0; index -= 1) {
    saveInfo.removeChild(savedInfo[index]);
  }
  sessionStorage.clear();
});