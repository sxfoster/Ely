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
    question: 'What is a Skinbetter Peel?',
    answer: 'The Skinbetter Peel is a professional chemical exfoliation treatment designed to refresh and brighten your skin with minimal irritation. It targets uneven tone, fine lines, and dullness.'
  },
  {
    question: 'Will my skin peel after this treatment?',
    answer: 'Some clients may experience light flaking or mild peeling 2\u20134 days after treatment. Many see a healthy glow without visible peeling.'
  },
  {
    question: 'How soon will I see results?',
    answer: 'Results\u2014such as smoother, more radiant skin\u2014can often be seen within a week, with continued improvement over time.'
  },
  {
    question: 'Is there any downtime?',
    answer: 'Minimal. You may experience slight redness or tightness for a day or two. Most clients return to normal activities immediately.'
  },
  {
    question: 'Can all skin types get a Skinbetter Peel?',
    answer: 'Yes, but your esthetician will assess your skin during your consultation to ensure it\u2019s the right fit.'
  },
  {
    question: 'How often can I get this peel?',
    answer: 'For best results, we recommend a series spaced 4\u20136 weeks apart, based on your provider\u2019s advice.'
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
