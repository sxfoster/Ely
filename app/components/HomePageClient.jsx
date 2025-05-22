'use client'
import { useState } from 'react'
import ServicesCarousel from './ServicesCarousel'
import SocialSection from './SocialSection'

export default function HomePageClient({ services }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [bookingOpen, setBookingOpen] = useState(false)
  const [image, setImage] = useState(null) // {src, alt}

  const openBooking = (e) => {
    if (e) e.preventDefault()
    setBookingOpen(true)
  }
  const closeBooking = () => setBookingOpen(false)

  const openMenu = () => setMenuOpen(true)
  const closeMenu = () => setMenuOpen(false)

  const openImage = (src, alt) => setImage({ src, alt })
  const closeImage = () => setImage(null)

  return (
    <>
      {/* Mobile Menu Toggle */}
      <div className="menu-icon" onClick={openMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>

      {/* Mobile Menu Items */}
      <div className={`menu-items-container${menuOpen ? ' active' : ''}`}>
        <div className="close-icon" onClick={closeMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>

        <div className="menu-items">
          <a href="#" onClick={(e) => { closeMenu(); openBooking(e); }}>Book Now</a>
          <a href="/">Home</a>
          <a href="/">Services (Coming Soon)</a>
          <a href="/contact">Contact</a>
        </div>
      </div>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/hero_fallback.jpg"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          {/* Optional: add <source src="/videos/hero.webm" type="video/webm" /> */}
        </video>
        <div className="hero-content container">
          <h1>May Facial: Restorative Rose</h1>
          <p>
            Our May Facial is the perfect balance of effective yet gentle. A light peel along with a peptide enriched mask will soften and restore balance to the
            skin. While gua sha will aide in lymphatic drainage. Cryotherapy will bring down inflammation and a soothing shoulder &amp; scalp massage will complete
            this facial.
          </p>
          <button
            id="open-booking-dialog"
            className="btn btn-primary"
            onClick={openBooking}
          >
            Book Your Facial Today!
          </button>
        </div>
      </section>

      {/* Booking Instructions Modal */}
      {bookingOpen && (
        <div id="booking-modal" className="modal booking-modal" onClick={(e) => { if (e.target.id === 'booking-modal') closeBooking() }}>
          <div className="modal-content booking-content">
            <span className="booking-close" onClick={closeBooking}>&times;</span>
            <h2>How to Book with Ely Aesthetics</h2>
            <p>
              We use an easy online booking system powered by Vagaro.
              Click “Continue to Booking” below to open our scheduling
              page in a new tab, then follow the prompts first selecting <strong>Elyzia Foster Reyes</strong>, then choose your
              service and date.
            </p>
            <button
              id="booking-continue"
              className="btn btn-primary"
              onClick={() => {
                window.open('https://mysite.vagaro.com/sweetcreamandrose/book-now', '_blank')
                closeBooking()
              }}
            >
              Continue to Booking
            </button>
          </div>
        </div>
      )}

      {/* Services Grid */}
      <ServicesCarousel services={services} onImageClick={openImage} />

      {/* Social Media Reels */}
      <SocialSection />

      {/* (Optional) Contact Form */}
      <section id="contact" className="contact container">
        {/* Paste your PHP form HTML here, updating action if necessary */}
      </section>

      {/* Image Modal */}
      <div
        id="image-modal"
        className={`modal${image ? ' active' : ''}`}
        onClick={(e) => {
          if (e.target.id === 'image-modal') closeImage()
        }}
      >
        <span className="modal-close" onClick={closeImage}>&times;</span>
        <img className="modal-content" id="modal-img" src={image?.src || ''} alt={image?.alt || ''} />
        <div id="modal-caption">{image?.alt}</div>
      </div>
    </>
  )
}
