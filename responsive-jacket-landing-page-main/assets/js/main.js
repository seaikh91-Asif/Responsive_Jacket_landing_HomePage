/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu')
      navToggle = document.getElementById('nav-toggle')
      navClose = document.getElementById('nav-close')

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
const swiperHome = new Swiper('.home__swiper',{
    loop: true,
    speed: 800, 
    effect: 'fade', 
    parallax: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay:3000,
        disableOnInteraction:false,
    }
})

/*=============== CHANGE HEADER STYLES ===============*/


/*=============== GSAP ANIMATION ===============*/

