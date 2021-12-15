// Desafio 10
function techList(techName, param2) {
  techName.sort();
  let array = [];
  for (let index = 0; index < techName.length; index += 1) {
    array.push({ tech: techName[index], name: param2 });
  }
  if (array.length > 0) {
    return array;
  }
  return 'Vazio!';
}
// Informei me de como ordenar, no slack, já tinha uma duvida sobre o assunto.
// link: https://trybecourse.slack.com/archives/C020YFJ19DF/p1622036418021500

// Desafio 11
function telNumber(numbers) {
  let number = '';
  for (let index = 0; index < numbers.length; index += 1) {
    if (index === 0) {
      number += '(';
    } else if (index === 2) {
      number += ') ';
    } else if (index === 7) {
      number += '-';
    }
    number += numbers[index];
  }
  return number;
}
function RepeatsecondFor(numbers, numbersIndex) {
  let repeatCount = 0;
  for (let index2 = 0; index2 < numbers.length; index2 += 1) {
    if (numbersIndex === numbers[index2]) {
      repeatCount += 1;
    }
  }
  return repeatCount;
}
function repeatCheck(numbers) {
  let repeatCount = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    repeatCount = RepeatsecondFor(numbers, numbers[index]);
    if (repeatCount < 3) {
      repeatCount = 0;
    } else {
      break;
    }
  }
  return repeatCount;
}
function resultCheck(numbers) {
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < 0 || numbers[index] > 9) {
      return true;
    }
  }
  return false;
}
function generatePhoneNumber(numbers) {
  let numberTel = telNumber(numbers);
  let repeat = repeatCheck(numbers);
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < numbers.length; index += 1) {
    if (repeat >= 3 || resultCheck(numbers) === true) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return numberTel;
}

// Desafio 12
function firstCheck(lineA, lineB, lineC) {
  let sub = Math.abs(lineB - lineC);
  let result = false;
  if (lineA < lineB + lineC && lineA > sub) {
    result = true;
  }
  return result;
}
function secondCheck(lineA, lineB, lineC) {
  let sub = Math.abs(lineA - lineC);
  let result = false;
  if (lineB < lineA + lineC && lineB > sub) {
    result = true;
  }
  return result;
}
function thirdCheck(lineA, lineB, lineC) {
  let sub = Math.abs(lineA - lineB);
  let result = false;
  if (lineC < lineA + lineB && lineC > sub) {
    result = true;
  }
  return result;
}
function triangleCheck(lineA, lineB, lineC) {
  let check1 = firstCheck(lineA, lineB, lineC);
  let check2 = secondCheck(lineA, lineB, lineC);
  let check3 = thirdCheck(lineA, lineB, lineC);
  let result = false;
  if (check1 === true || check2 === true || check3 === true) {
    result = true;
  }
  return result;
  // informei me sobre o Math.abs() neste link: https://www.w3schools.com/jsref/jsref_abs.asp
}

// Desafio 13
function getNumber(string) {
  let r = /\d+/g;
  let stringNumbers = string.match(r);
  let result = 0;
  for (let index = 0; index < stringNumbers.length; index += 1) {
    result += parseInt(stringNumbers[index], 10);
  }
  return result;
  // informei me sobre como separar os números da string neste link: https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript
  // E o parseInt : https://www.w3schools.com/jsref/jsref_parseint.asp
}
function hydrate(string) {
  let stringNumber = getNumber(string);
  let onlyOne = stringNumber;
  onlyOne += ' copo de água';
  let moreThanOne = stringNumber;
  moreThanOne += ' copos de água';
  if (stringNumber > 1) {
    return moreThanOne;
  }
  return onlyOne;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
