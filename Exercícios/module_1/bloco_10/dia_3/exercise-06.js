const fetch = require('node-fetch');
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async () => {
  const response = await fetch(API_URL, { headers: { Accept: 'application/json' }});
  const json = await response.json();
  return json.joke
};

module.exports = fetchJoke;
