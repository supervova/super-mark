/**
 * -----------------------------------------------------------------------------
 * CONTEXT MENU
 * -----------------------------------------------------------------------------
 *
 * Show elements on right mouse button click
 *
 */

jQuery(document).ready(($) => {
  if (window.matchMedia('(min-width: 960px)').matches) {
    const el = $('.has-context-menu');
    const contextMenu = $('.context-menu');
    const isFirefox = typeof InstallTrigger !== 'undefined';

    el.on('contextmenu', (e) => {
      e.preventDefault();
    });

    el.mousedown((e) => {
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
      $('body').click(() => { // 1
        contextMenu.hide();
      });
    } else {
      $(document).click(() => {
        contextMenu.hide();
      });
    }

    $(document).keydown((e) => {
      if (e.keyCode === 27) {
        contextMenu.hide();
      }
    });

    el.click(() => {
      if ($(this).children('.context-menu').is(':visible')) { // eslint-disable-line no-invalid-this
        contextMenu.hide();
      }
    });

    /**
     * Links
     *
     * 2) Go to URL with target=“_blank”
     * 3) Hide it after the action was triggered
     */
    $('.context-menu a').click(() => {
      const url = $(this).prop('href'); // eslint-disable-line no-invalid-this
      window.open(url); // 2

      contextMenu.hide(84); // 3
    });
  }
});
