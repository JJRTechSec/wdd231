const currentTemp = document.querySelector('#currentTemp');
const day1Temp = document.querySelector('#weatherDay1');
const day2Temp = document.querySelector('#weatherDay2');
const day3Temp = document.querySelector('#weatherDay3');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const lat = 59.83;
const lon = 10.44;
const apiKey = '457b7803269547921713e765a31713ae';
const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function weatherApiFetch() {
  try {
    const response = await fetch(weatherUrl);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
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
  day1Temp.innerHTML = `${data.list[1].main.temp.toFixed(0)}&deg;C`;
  day2Temp.innerHTML = `${data.list[2].main.temp.toFixed(0)}&deg;C`;
  day3Temp.innerHTML = `${data.list[3].main.temp.toFixed(0)}&deg;C`;
  captionDesc.textContent = data.list[0].weather[0].description;
  weatherIcon.setAttribute('src', `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`);
}

weatherApiFetch();