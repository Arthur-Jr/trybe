const skills = ['Unix', 'Git', 'HTML', 'JavaScript', 'CSS'];

function presentation (string) {
  skills.sort();
  return `${string} Minhas cinco principais habilidades são:
   ${skills[0]}
   ${skills[1]}
   ${skills[2]}
   ${skills[3]}
   ${skills[4]}
   `;
}

function findX(string) {
  let text = 'Tryber x aqui!';
  for(let index = 0; index < text.length; index += 1) {
    if (text[index] === 'x') {
      text = `Tryber ${string} aqui!`
    }
  }
  return text;
}

const save = findX('Arthur');

console.log(presentation(save));