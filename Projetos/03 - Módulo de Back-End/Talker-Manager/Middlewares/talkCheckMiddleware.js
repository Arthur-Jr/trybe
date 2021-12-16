const { BAD_REQUEST } = require('../Utils/HttpStatus');

module.exports = (req, _res, next) => {
  const { talk } = req.body;

  if (!talk || !talk.watchedAt || talk.rate === undefined) {
    return next({
      status: BAD_REQUEST,
      message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
    });
  }

  next();
};
