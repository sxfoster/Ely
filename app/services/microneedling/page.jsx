import AccordionFAQ from '@/components/AccordionFAQ'
import Nav from '../../components/Nav'
import styles from '../ServicePage.module.css'

// About text for Microneedling
const aboutText = `Our Microneedling treatment, also known as Collagen Induction Therapy, is a highly effective method that tightens, restores, rejuvenates, and diminishes the signs of aging using our medical grade, FDA approved Skinpen. By creating thousands of micro-channels to puncture the skin, this treatment ensures even and luminous healed skin. Recommended in a series of three sessions, 4 weeks apart.`;

// Key benefits for Microneedling
const benefits = [
  "Stimulates natural collagen production",
  "Improves skin texture and tone",
  "Reduces appearance of fine lines and wrinkles",
  "Enhances absorption of serums and skincare products"
]


const microneedlingFAQs = [
  {
    q: 'What is SkinPen microneedling?',
    a: 'SkinPen is an FDA-cleared, medical-grade microneedling device that creates controlled micro-injuries in the skin to stimulate natural collagen and elastin production, improving the appearance of fine lines, wrinkles, acne scars, and overall skin texture.'
  },
  {
    q: 'What skin concerns can SkinPen treat?',
    a: 'SkinPen is clinically proven to improve the look of facial acne scars in adults and is also effective for reducing fine lines, wrinkles, large pores, stretch marks, and uneven skin tone.'
  },
  {
    q: 'Is SkinPen microneedling safe?',
    a: 'Yes. SkinPen is FDA-cleared, sterile, and single-use for each patient. Treatments are performed by trained professionals following strict protocols to ensure safety and hygiene.'
  },
  {
    q: 'How does SkinPen microneedling work?',
    a: 'The SkinPen uses tiny, sterile needles to create thousands of micro-channels in the skin. This triggers the body\u2019s natural healing response, stimulating collagen and elastin production, which helps renew skin texture and firmness.'
  },
  {
    q: 'Does SkinPen microneedling hurt?',
    a: 'Most clients describe the treatment as mildly uncomfortable rather than painful. A topical numbing cream is applied before treatment to maximize comfort.'
  },
  {
    q: 'How many SkinPen sessions will I need?',
    a: 'Many people see noticeable improvement after just one session, but for optimal results\u2014especially for acne scars or deeper wrinkles\u2014a series of 3 treatments spaced 4\u20136 weeks apart is typically recommended.'
  },
  {
    q: 'What is the downtime after SkinPen microneedling?',
    a: 'Downtime is minimal. Most people experience redness and mild swelling for 1\u20133 days, similar to a mild sunburn. You can usually return to normal activities within 24\u201348 hours.'
  },
  {
    q: 'When will I see results from SkinPen?',
    a: 'Some clients notice an immediate glow, but optimal results appear gradually over 4\u20136 weeks as collagen remodeling continues.'
  },
  {
    q: 'Is SkinPen suitable for all skin types and tones?',
    a: 'Yes! SkinPen is safe and effective for all skin types and colors, with little risk of hyperpigmentation or scarring.'
  },
  {
    q: 'Are there any side effects or risks with SkinPen microneedling?',
    a: 'Side effects are typically mild and temporary, including redness, swelling, and minor skin sensitivity. Serious complications are rare when performed by a qualified provider. Always follow aftercare instructions to minimize risk.'
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
          <h2>Microneedling</h2>
          <p>{aboutText}</p>
        </section>

        <section className={styles.benefitsSection}>
          <h2 className={styles.benefitsTitle}>Key Benefits</h2>
          <ul className={styles.benefitsList}>
            {[
              "Tightens & restores skin",
              "Rejuvenates & diminishes aging signs",
              "Ensures even & luminous skin",
              "Medical grade Skinpen used",
            ].map((text, i) => (
              <li key={i} className={styles.benefitItem}>
                <svg
                  className={styles.benefitIcon}
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 16.17l-3.5-3.5L4 14.17 9 19.17 20 8.17 18.59 6.75z" />
                </svg>
                <span className={styles.benefitText}>{text}</span>
              </li>
            ))}
          </ul>
        </section>

        {microneedlingFAQs.length > 0 && (
          <section className={styles.faqSection}>
            <h2>Frequently Asked Questions</h2>
            <AccordionFAQ faqs={microneedlingFAQs} />
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
