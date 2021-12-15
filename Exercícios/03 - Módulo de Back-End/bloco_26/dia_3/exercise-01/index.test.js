const { expect } = require("chai");
const checkNum = require('./index');

describe('Testa o retorno da função', () => {
  it('retorna positivo', () => {
    const result = checkNum(1);

    expect(result).to.be.a('string');
    expect(result).to.be.equal('positivo');
  });

  it('retorna neutro', () => {
    const result = checkNum(0);

    expect(result).to.be.a('string');
    expect(result).to.be.equal('neutro');
  });

  it('retorna negativo', () => {
    const result = checkNum(-1);

    expect(result).to.be.a('string');
    expect(result).to.be.equal('negativo');
  });

  it('retorna: "o valor deve ser um número"', () => {
    const result = checkNum('a');

    expect(result).to.be.a('string');
    expect(result).to.be.equal('o valor deve ser um número');
  });
});
