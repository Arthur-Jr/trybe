function vogalCheck(index) {
  index = index.toLowerCase();
  switch (index) {
  case 'a':
    index = 1;
    return index;
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
    let check = vogalCheck(text[index]);
    save += check;
  }
  return save;
}

function numbersCheck(index) {
  switch (index) {
  case '1': 
    index = 'a';
    return index;
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
    let check = numbersCheck(text[index]);
    save += check;
  }
  return save;
}

module.exports = { encode, decode }; 