const { BAD_REQUEST } = require('../Utils/HttpStatus');

module.exports = (req, _res, next) => {
  const { age } = req.body;

  if (!age) return next({ status: BAD_REQUEST, message: 'O campo "age" é obrigatório' });

  if (parseInt(age, 10) <= 18) {
    return next({
      status: BAD_REQUEST,
      message: 'A pessoa palestrante deve ser maior de idade',
    });
  }

  next();
};
