const navButton = document.querySelector('#navButton');
const navBar = document.querySelector('.navigation');
const layoutButton = document.querySelector('#layoutToggle');
const businessCard = document.querySelectorAll('.card');
const main = document.querySelector('main');
const cards = document.querySelector('.cards');
const url = './data/members.json';

navButton.addEventListener('click', () => {
  navButton.classList.toggle('show');
  navBar.classList.toggle('show');
});