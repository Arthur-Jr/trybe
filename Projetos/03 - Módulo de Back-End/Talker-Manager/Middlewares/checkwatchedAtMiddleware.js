const { BAD_REQUEST } = require('../Utils/HttpStatus');

module.exports = (req, _res, next) => {
  const { talk: { watchedAt } } = req.body;
  const dateRegex = /^([0-3][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;

  if (!dateRegex.test(watchedAt)) {
    return next({
      status: BAD_REQUEST,
      message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
    });
  }

  next();
};

// Link de referência do regex:
// https://www.regextester.com/99555
