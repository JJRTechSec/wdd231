import { marathons } from "../data/marathons.mjs";
const raceDisplay = document.querySelector('#raceDisplay');

//raceName.textContent = marathons[0].races[0].name;

const displayMarathons = ((marathons) => {
  marathons.forEach((marathon) => {
    const card = document.createElement('section');
    card.style.border = "1px solid black";

    const raceName = document.createElement('p');
    const raceDate = document.createElement('p');
    const maleRecord = document.createElement('p');
    const femaleRecord = document.createElement('p');

    raceName.textContent = marathon.name;
    raceDate.textContent = marathon.date_2026;
    maleRecord.innerHTML = `Male Record: ${marathon.male_course_record.athlete} - ${marathon.male_course_record.time} in ${marathon.male_course_record.year}`;
    femaleRecord.innerHTML = `Female Record: ${marathon.female_course_record.athlete} - ${marathon.female_course_record.time} in ${marathon.female_course_record.year}`;

    card.appendChild(raceName)
    card.appendChild(raceDate);
    card.appendChild(maleRecord);
    card.appendChild(femaleRecord);
    raceDisplay.appendChild(card);
  })
});

displayMarathons(marathons);
console.table(marathons);