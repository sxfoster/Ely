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

// Booking modal logic
document.addEventListener('DOMContentLoaded', () => {
  console.log('[main.js] DOMContentLoaded fired')

  // 1) Create or select the modal container
  let bookingModal = document.getElementById('booking-modal')
  if (!bookingModal) {
    bookingModal = document.createElement('div')
    bookingModal.id = 'booking-modal'
    // Apply overlay styling class
    bookingModal.classList.add('booking-modal')
    document.body.appendChild(bookingModal)
  }

  // 2) Fill in the inner markup with the content wrapper and close button
  bookingModal.innerHTML = `
    <div class="booking-content">
      <!-- Existing modal content will be rendered here -->
      <span class="booking-close" data-cy="booking-close">&times;</span>
    </div>
  `

  // 3) Show on custom event
  window.addEventListener('open-booking', (e) => {
    console.log('[main.js] open-booking event:', e.detail)
    bookingModal.style.display = 'flex'
  })

  // 4) Bind native click handler if needed
  const btn = document.getElementById('open-booking-dialog')
  console.log('[main.js] Found booking button:', btn)
  if (btn) {
    btn.addEventListener('click', (e) => {
      e.preventDefault()
      console.log('[main.js] click on #open-booking-dialog')
      bookingModal.style.display = 'flex'
    })
  }

  // 5) Wire up the close button
  document.body.addEventListener('click', (evt) => {
    if (evt.target.matches('.booking-close')) {
      console.log('[main.js] click on .booking-close')
      bookingModal.style.display = 'none'
    }
  })
})
