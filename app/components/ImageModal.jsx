'use client'
import { useEffect } from 'react'

export default function ImageModal({ image, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose])

  return (
    <div className="modal active" onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <span className="modal-close" onClick={onClose}>&times;</span>
      <img className="modal-content" src={image} alt="Service preview" />
    </div>
  )
}
