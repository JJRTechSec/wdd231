import { temples } from '../data/temples.js';
import { url } from '../data/temples.js';
//console.log(temples);
//console.log(url);

const showHere = document.querySelector('#showHere');
const dialogBox = document.querySelector('#mydialog');
const dialogTitle = document.querySelector('#mydialog h2');
const dialogText = document.querySelector('#mydialog p');
const closeButton = document.querySelector('#closeButton');

closeButton.addEventListener('click', () => dialogBox.close());

/** LOOP THROUGH ARRAY OF JSON ITEMS */

function displayItems(data) {
  console.log(data);
  data.forEach(x => {
    console.log(x);
    const photo = document.createElement('img');
    photo.src = `${url}${x.path}`;
    photo.alt = `${x.name}`;

    photo.addEventListener('click', () => showStuff(x));
    showHere.appendChild(photo);
  });
};

displayItems(temples);

function showStuff(x) {
  dialogTitle.innerHTML = `${x.name}`;
  dialogText.innerHTML = `Dedicated ${x.dedicated} by ${x.person} as temple number ${x.number}`;
  dialogBox.showModal();
}