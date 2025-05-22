import React from 'react'

export interface GalleryProps {
  images: string[]
}

export const Gallery: React.FC<GalleryProps> = ({ images }) => (
  <section>
    <h2>Before & After</h2>
    <div>
      {images.map((src, i) => (<img key={i} src={src} alt="Service gallery image" />))}
    </div>
  </section>
)
