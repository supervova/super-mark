/**
 * -----------------------------------------------------------------------------
 * DRAWER MENU
 * -----------------------------------------------------------------------------
 *
 * Open navbar and turn on overlay.
 * Remove body .is-highlight (yellow) class.
 *
 */

(($) => {
  const doc = $(document);
  const body = $('body');
  const navbar = $('.navbar');

  /**
   * Close drawer
   */
  function closeNavbar() {
    navbar.removeClass('navbar-open');
    $('.modal-backdrop').removeClass('show');

    setTimeout(() => {
      navbar.removeClass('navbar-visible');
      $('.modal-backdrop').remove();
    }, 400); // .4s
  } // / closeNavbar()

  // Execute on document ready
  $(() => {
    // Open navbar and turn on overlay
    $('.header-navbar-toggler').on('click', () => {
      navbar.addClass('navbar-visible navbar-open');
      body.append('<div class="modal-backdrop fade"></div>');
      setTimeout(() => {
        $('.modal-backdrop').addClass('show');
      }, 40);
    });

    // Remove body .is-highlight (yellow) class.
    $('.navbar-primary > li > a').click(() => {
      if (body.hasClass('is-highlight')) {
        body.removeClass('is-highlight');
      }
    });

    // Close clicking on overlay
    doc.on('tap', '.modal-backdrop', () => {
      closeNavbar();
    });

    // Close pressing Esc. For iPad Pro
    doc.keydown((e) => {
      if (e.keyCode === 27) {
        closeNavbar();
      }
    });

    // Close swiping on overlay and navbar
    doc.on('swipeleft', '.modal-backdrop', () => {
      closeNavbar();
    });

    navbar.swipeleft(() => {
      closeNavbar();
    });

    // Close clicking on carousele controls
    $('a[href="#intro"]').on('click', () => {
      closeNavbar();
    });
  });

  // Execute on window resize
  $(window).resize(() => {
    closeNavbar();
  });
})(jQuery);
