import { marathons } from "../data/marathons.mjs";
import { displayYear } from "./getDates.mjs";

const raceDisplay = document.querySelector('#raceDisplay');
const modal = document.querySelector('#modal');
const closeModal = document.querySelector('#closeModal');
const modalTitle = document.querySelector('#modalTitle');
const whenMajor = document.querySelector('#whenMajor');
const firstHeld = document.querySelector('#firstHeld');
const totalParticipants = document.querySelector('#totalParticipants');
const currentWeather = document.querySelector('#currentWeather');
const apiKey = '457b7803269547921713e765a31713ae';
const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('show');
  navigation.classList.toggle('show');
});

closeModal.addEventListener('click', () => modal.close());

/*const displayMarathons = ((marathons) => {
  marathons.forEach((marathon) => {
    const card = document.createElement('section');
    card.classList.add('card');

    const raceName = document.createElement('h3');
    const raceDate = document.createElement('p');
    const maleRecord = document.createElement('p');
    const femaleRecord = document.createElement('p');

    raceName.textContent = marathon.name;
    raceDate.innerHTML = `<strong>When</strong>: ${marathon.date_2026}`;
    maleRecord.innerHTML = `<strong>Male Record</strong>: ${marathon.male_course_record.athlete} - ${marathon.male_course_record.time} in ${marathon.male_course_record.year}`;
    femaleRecord.innerHTML = `<strong>Female Record</strong>: ${marathon.female_course_record.athlete} - ${marathon.female_course_record.time} in ${marathon.female_course_record.year}`;

    card.appendChild(raceName)
    card.appendChild(raceDate);
    card.appendChild(maleRecord);
    card.appendChild(femaleRecord);

    card.addEventListener('click', () => {
      displayModal(marathon);
    });
    
    raceDisplay.appendChild(card);
  })
});

displayMarathons(marathons);*/

