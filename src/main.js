import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel, Pagination } from 'swiper/modules';
Swiper.use([Navigation, Keyboard, Mousewheel, Pagination]);

import 'swiper/css';
import 'swiper/swiper-bundle.css'
const swiperCustomers =  new Swiper('.swiper-customers', {
    slidesPerView: 'auto',
     breakpoints: {
       375: {
         slidesPerView: 1,
         slidesPerGroup: 1,
       },
       1440: {
         slidesPerView: 5,
         slidesPerGroup: 5,
    },
  },
     pagination: {
        el: '.swiper-pagination',
         clickable: true,
  },
  spaceBetween: 60,
    loop: true,
    grabCursor: true,
    keyboard: {
    enabled: true,
    },
    navigation: {
    nextEl: '.btn-next',
    prevEl: '.btn-prev',
    },
    speed: 400,
    mousewheel: { sensitivity: 1 },
    
});


function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
function animateIfInViewport() {
  var element = document.querySelector('.benefits-slide');
  if (isElementInViewport(element)) {
    element.classList.add('animation');
  }
}
window.addEventListener('scroll', animateIfInViewport);

const burgerMenu = document.querySelector('.mobile-button-menu');
const modal = document.querySelector('.modal-window-mb');
const closeButton = document.querySelector('.modal-menu-close-btn');
const menuButtons = document.querySelectorAll('.modal-menu-item');



function toggle(event) {
  modal.classList.toggle('is-open');
}

burgerMenu.addEventListener('click', toggle);
closeButton.addEventListener('click', toggle);
menuButtons.forEach(button => button.addEventListener('click', toggle));