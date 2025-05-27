'use client';

import { useState } from 'react';
import Link from 'next/link';
import ImageModal from './ImageModal'; // adjust path if different
import styles from './ServicesSection.module.css';

// Example services array for reference (update with your real data)
const services = [
  {
    id: 1,
    name: "Microneedling",
    image: "/images/microneedling-before-after.jpeg",
    slug: "microneedling",
  },
  {
    id: 2,
    name: "Skinbetter Peel",
    image: "/images/peel.jpeg",
    slug: "skinbetter-peel",
  },
  {
    id: 3,
    name: "Anti-Age Peptide Peel",
    image: "/images/anti_age.jpeg",
    slug: "anti-age-peptide-peel",
  },
  {
    id: 4,
    name: "Dermaplaning",
    image: "/images/dermaplaning-before-after.jpeg",
    slug: "dermaplaning",
  },
  {
    id: 5,
    name: "Platinum Hydrafacial",
    image: "/images/hydrafacial.jpg",
    slug: "platinum-hydrafacial",
  },
  {
    id: 6,
    name: "Customized Facial",
    image: "/images/before-after-1.jpeg",
    slug: "customized-facial",
  },
];

export default function ServicesSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState('');

  function openModal(img) {
    setModalImg(img);
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
    setModalImg('');
  }

  return (
    <section id="services" className={`services container ${styles.servicesSection}`}>
      <h2 className={styles.servicesTitle}>Our Services</h2>
      <div className={styles.servicesGrid}>
        {services.map(service => (
          <div key={service.id} className={styles.serviceCard}>
            <button
              onClick={() => openModal(service.image)}
              className={styles.imageButton}
              aria-label={`View a larger image of ${service.name}`}
              type="button"
            >
              <img
                src={service.image}
                alt={service.name}
                className={styles.serviceImg}
              />
            </button>
            <h3 className={styles.serviceName}>{service.name}</h3>
            <Link href={`/services/${service.slug}`} className={styles.ctaButton}>
              Learn More
            </Link>
          </div>
        ))}
      </div>
      {modalOpen && <ImageModal image={modalImg} onClose={closeModal} />}
    </section>
  );
}
