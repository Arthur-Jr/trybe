const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs').promises;

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(authMiddleware);

// 01:
app.get('/ping', (_req, res) => {
  res.status(200).json({ message: 'pong' });
});

// 02:
app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(200).json({ message: `Hello, ${name}` });
});

// 03:
app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  if(age > 17) return res.status(200).json({ message: `Hello, ${name}` });

  res.status(401).json({ message: "Unauthorized" });
});

// 04:
app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  res.status(200).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
});

// 05:
async function getSimpsons () {
  const result = await fs.readFile('./simpsons.json', 'utf-8');
  return JSON.parse(result);
}

function addSimpsons (newSimpsons) {
  return fs.writeFile('./simpsons.json', JSON.stringify(newSimpsons));
}

// 06:

app.get('/simpsons', async (_req, res) => {
  const simpsons = await getSimpsons();
  if(!simpsons) return res.status(500).json({ message: "Error" });

  res.status(200).json(simpsons);
});

// 07:
app.get('/simpsons/:id', async (req, res) => {
  const { id } = req.params;
  const simpsons = await getSimpsons();
  const result = simpsons.find((simpson) => simpson.id === id);
  if(!result) return res.status(404).json({ message: 'simpson not found' });

  res.status(200).json(result);
});

// 08:
app.post('/simpsons', async (req, res) => {
  const { id, name } = req.body;
  const simpsons = await getSimpsons();

  if(simpsons.some((simpson) => simpson.id === id)) {
    return res.status(409).json({ message: 'id already exists' });
  }

  addSimpsons([...simpsons, { id, name }]);

  res.status(204).end();
});

// 09: 
function authMiddleware (req, res, next) {
  const { authorization } = req.headers;

  if(!authorization|| authorization.length < 16) {
    return res.status(401).json({ message: 'Token inválido!' });
  }

  return next();
}

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
