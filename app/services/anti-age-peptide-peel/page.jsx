import AccordionFAQ from '@/components/AccordionFAQ'
import Nav from '../../components/Nav'

const bookingUrl = 'https://mysite.vagaro.com/sweetcreamandrose/book-now'

const benefits = [
  'Stimulates collagen production',
  'Minimizes scars and pores',
  'Smooths fine lines'
]

const description = [
  "Microneedling uses tiny needles to trigger your skin's natural healing response for a firmer, more even complexion.",
  'Treatments are comfortable with numbing cream and have minimal downtime.'
]

const testimonial = {
  text: 'Microneedling with Elyzia transformed my acne scars!',
  author: 'Sofia R.'
}

const microneedlingFAQs = [
  {
    question: 'What makes the Peptide Peel unique?',
    answer: 'This treatment blends rejuvenating peptides with gentle exfoliation to target signs of aging\u2014like fine lines and uneven tone\u2014while being kind to sensitive skin.'
  },
  {
    question: 'Will it irritate my skin?',
    answer: 'Most clients experience only mild redness or tingling. The formula is designed to be effective yet gentle.'
  },
  {
    question: 'How many sessions will I need?',
    answer: 'While improvement is visible after one treatment, a series of sessions maximizes anti-aging results.'
  },
  {
    question: 'Can I combine the Peptide Peel with other facials?',
    answer: 'Yes! Your esthetician can build a custom plan to combine peels with other services for optimal results.'
  },
  {
    question: 'What aftercare is required?',
    answer: 'Avoid sun exposure and active skincare for several days. Use gentle cleanser, moisturizer, and sunscreen as directed.'
  }
]

const serviceFAQs = microneedlingFAQs.map(faq => ({ q: faq.question, a: faq.answer }))

export const metadata = {
  title: 'Microneedling | Ely Aesthetics'
}

export default function MicroneedlingPage() {
  return (
    <div className="service-page">
      <Nav />
      <section className="service-hero">
        <img src="/images/services/microneedling-hero.jpg" alt="Microneedling" className="hero-image" />
        <div className="hero-content">
          <h1>Microneedling</h1>
          <p>Stimulate collagen for smoother skin</p>
        </div>
      </section>

      <div className="service-content container">
        <section>
          <h2>Key Benefits</h2>
          <ul>
            {benefits.map((b) => <li key={b}>{b}</li>)}
          </ul>
        </section>

        <section>
          {description.map((p, i) => <p key={i}>{p}</p>)}
        </section>

        <figure className="before-after">
          <img src="/images/services/microneedling-beforeafter.jpg" alt="Before and after Microneedling result" />
        </figure>

        {serviceFAQs.length > 0 && (
          <section>
            <h2 className="faq-heading">Frequently Asked Questions</h2>
            <AccordionFAQ faqs={serviceFAQs} />
          </section>
        )}

        <section className="testimonial">
          <blockquote>{testimonial.text}</blockquote>
          <cite>- {testimonial.author}</cite>
        </section>
      </div>

      <div className="sticky-cta">
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          aria-label="Book this service on Vagaro"
        >
          Book Now
        </a>
      </div>
    </div>
  )
}
