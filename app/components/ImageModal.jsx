'use client'
import styles from './ImageModal.module.css'

export default function ImageModal({ image, onClose }) {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <button
        className={styles.closeButton}
        aria-label="Close modal"
        onClick={onClose}
      >
        &times;
      </button>
      <img src={image} alt="Service" className={styles.modalImage} />
    </div>
  )
}
