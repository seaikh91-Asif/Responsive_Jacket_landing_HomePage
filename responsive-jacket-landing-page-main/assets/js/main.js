/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// show menu
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

// Hide menu
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    // when we click on each nav__link we remove the show-menu by clicking the button
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SWIPER HOME ===============*/
/*=========== SWIPER HOME ===========*/
const swiperHome = new Swiper('.home__swiper', {
  loop: true,
  speed: 800,
  effect: 'fade',
  parallax: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  }
})

/*=============== CHANGE HEADER STYLES ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // Add the .scroll-header class if the bottom scroll of the viewpo
    this.scrollY >= 50 ? header.classList.add('scroll-header')
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
/*=============== GSAP ANIMATION ===============*/

gsap.defaults({opacity: 0, ease: 'power4.out', duration: 1.4})

const tl = gsap.timeline()

tl.from('.home__logos img', {y: 200, stagger: .15}, '.3')
  .from('.nav > *', {y: -30}, '.9')
  .from('.home__data', {y: 60}, '1.2')
  .from('.home__image', {y: 100}, '1.5')
  .from('.home .swiper-pagination', {scale: 0, opacity: 1}, '1.5')

gsap.to('.home__img', {y: '+=30', duration: 2, repeat: -1, opacity: 1, yoyo: true, ease: 'sine.inOut'})
