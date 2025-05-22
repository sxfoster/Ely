import React from 'react'

export interface StickyBookingBarProps { serviceName: string; price: number }

export const StickyBookingBar: React.FC<StickyBookingBarProps> = ({ serviceName, price }) => (
  <div style={{ position: 'fixed', bottom: 0, width: '100%' }}>
    <span>{serviceName} – ${price}</span>
    <button>Book Now</button>
  </div>
)
