'use client'
import ServicesCarousel from './ServicesCarousel'
import SocialSection from './SocialSection'
import Hero from './Hero'

export default function HomePageClient({ services }) {
  return (
    <>
      {/* Mobile Menu Toggle */}
      <div className="menu-icon">
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
      <div className="menu-items-container">
        <div className="close-icon">
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
          <a
            href="#"
            onClick={() => {
              window.dispatchEvent(
                new CustomEvent('open-booking', { detail: { service: 'General Inquiry' } })
              )
              if (window.gtag) {
                window.gtag('event', 'service_booking_click', {
                  service: 'General Inquiry',
                })
              }
            }}
          >
            Book Your Service Now
          </a>
          <a href="/">Home</a>
          <a href="/">Services (Coming Soon)</a>
          <a href="/contact">Contact Us</a>
        </div>
      </div>

      {/* Hero Section */}
      <Hero />
      {/* Services Grid */}
      <ServicesCarousel services={services} />

      {/* Social Media Reels */}
      <SocialSection />

      {/* Image Modal */}
      <div id="image-modal" className="modal">
        <span className="modal-close">&times;</span>
        <img className="modal-content" id="modal-img" />
        <div id="modal-caption"></div>
      </div>

      {/* Client‑side JS for menu & modal */}
    </>
  )
}
