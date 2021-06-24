function check(rightA, checkA) {
  let result = 0.0;
  for(let index = 0; index < rightA.length; index += 1) {
    if (rightA[index] === checkA[index]) {
      result += 1.0;
    } else {
      result -= 0.5;
    }
  }
  return result;
}

function verify(rightA, checkA, callback) {
  if (Array.isArray(checkA) === true) {
    const check = callback(rightA, checkA);
    return `A nota do aluno foi ${check}.`;
  } else {
    throw Error ('Reposta invalida');
  }
}

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(verify(rightAnswers, studentAnswers, check));

const assert = require('assert');

assert.throws(() => {
  verify(1, studentAnswers, check);
  verify(null, studentAnswers, check);
  verify(undefined, studentAnswers, check);
  verify(1, studentAnswers, check);
  verify({}, studentAnswers, check);
});