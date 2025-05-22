"use client";
import React from 'react';

export default function Hero() {
  const handleClick = () => {
    console.log('Hero booking button clicked');
    // Fire the booking event
    window.dispatchEvent(
      new CustomEvent('open-booking', {
        detail: { service: 'Hero Service' },
      })
    );
  };

  return (
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
          Our May Facial is the perfect balance of effective yet gentle. A light
          peel along with a peptide enriched mask will soften and restore balance
          to the skin. While gua sha will aide in lymphatic drainage. Cryotherapy
          will bring down inflammation and a soothing shoulder &amp; scalp massage
          will complete this facial.
        </p>
        <button
          id="open-booking-dialog"
          className="btn btn-primary"
          onClick={handleClick}
          data-cy="hero-book-now"
        >
          Book Your Facial Today!
        </button>
        <a href="/contact" className="btn btn-primary ml-2">
          Contact Us
        </a>
      </div>
    </section>
  );
}
