import AccordionFAQ from '@/components/AccordionFAQ'
import { notFound } from 'next/navigation'
import styles from '../ServicePage.module.css';

const services = {
  microneedling: {
    name: 'Microneedling',
    headline: 'Stimulate collagen for smoother skin',
    benefits: [
      'Stimulates collagen production',
      'Minimizes scars and pores',
      'Smooths fine lines'
    ],
    description: [
      'Microneedling stimulates collagen production, improving skin texture and reducing fine lines for a youthful appearance.'
    ],
    faqs: [
      { q: 'Does it hurt?', a: 'A numbing cream keeps you comfortable during the treatment.' },
      { q: 'How many sessions do I need?', a: 'Most clients see best results after 3–6 visits.' },
      { q: 'Is there downtime?', a: 'Expect some redness for about a day.' }
    ],
  },
  'skinbetter-peel': {
    name: 'Skinbetter Peel',
    headline: 'Refresh and brighten your complexion',
    benefits: [
      'Brightens dull skin',
      'Targets dark spots',
      'Minimal flaking'
    ],
    description: [
      'The Skinbetter Peel gently resurfaces using medical grade acids for improved tone and clarity.',
      'A series of peels can dramatically smooth texture and fade pigmentation.'
    ],
    faqs: [
      { q: 'Will I peel a lot?', a: 'Most experience only light flaking for a few days.' },
      { q: 'How often should I get one?', a: 'Peels are typically spaced 4–6 weeks apart.' }
    ],
  },
  'anti-age-peptide-peel': {
    name: 'Anti-Age Peptide Peel Treatment',
    headline: 'Gentle exfoliation with age-defying peptides',
    benefits: [
      'Peptide-rich formulation',
      'Softens fine lines',
      'Boosts radiance'
    ],
    description: [
      'This treatment pairs mild exfoliation with powerful peptides to promote firm, supple skin.',
      'Regular sessions smooth wrinkles and even out tone.'
    ],
    faqs: [
      { q: 'Is it good for sensitive skin?', a: "Yes, it's designed to be gentle while still effective." },
      { q: 'How quickly will I see results?', a: 'Skin looks refreshed after one treatment with cumulative benefits over time.' }
    ],
  },
  'rose-glow-dermaplaning': {
    name: 'Rose Glow Dermaplaning Facial',
    headline: 'Reveal a silky smooth canvas',
    benefits: [
      'Removes peach fuzz',
      'Improves product absorption',
      'Instantly brighter skin'
    ],
    description: [
      'Dermaplaning gently exfoliates dead skin cells and removes fine hair, revealing a smoother, brighter complexion.'
    ],
    faqs: [
      { q: 'Will my hair grow back thicker?', a: 'No, dermaplaning will not change hair growth.' },
      { q: 'How often can I have this done?', a: 'Every 4 weeks is ideal for maintaining smooth skin.' }
    ],
  },
  hydrafacial: {
    name: 'Platinum Hydrafacial',
    headline: 'Deep cleanse and intense hydration',
    benefits: [
      'Deeply cleanses pores',
      'Hydrates and plumps',
      'Delivers antioxidants'
    ],
    description: [
      'Hydrafacials deeply cleanse, exfoliate, and hydrate the skin, effectively addressing acne, dryness, and signs of aging.'
    ],
    faqs: [
      { q: 'Is it safe for sensitive skin?', a: "Yes, the treatment is adjustable to your skin's needs." },
      { q: 'How long does it take?', a: 'About 60 minutes from start to finish.' }
    ],
  },
  'customized-facial': {
    name: 'Customized Facial',
    headline: 'Personalized care for your skin',
    benefits: [
      'Tailored to your needs',
      'Includes relaxing massage',
      'Targets hydration or blemishes'
    ],
    description: [
      'Tailored facials combining various treatments to address individual skin concerns and enhance overall skin health.'
    ],
    faqs: [
      { q: 'What products are used?', a: 'We select professional-grade formulas based on your skin type.' },
      { q: 'Can I combine this with other treatments?', a: "Yes, it's a great complement to peels or microneedling." }
    ],
  }
}

export function generateStaticParams() {
  return Object.keys(services).map(slug => ({ slug }))
}

export function generateMetadata({ params }) {
  const data = services[params.slug]
  if (!data) return {}
  return {
    title: `${data.name} | Ely Aesthetics`
  }
}

import Nav from '../../components/Nav'

export default function ServicePage({ params }) {
  const data = services[params.slug]

  if (!data) return notFound()

  const { name, headline, benefits, description, faqs } = data
  const serviceFAQs = faqs

  return (
    <div className="service-page">
      <Nav />

      <div className="service-content container">
        <section className={styles.aboutSection}>
          <h2>{name}</h2>
          <p>{headline}</p>
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

        {serviceFAQs.length > 0 && (
          <section className={styles.faqSection}>
            <h2>Frequently Asked Questions</h2>
            <AccordionFAQ faqs={serviceFAQs} />
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
