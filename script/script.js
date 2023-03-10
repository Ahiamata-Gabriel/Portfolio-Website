const scrollHeader = () => {
  const header = document.getElementById('header');
  const topElement = document.querySelector('.header');
  this.scrollY >= 50
    ? topElement.classList.add('scroll-header')
    : topElement.classList.remove('scroll-header');
};
window.addEventListener('scroll', scrollHeader);

const moonToggle = document.getElementById('moon-icon');
const body = document.querySelector('body');

moonToggle.addEventListener('click', function () {
  this.classList.toggle('bxs-sun');
  body.classList.toggle('dark-mode');
});
