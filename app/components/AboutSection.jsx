'use client'
import styles from './AboutSection.module.css'

export default function AboutSection() {
  return (
    <section id="about" className={`about-section container ${styles.about}`}> 
      <div className={styles.image}>
        <img src="/images/ely_headshot.jpg" alt="Ely Aesthetics owner" />
      </div>
      <div className={styles.content}>
        <h2>About Ely Aesthetics</h2>
        <p>
          Led by licensed esthetician Elyzia Reyes, Ely Aesthetics provides
          personalized skin treatments that combine modern techniques with a
          relaxing spa experience. Our Yuma studio is dedicated to helping you
          reveal your most radiant self.
        </p>
      </div>
    </section>
  )
}
