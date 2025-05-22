import React from 'react'

export interface Testimonial { name: string; quote: string; image: string }
export interface TestimonialsCarouselProps { testimonials: Testimonial[] }

export const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({ testimonials }) => (
  <section className="py-12 px-6 lg:px-8 bg-gray-50">
    <h2 className="text-2xl font-semibold text-center mb-8">Testimonials</h2>
    <div className="space-y-8 max-w-2xl mx-auto">
      {testimonials.map((t, i) => (
        <blockquote key={i} className="text-center">
          <p className="italic text-gray-700 mb-2">“{t.quote}”</p>
          <footer className="text-sm font-medium text-gray-900">- {t.name}</footer>
        </blockquote>
      ))}
    </div>
  </section>
)
