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
    <button>{ctaText}</button>
  </section>
)
