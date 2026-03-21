const gridButton = document.querySelector('#gridLayout');
const listButton = document.querySelector('#listLayout');
const main = document.querySelector('main');
const cards = document.querySelector('.cards');

gridButton.addEventListener('click', () => {
  if (!gridButton.classList.contains('active')) {
    gridButton.classList.add('active');
    listButton.classList.remove('active');
  };
  cards.classList.remove('list');
  const businessCards = document.querySelectorAll('.card');
  businessCards.forEach(card => {
    card.classList.remove('list');
  });
});

listButton.addEventListener('click', () => {
  if (!listButton.classList.contains('active')) {
    listButton.classList.add('active');
    gridButton.classList.remove('active');
  };
  cards.classList.remove('grid');
  cards.classList.add('list');
  const businessCards = document.querySelectorAll('.card');
  businessCards.forEach(card => {
    card.classList.remove('grid');
    card.classList.add('list');
  });
});

async function getBusinessData() {
  const response = await fetch(url);
  const data = await response.json();
  console.table(data.newBusiness);
  displayBusinesses(data.newBusiness);
};

const displayBusinesses = (businesses) => {
  businesses.forEach((business) => {
    const card = document.createElement('section');
    let businessName = document.createElement('h2');
    let logo = document.createElement('img');
    let phoneNumber = document.createElement('span');
    let website = document.createElement('a');
    let email = document.createElement('span');
    let slogan = document.createElement('span');
    let membership = document.createElement('span');

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
    website.textContent = business.website;
    website.target = "_blank";
    website.classList.add('company-info', 'company-website');

    // membership
    membership.textContent = `Membership Level: ${business.membershipLevel}`;
    membership.classList.add('company-info', 'membership');

    card.classList.add('card');
    card.classList.add('grid');

    card.appendChild(businessName);
    card.appendChild(slogan);
    card.appendChild(logo);
    card.appendChild(email);
    card.appendChild(phoneNumber);
    card.appendChild(membership);
    card.appendChild(website);
    cards.appendChild(card);
  });
};

getBusinessData();