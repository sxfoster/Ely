'use client'
import { useEffect, useRef } from 'react'
import styles from './InstagramCarousel.module.css'

const posts = [
  {
    id: 1,
    permalink: 'https://www.instagram.com/p/ABC123/',
    caption: 'Amazing results from our peel treatment.'
  },
  {
    id: 2,
    permalink: 'https://www.instagram.com/p/DEF456/',
    caption: 'Behind the scenes in the spa.'
  },
  {
    id: 3,
    permalink: 'https://www.instagram.com/p/GHI789/',
    caption: 'Fresh products just arrived!'
  }
]

export default function InstagramCarousel() {
  const listRef = useRef(null)

  // Load Instagram embed script once on mount
  useEffect(() => {
    if (!window.instgrm) {
      const s = document.createElement('script')
      s.src = '//www.instagram.com/embed.js'
      s.async = true
      s.onload = () => window.instgrm?.Embeds?.process()
      document.body.appendChild(s)
    } else {
      window.instgrm.Embeds.process()
    }
  }, [])

  const scroll = (dir) => {
    if (!listRef.current) return
    const w = listRef.current.clientWidth
    listRef.current.scrollBy({ left: dir === 'next' ? w : -w, behavior: 'smooth' })
  }

  return (
    <section id="instagram" className="instagram-carousel container">
      <h2>Latest on Instagram</h2>
      <div className={styles.wrapper}>
        <button
          className={`${styles.nav} ${styles.prev}`}
          onClick={() => scroll('prev')}
          aria-label="Previous posts"
        >
          ‹
        </button>

        <div className={styles.list} ref={listRef}>
          {posts.map(post => (
            <article key={post.id} className={styles.card}>
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={post.permalink}
                data-instgrm-version="14"
                style={{
                  background: '#FFF',
                  border: 0,
                  margin: '1px',
                  maxWidth: '540px',
                  width: '100%'
                }}
              >
                <a href={post.permalink}></a>
              </blockquote>
              <p className={styles.caption}>{post.caption}</p>
            </article>
          ))}
        </div>

        <button
          className={`${styles.nav} ${styles.next}`}
          onClick={() => scroll('next')}
          aria-label="Next posts"
        >
          ›
        </button>
      </div>
    </section>
  )
}
