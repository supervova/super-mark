/**
 * -----------------------------------------------------------------------------
 * CAROUSEL
 * -----------------------------------------------------------------------------
 *
 * Preventing carousel from auto sliding.
 * Links to specific slide from inner pages.
 * Swiping to go back and forth between the slides.
 * Change body background color to yellow and vice versa.
 * Set slide counter in footer.
 *
 */

jQuery(document).ready(($) => {
  const carousel = $('.carousel');
  const carouselMain = $('#intro');
  const totalItems = $('.carousel-item').length;
  const body = $('body');
  // const likeShare    = $('.social-tools');
  const pager = $('.carousel-pager');
  let currentSlide;

  // Preventing Bootstrap carousel from auto sliding
  carousel.carousel({
    interval: 0,
  });

  /**
   * ---------------------------------------------------------------------------
   * Link to specific slide from inner pages: /?slide=2
   * ---------------------------------------------------------------------------
   * @param {String} key - url parameter key. E.g. 'slide' in 'slide=2'
   * @return {Number} If 'slide' parameter is not present or doesn't have
   * correct values load 0th slide
   */
  function getSlideParameter(key) {
    // Escape RegEx meta chars
    const pureKey = key.replace(/[*+?^$.[\]{}()|\\/]/g, '\\$&');
    // eslint-disable-next-line no-restricted-globals
    const match = location.search.match(
      new RegExp(`[?&]${pureKey}=([^&]+)(&|$)`)
    );
    const slide = match && decodeURIComponent(match[1].replace(/\+/g, ' '));
    if ($.isNumeric(slide)) {
      return parseInt(slide, 10);
    }
    return 0;
  }

  // Call. Go to slide pointing in URL on page load
  carouselMain.carousel(getSlideParameter('slide'));

  /**
   * ---------------------------------------------------------------------------
   * Remove .is-highlight from body if /?slide=2+
   * ---------------------------------------------------------------------------
   */
  if (getSlideParameter('slide') !== 0) {
    body.removeClass('is-highlight');
  }

  /**
   * ---------------------------------------------------------------------------
   * Counter in slide footer. E.g. 2/6
   * ---------------------------------------------------------------------------
   */
  function setCounter() {
    currentSlide = $('#intro .carousel-item.active').index() + 1;
    $('.carousel-counter').text(`${currentSlide}/${totalItems}`);
  }

  // Set slide counter on page load and update it on slide
  setCounter();

  carouselMain.on('slid.bs.carousel', () => {
    setCounter();
  });

  /**
   * ---------------------------------------------------------------------------
   * Navigation and change body background
   * ---------------------------------------------------------------------------
   * Update currentSlide when the slide instance method is invoked
   */
  carouselMain.on('slide.bs.carousel', () => {
    currentSlide = $('.carousel-item.active').index() + 1;
  });

  /**
   * Change body background color to yellow and vice versa.
   * @param {Number} current
   * @see also navbar/navbar.js
   */
  function toggleBodyClass(current) {
    if (currentSlide === current) {
      body.addClass('is-highlight');
    } else if (currentSlide === 1) {
      body.removeClass('is-highlight');
    }
  }

  /**
   * ---------------------------------------------------------------------------
   * Add class .is-upcoming to activate animation in current slide header
   * ---------------------------------------------------------------------------
   */

  // $('#intro').on('slide.bs.carousel', () => {
  //   setTimeout(() => {
  //     $('.carousel-item').removeClass('is-upcoming');
  //     $('.carousel-item-next, .carousel-item-prev').addClass('is-upcoming');
  //   }, 1);
  // });

  /**
   * ---------------------------------------------------------------------------
   * Prev
   * ---------------------------------------------------------------------------
   * For swipe touch event head jQuery Mobile, create a custom build with
   * just Touch and add it to project.
   * jquerymobile.com/download-builder/ => /src/js/jquery.mobile.custom.js
   */

  carousel.swiperight(() => {
    carousel.carousel('prev');
    toggleBodyClass(2);
  });

  $('.carousel-control.prev').click(() => {
    toggleBodyClass(2);
  });

  // Next
  // carousel.swipe({
  //   swipeLeft() {
  //     carousel.carousel('next');
  //     toggleBodyClass(totalItems);
  //   },
  // });

  carousel.swipeleft(() => {
    carousel.carousel('next');
    toggleBodyClass(totalItems);
  });

  $('.carousel-control.next, .intro-section.is-highlight .link.is-next').click(
    () => {
      toggleBodyClass(totalItems);
    }
  );

  // Return to the first slide

  $('.p-home .header-logo').click((event) => {
    event.stopPropagation();
    carousel.carousel(0);
    body.addClass('is-highlight');
    return false;
  });

  /**
   * ---------------------------------------------------------------------------
   * Set label of carousel-control
   * ---------------------------------------------------------------------------
   */

  const carouselPager = {
    titles: [
      'Плюсы и минус',
      'Услуги',
      'Цены',
      'Об агентстве',
      'Блог',
      'В начало',
    ],
    setTitle() {
      $('[data-role="next-screen-title"]').text(this.titles[currentSlide - 1]);
    },
  };

  // const lang = document.body.getAttribute('title');
  const { lang } = document.documentElement;
  if (lang === 'ru') {
    carouselPager.titles = [
      'Плюсы и минус',
      'Услуги',
      'Цены',
      'Об агентстве',
      'Блог',
      'В начало',
    ];
  } else {
    carouselPager.titles = [
      'Pros & cons',
      'Services & Works',
      'Prices',
      'About',
      'Home',
    ];
  }

  carouselPager.setTitle();

  carousel.on('slid.bs.carousel', () => {
    carouselPager.setTitle();
  });

  /**
   * ---------------------------------------------------------------------------
   * Toggle like-n-share hidden class
   * ---------------------------------------------------------------------------
   */
  // carousel.on('slid.bs.carousel', () => {
  //   if (currentSlide === 1) {
  //     likeShare.addClass('hidden');
  //   }
  // });

  // carousel.on('slide.bs.carousel', () => {
  //   if (currentSlide === 1) {
  //     likeShare.removeClass('hidden');
  //   }
  // });

  /**
   * ---------------------------------------------------------------------------
   * Toggle pager hidden class
   * ---------------------------------------------------------------------------
   */
  carousel.on('slide.bs.carousel', () => {
    pager.addClass('hidden');
  });

  carousel.on('slid.bs.carousel', () => {
    pager.removeClass('hidden');
  });

  /**
   * ---------------------------------------------------------------------------
   * Blur main nav link when clicking on logo
   * ---------------------------------------------------------------------------
   */

  $('.logo-link').click(() => {
    $('.navbar-primary > li a').blur();
  });
});
