function showTemperature(response) {
  let temperatureElement = document.querySelector("#current-temperature");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperature;
}

function newCity(event) {
  event.preventDefault();
  let searchForCity = document.querySelector("#search-city");
  let city = searchForCity.value;

  let apiKey = "bfebe20e536f474847ab0co02fa8tf40";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemperature);
}
let searchCity = document.querySelector("#search-city-form");

searchCity.addEventListener("submit", newCity);

let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

// write your code here
// let city = prompt("Enter a city");
// city = city.toLowerCase().trim();
// if (weather[city] !== undefined) {
// let cityTemp = Math.round(weather[city].temp);
// let cityHum = weather[city].humidity;
// let cityFahrenheit = Math.round((cityTemp * 9) / 5 + 32);
// alert(
// `It is currently ${cityTemp}°C(${cityFahrenheit}°F) in ${city} with a humidity of ${cityHum}%`,
// );
// } else {
// alert(
// `Sorry, we don't know the weather for this city yet☹️, try going to https://www.google.com/search?q=weather+sydney".`,
// );
// }

// cityWeather();

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}
let showCurrentDate = document.querySelector("#current-date");

let currentDay = new Date();
showCurrentDate.innerHTML = formatDate(currentDay);
