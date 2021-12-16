const express = require('express');
const bodyParser = require('body-parser');
const talkerRouter = require('./Router/talkerRouter');
const loginRouter = require('./Router/loginRouter');
const { HTTP_OK_STATUS } = require('./Utils/HttpStatus');

const app = express();
app.use(bodyParser.json());

const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

// Inicio:
app.use('/talker', talkerRouter);

app.use('/login', loginRouter);

app.listen(PORT, () => {
  console.log('Online');
});
