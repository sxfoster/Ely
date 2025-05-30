import React from 'react'

export default function BookingModal() {
  return (
    <div id="booking-modal" className="modal booking-modal" aria-hidden="true">
      <div className="modal-content booking-content">
        <span className="booking-close">&times;</span>
        <h2>How to Book with Ely Aesthetics</h2>
        <p>
          We use an easy online booking system powered by Vagaro. Click “Continue to Booking” below to open our scheduling page in a new tab, then follow the prompts first selecting <strong>Elyzia Foster Reyes</strong>, then choose your service and date.
        </p>
        <button id="booking-continue" className="btn btn-primary">
          Continue to Booking
        </button>
      </div>
    </div>
  )
}
