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

// ***GSAP***

// gsap.from('.staggers', {
//   duration: 1,
//   opacity: 0,
//   yPercent: 100,
//   stagger: 0.25,
// });

gsap
  .timeline()
  .from('.normal', {
    xPercent: -100,
    ease: 'back',
    stagger: 0.25,
    duration: 1.3,
  })
  .from('.normal-2', {
    xPercent: -100,
    ease: 'back',
    duration: 1.3,
    opacity: 0,
  })
  .from('.staggers', {
    duration: 0.7,
    opacity: 0,
    yPercent: 100,
    stagger: 0.25,
    ease: 'back',
  })
  .from('.normal-2', {
    text: 'Web Designer',
    duration: 2,
    ease: 'power1.in',
    repeat: 2,
    repeatDelay: 4,
    yoyo: true,
  });
