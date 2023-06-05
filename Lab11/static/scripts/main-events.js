const iconMenu = document.querySelector('.menu__icon');
const menu = document.querySelector('.header__style');
const scrollTrigger = 60;

if(iconMenu) {
    const menuBody = document.querySelector('.menu__body');
    iconMenu.addEventListener('click', function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        // if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
        //     menu.classList.toggle('_scroll');
        // }
    }) 
}

window.onscroll = function() {
    if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
        menu.classList.add('_scroll');
    } else {
        menu.classList.remove('_scroll');
    }
}