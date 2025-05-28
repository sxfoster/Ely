'use client'

export default function ServiceHero({
  serviceName,
  headline,
  description,
  imageSrc,
  imageAlt,
  ctaText,
  ctaHref,
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
          <a
            className="btn btn-primary"
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            {ctaText}
          </a>
        )}
      </div>
    </section>
  )
}
