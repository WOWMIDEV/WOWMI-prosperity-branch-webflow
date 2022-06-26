import { Pagination, Navigation, Swiper } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

Swiper.use([Navigation, Pagination]);

new Swiper('.articles__swiper', {
  speed: 600,
  navigation: {
    nextEl: '.articles-swiper__arrow-next',
    prevEl: '.articles-swiper__arrow-prev',
  },
  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 3,
      },
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 3,
      },
    },
    991: {
      slidesPerView: 2,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 3,
      },
    },
  },
});
