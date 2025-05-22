'use client'
import { useRef } from 'react'
import ServiceCard from './ServiceCard'
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
            <ServiceCard key={svc.slug} service={svc} />
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
