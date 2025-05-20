const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const menuItemsContainer = document.querySelector(".menu-items-container");

menuIcon.addEventListener("click", () => {
  menuItemsContainer.classList.add("active");
});

closeIcon.addEventListener("click", () => {
  menuItemsContainer.classList.remove("active");
});
// image modal logic
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-img');
const caption = document.getElementById('modal-caption');
const closeBtn = document.querySelector('.modal-close');

// Attach listeners immediately:
document.querySelectorAll('.card-img img').forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImg.src = img.src;
    caption.textContent = img.alt || '';
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
