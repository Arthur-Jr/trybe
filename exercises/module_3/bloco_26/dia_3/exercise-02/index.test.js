const { expect } = require('chai');
const sinon = require('sinon');
const writeTxt = require('./index');
const fs = require('fs')

describe('Escreve em um arquivo', () => {
  before(() => {
    sinon.stub(fs, 'writeFile');
  });

  after(() => {
    fs.writeFile.restore();
  });

  it('retorna "ok"', async () => {
    const result = await writeTxt('newDoc', 'test');

    expect(result).to.be.a('string');
    expect(result).to.be.equal('ok');
  });
});
