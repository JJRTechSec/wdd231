import { entryInfo } from '../data/entryInfo.mjs';
import { displayYear } from './getDates.mjs';

const entryDisplay = document.querySelector('#majorEntryDisplay');
const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');

hamburger.addEventListener('click', function () {
  navigation.classList.toggle('show');
});

const displayEntryInfo = ((entryInfo) => {
  entryInfo.forEach((race) => {
    const card = document.createElement('section');
    card.style.border = "1px solid black";

    const raceName = document.createElement('p');
    const entryListTitle = document.createElement('p');
    const entryTypeList = document.createElement('ul');
    //const entryType = document.createElement('li');
    const priceListTitle = document.createElement('p');
    const priceList = document.createElement('ul');

    raceName.textContent = race.name;
    entryListTitle.textContent = 'Entry Types';
    priceListTitle.textContent = 'Price Information';

    // create entry type list
    Object.entries(race.type_of_entry).forEach(([key, value]) => {
      const entryType = document.createElement('li');
      const displayValue = value === true ? 'Yes' : 'No';

      entryType.innerHTML = `<strong>${key}</strong>: ${displayValue}`;
      entryTypeList.appendChild(entryType);
    });

    // create price list
    Object.entries(race.price).forEach(([key, priceObject]) => {
      const price = document.createElement('li');

      const localPrice = priceObject.Local;
      const internationalPrice = priceObject.International;

      price.innerHTML = `<strong>${key}</strong>: Local: ${localPrice} | Internationals: ${internationalPrice}`;
      priceList.appendChild(price);
    });

    card.appendChild(raceName);
    card.appendChild(entryListTitle);
    card.appendChild(entryTypeList);
    card.appendChild(priceListTitle);
    card.appendChild(priceList);
    entryDisplay.appendChild(card);
  })
})

displayEntryInfo(entryInfo);

/**function displayEntryTypeList(entryInfo) {
  entryInfo.forEach((), function() {
    console.log('hello');
  })
}*/

displayYear();