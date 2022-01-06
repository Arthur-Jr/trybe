const { getCepModel, addCepModel, getNewCepAndAdd } = require("../models/cep.model");
const joi = require('joi');

const checkCep = (cep) => {
  const cepRegex = /\d{5}-?\d{3}/;

  if (!cepRegex.test(cep) || cep.length > 9) {
    throw { status: 400, message: 'CEP inválido' };
  }
}

const joiAddCepCheck = (obj) => {
  const { error } = joi.object({
    cep: joi.string().regex(/\d{5}-?\d{3}/).required(),
    logradouro: joi.string().not().empty().required(),
    bairro: joi.string().not().empty().required(),
    localidade: joi.string().not().empty().required(),
    uf: joi.string().not().empty().required().length(2),
  }).validate(obj);

  if(error) throw { status: 400, message: error.details[0].message };
}

const getCepService = async (cep) => {
  checkCep(cep);
  const eightCharCep = cep.replace(/-/g, '');

  const result = await getCepModel(eightCharCep);

  if(!result) return getNewCepAndAdd(eightCharCep);

  return result;
}

const addCepService = async ({ cep, logradouro, bairro, localidade, uf }) => {
  joiAddCepCheck({ cep, logradouro, bairro, localidade, uf });
  const newCep = await getCepModel(cep);

  if(!newCep) throw { status: 409, message: 'CEP já existente' };

  await addCepModel({ cep, logradouro, bairro, localidade, uf });
}

module.exports = {
  getCepService,
  addCepService,
}
