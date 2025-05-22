'use client'
import { useRef } from 'react'
import styles from './ServicesCarousel.module.css'

export default function ServicesCarousel({ services, onImageClick }) {
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
          {services.map(svc => (
            <a key={svc.slug} href={`/services/${svc.slug}`} className={styles.card}>
              <div className={`card-img ${styles.img}`}>
                <img
                  src={svc.image}
                  alt={svc.alt}
                  loading="lazy"
                  onClick={onImageClick ? () => onImageClick(svc.image, svc.alt) : undefined}
                />
              </div>
              <h3>{svc.title}</h3>
              <p>{svc.description}</p>
            </a>
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
