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
        slidesPerGroup:1,
    },
    1440: {
        slidesPerView: 5,
        slidesPerGroup:5,
    },
    },
     pagination: {
        el: '.swiper-pagination',
         clickable: true,
    },
     
    loop: true,
    grabCursor: true,
    spaceBetween: 60,
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


