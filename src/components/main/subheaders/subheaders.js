/**
 * -----------------------------------------------------------------------------
 * SUBHEADER
 * -----------------------------------------------------------------------------
 *
 * Hide main header and show subheader
 *
 */

jQuery(document).ready(($) => {
  // Hide main header and show subheader

  if (window.matchMedia('(max-width: 767px)').matches) {
    let lastScrollTop = 0;
    $(window).scroll(() => {
      const subheader = $('.main-subheader, .social-tools.is-main');
      // st = scrollTop
      const st = window.pageYOffset || document.documentElement.scrollTop;

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
