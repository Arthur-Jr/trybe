const connection = require('./connection');
const axios = require('axios');

const getCepModel = async (cep) => {
  const [result] = await connection.execute(
    'SELECT * FROM cep_lookup.ceps WHERE cep = ?',
    [cep]
  );

  return result[0];
}

const addCepModel = async ({ cep, logradouro, bairro, localidade, uf }) => {
  const eightCharCep = cep.replace(/-/g, '');

  await connection.execute(
    'INSERT INTO cep_lookup.ceps(cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?)',
    [eightCharCep, logradouro, bairro, localidade, uf]
  );

  return true;
}

const getNewCepAndAdd = async (cep) => {
  const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
  if(data.erro) throw { status: 404, message: 'CEP não encontrado' };

  await addCepModel(data);
  return data;
}

module.exports = {
  getCepModel,
  addCepModel,
  getNewCepAndAdd,
}
