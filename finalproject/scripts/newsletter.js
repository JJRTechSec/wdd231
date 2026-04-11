import { displayYear } from './getDates.mjs';

const all = document.querySelector('#all');
const newsletterPreferences = document.querySelectorAll('.checkbox');
const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');

hamburger.addEventListener('click', function () {
  navigation.classList.toggle('show');
  hamburger.classList.toggle('show');
});

all.addEventListener('change', () => {
  newsletterPreferences.forEach((checkbox) => {
    if (checkbox.id !== 'all') {
      checkbox.checked = all.checked;
    }
  });

  savePreferences();
});

for (let i = 0; i < newsletterPreferences.length; i++) {
  newsletterPreferences[i].addEventListener('change', function () {
    if (this.id === 'all') return;

    let allChecked = true;

    for (let j = 0; j < newsletterPreferences.length; j++) {
      if (newsletterPreferences[j].id !== 'all' && !newsletterPreferences[j].checked) {
        allChecked = false;
      }
    }
    all.checked = allChecked;

    savePreferences();
  });
}

newsletterPreferences.forEach((checkbox) => {
  checkbox.addEventListener('change', savePreferences);
});

function savePreferences() {
  const preferences = {};

  newsletterPreferences.forEach((checkbox) => {
    preferences[checkbox.id] = checkbox.checked;
  });

  localStorage.setItem('newsletterPreferences', JSON.stringify(preferences));
}

function loadPreferences() {
  const saved = localStorage.getItem('newsletterPreferences');

  if (saved) {
    const preferences = JSON.parse(saved);

    newsletterPreferences.forEach((checkbox) => {
      if (preferences[checkbox.id] !== undefined) {
        checkbox.checked = preferences[checkbox.id];
      }
    });
  }
}

loadPreferences();
displayYear();