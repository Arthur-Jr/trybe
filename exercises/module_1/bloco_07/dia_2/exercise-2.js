const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Adiciona uma nova key com o valor a um objeto.
const updateObject = (object, newKey, newValue) => object[newKey] = newValue;
console.log(updateObject(lesson2, 'turno', 'manhã'));

// Essa function cataloga as chaves do object.
const objectKeyList = (obj) => Object.keys(obj);
console.log(objectKeyList(lesson3));

// Descobre o tamanho de um obeject.
function objSize(obj) {
  let size = 0;
  const key = Object.keys(obj);
  for(index in key) {
    size += 1;
  }
  return `O tamanho do Object é igual a ${size}`;
}
console.log(objSize(lesson1));

// Essa function cataloga os valores do object.
const objectValueList = (obj) => Object.values(obj);
console.log(objectValueList(lesson2));

// Adiciona os outros 3 objects em um só.
const allLessons = Object.assign({ }, {lesson1}, {lesson2}, {lesson3});
console.log(allLessons);

// Pega e soma o valor da propriedade numeroEstudantes do object allLessons.
function getStudentNumber(obj) {
  const key1 = obj.lesson1.numeroEstudantes;
  const key2 = obj.lesson2.numeroEstudantes;
  const key3 = obj.lesson3.numeroEstudantes;
  const sum = key1 + key2 + key3;
  return sum;
}
console.log(getStudentNumber(allLessons));

// Retorno o valor de um objext de acordo com o index dado no parametro.
function getValueByNumber(obj, position) {
  const value = Object.values(obj);
  for (let index = 0; index < value.length; index += 1) {
    if (index === position) {
      return value[index];
    }
  }
}
console.log(getValueByNumber(lesson1, 0));

// Verifica se uma key/ valor existe no object.
function verifyPair (obj, key, value) {
  const keyValue = Object.entries(obj);
  let result = false;
  for (index in keyValue) {
    if (keyValue[index][0] === key && keyValue[index][1] === value) {
      result = true;
    }
  }
  return result;
}
console.log(verifyPair(lesson3, 'turno', 'noite'));

// Conta quantos estudantes tiveram aula de uma matéria específica.
function getStudentNumberClass (obj, value) {
  const values = Object.values(obj);
  let result = 0;
  for (index in values) {
    if (values[index].materia === value) {
      result += values[index].numeroEstudantes;
    }
  }
  return result;
}
console.log(getStudentNumberClass(allLessons, 'Matemática'));

// Cria um relatório do dia de acordo com o nome do professor.
function createReport(obj, value) {
  const keys = Object.keys(obj);
  const report = {};
  let content = [];
  let students = 0;
  for (index in keys) {
    if (obj[keys[index]].professor === value) {
      report.professor = obj[keys[index]].professor;
      content.push(obj[keys[index]].materia);
      students += obj[keys[index]].numeroEstudantes;
    } else {
      return `Professor ${value} não encontrado!`;
    }
  }
  report.aulas = content;
  report.estudantes = students;
  return report;
}
console.log(createReport(allLessons, 'Maria Clara'));
