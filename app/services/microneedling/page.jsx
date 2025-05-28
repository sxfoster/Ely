import AccordionFAQ from '@/components/AccordionFAQ'
import Nav from '../../components/Nav'
import styles from './ServicePage.module.css'

// About text for Microneedling
const aboutText = `Our Microneedling treatment, also known as Collagen Induction Therapy, is a highly effective method that tightens, restores, rejuvenates, and diminishes the signs of aging using our medical grade, FDA approved Skinpen. By creating thousands of micro-channels to puncture the skin, this treatment ensures even and luminous healed skin. Recommended in a series of three sessions, 4 weeks apart.`;

// Key benefits for Microneedling
const benefits = [
  "Stimulates natural collagen production",
  "Improves skin texture and tone",
  "Reduces appearance of fine lines and wrinkles",
  "Enhances absorption of serums and skincare products"
]

const bookingUrl = 'https://mysite.vagaro.com/sweetcreamandrose/book-now'

const description = [
  'Microneedling stimulates collagen production, improving skin texture and reducing fine lines for a youthful appearance.'
]

const testimonial = {
  text: 'Microneedling with Elyzia transformed my acne scars!',
  author: 'Sofia R.'
}

const microneedlingFAQs = [
  {
    q: 'What is microneedling?',
    a: 'Microneedling is a minimally invasive skin treatment that uses fine needles to create micro-channels in the skin, stimulating your body\u2019s natural collagen production and promoting smoother, firmer, and more even-toned skin.'
  },
  {
    q: 'Does microneedling hurt?',
    a: 'Most clients describe the sensation as mild and tolerable. A topical numbing cream is applied before treatment to ensure your comfort.'
  },
  {
    q: 'How many sessions will I need?',
    a: 'While many clients see visible improvements after just one session, a series of 3\u20136 treatments spaced about 4\u20136 weeks apart is recommended for optimal results.'
  },
  {
    q: 'What is the downtime after microneedling?',
    a: 'Downtime is minimal. You may experience mild redness, sensitivity, or swelling for 1\u20133 days post-treatment, similar to a light sunburn.'
  },
  {
    q: 'When will I see results?',
    a: 'Many clients notice improved skin texture and glow within a week, with continued improvement as collagen production increases over the following weeks.'
  },
  {
    q: 'Are there any side effects?',
    a: 'Temporary redness, sensitivity, or slight swelling are common but subside quickly. Your esthetician will review all aftercare and safety guidelines with you.'
  },
  {
    q: 'Is microneedling safe for all skin types?',
    a: 'Yes! Microneedling is safe and effective for most skin types and tones. A consultation will help determine the best approach for your unique needs.'
  },
  {
    q: 'What should I avoid after microneedling?',
    a: 'Avoid direct sun exposure, heavy makeup, and active skincare ingredients (like retinol or acids) for a few days. Your provider will share detailed aftercare instructions.'
  },
  {
    q: 'Can I combine microneedling with other treatments?',
    a: 'Absolutely! Many clients combine microneedling with facials or peels for enhanced results. Your esthetician can recommend a custom plan.'
  }
]

export const metadata = {
  title: 'Microneedling | Ely Aesthetics'
}

export default function MicroneedlingPage() {
  return (
    <div className="service-page">
      <Nav />

      <div className="service-content container">
        <section className={styles.aboutSection}>
          <h2>About Microneedling</h2>
          <p>{aboutText}</p>
        </section>

        <section className={styles.benefitsSection}>
          <h2>Key Benefits</h2>
          <ul className={styles.benefitsList}>
            {benefits.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </section>

        <section>
          {description.map((p, i) => <p key={i}>{p}</p>)}
        </section>

        <figure className="before-after">
          <img src="/images/services/microneedling-beforeafter.jpg" alt="Before and after Microneedling result" />
        </figure>

        {microneedlingFAQs.length > 0 && (
          <section className={styles.faqSection}>
            <h2>Frequently Asked Questions</h2>
            <AccordionFAQ faqs={microneedlingFAQs} />
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
