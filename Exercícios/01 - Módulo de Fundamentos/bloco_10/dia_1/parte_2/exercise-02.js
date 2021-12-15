function techList(techName, param2) {
  techName.sort();
  const array = techName.reduce((acc, tech) => {
    acc.push({tech, name: param2 });
    return acc;
  }, []);
  return array.length > 0 ? array : 'Vazio!';
}

module.exports = techList;
