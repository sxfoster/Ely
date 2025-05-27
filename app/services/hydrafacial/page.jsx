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
    question: 'What is a Platinum Hydrafacial?',
    answer: 'The Platinum Hydrafacial is an advanced, multi-step facial treatment that cleanses, extracts, hydrates, and nourishes your skin in one session.'
  },
  {
    question: 'Is there any discomfort during the Hydrafacial?',
    answer: 'Most clients find it relaxing and pain-free, with a gentle suction and cool hydration.'
  },
  {
    question: 'How long do results last?',
    answer: 'Skin appears fresh and glowing for a week or more. Regular treatments help maintain optimal skin health.'
  },
  {
    question: 'Is this treatment safe for sensitive skin?',
    answer: 'Yes! The Hydrafacial can be customized for sensitive or problem-prone skin.'
  },
  {
    question: 'Can I wear makeup after?',
    answer: 'It\u2019s best to wait a few hours, but most clients can apply makeup later the same day.'
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
