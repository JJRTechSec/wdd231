const openButton = document.querySelector('#openButton');
const openButton2 = document.querySelector('#openButton2');
const openButton3 = document.querySelector('#openButton3');
const dialogBox = document.querySelector('#dialogBox');
const dialogBoxText = document.querySelector('#dialogBox div');
const closeButton = document.querySelector('#closeButton');

openButton.addEventListener('click', () => {
  dialogBox.showModal();
  dialogBoxText.innerHTML = 'An apple has 95 calories';
});

openButton2.addEventListener('click', () => {
  dialogBox.showModal();
  dialogBoxText.innerHTML = 'An orange has 45 calories';
});

openButton3.addEventListener('click', () => {
  dialogBox.showModal();
  dialogBoxText.innerHTML = 'A banana has 105 calories';
});

closeButton.addEventListener('click', () => {
  dialogBox.close();
});