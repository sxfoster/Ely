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
    <article className={styles.card} data-cy="service-card">
      <div className={`card-img ${styles.img}`}>
        <img src={service.image} alt={service.alt} loading="lazy" />
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <Link
        href={`/services/${service.slug}`}
        className="btn btn-primary"
        aria-label={`Learn more about ${service.title}`}
      >
        Learn More
      </Link>
    </article>
  )
}
