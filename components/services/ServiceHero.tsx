import React from 'react'

export interface ServiceHeroProps {
  videoUrl: string
  poster: string
  title: string
  subtitle: string
  ctaText: string
}

export const ServiceHero: React.FC<ServiceHeroProps> = ({ videoUrl, poster, title, subtitle, ctaText }) => (
  <section>
    {/* TODO: implement video background with overlay */}
    <h1>{title}</h1>
    <p>{subtitle}</p>
    <button
      onClick={() => {
        window.dispatchEvent(
          new CustomEvent('open-booking', { detail: { service: title } })
        )
        if (window.gtag) {
          window.gtag('event', 'service_booking_click', {
            service: title,
          })
        }
      }}
    >
      {ctaText}
    </button>
  </section>
)
