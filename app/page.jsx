// app/page.js
import Script from 'next/script'
import SocialSection from './components/SocialSection'
import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import ServicesCarousel from './components/ServicesCarousel'


export default function HomePage() {
  // 1. Read all markdown files in content/services
  const servicesDir = path.join(process.cwd(), 'content/services')
  const files = fs.readdirSync(servicesDir).filter(f => f.endsWith('.md'))

  // 2. Parse front-matter of each
  const services = files.map(filename => {
    const fullPath = path.join(servicesDir, filename)
    const file = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(file)
    return {
      slug: data.slug,
      title: data.title,
      description: data.description,
      image: data.image,
      alt: data.alt,
      order: data.order ?? 0,   // default to 0 if missing
    }
  })
  services.sort((a, b) => a.order - b.order)
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
      </section>

      {/* Booking Instructions Modal */}
      <div id="booking-modal" className="modal booking-modal">
        <div className="modal-content booking-content">
          <span className="booking-close">&times;</span>
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
          >
            Continue to Booking
          </button>
        </div>
      </div>

      {/* Services Grid */}
      <ServicesCarousel services={services} />

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
      <Script src="/main.js" strategy="afterInteractive" />
    </>
  )
}
