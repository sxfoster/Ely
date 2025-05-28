'use client'

export default function ServiceHero({
  serviceName,
  headline,
  description,
  imageSrc,
  imageAlt,
  onCtaClick
}) {
  const handleClick = () => {
    if (typeof onCtaClick === 'function') {
      onCtaClick()
    } else if (typeof onCtaClick === 'string') {
      window.open(onCtaClick, '_blank', 'noopener')
    }
  }

  return (
    <section className="service-hero">
      <img src={imageSrc} alt={imageAlt} className="hero-image" />
      <div className="hero-content">
        <h1>{serviceName}</h1>
        {headline && <p>{headline}</p>}
        {description && <p>{description}</p>}
        {onCtaClick && (
          <button className="btn btn-primary" onClick={handleClick} type="button">
            Book Now
          </button>
        )}
      </div>
    </section>
  )
}
