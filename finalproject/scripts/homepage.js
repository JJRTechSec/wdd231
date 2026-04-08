import { marathons } from "../data/marathons.mjs";
const raceDisplay = document.querySelector('#raceDisplay');
const modal = document.querySelector('#modal');
const closeModal = document.querySelector('#closeModal');

closeModal.addEventListener('click', () => modal.close());

//raceName.textContent = marathons[0].races[0].name;

const displayMarathons = ((marathons) => {
  marathons.forEach((marathon) => {
    const card = document.createElement('section');
    card.style.border = "1px solid black";

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
      console.log('try again');
     });
    raceDisplay.appendChild(card);
  })
});

displayMarathons(marathons);

function displayModal(marathon) {
    const firstHeld = document.createElement('p');
    const totalParticipants = document.createElement('p');
    const marathonMajor = document.createElement('p');

    const latitude = marathon.latitude;
    const longitude = marathon.longitude;
    const weatherUrl = '';
    firstHeld.innerHTML = `<strong>First Held</strong>:${marathon.first_held}`;
    totalParticipants.innerHTML = `<strong>Participants Last Year</strong>:${marathon.participants_2025}`;
    marathonMajor.textContent = '';

    if (marathon.type === 'major') {
      marathonMajor.textContent = `Became a Marathon Major in: ${marathon.became_major}`;
    } else {
      marathonMajor.style.display = "hidden";
    };
    
    modal.appendChild(firstHeld);
  modal.appendChild(marathonMajor);


    modal.showModal();
}