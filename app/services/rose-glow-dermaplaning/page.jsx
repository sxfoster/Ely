import AccordionFAQ from '@/components/AccordionFAQ'
import Nav from '../../components/Nav'
import styles from '../ServicePage.module.css';

// About text for this service
const aboutText = `Dermaplaning gently exfoliates dead skin cells and removes fine hair, revealing a smoother, brighter complexion.`

// Key benefits for this service
const benefits = [
  'Removes peach fuzz',
  'Improves product absorption',
  'Instantly brighter skin'
]


const description = [
  'Dermaplaning gently exfoliates dead skin cells and removes fine hair, revealing a smoother, brighter complexion.'
]

const testimonial = {
  text: "Best facial I've had—my makeup glides on flawlessly!",
  author: 'Melissa T.'
}
const roseGlowDermaplaningFAQs = [
  {
    q: 'What is dermaplaning?',
    a: 'Dermaplaning gently exfoliates the skin\u2019s surface and removes peach fuzz using a specialized blade, leaving your skin ultra-smooth and radiant.'
  },
  {
    q: 'Does it hurt or cause cuts?',
    a: 'No, the treatment is painless when performed by a trained professional. You may feel a gentle scraping sensation.'
  },
  {
    q: 'Will my hair grow back thicker?',
    a: 'No\u2014dermaplaning does not change hair growth patterns or thickness.'
  },
  {
    q: 'How often should I get dermaplaning?',
    a: 'Many clients enjoy a treatment every 4\u20136 weeks, but your provider can recommend the best schedule.'
  },
  {
    q: 'What should I avoid after treatment?',
    a: 'Skip harsh scrubs or actives for a few days and apply sunscreen daily.'
  }
]


export const metadata = {
  title: 'Rose Glow Dermaplaning Facial | Ely Aesthetics'
}

export default function RoseGlowDermaplaningPage() {
  return (
    <div className="service-page">
      <Nav />

      <div className="service-content container">
        <section className={styles.aboutSection}>
          <h2>About Rose Glow Dermaplaning Facial</h2>
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
          <img src="/images/services/rose-glow-dermaplaning-beforeafter.jpg" alt="Before and after Rose Glow Dermaplaning Facial result" />
        </figure>

        {roseGlowDermaplaningFAQs.length > 0 && (
          <section className={styles.faqSection}>
            <h2>Frequently Asked Questions</h2>
            <AccordionFAQ faqs={roseGlowDermaplaningFAQs} />
          </section>
        )}

        <section className="testimonial">
          <blockquote>{testimonial.text}</blockquote>
          <cite>- {testimonial.author}</cite>
        </section>
      </div>

      <div className="sticky-cta">
        <button
          className="btn btn-primary js-open-booking-dialog"
          aria-label="Open booking instructions"
        >
          Book Now
        </button>
      </div>
    </div>
  )
}
