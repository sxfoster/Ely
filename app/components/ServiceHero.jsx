'use client';

import React from 'react';
import styles from './ServiceHero.module.css';

export default function ServiceHero({
  serviceName,
  headline,
  description,
  imageSrc,
  imageAlt,
  ctaText = "Book Now",
  ctaHref = "#",
}) {
  return (
    <section className={styles.serviceHero}>
      <h1 className={styles.heroTitle}>{serviceName}</h1>
      <h2 className={styles.heroHeadline}>{headline}</h2>
      <p className={styles.heroDesc}>{description}</p>
      <div className={styles.heroImageWrapper}>
        <img
          src={imageSrc}
          alt={imageAlt}
          className={styles.heroImage}
          loading="eager"
        />
        <div className={styles.heroImageOverlay} aria-hidden="true"></div>
      </div>
      <a
        href={ctaHref}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.btnPrimary}
        aria-label={ctaText}
      >
        {ctaText}
      </a>
    </section>
  );
}
