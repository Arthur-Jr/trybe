const { BAD_REQUEST } = require('../Utils/HttpStatus');

module.exports = (req, _res, next) => {
  const { password } = req.body;
  
  if (!password) {
    return next({
      status: BAD_REQUEST,
      message: 'O campo "password" é obrigatório',
    });
  }

  if (password.length < 6) {
    return next({
      status: BAD_REQUEST,
      message: 'O "password" deve ter pelo menos 6 caracteres',
    });
  }
  
  next();
};
