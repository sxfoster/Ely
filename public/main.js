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
const openBookingBtn   = document.getElementById('open-booking-dialog');
const menuBookingBtn = document.getElementById('menu-open-booking-dialog');
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

// Smooth scroll fallback for browsers without CSS support
if (!CSS.supports('scroll-behavior', 'smooth')) {
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
