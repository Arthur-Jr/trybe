const fs = require('fs').promises;

async function fsRead(file) {
  const text = await fs.readFile(file, 'utf-8');
  return JSON.parse(text);
}

async function fsWrite(infos) {
  const oldFile = await fsRead('talker.json');
  await fs.writeFile('./talker.json', JSON.stringify([...oldFile, infos]));
}

async function fsWriteEdit(infos, selectedId) {
  const oldFile = await fsRead('talker.json');
  const newData = oldFile.filter(({ id }) => id !== selectedId);
  const editedInfo = { ...infos, id: selectedId };

  await fs.writeFile('./talker.json', JSON.stringify([...newData, editedInfo]));
}

async function fsWriteDelete(selectedId) {
  const oldFile = await fsRead('talker.json');
  const newData = oldFile.filter(({ id }) => id !== selectedId);

  await fs.writeFile('./talker.json', JSON.stringify(newData));
}

module.exports = { fsRead, fsWrite, fsWriteEdit, fsWriteDelete };
