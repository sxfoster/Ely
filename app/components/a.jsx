'use client'
import { useEffect } from 'react'

export default function SocialSection() {
  useEffect(() => {
    // Only load Instagram’s embed.js if not already present
    if (!window.instgrm) {
      const script = document.createElement('script')
      script.src = '//www.instagram.com/embed.js'
      script.async = true
      script.onload = () => {
        if (window.instgrm?.Embeds?.process) {
          window.instgrm.Embeds.process()
        }
      }
      document.body.appendChild(script)
    } else {
      // If script already loaded, parse the embeds
      window.instgrm.Embeds.process()
    }
  }, [])

  return (
    <section id="social" className="social-carousel container">
      <h2>From Our Instagram</h2>
      <div className="reel-list">
        {/* Repeat for each Reel */}
        <div className="reel-card">
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/reel/DJp5vhGv24j/?utm_source=ig_embed&amp;utm_campaign=loading"
            data-instgrm-version="14"
            style={{ background: '#FFF', border: 0, margin: '1px', maxWidth: '540px', width: '100%' }}
          >
            <a href="https://www.instagram.com/reel/DJp5vhGv24j/"></a>
          </blockquote>
        </div>

        <div className="reel-card">
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/reel/DJVf1vGpbSg/?utm_source=ig_embed&amp;utm_campaign=loading"
            data-instgrm-version="14"
            style={{ background: '#FFF', border: 0, margin: '1px', maxWidth: '540px', width: '100%' }}
          >
            <a href="https://www.instagram.com/reel/DJVf1vGpbSg/"></a>
          </blockquote>
        </div>

        <div className="reel-card">
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/reel/DFGGahHPpNX/?utm_source=ig_embed&amp;utm_campaign=loading"
            data-instgrm-version="14"
            style={{ background: '#FFF', border: 0, margin: '1px', maxWidth: '540px', width: '100%' }}
          >
            <a href="https://www.instagram.com/reel/DFGGahHPpNX/"></a>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
