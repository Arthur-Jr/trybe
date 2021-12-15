const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

function sendMarsTemperature(temperature, delay) {
  setTimeout(() => console.log(`Mars temperature is: ${temperature()} degree Celsius`), delay());
}


sendMarsTemperature(getMarsTemperature, messageDelay);

// Imprime a temperatura de marte com um delay variável.