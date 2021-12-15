// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

function createJoke(joke) {
  const tag = document.querySelector('#jokeContainer');
  tag.innerHTML = joke;
}

const fetchJoke = () => {
  const object = {
    method: 'GET',
    headers: {'Accept': 'application/json'}
  }

  fetch(API_URL, object)
    .then((response) => response.json())
    .then((responseObject) => createJoke(responseObject.joke));
};

window.onload = () => fetchJoke();