'use client'

import { useState } from 'react'
import ImageModal from './ImageModal'
import styles from './ServicesSection.module.css'

// Refactored to mobile-first grid with modal and CTA per UX (May 2025)
const services = [
  { id: 1, name: 'Microneedling', image: '/images/microneedling.jpg' },
  { id: 2, name: 'Skinbetter Peel', image: '/images/skinbetter-peel.jpg' },
  { id: 3, name: 'Anti-Age Peptide Peel Treatment', image: '/images/antiage-peptide.jpg' },
]

export default function ServicesSection() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalImg, setModalImg] = useState('')

  function openModal(img) {
    setModalImg(img)
    setModalOpen(true)
  }

  function closeModal() {
    setModalOpen(false)
    setModalImg('')
  }

  return (
    <section id="services" className={`services ${styles.servicesSection}`}>
      <h2 className={styles.servicesTitle}>Our Services</h2>
      <div className={styles.servicesGrid}>
        {services.map(service => (
          <div key={service.id} className={styles.serviceCard}>
            <button
              className={styles.imageButton}
              aria-label={`Learn more about ${service.name}`}
              onClick={() => openModal(service.image)}
            >
              <img
                src={service.image}
                alt={service.name}
                className={styles.serviceImg}
                loading="lazy"
              />
            </button>
            <h3 className={styles.serviceName}>{service.name}</h3>
            <button
              className={styles.ctaButton}
              onClick={() => openModal(service.image)}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
      {modalOpen && <ImageModal image={modalImg} onClose={closeModal} />}
    </section>
  )
}
