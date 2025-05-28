import AccordionFAQ from '@/components/AccordionFAQ'
import Nav from '../../components/Nav'
import ServiceHero from '@/components/ServiceHero'

const bookingUrl = 'https://mysite.vagaro.com/sweetcreamandrose/book-now'

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
      <ServiceHero
        serviceName="Rose Glow Dermaplaning Facial"
        headline="Reveal a silky smooth canvas"
        description={description[0]}
        imageSrc="/images/dermaplaning-before-after.jpeg"
        imageAlt="Before and after rose glow dermaplaning facial results"
        onCtaClick="https://www.vagaro.com/elyaesthetics"
      />

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
          <img src="/images/services/rose-glow-dermaplaning-beforeafter.jpg" alt="Before and after Rose Glow Dermaplaning Facial result" />
        </figure>

        {roseGlowDermaplaningFAQs.length > 0 && (
          <section>
            <h2 className="faq-heading">Frequently Asked Questions</h2>
            <AccordionFAQ faqs={roseGlowDermaplaningFAQs} />
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
