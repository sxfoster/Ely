import AccordionFAQ from '@/components/AccordionFAQ'
import Nav from '../../components/Nav'

const bookingUrl = 'https://mysite.vagaro.com/sweetcreamandrose/book-now'

const benefits = [
  'Peptide-rich formulation',
  'Softens fine lines',
  'Boosts radiance'
]

const description = [
  'This treatment pairs mild exfoliation with powerful peptides to promote firm, supple skin.',
  'Regular sessions smooth wrinkles and even out tone.'
]

const testimonial = {
  text: 'I love how smooth my skin feels!',
  author: 'Lily S.'
}
const antiAgePeptidePeelFAQs = [
  {
    q: 'What makes the Peptide Peel unique?',
    a: 'This treatment blends rejuvenating peptides with gentle exfoliation to target signs of aging\u2014like fine lines and uneven tone\u2014while being kind to sensitive skin.'
  },
  {
    q: 'Will it irritate my skin?',
    a: 'Most clients experience only mild redness or tingling. The formula is designed to be effective yet gentle.'
  },
  {
    q: 'How many sessions will I need?',
    a: 'While improvement is visible after one treatment, a series of sessions maximizes anti-aging results.'
  },
  {
    q: 'Can I combine the Peptide Peel with other facials?',
    a: 'Yes! Your esthetician can build a custom plan to combine peels with other services for optimal results.'
  },
  {
    q: 'What aftercare is required?',
    a: 'Avoid sun exposure and active skincare for several days. Use gentle cleanser, moisturizer, and sunscreen as directed.'
  }
]

export const metadata = {
  title: 'Anti-Age Peptide Peel | Ely Aesthetics'
}

export default function AntiAgePeptidePeelPage() {
  return (
    <div className="service-page">
      <Nav />
      <section className="service-hero">
        <img src="/images/services/anti-age-peptide-peel-hero.jpg" alt="Anti-Age Peptide Peel" className="hero-image" />
        <div className="hero-content">
          <h1>Anti-Age Peptide Peel</h1>
          <p>Gentle exfoliation with age-defying peptides</p>
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
          <img src="/images/services/anti-age-peptide-peel-beforeafter.jpg" alt="Before and after Anti-Age Peptide Peel result" />
        </figure>

        {antiAgePeptidePeelFAQs.length > 0 && (
          <section>
            <h2 className="faq-heading">Frequently Asked Questions</h2>
            <AccordionFAQ faqs={antiAgePeptidePeelFAQs} />
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
