document.querySelector('.menu-btn').addEventListener('click', () =>
  document.querySelector('.main-menu').classList.toggle('show'));


let spinnerWrapper = document.querySelector('.spinner-wrapper');

window.addEventListener('load', function () {
  setTimeout(() => {
    spinnerWrapper.parentElement.removeChild(spinnerWrapper);
  }, 1500);
 
});