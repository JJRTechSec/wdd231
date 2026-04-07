const newsletterInfo = new URLSearchParams(window.location.search);
console.log(newsletterInfo);

/*********** RESULTS **********/
const nameResult = document.querySelector('#nameResult');
const emailResult = document.querySelector('#emailResult');
const majorsResult = document.querySelector('#majorsResult');
const destinationResult = document.querySelector('#destinationResult');
const fuelingResult = document.querySelector('#fuelingResult');
const trainingResult = document.querySelector('#trainingResult');
const kitResult = document.querySelector('#kitResult');
const competitionResult = document.querySelector('#competitionResult');

nameResult.textContent = `${newsletterInfo.get('first')}`;
emailResult.textContent = `${ newsletterInfo.get('email')}`;
majorsResult.textContent = `${newsletterInfo.get('majors')}`;
destinationResult.textContent = `${ newsletterInfo.get('destination')}`;
fuelingResult.textContent = `${newsletterInfo.get('fueling')}`;
trainingResult.textContent = `${newsletterInfo.get('training')}`;
kitResult.textContent = `${newsletterInfo.get('kit-and-shoes')}`
competitionResult.textContent = `${newsletterInfo.get('competition')}`;