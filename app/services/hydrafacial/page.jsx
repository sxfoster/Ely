import AccordionFAQ from '@/components/AccordionFAQ'
import Nav from '../../components/Nav'
import styles from '../ServicePage.module.css';

// About text for this service
const aboutText = `Hydrafacials deeply cleanse, exfoliate, and hydrate the skin, effectively addressing acne, dryness, and signs of aging.`

// Key benefits for this service
const benefits = [
  'Deeply cleanses pores',
  'Hydrates and plumps',
  'Delivers antioxidants'
]

const bookingUrl = 'https://mysite.vagaro.com/sweetcreamandrose/book-now'

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
        <section className={styles.aboutSection}>
          <h2>About Platinum Hydrafacial</h2>
          <p>{aboutText}</p>
        </section>
        <section className={styles.benefitsSection}>
          <h2 className={styles.benefitsTitle}>Key Benefits</h2>
          <ul className={styles.benefitsList}>
            {benefits.map((b) => (
              <li key={b} className={styles.benefitItem}>
                <svg
                  className={styles.benefitIcon}
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 16.17l-3.5-3.5L4 14.17 9 19.17 20 8.17 18.59 6.75z" />
                </svg>
                <span className={styles.benefitText}>{b}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          {description.map((p, i) => <p key={i}>{p}</p>)}
        </section>

        <figure className="before-after">
          <img src="/images/services/hydrafacial-beforeafter.jpg" alt="Before and after Platinum Hydrafacial result" />
        </figure>

        {hydrafacialFAQs.length > 0 && (
          <section className={styles.faqSection}>
            <h2>Frequently Asked Questions</h2>
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
