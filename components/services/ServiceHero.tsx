import React from 'react'

export interface ServiceHeroProps {
  videoUrl: string
  poster: string
  title: string
  subtitle: string
  ctaText: string
}

export const ServiceHero: React.FC<ServiceHeroProps> = ({
  videoUrl,
  poster,
  title,
  subtitle,
  ctaText,
}) => (
  <section className="relative h-screen max-h-[600px]">
    <video
      className="absolute inset-0 w-full h-full object-cover"
      src={videoUrl}
      poster={poster}
      muted
      autoPlay
      loop
      playsInline
    />
    <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)]" />
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
      <h1 className="text-4xl font-semibold text-white mb-2">{title}</h1>
      <p className="text-lg text-white mb-6">{subtitle}</p>
      <button
        className="bg-accent text-white py-3 px-6 rounded-xl shadow-lg hover:opacity-90"
        onClick={() =>
          window.dispatchEvent(
            new CustomEvent('open-booking', { detail: { service: title } })
          )
        }
      >
        {ctaText}
      </button>
    </div>
  </section>
)
