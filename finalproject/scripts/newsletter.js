import { displayYear } from './getDates.mjs';

const all = document.querySelector('#all');
const newsletterPreferences = document.querySelectorAll('.checkbox');
const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');

hamburger.addEventListener('click', function () {
  navigation.classList.toggle('show');
});

all.addEventListener('change', () => {
  newsletterPreferences.forEach((checkbox) => {
    checkbox.checked = all.checked;
  });
});

for (let i = 0; i < newsletterPreferences.length; i++) {
  newsletterPreferences[i].addEventListener('change', function () {
    let allChecked = true;

    for (let j = 0; j < newsletterPreferences.length; j++) {
      if (newsletterPreferences[j].checked === false) {
        allChecked = false;
      }
    }
    all.checked = allChecked;
  });
}

displayYear();