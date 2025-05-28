import AccordionFAQ from '@/components/AccordionFAQ'
import Nav from '../../components/Nav'
import ServiceHero from '@/components/ServiceHero'

const bookingUrl = 'https://mysite.vagaro.com/sweetcreamandrose/book-now'

const benefits = [
  'Brightens dull skin',
  'Targets dark spots',
  'Minimal flaking'
]

const description = [
  'The Skinbetter Peel gently resurfaces using medical grade acids for improved tone and clarity.',
  'A series of peels can dramatically smooth texture and fade pigmentation.'
]

const testimonial = {
  text: 'My skin glows after each peel!',
  author: 'Andrea M.'
}
const skinbetterPeelFAQs = [
  {
    q: 'What is a Skinbetter Peel?',
    a: 'The Skinbetter Peel is a professional chemical exfoliation treatment designed to refresh and brighten your skin with minimal irritation. It targets uneven tone, fine lines, and dullness.'
  },
  {
    q: 'Will my skin peel after this treatment?',
    a: 'Some clients may experience light flaking or mild peeling 2\u20134 days after treatment. Many see a healthy glow without visible peeling.'
  },
  {
    q: 'How soon will I see results?',
    a: 'Results\u2014such as smoother, more radiant skin\u2014can often be seen within a week, with continued improvement over time.'
  },
  {
    q: 'Is there any downtime?',
    a: 'Minimal. You may experience slight redness or tightness for a day or two. Most clients return to normal activities immediately.'
  },
  {
    q: 'Can all skin types get a Skinbetter Peel?',
    a: 'Yes, but your esthetician will assess your skin during your consultation to ensure it\u2019s the right fit.'
  },
  {
    q: 'How often can I get this peel?',
    a: 'For best results, we recommend a series spaced 4\u20136 weeks apart, based on your provider\u2019s advice.'
  }
]


export const metadata = {
  title: 'Skinbetter Peel | Ely Aesthetics'
}

export default function SkinbetterPeelPage() {
  return (
    <div className="service-page">
      <Nav />
      <ServiceHero
        serviceName="Skinbetter Peel"
        headline="Refresh and brighten your complexion"
        description={description[0]}
        imageSrc="/images/peel.jpeg"
        imageAlt="Skinbetter Peel"
        ctaText="Book Now"
        ctaHref="https://www.vagaro.com/elyaesthetics"
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
          <img src="/images/services/skinbetter-peel-beforeafter.jpg" alt="Before and after Skinbetter Peel result" />
        </figure>

        {skinbetterPeelFAQs.length > 0 && (
          <section>
            <h2 className="faq-heading">Frequently Asked Questions</h2>
            <AccordionFAQ faqs={skinbetterPeelFAQs} />
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
