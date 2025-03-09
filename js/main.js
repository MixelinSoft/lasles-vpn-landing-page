// Elements
const menuButton = document.querySelector('.menu-button');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('[data-scroll]');
const goToPortfolioButtons = document.querySelectorAll('[data-portfolio]');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-form');
const signButtons = document.querySelectorAll('[data-sign]');

// Swiper For Services
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
// Swiper For Reviews
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

// Menu
menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('active');
  navMenu.classList.toggle('show');
});
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menuButton.classList.remove('active');
    navMenu.classList.remove('show');
    const targetSection = link.getAttribute('data-scroll');
    const targetElement = document.getElementById(targetSection);
    targetElement.scrollIntoView({
      behavior: 'smooth',
    });
  });
});
// Modal
signButtons.forEach((button) => {
  button.addEventListener('click', () => {
    modal.classList.add('show');
  });
});
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('show');
  }
});

// Protfolio Open
goToPortfolioButtons.forEach((button) => {
  button.addEventListener('click', () => {
    window.open('https://mixelinsoft.netlify.app/');
  });
});
