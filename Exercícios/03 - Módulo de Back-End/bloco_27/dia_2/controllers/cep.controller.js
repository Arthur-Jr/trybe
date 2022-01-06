const { getCepService, addCepService } = require("../services/cep.service");
const rescue = require('express-rescue');

const getCep = rescue(async (req, res) => {
  const { cep: cepParam } = req.params;

  const { cep, logradouro, bairro, localidade, uf } = await getCepService(cepParam);
  return res.status(200).json({ cep, logradouro, bairro, localidade, uf });
});

const addCep = rescue(async (req, res) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;

  await addCepService({ cep, logradouro, bairro, localidade, uf });

  return res.status(201).json({ cep, logradouro, bairro, localidade, uf });
});

module.exports = {
  getCep,
  addCep,
}
