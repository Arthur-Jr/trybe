function checkDraw(draw, value) {
  if (draw === value) {
    return 'Parabéns você ganhou!';
  }
  return 'Tente novamente!';
}

function draw(value, callback) {
  if (value > 5 || typeof(value) !== 'number') {
    throw Error ('valor invalido!!')
  }
  const getNumber = Math.floor(Math.random() * 5);
  const result = callback(getNumber, value);
  return result;
}

console.log(draw(1, checkDraw));

const assert = require('assert');

assert.throws(() => {
draw('', checkDraw);
draw([], checkDraw);
draw({}, checkDraw);
draw(null, checkDraw);
draw(undefined, checkDraw);
draw(6 , checkDraw);
});