/* eslint-disable no-multi-assign, no-cond-assign, no-undef */

/**
 * -----------------------------------------------------------------------------
 * AVOID `CONSOLE` ERRORS IN BROWSERS THAT LACK A CONSOLE
 * -----------------------------------------------------------------------------
 */

(() => {
  let method;
  const noop = () => {};
  const methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'];
  let { length } = methods;
  const console = (window.console = window.console || {});

  while ((length -= 1)) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
})();

