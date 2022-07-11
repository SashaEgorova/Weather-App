let now = new Date();

let span = document.querySelector("span");
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
let day = days[now.getDay()];
span.innerHTML = `${day} ${hours}:${minutes}`;

function displayWeather(response) {
  let tempratureElement = document.querySelector("#temprature");
  let temprature = Math.round(response.data.main.temp);
  tempratureElement.innerHTML = `${temprature}`;
  document.querySelector("#city").innerHTML = response.data.name;
  let humidityElement = document.querySelector("#humidity");
  let humidity = Math.round(response.data.main.humidity);
  humidityElement.innerHTML = `${humidity}`;
  let windElement = document.querySelector("#wind");
  let wind = Math.round(response.data.wind.speed);
  windElement.innerHTML = `${wind}`;
}

function search(event) {
  event.preventDefault();

  let apiKey = "ec2752216b7a47ef318bc5277cf9ed3a";
  let cityInput = document.querySelector("#search-text");
  let city = cityInput.value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);
