/*слайдер*/

const swiper = new Swiper('.swiper', {

    navigation: {
        nextEl: 'swiper-button-next',
        prevEl: 'swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
});

/*тabs*/


const tabsBtn = document.querySelectorAll(".how-work__link");
const tabsItems = document.querySelectorAll(".how-work__wrapper");

tabsBtn.forEach(function (item) {
    item.addEventListener("click", function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-pav");
        let currentTab = document.querySelector(tabId);

        tabsBtn.forEach(function (item) {
            item.classList.remove('how-work__link--active');
        });

        tabsItems.forEach(function (item) {
            item.classList.remove('how-work__wrapper--active')
        });

        currentBtn.classList.add('how-work__link--active');
        currentTab.classList.add('how-work__wrapper--active');
    });
});

/*accordion*/

    new Accordion('.accordion-container');

    /* burger menu*/

let burger = document.querySelector('.burger');
let menu = document.querySelector('.nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click',
    function () {

        burger.classList.toggle('burger--active');
        
        menu.classList.toggle('nav--active');

        document.body.classList.toggle('stop-scroll');
    });

menuLinks.forEach(function (el) {
    el.addEventListener('click', function () {

        burger.classList.remove('burger--active');

        menu.classList.remove('nav--active');

        document.body.classList.remove('stop-scroll');
    });
});

/*search*/

const search = document.querySelector ('.header__search-svg');
const input = document.querySelector ('.header__search-input');
const searchImg = document.querySelector ('.header__search-svg');
const searchBtn = document.querySelector ('.header__search-btn');
const searchClose = document.querySelector ('.header__search-svg_close');


search.addEventListener ('click',
function(){
    input.classList.toggle('header__search-input--active');
    searchImg.classList.toggle('header__search-svg--active');
    searchBtn.classList.toggle('header__search-btn--active');
    searchClose.classList.toggle('header__search-svg_close--active');
});

searchClose.addEventListener('click', 
  function() {
    input.classList.remove('header__search-input--active');
    searchImg.classList.remove('header__search-svg--active');
    searchBtn.classList.remove('header__search-btn--active');
    searchClose.classList.remove('header__search-svg_close--active');
  })


