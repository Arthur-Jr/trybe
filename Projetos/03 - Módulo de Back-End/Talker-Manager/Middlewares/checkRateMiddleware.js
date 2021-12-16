const { BAD_REQUEST } = require('../Utils/HttpStatus');

module.exports = (req, _res, next) => {
  const { talk: { rate } } = req.body;
  const rateNum = parseInt(rate, 10);

  if (rateNum >= 1 && rateNum <= 5) return next();

  next({ status: BAD_REQUEST, message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
};
