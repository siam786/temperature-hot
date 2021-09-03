const API_KEY = `fad134abc0dab1b906de2544e4b1b104`;

const searchTemperature = () => {
  const weatherData = document.getElementById("weather").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${weatherData}&units=metric&appid=${API_KEY}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTem(data));
};
const setInnerText = (id, text) => {
  document.getElementById(id).innerText = text;
};
const displayTem = (temperature) => {
  setInnerText('city',temperature.name)
  setInnerText('temp',temperature.main.temp)
  setInnerText('leadUpdate',temperature.weather[0].main)
 const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@4x.png`;
 const imgIcon = document.getElementById('img-icon')
 imgIcon.setAttribute('src',url)
};
