const promisse = new Promise ((resolve, reject) => {
  const numbers = [];
  for (let number = 1; number <= 10; number += 1) {
    numbers.push(Math.floor(Math.random() * 50));
  }
  const newNumbers = numbers
    .map((number) => number * number)
    .reduce((acc, number) => acc + number);
  
  if (newNumbers < 8000) return resolve(console.log('Promise resolvida!'));
  reject(console.log('Promise rejeitada!'));
})
  .then((success) => success)
  .catch((error) => error);
