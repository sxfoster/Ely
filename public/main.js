// public/main.js

// Mobile menu toggle (clicking hamburger both opens and closes)
 const menuIcon           = document.querySelector('.menu-icon');
 const menuItemsContainer = document.querySelector('.menu-items-container');
 const closeIcon          = document.querySelector('.close-icon');
 
 if (menuIcon && menuItemsContainer) {
   menuIcon.addEventListener('click', () => {
    menuItemsContainer.classList.toggle('active');
   });
 }
 
 // Close via the × icon as before
 if (closeIcon && menuItemsContainer) {
   closeIcon.addEventListener('click', () => {
     menuItemsContainer.classList.remove('active');
   });
 }

// Image modal logic
const modal       = document.getElementById('image-modal');
const modalImg    = document.getElementById('modal-img');
const caption     = document.getElementById('modal-caption');
const closeBtn    = document.querySelector('.modal-close');

// Attach click on each card image
document.querySelectorAll('.card-img img').forEach(img => {
  if (!modal) return;
  img.addEventListener('click', () => {
    modal.classList.add('active');
    modalImg.src         = img.src;
    caption.textContent  = img.alt || '';
  });
});

// Close button
if (closeBtn && modal) {
  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
  });
  // Also click outside image to close
  modal.addEventListener('click', e => {
    if (e.target === modal) modal.classList.remove('active');
  });
}

// Booking dialog logic
// Event delegation is used for booking buttons so it works on pages loaded
// after client-side navigation.
// Instead of querying elements only once, we listen for clicks anywhere on the
// document and check if the target matches our selector.
const bookingModal     = document.getElementById('booking-modal');
const bookingCloseBtn  = document.querySelector('.booking-close');
const bookingContinue  = document.getElementById('booking-continue');

function showBookingModal() {
  if (bookingModal) {
    bookingModal.classList.add('is-visible');
    bookingModal.setAttribute('aria-hidden', 'false');
  }
}

function hideBookingModal() {
  if (bookingModal) {
    bookingModal.classList.remove('is-visible');
    bookingModal.setAttribute('aria-hidden', 'true');
  }
}

// 1) Open the dialog using event delegation so newly added buttons also work
if (bookingModal) {
  document.addEventListener('click', e => {
    const trigger = e.target.closest('.js-open-booking-dialog');
    if (!trigger) return;
    e.preventDefault();
    // Close the mobile menu if the click originated from inside it
    if (menuItemsContainer && trigger.closest('.menu-items')) {
      menuItemsContainer.classList.remove('active');
    }
    showBookingModal();
  });
}

// 2) Close via ×
if (bookingCloseBtn && bookingModal) {
  bookingCloseBtn.addEventListener('click', () => {
    hideBookingModal();
  });
}

// 3) Close by clicking outside content
if (bookingModal) {
  bookingModal.addEventListener('click', (e) => {
    if (e.target === bookingModal) {
      hideBookingModal();
    }
  });
}

// 4) Continue to booking in new tab
if (bookingContinue) {
  bookingContinue.addEventListener('click', () => {
    window.open(
      'https://mysite.vagaro.com/sweetcreamandrose/book-now',
      '_blank'
    );
    hideBookingModal();
  });
}

// Smooth scroll fallback for browsers without CSS support
if (!('scrollBehavior' in document.documentElement.style)) {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const id = link.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}