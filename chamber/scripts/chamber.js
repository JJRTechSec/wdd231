const navButton = document.querySelector('#navButton');
const navBar = document.querySelector('.navigation');
const url = './data/members.json';

navButton.addEventListener('click', () => {
  navButton.classList.toggle('show');
  navBar.classList.toggle('show');
});