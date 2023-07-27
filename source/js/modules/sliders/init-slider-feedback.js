import Swiper from '../../vendor/swiper';

const initFeedbackSwiper = () => new Swiper('.feedback__swiper', {

  navigation: {
    nextEl: '.feedback-toggle-next',
    prevEl: '.feedback-toggle-prev',
  },
});

export {initFeedbackSwiper};
