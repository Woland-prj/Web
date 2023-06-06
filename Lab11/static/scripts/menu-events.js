const iconMenu = document.querySelector('.menu__icon');
const iconClose = document.querySelector('.menu__close');
const menu = document.querySelector('.header__style');
const menuBody = document.querySelector('.menu__body');
const scrollTrigger = 60;

if(iconMenu) {
    iconMenu.addEventListener('click', toggleMenu) ; 
}

if(iconClose) {
    iconClose.addEventListener('click', toggleMenu) ;
}

function toggleMenu() {
    document.body.classList.toggle('_lock');
    menuBody.classList.toggle('_active');
    if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
        menu.classList.toggle('_scroll');
    }
}

window.onscroll = function() {
    if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
        menu.classList.add('_scroll');
    } else {
        menu.classList.remove('_scroll');
    }
}
