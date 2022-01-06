const express = require('express');
const { getCep, addCep } = require('./controllers/cep.controller');
const { getPing } = require('./controllers/ping.controller');
const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/ping', getPing);

app.get('/cep/:cep', getCep);

app.post('/cep', addCep);

app.use(errorMiddleware);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