function displayModal(marathon) {
  modalTitle.textContent = marathon.name;
  firstHeld.innerHTML = `<strong>First Held</strong>:${marathon.first_held}`;
  totalParticipants.innerHTML = `<strong>Participants in 2025</strong>: ${marathon.participants_2025}`;
  whenMajor.textContent = '';

  const lat = marathon.latitude;
  const long = marathon.longitude;
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&cnt=30&units=metric&appid=${apiKey}`;

  async function weatherApiFetch() {
    try {
      const response = await fetch(weatherUrl);
      if (response.ok) {
        const data = await response.json();
        displayWeather(data);
        console.log(data);
      } else {
        throw Error(await response.text());
      }
    } catch (error) {
      console.log(error);
    }
  }

  weatherApiFetch();

  if (marathon.type === 'major') {
    whenMajor.innerHTML = `<strong>Became a Marathon Major in</strong>: ${marathon.became_major}`;
  } else {
    whenMajor.style.display = "hidden";
  };

  modal.showModal();
}

function displayWeather(data) {
  currentWeather.innerHTML = `<strong>Current Weather</strong>: ${data.main.temp.toFixed(0)}&deg;C, ${data.weather[0].description}`;
}

// Decide which marathons to display
const allRacesButton = document.querySelector('#allRaces');
const majorRacesButton = document.querySelector('#majorRaces');
const destinationRacesButton = document.querySelector('#destinationRaces');

allRacesButton.addEventListener('click', () => {
  if (majorRacesButton.classList.contains('currentRaceDisplay')) {
    majorRacesButton.classList.remove('currentRaceDisplay');
  } else if (destinationRacesButton.classList.contains('currentRaceDisplay')) {
    destinationRacesButton.classList.remove('currentRaceDisplay');
  }

  if (!allRacesButton.classList.contains('currentRaceDisplay')) {
    allRacesButton.classList.toggle('currentRaceDisplay');
  }
  generateRaceList();
})

majorRacesButton.addEventListener('click', () => {
  if (allRacesButton.classList.contains('currentRaceDisplay')) {
    allRacesButton.classList.remove('currentRaceDisplay');
  } else if (destinationRacesButton.classList.contains('currentRaceDisplay')) {
    destinationRacesButton.classList.remove('currentRaceDisplay');
  }

  if (!majorRacesButton.classList.contains('currentRaceDisplay')) {
    majorRacesButton.classList.toggle('currentRaceDisplay');
  }
  generateRaceList();
})

destinationRacesButton.addEventListener('click', () => {
  if (majorRacesButton.classList.contains('currentRaceDisplay')) {
    majorRacesButton.classList.remove('currentRaceDisplay');
  } else if (allRacesButton.classList.contains('currentRaceDisplay')) {
    allRacesButton.classList.remove('currentRaceDisplay');
  }

  if (!destinationRacesButton.classList.contains('currentRaceDisplay')) {
    destinationRacesButton.classList.toggle('currentRaceDisplay');
  }
  generateRaceList();
})

function generateRaceList() {
  while (raceDisplay.firstChild) {
    raceDisplay.removeChild(raceDisplay.firstChild);
  };
  if (allRacesButton.classList.contains('currentRaceDisplay')) {
    generateAllRaces();
  } else if (majorRacesButton.classList.contains('currentRaceDisplay')) {
    generateMajorRaces();
  } else if (destinationRacesButton.classList.contains('currentRaceDisplay')) {
    generateDestinationRaces();
  };
};

generateRaceList();


function generateAllRaces() {
  const displayMarathons = ((marathons) => {
    marathons.forEach((marathon) => {
      const card = document.createElement('section');
      card.classList.add('card');

      const raceName = document.createElement('h3');
      const raceDate = document.createElement('p');
      const maleRecord = document.createElement('p');
      const femaleRecord = document.createElement('p');

      raceName.textContent = marathon.name;
      raceDate.innerHTML = `<strong>When</strong>: ${marathon.date_2026}`;
      maleRecord.innerHTML = `<strong>Male Record</strong>: ${marathon.male_course_record.athlete} - ${marathon.male_course_record.time} in ${marathon.male_course_record.year}`;
      femaleRecord.innerHTML = `<strong>Female Record</strong>: ${marathon.female_course_record.athlete} - ${marathon.female_course_record.time} in ${marathon.female_course_record.year}`;

      card.appendChild(raceName)
      card.appendChild(raceDate);
      card.appendChild(maleRecord);
      card.appendChild(femaleRecord);

      card.addEventListener('click', () => {
        displayModal(marathon);
      });

      raceDisplay.appendChild(card);
    })
  });
  displayMarathons(marathons);
};

function generateMajorRaces() {
  const displayMajorMarathons = ((marathons) => {
    marathons.forEach((marathon) => {
      if (marathon.type === 'major') {
        const card = document.createElement('section');
        card.classList.add('card');

        const raceName = document.createElement('h3');
        const raceDate = document.createElement('p');
        const maleRecord = document.createElement('p');
        const femaleRecord = document.createElement('p');

        raceName.textContent = marathon.name;
        raceDate.innerHTML = `<strong>When</strong>: ${marathon.date_2026}`;
        maleRecord.innerHTML = `<strong>Male Record</strong>: ${marathon.male_course_record.athlete} - ${marathon.male_course_record.time} in ${marathon.male_course_record.year}`;
        femaleRecord.innerHTML = `<strong>Female Record</strong>: ${marathon.female_course_record.athlete} - ${marathon.female_course_record.time} in ${marathon.female_course_record.year}`;

        card.appendChild(raceName)
        card.appendChild(raceDate);
        card.appendChild(maleRecord);
        card.appendChild(femaleRecord);

        card.addEventListener('click', () => {
          displayModal(marathon);
        });

        raceDisplay.appendChild(card);
      }
    })
  });
  displayMajorMarathons(marathons);
}

function generateDestinationRaces() {
  const displayDestinationMarathons = ((marathons) => {
    marathons.forEach((marathon) => {
      if (marathon.type === 'destination') {
        const card = document.createElement('section');
        card.classList.add('card');

        const raceName = document.createElement('h3');
        const raceDate = document.createElement('p');
        const maleRecord = document.createElement('p');
        const femaleRecord = document.createElement('p');

        raceName.textContent = marathon.name;
        raceDate.innerHTML = `<strong>When</strong>: ${marathon.date_2026}`;
        maleRecord.innerHTML = `<strong>Male Record</strong>: ${marathon.male_course_record.athlete} - ${marathon.male_course_record.time} in ${marathon.male_course_record.year}`;
        femaleRecord.innerHTML = `<strong>Female Record</strong>: ${marathon.female_course_record.athlete} - ${marathon.female_course_record.time} in ${marathon.female_course_record.year}`;

        card.appendChild(raceName)
        card.appendChild(raceDate);
        card.appendChild(maleRecord);
        card.appendChild(femaleRecord);

        card.addEventListener('click', () => {
          displayModal(marathon);
        });

        raceDisplay.appendChild(card);
      }
    })
  });
  displayDestinationMarathons(marathons);
}

displayYear();