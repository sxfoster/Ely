import Link from 'next/link'
import styles from './ServicesCarousel.module.css'

export interface ServiceCardProps {
  service: {
    title: string
    description: string
    slug: string
    image: string
    alt: string
  }
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className={styles.card} data-cy="service-card">
      <div className={`card-img ${styles.img}`}>
        <img src={service.image} alt={service.alt} loading="lazy" />
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <Link
        href={`/services/${service.slug}`}
        className="cta-button"
        aria-label={`Learn more about ${service.title}`}
        style={{
          backgroundColor: '#0070f3',
          color: '#ffffff',
          padding: '0.75rem 1.5rem',
          borderRadius: '0.5rem',
          fontWeight: 'bold',
          textAlign: 'center',
          display: 'inline-block',
          marginTop: '1rem',
          transition: 'background-color 0.3s ease',
        }}
      >
        Learn More
      </Link>
    </div>
  )
}
