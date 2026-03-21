const navButton = document.querySelector('#navButton');
const navBar = document.querySelector('.navigation');
const url = './data/members.json';
const spotlight = document.querySelector('#spotlight')

navButton.addEventListener('click', () => {
  navButton.classList.toggle('show');
  navBar.classList.toggle('show');
});

async function getBusinessData() {
  const response = await fetch(url);
  const data = await response.json();
  //console.table(data.newBusiness);
  const higherMembers = data.newBusiness.filter(business => business.membershipLevel === 2 || business.membershipLevel === 3);
  const randomBusinesses = mixedArray(higherMembers).slice(0, 3);
  displaySpotlightBusiness(randomBusinesses);
};

function mixedArray(higherMembers) {
  const mixed = [...higherMembers];

  for (let i = mixed.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [mixed[i], mixed[j]] = [mixed[j], mixed[i]];
  }
  return mixed;
}

const displaySpotlightBusiness = (higherMembers) => {
  higherMembers.forEach((business) => {
    const spotlightBusiness = document.createElement('section');
    let businessName = document.createElement('h2');
    let logo = document.createElement('img');
    let phoneNumber = document.createElement('span');
    let address = document.createElement('span');
    let website = document.createElement('a');
    let membership = document.createElement('span');


    // business name
    businessName.textContent = business.companyName;
    businessName.classList.add('business-name');

    // logo
    logo.setAttribute('src', business.image);
    logo.setAttribute('alt', `Logo for ${business.companyName}`);
    logo.setAttribute('loading', 'lazy');
    logo.setAttribute('width', '120');
    logo.setAttribute('height', '100');
    logo.classList.add('logo');

    // phone number
    phoneNumber.textContent = `PHONE: ${business.phoneNumber}`;
    phoneNumber.classList.add('company-info', 'company-number');

    // address
    address.textContent = `Address: ${business.address.streetAddress}, ${business.address.city}, ${business.address.postcode}`;
    address.classList.add('company-info', 'address');

    // website
    website.href = business.website;
    website.textContent = business.website;
    website.target = "_blank";
    website.classList.add('company-info', 'company-website');

    // membership
    membership.textContent = `Membership Level: ${business.membershipLevel}`;
    membership.classList.add('company-info', 'membership');

    spotlightBusiness.classList.add('spotlight');

    spotlightBusiness.appendChild(businessName);
    spotlightBusiness.appendChild(logo);
    spotlightBusiness.appendChild(phoneNumber);
    spotlightBusiness.appendChild(address);
    spotlightBusiness.appendChild(membership);
    spotlightBusiness.appendChild(website);
    spotlight.appendChild(spotlightBusiness);
  });
}

getBusinessData();