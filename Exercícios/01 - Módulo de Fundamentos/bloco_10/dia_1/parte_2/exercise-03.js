function getNumber(string) {
  const r = /\d+/g;
  const stringNumbers = string.match(r);
  return stringNumbers.reduce((acc, number) => acc += parseInt(number, 10), 0);
}
function hydrate(string) {
  const stringNumber = getNumber(string);
  let result;
  stringNumber > 1 ? result = `${stringNumber} copos de água` : result = `${stringNumber} copo de água`;

  return result;
}
module.exports = hydrate;