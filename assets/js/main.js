"use strict";

/* eslint-disable no-multi-assign, no-cond-assign, no-undef */

/**
 * -----------------------------------------------------------------------------
 * AVOID `CONSOLE` ERRORS IN BROWSERS THAT LACK A CONSOLE
 * -----------------------------------------------------------------------------
 */
(function () {
  var method;

  var noop = function noop() {};

  var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'];
  var length = methods.length;
  var console = window.console = window.console || {};

  while (length -= 1) {
    method = methods[length]; // Only stub undefined methods.

    if (!console[method]) {
      console[method] = noop;
    }
  }
})();
"use strict";

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
jQuery(document).ready(function ($) {
  var carousel = $('.carousel');
  var carouselMain = $('#intro');
  var totalItems = $('.carousel-item').length;
  var body = $('body'); // const likeShare    = $('.social-tools');

  var pager = $('.carousel-pager');
  var currentSlide; // Preventing Bootstrap carousel from auto sliding

  carousel.carousel({
    interval: 0
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
    var pureKey = key.replace(/[*+?^$.[\]{}()|\\/]/g, '\\$&'); // eslint-disable-next-line no-restricted-globals

    var match = location.search.match(new RegExp("[?&]".concat(pureKey, "=([^&]+)(&|$)")));
    var slide = match && decodeURIComponent(match[1].replace(/\+/g, ' '));

    if ($.isNumeric(slide)) {
      return parseInt(slide, 10);
    }

    return 0;
  } // Call. Go to slide pointing in URL on page load


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
    $('.carousel-counter').text("".concat(currentSlide, "/").concat(totalItems));
  } // Set slide counter on page load and update it on slide


  setCounter();
  carouselMain.on('slid.bs.carousel', function () {
    setCounter();
  });
  /**
   * ---------------------------------------------------------------------------
   * Navigation and change body background
   * ---------------------------------------------------------------------------
   * Update currentSlide when the slide instance method is invoked
   */

  carouselMain.on('slide.bs.carousel', function () {
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


  carousel.swiperight(function () {
    carousel.carousel('prev');
    toggleBodyClass(2);
  });
  $('.carousel-control.prev').click(function () {
    toggleBodyClass(2);
  }); // Next
  // carousel.swipe({
  //   swipeLeft() {
  //     carousel.carousel('next');
  //     toggleBodyClass(totalItems);
  //   },
  // });

  carousel.swipeleft(function () {
    carousel.carousel('next');
    toggleBodyClass(totalItems);
  });
  $('.carousel-control.next, .intro-section.is-highlight .link-next').click(function () {
    toggleBodyClass(totalItems);
  }); // Return to the first slide

  $('.p-home .header-logo').click(function (event) {
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

  var carouselPager = {
    titles: ['Плюсы и минус', 'Услуги', 'Цены', 'Об агентстве', 'Блог', 'В начало'],
    setTitle: function setTitle() {
      $('.carousel-control.next').text(this.titles[currentSlide - 1]);
    }
  };
  carouselPager.setTitle();
  carousel.on('slid.bs.carousel', function () {
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

  carousel.on('slide.bs.carousel', function () {
    pager.addClass('hidden');
  });
  carousel.on('slid.bs.carousel', function () {
    pager.removeClass('hidden');
  });
  /**
   * ---------------------------------------------------------------------------
   * Blur main nav link when clicking on logo
   * ---------------------------------------------------------------------------
   */

  $('.logo-link').click(function () {
    $('.navbar-primary > li a').blur();
  });
});
"use strict";

var _this = void 0;

/**
 * -----------------------------------------------------------------------------
 * CONTEXT MENU
 * -----------------------------------------------------------------------------
 *
 * Show elements on right mouse button click
 *
 */
jQuery(document).ready(function ($) {
  if (window.matchMedia('(min-width: 960px)').matches) {
    var el = $('.has-context-menu');
    var contextMenu = $('.context-menu');
    var isFirefox = typeof InstallTrigger !== 'undefined';
    el.on('contextmenu', function (e) {
      e.preventDefault();
    });
    el.mousedown(function (e) {
      if (e.button === 2) {
        $(e.currentTarget).children('.context-menu').show('fast'); // eslint-disable-line no-invalid-this
      }

      return false;
    });
    /**
     * Close popups
     *
     * 1) $(document) cause error on Firefox
     */

    if (isFirefox) {
      $('body').click(function () {
        // 1
        contextMenu.hide();
      });
    } else {
      $(document).click(function () {
        contextMenu.hide();
      });
    }

    $(document).keydown(function (e) {
      if (e.keyCode === 27) {
        contextMenu.hide();
      }
    });
    el.click(function () {
      if ($(_this).children('.context-menu').is(':visible')) {
        // eslint-disable-line no-invalid-this
        contextMenu.hide();
      }
    });
    /**
     * Links
     *
     * 2) Go to URL with target=“_blank”
     * 3) Hide it after the action was triggered
     */

    $('.context-menu a').click(function () {
      var url = $(_this).prop('href'); // eslint-disable-line no-invalid-this

      window.open(url); // 2

      contextMenu.hide(84); // 3
    });
  }
});
"use strict";

/**
 * -----------------------------------------------------------------------------
 * HEADER BEHAVIOUR
 * -----------------------------------------------------------------------------
 */
jQuery(document).ready(function ($) {
  // Back button
  $('.header__back').on('click', function () {
    window.history.go(-1);
  });
});
"use strict";

var _this = void 0;

/**
 * -----------------------------------------------------------------------------
 * MODAL WINDOWS
 * -----------------------------------------------------------------------------
 *
 * Add load() method to Bootstrap modals
 *
 */
jQuery(document).ready(function ($) {
  $('a[data-src="external"]').click(function (e) {
    var href = $(e.currentTarget).attr('href');
    var modal = $('#modal');
    var container = $('.modal-content'); // Cancel the link behavior

    e.preventDefault(); // Load content and show modal.

    container.load("".concat(href, " .is-modal-src"), function () {
      modal.modal('show');
    }); // Clear modal content to prevent show it before new document has been loaded

    modal.on('hidden.bs.modal', function () {
      container.empty();
    });
  });
  $('#modal-search').on('shown.bs.modal', function () {
    $('#modal-search .form__search-input').focus();
  }); // Hide model on Esc

  $(document).keydown(function (e) {
    if (e.keyCode === 27) {
      $('.modal').removeClass('show', function () {
        $(_this).hide(400);
      });
    }
  });
});
"use strict";

/**
 * -----------------------------------------------------------------------------
 * DRAWER MENU
 * -----------------------------------------------------------------------------
 *
 * Open navbar and turn on overlay.
 * Remove body .is-highlight (yellow) class.
 *
 */
(function ($) {
  var doc = $(document);
  var body = $('body');
  var navbar = $('.navbar');
  /**
   * Close drawer
   */

  function closeNavbar() {
    navbar.removeClass('navbar-open');
    $('.modal-backdrop').removeClass('show');
    setTimeout(function () {
      navbar.removeClass('navbar-visible');
      $('.modal-backdrop').remove();
    }, 400); // .4s
  } // / closeNavbar()
  // Execute on document ready


  $(function () {
    // Open navbar and turn on overlay
    $('.header-navbar-toggler').on('click', function () {
      navbar.addClass('navbar-visible navbar-open');
      body.append('<div class="modal-backdrop fade"></div>');
      setTimeout(function () {
        $('.modal-backdrop').addClass('show');
      }, 40);
    }); // Remove body .is-highlight (yellow) class.

    $('.navbar-primary > li > a').click(function () {
      if (body.hasClass('is-highlight')) {
        body.removeClass('is-highlight');
      }
    }); // Close clicking on overlay

    doc.on('tap', '.modal-backdrop', function () {
      closeNavbar();
    }); // Close pressing Esc. For iPad Pro

    doc.keydown(function (e) {
      if (e.keyCode === 27) {
        closeNavbar();
      }
    }); // Close swiping on overlay and navbar

    doc.on('swipeleft', '.modal-backdrop', function () {
      closeNavbar();
    });
    navbar.swipeleft(function () {
      closeNavbar();
    }); // Close clicking on carousele controls

    $('a[href="#intro"]').on('click', function () {
      closeNavbar();
    });
  }); // Execute on window resize

  $(window).resize(function () {
    closeNavbar();
  });
})(jQuery);
"use strict";

/**
 * -----------------------------------------------------------------------------
 * SOCIAL SHARING
 * -----------------------------------------------------------------------------
 *
 * Open share popup
 *
 */
jQuery(document).ready(function ($) {
  $('.btn-social').not('.facebook-like').click(function (e) {
    var el = $(e.currentTarget);
    var href = el.data('href');

    if (el.hasClass('mail') || el.hasClass('whatsapp')) {
      window.location.href = href;
    } else {
      window.open(href, 'shareWin', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
    }
  });
});
"use strict";

/**
 * -----------------------------------------------------------------------------
 * SUBHEADER
 * -----------------------------------------------------------------------------
 *
 * Hide main header and show subheader
 *
 */
jQuery(document).ready(function ($) {
  // Hide main header and show subheader
  if (window.matchMedia('(max-width: 767px)').matches) {
    var lastScrollTop = 0;
    $(window).scroll(function () {
      var subheader = $('.main-subheader, .social-tools.is-main'); // st = scrollTop

      var st = window.pageYOffset || document.documentElement.scrollTop;

      if (Math.abs(st - lastScrollTop) < 100) {
        return;
      }

      if (st > lastScrollTop) {
        // downscroll code
        subheader.addClass('is-mobile');
      } else {
        // upscroll code
        subheader.removeClass('is-mobile');
      }

      lastScrollTop = st;
    });
  }
});