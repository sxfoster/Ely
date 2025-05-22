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

// Booking modal logic - dispatch a custom event consumed by React
function showModal() {
  window.dispatchEvent(
    new CustomEvent('open-booking', { detail: { service: 'General Inquiry' } })
  )
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('[main.js] DOMContentLoaded fired')
  const btn = document.getElementById('open-booking-dialog')
  console.log('[main.js] Found booking button:', btn)
  if (btn) {
    btn.addEventListener('click', (e) => {
      console.log('[main.js] click event on #open-booking-dialog')
      showModal()
    })
  }
  // Also listen for the custom event if used:
  window.addEventListener('open-booking', (e) => {
    console.log('[main.js] open-booking event received with detail:', e.detail)
    // showModal or redirect...
  })
})
