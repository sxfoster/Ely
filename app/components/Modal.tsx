"use client"
import React from 'react'

interface ModalProps {
  onClose: () => void
  children?: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 max-w-md w-full relative">
        <button className="absolute top-2 right-2" onClick={onClose} aria-label="Close">&times;</button>
        {children}
      </div>
    </div>
  )
}

export default Modal
