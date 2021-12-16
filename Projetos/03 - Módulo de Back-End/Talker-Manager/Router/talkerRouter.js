const express = require('express');
const { fsRead, fsWrite, fsWriteEdit, fsWriteDelete } = require('../Utils/FsFuncs');
const { HTTP_OK_STATUS, NOT_FOUND } = require('../Utils/HttpStatus');
const errorMiddleware = require('../Middlewares/ErrorMiddleware');
const authMiddleware = require('../Middlewares/authMiddleware');
const checkName = require('../Middlewares/checkNameMiddleware');
const checkAge = require('../Middlewares/checkAgeMiddleware');
const checkTalk = require('../Middlewares/talkCheckMiddleware');
const checkwatchedAt = require('../Middlewares/checkwatchedAtMiddleware');
const checkRate = require('../Middlewares/checkRateMiddleware');

const router = express.Router();

router.get('/', async (_req, res) => {
  const infos = await fsRead('talker.json');
  res.status(HTTP_OK_STATUS).json(infos);
});

router.get('/search', authMiddleware, async (req, res) => {
  const { q } = req.query;
  const data = await fsRead('talker.json');
  const result = data.filter(({ name }) => name.includes(q));

  res.status(HTTP_OK_STATUS).json(result);
});

router.get('/:id', async (req, res, next) => {
  const { id: selectedId } = req.params;
  const infos = await fsRead('talker.json');
  const filtredPerson = infos.find(({ id }) => id === parseInt(selectedId, 10));

  if (!filtredPerson) {
    return next({
      status: NOT_FOUND,
      message: 'Pessoa palestrante não encontrada',
    });
  }

  res.status(HTTP_OK_STATUS).json(filtredPerson);
});

router.post('/',
  authMiddleware,
  checkName,
  checkAge,
  checkTalk,
  checkwatchedAt,
  checkRate,
  async (req, res) => {
    const infos = req.body;
    const data = await fsRead('talker.json');
    const toADD = { ...infos, id: data.length + 1 };

    await fsWrite(toADD);
    res.status(201).json(toADD);
  });

router.put('/:id',
  authMiddleware,
  checkName,
  checkAge,
  checkTalk,
  checkwatchedAt,
  checkRate,
  async (req, res) => {
    const { id: selectedId } = req.params;
    const infos = req.body;

    await fsWriteEdit(infos, parseInt(selectedId, 10));
    res.status(HTTP_OK_STATUS).json({ ...infos, id: parseInt(selectedId, 10) });
  });

router.delete('/:id', authMiddleware, async (req, res) => {
  const { id } = req.params;

  await fsWriteDelete(parseInt(id, 10));
  res.status(HTTP_OK_STATUS).json({ message: 'Pessoa palestrante deletada com sucesso' });
});

router.use(errorMiddleware);

module.exports = router;
