/**
 * Инициализирует скрытие нижней навигации при прокрутке вверх
 * на главной странице для портретных телефонов в Safari.
 */
const initNavbarHideOnScroll = () => {
  const body = document.body;
  const navbar = document.querySelector('.navbar__base');

  if (!body || !navbar) {
    return;
  }

  if (!body.classList.contains('is-home')) {
    return;
  }

  if (!isSafari()) {
    return;
  }

  let previousScrollY = window.scrollY;
  let ticking = false;
  let active = false;

  const updateNavbarState = (currentScroll) => {
    if (currentScroll <= 0) {
      navbar.classList.remove('is-hidden');
      previousScrollY = 0;
      return;
    }

    if (currentScroll < previousScrollY) {
      navbar.classList.add('is-hidden');
    } else if (currentScroll > previousScrollY) {
      navbar.classList.remove('is-hidden');
    }

    previousScrollY = currentScroll;
  };

  const handleScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateNavbarState(window.scrollY);
        ticking = false;
      });
      ticking = true;
    }
  };

  const deactivate = () => {
    window.removeEventListener('scroll', handleScroll, { passive: true });
    navbar.classList.remove('is-hidden');
    ticking = false;
    active = false;
  };

  const activate = () => {
    previousScrollY = window.scrollY;
    window.addEventListener('scroll', handleScroll, { passive: true });
    active = true;
  };

  const evaluateState = () => {
    const shouldEnable = isPortraitPhone();

    if (shouldEnable && !active) {
      activate();
      return;
    }

    if (!shouldEnable && active) {
      deactivate();
    }
  };

  window.addEventListener('resize', evaluateState);
  window.addEventListener('orientationchange', evaluateState);

  evaluateState();
};

/**
 * Проверяет, запущен ли браузер Safari.
 * @returns {boolean}
 */
const isSafari = () => {
  const { userAgent, vendor } = navigator;
  const isAppleVendor = vendor === 'Apple Computer, Inc.';
  const isSafariEngine = /Safari\//.test(userAgent);
  const isExcluded = /(CriOS|FxiOS|EdgiOS|OPiOS|Chrome|Android)/.test(userAgent);

  return isAppleVendor && isSafariEngine && !isExcluded;
};

/**
 * Проверяет, соответствует ли устройство требованиям по размеру и ориентации.
 * @returns {boolean}
 */
const isPortraitPhone = () => {
  const portrait = window.matchMedia('(orientation: portrait)').matches;
  return portrait && window.innerWidth < 568;
};

export default initNavbarHideOnScroll;
