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
    question: 'What is dermaplaning?',
    answer: 'Dermaplaning gently exfoliates the skin\u2019s surface and removes peach fuzz using a specialized blade, leaving your skin ultra-smooth and radiant.'
  },
  {
    question: 'Does it hurt or cause cuts?',
    answer: 'No, the treatment is painless when performed by a trained professional. You may feel a gentle scraping sensation.'
  },
  {
    question: 'Will my hair grow back thicker?',
    answer: 'No\u2014dermaplaning does not change hair growth patterns or thickness.'
  },
  {
    question: 'How often should I get dermaplaning?',
    answer: 'Many clients enjoy a treatment every 4\u20136 weeks, but your provider can recommend the best schedule.'
  },
  {
    question: 'What should I avoid after treatment?',
    answer: 'Skip harsh scrubs or actives for a few days and apply sunscreen daily.'
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
