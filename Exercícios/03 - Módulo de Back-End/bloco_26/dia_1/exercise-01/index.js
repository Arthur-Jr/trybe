const readLine = require('readline-sync');

const scripts = [
  { name: 'IMC', path: './IMC' },
  { name: 'velocidade', path: './velocidade' },
  { name: 'sorteio', path: './sorteio' }
];

console.log('Escolha um script:\n');
const options = scripts.map((script, index) => `${index + 1} - ${script.name}`);

const result = readLine.questionInt(`${options.join('\n')}\n-`);

if (result > 3) return console.log('Número inválido!');

const selectedScript = scripts[result - 1];

require(selectedScript.path);
