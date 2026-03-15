const navButton = document.querySelector('#navButton');
const navBar = document.querySelector('.navigation');
const layoutButton = document.querySelector('#layoutToggle');
let card = document.createElement('section');
const main = document.querySelector('main');

const cards = document.querySelector('.cards');
const url = './data/members.json';

navButton.addEventListener('click', () => {
  navButton.classList.toggle('show');
  navBar.classList.toggle('show');
});

layoutButton.addEventListener('click', () => {
  layoutButton.classList.toggle('column');
  cards.classList.toggle('column');
  main.classList.toggle('column');
  card.classList.toggle('column');
})

async function getBusinessData() {
  const response = await fetch(url);
  const data = await response.json();
  console.table(data.newBusiness);
  displayBusinesses(data.newBusiness);
};

const displayBusinesses = (businesses) => {
  businesses.forEach((business) => {
    card = document.createElement('section');
    let businessName = document.createElement('h2');
    let logo = document.createElement('img');
    let phoneNumber = document.createElement('span');
    let website = document.createElement('a');
    let email = document.createElement('span');
    let slogan = document.createElement('span');

    // business name
    businessName.textContent = business.companyName;
    businessName.classList.add('business-name');

    // slogan
    slogan.textContent = business.slogan;
    slogan.classList.add('slogan');

    // logo
    logo.setAttribute('src', business.image);
    logo.setAttribute('alt', `Logo for ${business.companyName}`);
    logo.setAttribute('loading', 'lazy');
    logo.setAttribute('width', '120');
    logo.setAttribute('height', '100');
    logo.classList.add('logo');

    // email
    email.textContent = `EMAIL: ${business.email}`;
    email.classList.add('company-info', 'company-email');
    
    // phone number
    phoneNumber.textContent = `PHONE: ${business.phoneNumber}`;
    phoneNumber.classList.add('company-info', 'company-number');

    // website
    website.href = business.website;
    website.textContent = business.companyName;
    website.target = "_blank";
    website.classList.add('company-info', 'company-website');

    card.classList.add('card');

    card.appendChild(businessName);
    card.appendChild(slogan);
    card.appendChild(logo);
    card.appendChild(email);
    card.appendChild(phoneNumber);
    card.appendChild(website);
    cards.appendChild(card);
  });
};

getBusinessData();