import React from 'react'

export interface StickyBookingBarProps { serviceName: string; price: number }

export const StickyBookingBar: React.FC<StickyBookingBarProps> = ({ serviceName, price }) => (
  <div className="fixed bottom-0 inset-x-0 bg-white shadow-xl border-t border-gray-200 py-4 px-6 flex justify-between items-center lg:hidden">
    <span className="text-lg font-medium text-gray-800">
      {serviceName} – ${price}
    </span>
    <button
      data-cy="book-now-button"
      className="bg-accent text-white py-2 px-4 rounded-lg hover:opacity-90 transition"
      onClick={() =>
        window.dispatchEvent(new CustomEvent('open-booking', { detail: { service: serviceName } }))
      }
    >
      Book Now
    </button>
  </div>
)
