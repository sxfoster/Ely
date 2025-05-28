import AccordionFAQ from '@/components/AccordionFAQ'
import Nav from '../../components/Nav'

const bookingUrl = 'https://mysite.vagaro.com/sweetcreamandrose/book-now'

const benefits = [
  'Tailored to your needs',
  'Includes relaxing massage',
  'Targets hydration or blemishes'
]

const description = [
  'Tailored facials combining various treatments to address individual skin concerns and enhance overall skin health.'
]

const testimonial = {
  text: 'Elyzia always knows exactly what my skin needs!',
  author: 'Carmen L.'
}
const customizedFacialFAQs = [
  {
    q: 'What is included in a Customized Facial?',
    a: 'Your treatment is tailored to your unique skin needs, using professional products and techniques selected by your esthetician after consultation.'
  },
  {
    q: 'How is this different from other facials?',
    a: 'Each session is unique\u2014no two treatments are the same. We select the right exfoliation, mask, and hydration steps just for you.'
  },
  {
    q: 'Can it address specific concerns like acne or dryness?',
    a: 'Absolutely! Your facial is personalized to target your goals, whether that\u2019s acne, dehydration, aging, or dullness.'
  },
  {
    q: 'How often should I get a Customized Facial?',
    a: 'We recommend monthly visits for most clients, but your provider will suggest what\u2019s best for you.'
  },
  {
    q: 'Is this treatment safe for all skin types?',
    a: 'Yes, all skin types and tones are welcome.'
  }
]


export const metadata = {
  title: 'Customized Facial | Ely Aesthetics'
}

export default function CustomizedFacialPage() {
  return (
    <div className="service-page">
      <Nav />

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
          <img src="/images/services/customized-facial-beforeafter.jpg" alt="Before and after Customized Facial result" />
        </figure>

        {customizedFacialFAQs.length > 0 && (
          <section>
            <h2 className="faq-heading">Frequently Asked Questions</h2>
            <AccordionFAQ faqs={customizedFacialFAQs} />
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
