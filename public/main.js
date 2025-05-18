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

// Image modal logic (accessible & robust)
const modal     = document.getElementById('image-modal');
const modalImg  = document.getElementById('modal-img');
const caption   = document.getElementById('modal-caption');
const closeBtn  = document.querySelector('.modal-close');
let lastFocused = null;

// Open modal on image click
document.querySelectorAll('.card-img img').forEach(img => {
  img.addEventListener('click', (e) => {
    lastFocused = e.target;
    openModal(img.src, img.alt || '');
  });
});

function openModal(src, alt) {
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  modalImg.src = src;
  modalImg.alt = alt;
  caption.textContent = alt;
  closeBtn.focus();
}

function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
  modalImg.src = '';
  modalImg.alt = '';
  caption.textContent = '';
  if (lastFocused) lastFocused.focus();
}

// Close on close button click
closeBtn.addEventListener('click', closeModal);

// Close on overlay click
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

// Close on ESC key, trap focus
document.addEventListener('keydown', (e) => {
  if (!modal.classList.contains('active')) return;
  if (e.key === 'Escape') {
    closeModal();
  } else if (e.key === 'Tab') {
    // Trap focus inside modal (only close and image for simplicity)
    const focusable = [closeBtn, modalImg];
    let idx = focusable.indexOf(document.activeElement);
    if (idx === -1) idx = 0;
    if (e.shiftKey) {
      idx = (idx - 1 + focusable.length) % focusable.length;
    } else {
      idx = (idx + 1) % focusable.length;
    }
    focusable[idx].focus();
    e.preventDefault();
  }
});

// Also allow closing by pressing Enter or Space on the close "button"
closeBtn.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    closeModal();
    e.preventDefault();
  }
});

// Booking dialog logic
const openBookingBtn   = document.getElementById('open-booking-dialog');
const navBookingBtn    = document.getElementById('nav-open-booking-dialog');
const menuBookingBtn   = document.getElementById('menu-open-booking-dialog');
const bookingModal     = document.getElementById('booking-modal');
const bookingCloseBtn  = document.querySelector('.booking-close');
const bookingContinue  = document.getElementById('booking-continue');

// 1) Open the dialog
if (openBookingBtn && bookingModal) {
  openBookingBtn.addEventListener('click', (e) => {
    e.preventDefault();
    bookingModal.style.display = 'flex';
  });
}

if (menuBookingBtn && bookingModal) {
  menuBookingBtn.addEventListener('click', e => {
    e.preventDefault();
    // close the mobile menu
    if (menuItemsContainer) {
      menuItemsContainer.classList.remove('active');
    }
    // open the booking dialog
    bookingModal.style.display = 'flex';
  });
}

// 2) Close via ×
if (bookingCloseBtn && bookingModal) {
  bookingCloseBtn.addEventListener('click', () => {
    bookingModal.style.display = 'none';
  });
}

// 3) Close by clicking outside content
if (bookingModal) {
  bookingModal.addEventListener('click', (e) => {
    if (e.target === bookingModal) {
      bookingModal.style.display = 'none';
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
    bookingModal.style.display = 'none';
  });
}
