import AccordionFAQ from '@components/AccordionFAQ'
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
    question: 'What is microneedling?',
    answer: 'Microneedling is a minimally invasive skin treatment that uses fine needles to create micro-channels in the skin, stimulating your body\u2019s natural collagen production and promoting smoother, firmer, and more even-toned skin.'
  },
  {
    question: 'Does microneedling hurt?',
    answer: 'Most clients describe the sensation as mild and tolerable. A topical numbing cream is applied before treatment to ensure your comfort.'
  },
  {
    question: 'How many sessions will I need?',
    answer: 'While many clients see visible improvements after just one session, a series of 3\u20136 treatments spaced about 4\u20136 weeks apart is recommended for optimal results.'
  },
  {
    question: 'What is the downtime after microneedling?',
    answer: 'Downtime is minimal. You may experience mild redness, sensitivity, or swelling for 1\u20133 days post-treatment, similar to a light sunburn.'
  },
  {
    question: 'When will I see results?',
    answer: 'Many clients notice improved skin texture and glow within a week, with continued improvement as collagen production increases over the following weeks.'
  },
  {
    question: 'Are there any side effects?',
    answer: 'Temporary redness, sensitivity, or slight swelling are common but subside quickly. Your esthetician will review all aftercare and safety guidelines with you.'
  },
  {
    question: 'Is microneedling safe for all skin types?',
    answer: 'Yes! Microneedling is safe and effective for most skin types and tones. A consultation will help determine the best approach for your unique needs.'
  },
  {
    question: 'What should I avoid after microneedling?',
    answer: 'Avoid direct sun exposure, heavy makeup, and active skincare ingredients (like retinol or acids) for a few days. Your provider will share detailed aftercare instructions.'
  },
  {
    question: 'Can I combine microneedling with other treatments?',
    answer: 'Absolutely! Many clients combine microneedling with facials or peels for enhanced results. Your esthetician can recommend a custom plan.'
  }
]

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

        <section>
          <h2 className="faq-heading">Frequently Asked Questions</h2>
          <AccordionFAQ items={microneedlingFAQs.map(faq => ({ q: faq.question, a: faq.answer }))} />
        </section>

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
