const currentTemp = document.querySelector('#currentTemp');
const day1Temp = document.querySelector('#weatherDay1');
const day2Temp = document.querySelector('#weatherDay2');
const day3Temp = document.querySelector('#weatherDay3');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const lat = 59.83;
const lon = 10.44;
const apiKey = '457b7803269547921713e765a31713ae';
const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${lon}&cnt=30&units=metric&appid=${apiKey}`;
const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast/?lat=${lat}&lon=${lon}&cnt=30&units=metric&appid=${apiKey}`;


// FUNCTIONS

async function weatherApiFetch() {
  try {
    const response = await fetch(weatherUrl);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}


function displayResults(data) {
  currentTemp.innerHTML = `${data.list[0].main.temp.toFixed(0)}&deg;C`;
  const days = filterForecasts(data);
  if (days.length >= 3) {
    day1Temp.innerHTML = `${getWeekday(days[0].dt_txt)}: ${days[0].main.temp.toFixed(0)}&deg;C`;
    day2Temp.innerHTML = `${getWeekday(days[1].dt_txt)}: ${days[1].main.temp.toFixed(0)}&deg;C`;
    day3Temp.innerHTML = `${getWeekday(days[2].dt_txt)}: ${days[2].main.temp.toFixed(0)}&deg;C`;
  };
  captionDesc.textContent = data.list[0].weather[0].description;
  weatherIcon.setAttribute('src', `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`);
}


function filterForecasts(data) {
  const forecasts = data.list;
  const today = new Date(forecasts[0].dt_txt);
  const results = forecasts.filter((item) => {
    const date = new Date(item.dt_txt);
    const dayDifference = date.getDate() - today.getDate();
    return (
      dayDifference >= 1 &&
      dayDifference <= 3 &&
      date.getHours() === 12
    );
  });
  return results;
}

function getWeekday(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    weekday: 'short'
  });
}

weatherApiFetch();