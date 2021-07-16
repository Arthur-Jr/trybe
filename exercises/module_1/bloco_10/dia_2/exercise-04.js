const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

module.exports = getRepos;

getRepos('https://api.github.com/orgs/tryber/repos')
  .then((result) => {
    console.log(result);
  });