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

//LENIS SMOOT SCROLL
const lenis = new Lenis();

lenis.on('scroll', (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

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

// let tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.about__descriptions',
//     start: 'top center',
//     end: 'bottom center',
//     scrub: true,
//     markers: false,
//   },
// });

// tl.to('.about__descriptions', {
//   x: 800,
// });
