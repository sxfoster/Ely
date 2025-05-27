import AccordionFAQ from '@/components/AccordionFAQ'
import Nav from '../../components/Nav'

const bookingUrl = 'https://mysite.vagaro.com/sweetcreamandrose/book-now'

const benefits = [
  'Stimulates collagen production',
  'Minimizes scars and pores',
  'Smooths fine lines'
]

const description = [
  'Tailored facials combining various treatments to address individual skin concerns and enhance overall skin health.'
]

const testimonial = {
  text: 'Microneedling with Elyzia transformed my acne scars!',
  author: 'Sofia R.'
}

const microneedlingFAQs = [
  {
    question: 'What is included in a Customized Facial?',
    answer: 'Your treatment is tailored to your unique skin needs, using professional products and techniques selected by your esthetician after consultation.'
  },
  {
    question: 'How is this different from other facials?',
    answer: 'Each session is unique\u2014no two treatments are the same. We select the right exfoliation, mask, and hydration steps just for you.'
  },
  {
    question: 'Can it address specific concerns like acne or dryness?',
    answer: 'Absolutely! Your facial is personalized to target your goals, whether that\u2019s acne, dehydration, aging, or dullness.'
  },
  {
    question: 'How often should I get a Customized Facial?',
    answer: 'We recommend monthly visits for most clients, but your provider will suggest what\u2019s best for you.'
  },
  {
    question: 'Is this treatment safe for all skin types?',
    answer: 'Yes, all skin types and tones are welcome.'
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
