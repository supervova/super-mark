import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import copyLink from './components/menu/copyLink.js';
import initHeaderObserver from './components/header/header.js';
import initModals from './components/modal/modal.js';
import initPopovers from './components/popover/popover.js'; // Close popovers on Esc
import initTabs from './components/tabs/tabs.js';

// Toggle search form on mobiles
// import './components/js/header';

// Init
document.addEventListener('DOMContentLoaded', () => {
  initHeaderObserver();
  initTabs();
  initPopovers();
  // eslint-disable-next-line no-unused-vars
  const swiper = new Swiper('.carousel', {
    modules: [Navigation],
    containerModifierClass: 'is-',
    wrapperClass: 'carousel__items',
    slideClass: 'carousel__item',
    slideActiveClass: 'is-active',
    slideNextClass: 'is-next',
    slidePrevClass: 'is-prev',
    spaceBetween: 24,
    centeredSlides: true,
    speed: 240,
    loop: true,
    navigation: {
      nextEl: '.carousel__button.is-next',
      prevEl: '.carousel__button.is-prev',
    },
    grabCursor: true,
    preventClicks: true,
    slidesPerView: 1,
    breakpoints: {
      768: {
        slidesPerView: 'auto',
      },
    },
  });
  copyLink('#copy-link-button', '#copy-link-success');
  initModals();
});
