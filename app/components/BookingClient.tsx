"use client"
import { useState, useEffect } from 'react'
import BookingModal from './BookingModal'

interface BookingClientProps {
  children: React.ReactNode
}

const BookingClient: React.FC<BookingClientProps> = ({ children }) => {
  const [serviceToBook, setServiceToBook] = useState<string | null>(null)

  useEffect(() => {
    console.log('[Layout] Attaching open-booking listener')
    const openHandler = (e: CustomEvent) => {
      console.log(
        '[Layout] open-booking event handler invoked:',
        e.detail.service
      )
      setServiceToBook(e.detail.service)
      if (typeof window !== 'undefined' && (window as any).gtag) {
        ;(window as any).gtag('event', 'service_booking_open', {
          service: e.detail.service,
        })
      }
    }
    window.addEventListener('open-booking', openHandler as EventListener)
    return () => window.removeEventListener('open-booking', openHandler as EventListener)
  }, [])

  return (
    <>
      {children}
      {serviceToBook && (
        <BookingModal service={serviceToBook} onClose={() => setServiceToBook(null)} />
      )}
    </>
  )
}

export default BookingClient
