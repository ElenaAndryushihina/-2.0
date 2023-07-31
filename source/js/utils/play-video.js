const video = document.querySelector('.gym__video');
const playerButton = document.querySelector('.gym__button-play');

const toPlayVideo = function () {

  playerButton.addEventListener('click', function () {
    playerButton.classList.add('visually-hidden');
    video.classList.add('visually-hidden');

    if (video.classList.contains('ready')) {
      return;
    }
    video.classList.add('ready');
    video.insertAdjacentHTML('beforebegin', `<iframe width=100% height=100% src="https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1" title="YouTube video player" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen></iframe>`);
  });
};

export {toPlayVideo};
