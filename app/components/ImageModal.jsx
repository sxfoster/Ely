'use client'

export default function ImageModal({ image, onClose }) {
  if (!image) return null;

  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains('modal')) {
      onClose();
    }
  };

  return (
    <div className="modal active" onClick={handleBackgroundClick}>
      <span className="modal-close" onClick={onClose}>&times;</span>
      <img className="modal-content" src={image} alt="" />
    </div>
  );
}
