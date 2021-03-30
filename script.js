var swiper = new Swiper('.swiper-container', {
  effect: 'cube',
  speed: 1000,
  loop: true,
  autoplay: {
   delay: 5000,
 },
  cubeEffect: {
    shadow: false,
    slideShadows: false,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
