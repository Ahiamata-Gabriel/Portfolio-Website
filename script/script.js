const moonToggle = document.getElementById('moon-icon');
const body = document.querySelector('body');

moonToggle.addEventListener('click', function () {
  this.classList.toggle('bxs-sun');
  body.classList.toggle('dark-mode');
});
