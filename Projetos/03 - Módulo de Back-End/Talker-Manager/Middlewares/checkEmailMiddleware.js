const { BAD_REQUEST } = require('../Utils/HttpStatus');

module.exports = (req, _res, next) => {
  const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]/i;
  const { email } = req.body;
  
  if (!email) return next({ status: BAD_REQUEST, message: 'O campo "email" é obrigatório' });

  if (!emailRegex.test(email)) {
    return next({
      status: BAD_REQUEST,
      message: 'O "email" deve ter o formato "email@email.com"',
    });
  }
  
  next();
};

// Link de referência do regex:
// https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
