/**
 * -----------------------------------------------------------------------------
 * SOCIAL SHARING
 * -----------------------------------------------------------------------------
 *
 * Open share popup
 *
 */

jQuery(document).ready(($) => {
  $('.btn-social')
    .not('.facebook-like')
    .click((e) => {
      const el = $(e.currentTarget);
      const href = el.data('href');

      if (el.hasClass('mail') || el.hasClass('whatsapp')) {
        window.location.href = href;
      } else {
        window.open(
          href,
          'shareWin',
          'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600'
        );
      }
    });
});
