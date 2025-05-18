'use client'
import { useEffect, useRef } from 'react'
import styles from './SocialSection.module.css'

export default function SocialSection() {
  const listRef = useRef(null)

  // Instagram embed script loader
  useEffect(() => {
    if (!window.instgrm) {
      const script = document.createElement('script')
      script.src = '//www.instagram.com/embed.js'
      script.async = true
      document.body.appendChild(script)
    } else {
      window.instgrm.Embeds.process()
    }
  }, [])

  const scrollByWidth = (direction) => {
    if (!listRef.current) return
    const { clientWidth } = listRef.current
    listRef.current.scrollBy({
      left: direction === 'next' ? clientWidth : -clientWidth,
      behavior: 'smooth',
    })
  }

  return (
    <section id="social" className="social-carousel container">
      <h2>From Our Instagram</h2>

      {/* Carousel wrapper */}
      <div className={styles['reel-carousel']}>
        <button
            className={`${styles['carousel-nav']} ${styles.prev}`}
            aria-label="Previous Reels"
            onClick={() => scrollByWidth('prev')}
        >
          ‹
        </button>

        <div ref={listRef} className={styles['reel-list']}>
          {/* Reel embeds */}
          <div className={styles['reel-card']}>
            <blockquote
              className="instagram-media"
              data-instgrm-permalink="https://www.instagram.com/reel/DJp5vhGv24j/"
              data-instgrm-version="14"
              style={{
                background: '#FFF', border: 0, margin: '1px',
                maxWidth: '540px', width: '100%',
              }}
            >
              <a href="https://www.instagram.com/reel/DJp5vhGv24j/"></a>
            </blockquote>
          </div>
          <div className={styles['reel-card']}>
            <blockquote
              className="instagram-media"
              data-instgrm-permalink="https://www.instagram.com/reel/DJVf1vGpbSg/"
              data-instgrm-version="14"
              style={{
                background: '#FFF', border: 0, margin: '1px',
                maxWidth: '540px', width: '100%',
              }}
            >
              <a href="https://www.instagram.com/reel/DJVf1vGpbSg/"></a>
            </blockquote>
          </div>
          <div className={styles['reel-card']}>
            <blockquote
              className="instagram-media"
              data-instgrm-permalink="https://www.instagram.com/reel/DFGGahHPpNX/"
              data-instgrm-version="14"
              style={{
                background: '#FFF', border: 0, margin: '1px',
                maxWidth: '540px', width: '100%',
              }}
            >
              <a href="https://www.instagram.com/reel/DFGGahHPpNX/"></a>
            </blockquote>
          </div>
          <div className={styles['reel-card']}>
            <blockquote
              className="instagram-media"
              data-instgrm-permalink="https://www.instagram.com/reel/DEyprVYR2jy/"
              data-instgrm-version="14"
              style={{
                background: '#FFF', border: 0, margin: '1px',
                maxWidth: '540px', width: '100%',
              }}
            >
              <a href="https://www.instagram.com/reel/DEyprVYR2jy/"></a>
            </blockquote>
          </div>
        </div>

        <button
            className={`${styles['carousel-nav']} ${styles.next}`}
            aria-label="Next Reels"
            onClick={() => scrollByWidth('next')}
        >
          ›
        </button>
      </div>
    </section>
  )
}