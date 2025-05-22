import React from 'react'

export interface GalleryProps {
  images: string[]
}

export const Gallery: React.FC<GalleryProps> = ({ images }) => (
  <section className="py-12 px-6 lg:px-8">
    <h2 className="text-2xl font-semibold text-center mb-8">Before & After</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {images.map((src, i) => (
        <div key={i} className="overflow-hidden rounded-lg">
          <img
            src={src}
            alt="Before and after result"
            className="w-full h-auto object-cover hover:scale-105 transition"
          />
        </div>
      ))}
    </div>
  </section>
)
