// Funçoes para checar os campos do forms.
function checkName(e) {
  const name = document.querySelector('#full-name');
  if (name.value.length > 40) {
    e.preventDefault()
    alert('O campo nome completo excede limite de caracteres!');
  }
}

function checkEmail(e) {
  const email = document.querySelector('#input-email');
  if (email.value.length > 50) {
    e.preventDefault()
    alert('O campo email excede limite de caracteres!');
  }
}

function checkCPF(e) {
  const cpf = document.querySelector('#input-cpf');
  if (cpf.value.length > 11) {
    e.preventDefault()
    alert('O campo CPF excede limite de caracteres!');
  }
}

function checkAdress(e) {
  const adress = document.querySelector('#input-adress');
  if (adress.value.length > 200) {
    e.preventDefault()
    alert('O campo endereço excede limite de caracteres!');
  }
}

function checkCity(e) {
  const city = document.querySelector('#input-city');
  if (city.value.length > 28) {
    e.preventDefault()
    alert('O campo cidade excede limite de caracteres!');
  }
}

function checkAbstract(e) {
  const abstract = document.querySelector('#input-abstract');
  if (abstract.value.length > 1000) {
    e.preventDefault()
    alert('O campo resumo do seu curriculo excede limite de caracteres!');
  }
}

function checkRole(e) {
  const role = document.querySelector('#input-role');
  if (role.value.length > 40) {
    e.preventDefault()
    alert('O campo cargo excede limite de caracteres!');
  }
}

function checkDescription(e) {
  const description = document.querySelector('#input-description');
  if (description.value.length > 500) {
    e.preventDefault()
    alert('O campo descrição do cargo excede limite de caracteres!');
  }
}

// Clicks do botão submit.
document.querySelector('#btn-submit').addEventListener('click', checkName);
document.querySelector('#btn-submit').addEventListener('click', checkEmail);
document.querySelector('#btn-submit').addEventListener('click', checkCPF);
document.querySelector('#btn-submit').addEventListener('click', checkAdress);
document.querySelector('#btn-submit').addEventListener('click', checkCity);
document.querySelector('#btn-submit').addEventListener('click', checkAbstract);
document.querySelector('#btn-submit').addEventListener('click', checkRole);
document.querySelector('#btn-submit').addEventListener('click', checkDescription);
