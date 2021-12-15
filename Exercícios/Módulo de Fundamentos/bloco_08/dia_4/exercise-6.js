const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  const setAverage = grades.map((grade, index) => {
    const average = grade.reduce((acc, number) => acc + number);
    return average / grades[index].length;
  });

  const studentsInfo = students.reduce((acc, student, index) => {
    acc.push({name: student, average: setAverage[index]});
    return acc;
  }, []);

  return studentsInfo;
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepStrictEqual(studentAverage(), expected);

// Cria um array de objetos com as informações do aluno.