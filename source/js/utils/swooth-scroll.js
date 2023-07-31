const toSmoothScroll = function () {

  const anchors = document.querySelectorAll('[data-smooth-scroll]');
  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(anchor.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
  }
};

export {toSmoothScroll};
