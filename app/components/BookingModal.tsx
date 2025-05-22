"use client"
import React from 'react'
import ReactDOM from 'react-dom'

export interface BookingModalProps {
  service: string
  onClose: () => void
}

const BookingModal: React.FC<BookingModalProps> = ({ service, onClose }) =>
  ReactDOM.createPortal(
    <div
      data-cy="booking-modal"
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
    >
      <div className="bg-white rounded-2xl p-6 max-w-md w-full text-center">
        <h3 className="text-xl font-semibold mb-4">How to Book {service}</h3>
        <p className="mb-4 text-sm text-gray-700">
          We use an online booking system powered by Vagaro. Click
        &ldquo;Continue to Booking&rdquo; below to open our scheduling page in a
        new tab, then follow the prompts to select your service and time.
      </p>
        <button
          className="btn btn-primary w-full mb-2"
          onClick={() => {
            window.open(
              'https://mysite.vagaro.com/sweetcreamandrose/book-now',
              '_blank'
            )
            onClose()
          }}
        >
          Continue to Booking
        </button>
        <button
          className="mt-1 text-sm text-gray-600 w-full"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>,
    document.body
  )

export default BookingModal
