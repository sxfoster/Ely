"use client"
import React from 'react'

export interface BookingModalProps {
  service: string
  onClose: () => void
}

const BookingModal: React.FC<BookingModalProps> = ({ service, onClose }) => (
  <div
    data-cy="booking-modal"
    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
  >
    <div className="bg-white rounded-2xl p-6 max-w-md w-full">
      <h3 className="text-xl font-semibold mb-4">Book {service}</h3>
      {/* Insert actual booking form here */}
      <button className="mt-4 text-sm text-gray-600" onClick={onClose}>
        Cancel
      </button>
    </div>
  </div>
)

export default BookingModal
