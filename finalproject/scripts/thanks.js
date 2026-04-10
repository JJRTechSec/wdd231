import { displayYear } from './getDates.mjs';

const newsletterInfo = new URLSearchParams(window.location.search);
console.log(newsletterInfo);
const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');

hamburger.addEventListener('click', function () {
  navigation.classList.toggle('show');
});

/*********** RESULTS **********/
const nameResult = document.querySelector('#nameResult');
const emailResult = document.querySelector('#emailResult');
const majorsResult = document.querySelector('#majorsResult');
const destinationResult = document.querySelector('#destinationResult');
const fuelingResult = document.querySelector('#fuelingResult');
const trainingResult = document.querySelector('#trainingResult');
const kitResult = document.querySelector('#kitResult');
const competitionResult = document.querySelector('#competitionResult');

nameResult.innerHTML = `<strong>Your Name</strong>: ${newsletterInfo.get('first')}`;
emailResult.innerHTML = `<strong>Your email</strong>: ${newsletterInfo.get('email')}`;
majorsResult.innerHTML = `<strong>Majors News</strong>: ${getValue('majors')}`;
destinationResult.innerHTML = `<strong>Destination Race News</strong>: ${getValue('destination')}`;
fuelingResult.innerHTML = `<strong>Fueling/Nutrition tips</strong>: ${getValue('fueling')}`;
trainingResult.innerHTML = `<strong>Training Sessions/Tips</strong>: ${getValue('training')}`;
kitResult.innerHTML = `<strong>Kit/Shoes News/Discounts</strong>: ${getValue('kit-and-shoes')}`;
competitionResult.innerHTML = `<strong>Competitions/Giveaways</strong>: ${getValue('competition')}`;

// Return 'Not Selected' instead of null
function getValue(name) {
  let value = newsletterInfo.get(name);
  if (value === null) {
    return 'Not Selected';
  } else {
    return value;
  }
}

// display year in footer
displayYear();