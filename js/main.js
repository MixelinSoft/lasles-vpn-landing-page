const servicesSwiper = new Swiper('.services-section', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 4,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  freeMode: {
    enabled: true,
  },
  speed: 5000,
  allowTouchMove: false,
  simulateTouch: false,
});

const reviewsSwiper = new Swiper('.reviews', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 'auto',
  navigation: {
    nextEl: '.reviews-button-next',
    prevEl: '.reviews-button-prev',
  },
  pagination: {
    el: '.reviews-pagination',
    type: 'bullets',
    clickable: true,
  },
});
