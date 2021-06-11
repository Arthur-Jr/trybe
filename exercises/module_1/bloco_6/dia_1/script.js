const saveInfo = document.querySelector('#save');

function getInfo(key, value) {
  const tag = document.createElement('p');
  tag.innerText = key + value;
  tag.className = ('savedInfo');
  saveInfo.appendChild(tag);
}

// Click do botão submit.
document.querySelector('#btn-submit').addEventListener('click', function(e) {
  
  // Checa o campo nome.
  const name = document.querySelector('#full-name');
  if (name.value.length > 40) {
    e.preventDefault()
    alert('O campo nome completo excede limite de caracteres!');
  } else if (name.value !== '') {
    sessionStorage.setItem('name', name.value);
  }

  // Checa o campo email.
  const email = document.querySelector('#input-email');
  if (email.value.length > 50) {
    e.preventDefault()
    alert('O campo email excede limite de caracteres!');
  } else if (email.value !== '') {
    sessionStorage.setItem('email', email.value);
  }


  // Checa o campo cpf.
  const cpf = document.querySelector('#input-cpf');
  if (cpf.value.length > 11) {
    e.preventDefault()
    alert('O campo CPF excede limite de caracteres!');
  } else if (cpf.value !== '') {
    sessionStorage.setItem('cpf', cpf.value);
  }


  // Checa o campo endereço.
  const adress = document.querySelector('#input-adress');
  if (adress.value.length > 200) {
    e.preventDefault()
    alert('O campo endereço excede limite de caracteres!');
  } else if (adress.value !== '') {
    sessionStorage.setItem('adress', adress.value);
  }


  // Checa o campo cidade.
  const city = document.querySelector('#input-city');
  if (city.value.length > 28) {
    e.preventDefault()
    alert('O campo cidade excede limite de caracteres!');
  } else if (city.value !== '') {
    sessionStorage.setItem('city', city.value);
  }

  // Salva a informção do campo estado.
  const state = document.querySelector('#select-state');
  sessionStorage.setItem('state', state.value);

  // Checa o campo resumo.
  const abstract = document.querySelector('#input-abstract');
  if (abstract.value.length > 1000) {
    e.preventDefault()
    alert('O campo resumo do seu curriculo excede limite de caracteres!');
  } else if (abstract.value !== '') {
    sessionStorage.setItem('abstract', abstract.value);
  }


  // Checa o campo cargo.
  const role = document.querySelector('#input-role');
  if (role.value.length > 40) {
    e.preventDefault()
    alert('O campo cargo excede limite de caracteres!');
  } else if (role.value !== '') {
    sessionStorage.setItem('role', role.value);
  }


  // Checa o campo descrição.
  const description = document.querySelector('#input-description');
  if (description.value.length > 500) {
    e.preventDefault()
    alert('O campo descrição do cargo excede limite de caracteres!');
  } else if (description.value !== '') {
    sessionStorage.setItem('description', description.value);
  }

  // Salva a informação do campo data de inicio.
  const date = document.querySelector('#input-date');
  sessionStorage.setItem('date', date.value);
  
});

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