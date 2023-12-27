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

//GSAP

// gsap.from('.hero__image', {
//   duration: 1.5,
//   scale: 0.3,
//   ease: 'in',
//   x: 50,
// });

gsap.from('.staggers', {
  duration: 1,
  opacity: 0,
  y: 100,
  stagger: 0.25,
});
