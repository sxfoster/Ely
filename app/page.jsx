// app/page.js
import SocialSection from './components/SocialSection'
import ServicesSection from './components/ServicesSection'

export const metadata = {
  title: 'Home | Ely Aesthetics',
  description:
    'Experience relaxing facials and advanced skincare services in Yuma, Arizona.',
  keywords:
    'Yuma facials, spa treatments, dermaplaning, HydraFacial, microneedling',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}


export default function HomePage() {
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
          <a href="#" id="menu-open-booking-dialog">Book Now</a>
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-wrapper">
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
          <div className="hero-content">
            <h1>May Facial: Restorative Rose</h1>
            <p>
              Our May Facial is the perfect balance of effective yet gentle. A light peel along with a peptide enriched mask will soften and restore balance to the
              skin. While gua sha will aide in lymphatic drainage. Cryotherapy will bring down inflammation and a soothing shoulder & scalp massage will complete
              this facial.
            </p>
            <button
              id="open-booking-dialog"
              className="btn btn-primary"
            >
              Book Your Facial Today!
            </button>
          </div>
        </div>
      </section>


      {/* About Section hidden temporarily */}

      {/* Services Grid */}
      <ServicesSection />

      {/* Social Media Reels */}
      <SocialSection />
      {/* (Optional) Contact Form */}
      <section id="contact" className="contact container">
        {/* Paste your PHP form HTML here, updating action if necessary */}
      </section>

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
