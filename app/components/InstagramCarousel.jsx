'use client'
import { useRef } from 'react'
import styles from './InstagramCarousel.module.css'

const posts = [
  {
    id: 1,
    image: 'https://via.placeholder.com/600x600.png?text=Post+1',
    caption: 'Amazing results from our peel treatment.',
    link: 'https://www.instagram.com/p/ABC123/'
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/600x600.png?text=Post+2',
    caption: 'Behind the scenes in the spa.',
    link: 'https://www.instagram.com/p/DEF456/'
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/600x600.png?text=Post+3',
    caption: 'Fresh products just arrived!',
    link: 'https://www.instagram.com/p/GHI789/'
  }
]

export default function InstagramCarousel() {
  const listRef = useRef(null)

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
              <a href={post.link} target="_blank" rel="noopener noreferrer">
                <img src={post.image} alt={post.caption} />
              </a>
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
