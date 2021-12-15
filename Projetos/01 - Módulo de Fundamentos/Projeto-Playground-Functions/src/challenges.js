// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  let letter = '';
  let word = [];
  for (let index = 0; index <= frase.length; index += 1) {
    if (frase[index] !== ' ' && index < frase.length) {
      letter += frase[index];
    } else {
      word.push(letter);
      letter = '';
    }
  }
  return word;
}

// Desafio 4
function concatName(array) {
  let findLast = array.length - 1;
  let result = array[findLast];
  result += ', ';
  result += array[0];
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = wins * 3;
  let tiesPoints = ties * 1;
  let totalPoints = winsPoints + tiesPoints;
  return totalPoints;
}

// Desafio 6
function checkHighestNumber(numbers) {
  let highestNumber = numbers[0];
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > highestNumber) {
      highestNumber = numbers[index];
    }
  }
  return highestNumber;
}

function highestCount(numbers) {
  let highestNumber = checkHighestNumber(numbers);
  let repeatCount = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (highestNumber === numbers[index]) {
      repeatCount += 1;
    }
  }
  return repeatCount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let mouseCat1 = Math.abs(mouse - cat1);
  let mouseCat2 = Math.abs(mouse - cat2);
  let result = '';
  if (mouseCat1 < mouseCat2) {
    result = 'cat1';
  } else if (mouseCat2 < mouseCat1) {
    result = 'cat2';
  } else {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
  // Informei me sobre o Math.abs() no link: https://www.tutorialspoint.com/How-to-convert-a-negative-number-to-a-positive-one-in-JavaScript#:~:text=Front%20End%20Technology-,To%20convert%20a%20negative%20number%20to%20a%20positive%20one%20in,absolute%20value%20of%20a%20number.
}

// Desafio 8
function checkFizz(element) {
  let save = '';
  if (element % 3 === 0 && element % 5 === 0) {
    save = 'fizzBuzz';
  } else if (element % 3 === 0) {
    save = 'fizz';
  } else if (element % 5 === 0) {
    save = 'buzz';
  } else {
    save = 'bug!';
  }
  return save;
}

function fizzBuzz(array) {
  let result = [];
  for (let index = 0; index < array.length; index += 1) {
    let getReturn = checkFizz(array[index]);
    result.push(getReturn);
  }
  return result;
}

// Desafio 9
function vogalCheck(index) {
  switch (index) {
  case 'e':
    index = '2';
    return index;
  case 'i':
    index = '3';
    return index;
  case 'o':
    index = '4';
    return index;
  case 'u':
    index = '5';
    return index;
  default:
    return index;
  }
}
function encode(text) {
  let save = '';
  for (let index = 0; index < text.length; index += 1) {
    if (text[index] === 'a') {
      save += '1';
    } else {
      let check = vogalCheck(text[index]);
      save += check;
    }
  }
  return save;
}
function numbersCheck(index) {
  switch (index) {
  case '2':
    index = 'e';
    return index;
  case '3':
    index = 'i';
    return index;
  case '4':
    index = 'o';
    return index;
  case '5':
    index = 'u';
    return index;
  default:
    return index;
  }
}
function decode(text) {
  let save = '';
  for (let index = 0; index < text.length; index += 1) {
    if (text[index] === '1') {
      save += 'a';
    } else {
      let check = numbersCheck(text[index]);
      save += check;
    }
  }
  return save;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
