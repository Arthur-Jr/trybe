
document.querySelector('#btn-submit').addEventListener('click', function(e) {
  
  // Checar o campo nome.
  const name = document.querySelector('#full-name');
  if (name.value.length > 40) {
    e.preventDefault()
    alert('O campo nome completo excede limite de caracteres!');
  }

  // Checar o campo email.
  const email = document.querySelector('#input-email');
  if (email.value.length > 50) {
    e.preventDefault()
    alert('O campo email excede limite de caracteres!');
  }

  // Checar o campo cpf.
  const cpf = document.querySelector('#input-cpf');
  if (cpf.value.length > 11) {
    e.preventDefault()
    alert('O campo CPF excede limite de caracteres!');
  }

  // Checar o campo endereço.
  const adress = document.querySelector('#input-adress');
  if (adress.value.length > 200) {
    e.preventDefault()
    alert('O campo endereço excede limite de caracteres!');
  }

  // Checar o campo cidade.
  const city = document.querySelector('#input-city');
  if (city.value.length > 28) {
    e.preventDefault()
    alert('O campo cidade excede limite de caracteres!');
  }

  // Checar o campo resumo.
  const abstract = document.querySelector('#input-abstract');
  if (abstract.value.length > 1000) {
    e.preventDefault()
    alert('O campo resumo do seu curriculo excede limite de caracteres!');
  }

  // Checar o campo cargo.
  const role = document.querySelector('#input-role');
  if (role.value.length > 40) {
    e.preventDefault()
    alert('O campo cargo excede limite de caracteres!');
  }

  // Checar o campo descrição.
  const description = document.querySelector('#input-description');
  if (description.value.length > 500) {
    e.preventDefault()
    alert('O campo descrição do cargo excede limite de caracteres!');
  }

});
