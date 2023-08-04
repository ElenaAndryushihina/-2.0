import Swiper from '../../vendor/swiper';

const initTrainerSwiper = () => new Swiper('.trainer__swiper', {

  navigation: {
    nextEl: '.trainer-toggle-next',
    prevEl: '.trainer-toggle-prev',
  },

  loop: true,

  breakpoints: {

    1200: {
      slidesPerView: 4,
      spaceBetween: 35,
      initialSlide: 0,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      initialSlide: 2,
    },

    320: {
      slidesPerView: 1,
      initialSlide: 2,
    },
  },
});

export {initTrainerSwiper};
