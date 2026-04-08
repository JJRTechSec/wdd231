import { entryInfo } from '../data/entryInfo.mjs';
import { displayYear } from './getDates.mjs';

const entryDisplay = document.querySelector('#majorEntryDisplay');

const displayEntryInfo = ((entryInfo) => {
  entryInfo.forEach((race) => {
    const card = document.createElement('section');
    card.style.border = "1px solid black";

    const raceName = document.createElement('p');
    const entryListTitle = document.createElement('p');
    const entryTypeList = document.createElement('ul');
    const entryType = document.createElement('li');
    const priceListTitle = document.createElement('p');
    const priceList = document.createElement('ul');
    const price = document.createElement('li');

    raceName.textContent = race.name;
    entryListTitle.textContent = 'Entry Types';
    priceListTitle.textContent = 'Price Information';

    

    entryTypeList.appendChild(entryType);
    priceList.appendChild(price);

    card.appendChild(raceName);
    card.appendChild(entryListTitle);
    card.appendChild(entryTypeList);
    card.appendChild(priceListTitle);
    card.appendChild(priceList);
    entryDisplay.appendChild(card);
  })
})

displayEntryInfo(entryInfo);

displayYear();