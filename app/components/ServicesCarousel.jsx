'use client'
import { useRef } from 'react'
import Link from 'next/link'
import styles from './ServicesCarousel.module.css'

export default function ServicesCarousel({ services }) {
  const list = useRef(null)

  const scroll = (dir) => {
    if (!list.current) return
    const w = list.current.clientWidth
    list.current.scrollBy({ left: dir === 'next' ? w : -w, behavior: 'smooth' })
  }

  return (
    <section id="services" className="services container">
      <h2 className={styles.heading}>Our Services</h2>
      <div className={styles.wrapper}>
        <button
          className={`${styles.nav} ${styles.prev}`}
          onClick={() => scroll('prev')}
          aria-label="Previous services"
        >
          ‹
        </button>

        <div className={styles.list} ref={list}>
          {services.map((svc) => (
            <Link
              key={svc.slug}
              href={`/services/${svc.slug}`}
              data-cy="service-card"
              className={styles.card}
            >
              <div className={`card-img ${styles.img}`}>
                <img src={svc.image} alt={svc.alt} loading="lazy" />
              </div>
              <h3>{svc.title}</h3>
              <p>{svc.description}</p>
            </Link>
          ))}
        </div>

        <button
          className={`${styles.nav} ${styles.next}`}
          onClick={() => scroll('next')}
          aria-label="Next services"
        >
          ›
        </button>
      </div>
    </section>
  )
}
