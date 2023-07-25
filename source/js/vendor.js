// Swiper 7.4.1
import './vendor/swiper';
import './vendor/focus-visible-polyfill';

// Слайдер блока Тренеры

const trainerSwiper = new Swiper('.trainer__swiper', {

  loop: true,

  navigation: {
    nextEl: '.trainer-toggle-next',
    prevEl: '.trainer-toggle-prev',
  },

  breakpoints: {

    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
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

// Слайдер блока Отзывы

const feedbackSwiper = new Swiper('.feedback__swiper', {

  navigation: {
    nextEl: '.feedback-toggle-next',
    prevEl: '.feedback-toggle-prev',
  },
});
