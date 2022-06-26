import { Swiper } from 'swiper';
import 'swiper/css';
// import "swiper/css/navigation";
// import "swiper/css/pagination";

/* QUOTES SLIDER */

new Swiper('.quotes-slider', {
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 1000,
  loop: true,
  autoplay: {
    delay: 5000,
  },
});
