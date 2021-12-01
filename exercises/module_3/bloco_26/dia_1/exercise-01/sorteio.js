const readLine = require('readline-sync');

const getNumber = () => {
  return Math.floor(Math.random() * 11)
}

const startGame = () => {
  const choose = readLine.questionInt('Escolha um número de 1 a 10: ');
  const result = getNumber()
  
  if (choose === result) {
    console.log('Parabéns, número correto!');
  } else {
    console.log(`Opa, não foi dessa vez. O número era ${result}`);
  }

  const recomeca = readLine.question('Jogar novamente? s/n ');

  recomeca === 's' ? startGame() : console.log('Até mais'); 
}

startGame()
