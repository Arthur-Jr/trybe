const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
}

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;
const temperatureInFahrenheit = (temperature) => console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);
const greet = (temperature) => console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) => console.log(`Error getting temperature: ${errorReason}`);

function sendMarsTemperature(onSuccess, onError, temperature, delay) {
  const messageSuccess = Math.random(); // Olhei como usar o Math.random para calcular a chance, no gabarito da Trybe e neste link: https://stackoverflow.com/questions/11552158/percentage-chance-of-saying-something/11552190.
  setTimeout (() => {
    if (messageSuccess <= 0.6) {
      onSuccess(temperature());
    } else {
      onError('Robot is busy');
    }
  }, delay());
}


// imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(temperatureInFahrenheit, handleError, getMarsTemperature, messageDelay);

// imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(greet, handleError, getMarsTemperature, messageDelay);