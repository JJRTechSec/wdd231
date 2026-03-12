const navButton = document.querySelector('#navButton');
const navBar = document.querySelector('.navigation');

const cards = document.querySelector('cards');
const url = './data/members.json';

navButton.addEventListener('click', () => {
  navButton.classList.toggle('show');
  navBar.classList.toggle('show');
});

async function getBusinessData() {
  const response = await fetch(url);
  const data = await response.json();
  console.table(data.newBusiness);
  displayBusinesses(data.newBusiness);
};

const displayBusinesses = (businesses) => {
  businesses.forEach((business) => {
    let card = document.createElement('section');
    let businessName = document.createElement('h2');
    let logo = document.createElement('img');
    let address = document.createElement('span');
    let phoneNumber = document.createElement('span');
    let website = document.createElement('span');
    let email = document.createElement('span');

    businessName.textContent = business.companyName;

    logo.setAttribute('src', business.imageurl);
    logo.setAttribute('alt', `Logo for ${business.companyName}`);
    logo.setAttribute('loading', 'lazy');
    logo.setAttribute('width', '150');
    logo.setAttribute('height', '200');

    card.classList.add('card');

    card.appendChild(businessName);
    card.appendChild(address);
    card.appendChild(phoneNumber);
    card.appendChild(website);
    card.appendChild(email);
    card.appendChild(logo);
    cards.appendChild(card);
  });
};

getBusinessData();