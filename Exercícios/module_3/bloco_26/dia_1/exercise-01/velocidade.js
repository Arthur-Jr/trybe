const readLine = require('readline-sync');

const distancia = readLine.questionInt('Qual a sua distância? ');
const tempo = readLine.questionInt('Qual a sua tempo? ');

const velocidade = (dist, tempo) => {
  return (dist / tempo).toFixed(2);
};

console.log(`A velocidade média é ${velocidade(distancia, tempo)} m/s`);
