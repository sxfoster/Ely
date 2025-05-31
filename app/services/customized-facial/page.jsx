import AccordionFAQ from '@/components/AccordionFAQ'
import Nav from '../../components/Nav'
import styles from '../ServicePage.module.css';

// About text for this service
const aboutText = `Designed to cater specifically to your skin's unique needs and concerns. Our custom facial includes a skin analysis, a purifying double cleanse, exfoliation will remove dead skin as well as soften the skin with steam and warming towels. Extractions will remove any noticeable clogged pores. A soothing & nourishing mask while receiving a relaxing shoulder and scalp massage to promote circulation will leave you feeling refreshed & rejuvenated.`

// Key benefits for this service
const benefits = [
  'Tailored to your needs',
  'Includes relaxing massage',
  'Targets hydration or blemishes'
]

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
        <section className={styles.aboutSection}>
          <h2>Customized Facial</h2>
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

        {customizedFacialFAQs.length > 0 && (
          <section className={styles.faqSection}>
            <h2>Frequently Asked Questions</h2>
            <AccordionFAQ faqs={customizedFacialFAQs} />
          </section>
        )}
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
