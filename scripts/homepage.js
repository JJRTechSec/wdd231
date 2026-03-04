const navButton = document.querySelector('#nav-button');
const navBar = document.querySelector('#nav-bar');
const homeButton = document.querySelector('#homeBtn');
const chamberButton = document.querySelector('#chamberBtn');
const finalButton = document.querySelector('#finalBtn');

navButton.addEventListener('click', () => {
  navButton.classList.toggle('show');
  navBar.classList.toggle('show');
});