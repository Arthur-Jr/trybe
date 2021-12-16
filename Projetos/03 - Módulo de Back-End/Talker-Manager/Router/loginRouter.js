const express = require('express');
const generateToken = require('../Utils/GenerateToken');
const { HTTP_OK_STATUS } = require('../Utils/HttpStatus');
const checkEmail = require('../Middlewares/checkEmailMiddleware');
const checkPassword = require('../Middlewares/checkPasswordMiddleware');
const errorMiddleware = require('../Middlewares/ErrorMiddleware');

const router = express.Router();

router.post('/', checkEmail, checkPassword, (_req, res) => {
  res.status(HTTP_OK_STATUS).json({ token: generateToken() });
});

router.use(errorMiddleware);

module.exports = router;
