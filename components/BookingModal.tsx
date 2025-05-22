'use client'
import React, { useState, useEffect } from 'react'

export const BookingModal: React.FC = () => {
  const [isOpen, setOpen] = useState(false)
  const [service, setService] = useState<string | null>(null)

  useEffect(() => {
    const handler = (e: CustomEvent) => {
      setService(e.detail.service)
      setOpen(true)
      // Analytics: fire GA4 event
      if (typeof window !== 'undefined' && (window as any).gtag) {
        ;(window as any).gtag('event', 'service_booking_open', {
          service: e.detail.service,
        })
      }
    }
    window.addEventListener('open-booking', handler as EventListener)
    return () => window.removeEventListener('open-booking', handler as EventListener)
  }, [])

  if (!isOpen) return null
  return (
    <div
      data-cy="booking-modal"
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
    >
      <div className="bg-white rounded-2xl p-6 max-w-md w-full">
        <h3 className="text-xl font-semibold mb-4">Book Your {service}</h3>
        {/* Insert your booking form component here, preloaded with `service` */}
        <button className="mt-4 text-red-500" onClick={() => setOpen(false)}>
          Cancel
        </button>
      </div>
    </div>
  )
}
