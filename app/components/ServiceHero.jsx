'use client'

export default function ServiceHero({
  serviceName,
  headline,
  description,
  imageSrc,
  imageAlt,
  ctaText,
  onCtaClick,
}) {
  return (
    <section className="service-hero">
      {imageSrc && (
        <img src={imageSrc} alt={imageAlt || ''} className="hero-image" />
      )}
      <div className="hero-content">
        {serviceName && <h1>{serviceName}</h1>}
        {headline && <p>{headline}</p>}
        {description && <p>{description}</p>}
        {ctaText && (
          <button className="btn btn-primary" onClick={onCtaClick}>
            {ctaText}
          </button>
        )}
      </div>
    </section>
  )
}
