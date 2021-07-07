const promisse = () => {
  const numbers = [];
  for (let number = 1; number <= 10; number += 1) {
    numbers.push(Math.floor(Math.random() * 50));
  }
  const sumNumbers = numbers
    .map((number) => number * number)
    .reduce((acc, number) => acc + number);
  
  if (sumNumbers < 8000) return console.log('Promise resolvida!');
  throw new Error();
}

const fetchPromisse = async() => {
  try {
    await promisse()
  }catch (error) {
    console.log('É mais de oito mil! Essa promise deve estar quebrada');
  }
}

fetchPromisse();

// Fazendo o exercise 2 com ASYNC.