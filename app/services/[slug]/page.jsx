import AccordionFAQ from '@/components/AccordionFAQ'
import { notFound } from 'next/navigation'

const bookingUrl = 'https://mysite.vagaro.com/sweetcreamandrose/book-now'

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
      "Microneedling uses tiny needles to trigger your skin's natural healing response for a firmer, more even complexion.",
      'Treatments are comfortable with numbing cream and have minimal downtime.'
    ],
    faqs: [
      { q: 'Does it hurt?', a: 'A numbing cream keeps you comfortable during the treatment.' },
      { q: 'How many sessions do I need?', a: 'Most clients see best results after 3–6 visits.' },
      { q: 'Is there downtime?', a: 'Expect some redness for about a day.' }
    ],
    testimonial: { text: 'Microneedling with Elyzia transformed my acne scars!', author: 'Sofia R.' }
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
    testimonial: { text: 'My skin glows after each peel!', author: 'Andrea M.' }
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
    testimonial: { text: 'I love how smooth my skin feels!', author: 'Lily S.' }
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
      'Dermaplaning gently exfoliates away dull surface cells and vellus hair for a radiant finish.',
      'The Rose Glow facial adds soothing botanicals so you leave glowing with zero downtime.'
    ],
    faqs: [
      { q: 'Will my hair grow back thicker?', a: 'No, dermaplaning will not change hair growth.' },
      { q: 'How often can I have this done?', a: 'Every 4 weeks is ideal for maintaining smooth skin.' }
    ],
    testimonial: { text: "Best facial I've had—my makeup glides on flawlessly!", author: 'Melissa T.' }
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
      'The Platinum Hydrafacial flushes out impurities and infuses skin with hydrating serums for an instant glow.',
      "It's customizable for all skin types and a client favorite for immediate results."
    ],
    faqs: [
      { q: 'Is it safe for sensitive skin?', a: "Yes, the treatment is adjustable to your skin's needs." },
      { q: 'How long does it take?', a: 'About 60 minutes from start to finish.' }
    ],
    testimonial: { text: 'My skin has never looked better after a Hydrafacial!', author: 'Jason P.' }
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
      'Every facial begins with a consultation so we can address your specific concerns using advanced products.',
      "From calming sensitivity to brightening dullness, you'll leave refreshed and renewed."
    ],
    faqs: [
      { q: 'What products are used?', a: 'We select professional-grade formulas based on your skin type.' },
      { q: 'Can I combine this with other treatments?', a: "Yes, it's a great complement to peels or microneedling." }
    ],
    testimonial: { text: 'Elyzia always knows exactly what my skin needs!', author: 'Carmen L.' }
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

  const { name, headline, benefits, description, faqs, testimonial } = data
  const serviceFAQs = faqs

  return (
    <div className="service-page">
      <Nav />
      <section className="service-hero">
        <img src={`/images/services/${params.slug}-hero.jpg`} alt={name} className="hero-image" />
        <div className="hero-content">
          <h1>{name}</h1>
          {headline && <p>{headline}</p>}
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
          <img src={`/images/services/${params.slug}-beforeafter.jpg`} alt={`Before and after ${name} result`} />
        </figure>

        {serviceFAQs.length > 0 && (
          <section>
            <h2 className="faq-heading">Frequently Asked Questions</h2>
            <AccordionFAQ faqs={serviceFAQs} />
          </section>
        )}

        <section className="testimonial">
          <blockquote>{testimonial.text}</blockquote>
          {testimonial.author && <cite>- {testimonial.author}</cite>}
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
