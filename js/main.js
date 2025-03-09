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
  breakpoints: {
    992: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
      speed: 4000,
    },
    556: {
      slidesPerView: 2.5,
      speed: 3000,
    },
    380: {
      slidesPerView: 2,
      speed: 2000,
    },
    0: {
      slidesPerView: 1.7,
    },
  },
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
