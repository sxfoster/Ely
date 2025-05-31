import AccordionFAQ from '@/components/AccordionFAQ'
import Nav from '../../components/Nav'
import styles from '../ServicePage.module.css';

// About text for this service
const aboutText = `The Platinum HydraFacial is the ultimate Treatment. It starts with Dermaplaning to remove all the peach fuzz. Lymphatic drainage is used to improve immune function while reducing fine lines and wrinkles. This HydraFacial includes everything a deluxe treatment offers. While addressing your specific skin concerns. We conclude with LED light therapy to help banish the signs of aging, along with scalp massage.`

// Key benefits for this service
const benefits = [
  'Deeply cleanses pores',
  'Hydrates and plumps',
  'Delivers antioxidants'
]


const hydrafacialFAQs = [
  {
    q: 'What is a HydraFacial?',
    a: 'A HydraFacial is a non-invasive, multi-step treatment that cleanses, exfoliates, extracts, hydrates and protects the skin with antioxidants, leaving it radiant without downtime.'
  },
  {
    q: 'How does a HydraFacial work?',
    a: 'The procedure includes cleansing and exfoliation, a gentle acid peel, painless suction extractions and infusion of hydrating serums using vortex-fusion technology.'
  },
  {
    q: 'What skin concerns can a HydraFacial address?',
    a: 'HydraFacials can improve fine lines, firmness, tone, texture, brown spots, oily or congested skin and enlarged pores.'
  },
  {
    q: 'Is a HydraFacial suitable for all skin types?',
    a: 'Yes. It can be customized for any skin type, even sensitive skin, by adjusting the serums and exfoliation levels.'
  },
  {
    q: 'How often should I get a HydraFacial?',
    a: 'Many professionals recommend a treatment every four to six weeks, though ideal frequency depends on your skin.'
  },
  {
    q: 'What should I expect during a HydraFacial treatment?',
    a: 'A session lasts about 30\u201360 minutes and feels like a cool paintbrush on the skin. There is no downtime afterwards.'
  },
  {
    q: 'Are there any side effects?',
    a: 'Side effects are minimal. You might notice slight redness right after treatment but it fades quickly, and irritation or peeling is uncommon.'
  },
  {
    q: 'Can I combine a HydraFacial with other treatments?',
    a: 'Yes. HydraFacials often pair well with treatments like chemical peels, microdermabrasion or LED therapy. Ask your provider for a tailored plan.'
  },
  {
    q: 'How much does a HydraFacial cost?',
    a: 'Prices vary by clinic and location but typically range from $150 to $300 per session, with package deals lowering the per-treatment cost.'
  },
  {
    q: 'What results can I expect from a HydraFacial?',
    a: 'You can see smoother texture, smaller pores and a radiant glow immediately. Regular treatments promote long-term skin health.'
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
          <h2>Platinum Hydrafacial</h2>
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

        {hydrafacialFAQs.length > 0 && (
          <section className={styles.faqSection}>
            <h2>Frequently Asked Questions</h2>
            <AccordionFAQ faqs={hydrafacialFAQs} />
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
