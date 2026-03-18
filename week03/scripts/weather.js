const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const lat = 49.75;
const lon = 6.64;
const apiKey = '457b7803269547921713e765a31713ae';
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function apiFetch() {
  try {
    const response = await fetch(url);
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
  currentTemp.innerHTML = `${data.main.temp.toFixed(0)}&deg;C`;
  captionDesc.textContent = data.weather[0].description;
  weatherIcon.setAttribute('src', `https://openweathermap.org/img/w/${data.weather[0].icon}.png`);
}

apiFetch();