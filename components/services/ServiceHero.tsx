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
  <section className="relative h-[60vh] min-h-[400px] w-full">
    <video
      className="absolute inset-0 w-full h-full object-cover"
      src={videoUrl}
      poster={poster}
      muted
      autoPlay
      loop
      playsInline
    />
    <div className="absolute inset-0 bg-black bg-opacity-40" />
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white mb-2">
        {title}
      </h1>
      <p className="text-base sm:text-lg lg:text-xl text-white mb-6 max-w-2xl">
        {subtitle}
      </p>
      <button
        id="open-booking-dialog"
        data-cy="book-now-button"
        className="bg-accent text-white py-3 px-6 rounded-2xl shadow-lg hover:opacity-90 transition"
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
