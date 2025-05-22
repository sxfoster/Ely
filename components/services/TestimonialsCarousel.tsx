import React from 'react'

export interface Testimonial { name: string; quote: string; image: string }
export interface TestimonialsCarouselProps { testimonials: Testimonial[] }

export const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({ testimonials }) => (
  <section>
    <h2>Testimonials</h2>
    <div>
      {testimonials.map((t, i) => (
        <blockquote key={i}>
          <p>“{t.quote}”</p>
          <footer>- {t.name}</footer>
        </blockquote>
      ))}
    </div>
  </section>
)
