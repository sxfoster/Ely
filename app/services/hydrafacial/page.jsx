import AccordionFAQ from '@/components/AccordionFAQ'
import Nav from '../../components/Nav'

const bookingUrl = 'https://mysite.vagaro.com/sweetcreamandrose/book-now'

const benefits = [
  'Deeply cleanses pores',
  'Hydrates and plumps',
  'Delivers antioxidants'
]

const description = [
  'Hydrafacials deeply cleanse, exfoliate, and hydrate the skin, effectively addressing acne, dryness, and signs of aging.'
]

const testimonial = {
  text: 'My skin has never looked better after a Hydrafacial!',
  author: 'Jason P.'
}
const hydrafacialFAQs = [
  {
    q: 'What is a Platinum Hydrafacial?',
    a: 'The Platinum Hydrafacial is an advanced, multi-step facial treatment that cleanses, extracts, hydrates, and nourishes your skin in one session.'
  },
  {
    q: 'Is there any discomfort during the Hydrafacial?',
    a: 'Most clients find it relaxing and pain-free, with a gentle suction and cool hydration.'
  },
  {
    q: 'How long do results last?',
    a: 'Skin appears fresh and glowing for a week or more. Regular treatments help maintain optimal skin health.'
  },
  {
    q: 'Is this treatment safe for sensitive skin?',
    a: 'Yes! The Hydrafacial can be customized for sensitive or problem-prone skin.'
  },
  {
    q: 'Can I wear makeup after?',
    a: 'It\u2019s best to wait a few hours, but most clients can apply makeup later the same day.'
  }
]


export const metadata = {
  title: 'Platinum Hydrafacial | Ely Aesthetics'
}

export default function HydrafacialPage() {
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
          <img src="/images/services/hydrafacial-beforeafter.jpg" alt="Before and after Platinum Hydrafacial result" />
        </figure>

        {hydrafacialFAQs.length > 0 && (
          <section>
            <h2 className="faq-heading">Frequently Asked Questions</h2>
            <AccordionFAQ faqs={hydrafacialFAQs} />
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
