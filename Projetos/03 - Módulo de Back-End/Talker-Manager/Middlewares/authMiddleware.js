const { UNAUTHORIZED } = require('../Utils/HttpStatus');

module.exports = (req, _res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return next({
      status: UNAUTHORIZED,
      message: 'Token não encontrado',
    });
  }

  if (authorization.length < 16) {
    return next({
      status: UNAUTHORIZED,
      message: 'Token inválido',
    });
  }

  next();
};
