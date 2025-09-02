const animationDuration = 400; // ms
let visibleModal = null;

// Add `is-pinned` class to a modal header
const toggleTitleStyle = (el, root) => {
  if (window.matchMedia('(max-width: 767px)').matches) {
    const observer = new IntersectionObserver(
      ([entry]) =>
        el.classList.toggle('is-pinned', entry.intersectionRatio < 1),
      {
        threshold: [1],
        root: document.querySelector(root),
        rootMargin: '0px 50px',
      }
    );
    observer.observe(el);
  }
};

// Open an external page in the modal window
const getExternalContent = (event) => {
  const modalExternal = document.getElementById('modal-external');
  const container = modalExternal.querySelector('.modal__content');
  const href = event.currentTarget.getAttribute('href');

  event.preventDefault();

  fetch(href)
    .then((response) => response.text())
    .then((html) => {
      const parser = new DOMParser();
      const contentSource = parser.parseFromString(html, 'text/html');
      const content = contentSource.querySelector('.content').innerHTML;
      container.insertAdjacentHTML('beforeend', content);
    });

  modalExternal.addEventListener('close', () => {
    container.innerHTML = '';
  });
};

// Close modal
const closeModal = (modal) => {
  visibleModal = null;

  setTimeout(() => {
    modal.close();
  }, animationDuration);
};

// Open modal
const openModal = (modal) => {
  setTimeout(() => {
    visibleModal = modal;
  }, animationDuration);
  modal.showModal();

  const header = modal.querySelector('header');
  if (header) {
    toggleTitleStyle(header, '.modal[open]');
  }
};

// Toggle modal
const modalToggle = (event) => {
  const trigger = event.currentTarget;
  const isLink = trigger.hasAttribute('href');
  const win = trigger.getAttribute('data-target');
  const modal = document.getElementById(win);

  event.preventDefault();

  if (modal.open) {
    closeModal(modal);
  } else {
    openModal(modal);
  }

  if (isLink) {
    getExternalContent(event);
  }
};

// Initialize modals
const initModals = () => {
  // Close with a click outside
  document.addEventListener('click', (event) => {
    if (visibleModal === null) return;
    const modalContent = visibleModal.firstElementChild; // Get the first child element of the modal
    const isClickInside = modalContent.contains(event.target);
    if (!isClickInside) {
      closeModal(visibleModal);
    }
  });

  // Close with 'Cancel' and 'X' buttons
  document.querySelectorAll('[data-role="close-modal"]').forEach((btn) => {
    btn.addEventListener('click', (event) => {
      const modal = event.currentTarget.closest('.modal');
      closeModal(modal);
    });
  });

  // Set listeners on modal openers
  document.querySelectorAll('[data-target]').forEach((elem) => {
    elem.addEventListener('click', (event) => {
      modalToggle(event);
    });
  });
};

export default initModals;
