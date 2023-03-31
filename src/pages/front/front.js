(() => {
  const hero = document.querySelector('[data-role="hero"]');
  const { body } = document;

  hero?.addEventListener('mouseenter', () => {
    body.classList.add('is-illuminated');
  });

  hero?.addEventListener('mouseleave', () => {
    body.classList.remove('is-illuminated');
  });
})();
