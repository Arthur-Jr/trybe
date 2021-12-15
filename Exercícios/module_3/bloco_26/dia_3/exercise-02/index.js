const fs = require('fs').promises;

async function writeTxt(docName, content) {
  try {
    await fs.writeFile(`./${docName}.txt`, content, { flag: 'w' });
    return 'ok';
  } catch(err) {
    return null
  }
}

module.exports = writeTxt;
