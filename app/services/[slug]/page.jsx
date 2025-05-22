import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {
  ServiceHero,
  Breadcrumb,
  OverviewBenefits,
  HowItWorks,
  Gallery,
  FAQAccordion,
  TestimonialsCarousel,
  StickyBookingBar,
} from '../../components/services'

/*
  generateStaticParams
  - Reads all filenames under content/services
  - Strips .mdx or .md and returns [{ slug }]
*/
export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), 'content/services'))
  return files.map((filename) => ({
    slug: filename.replace(/\.mdx?$/, '')
  }))
}

/*
  ServicePage
  - Reads front matter for the given slug
  - Renders a full service page using shared components
*/
export default async function ServicePage({ params }) {
  const { slug } = params

  const filePath = path.join(process.cwd(), 'content/services', `${slug}.md`)
  const file = fs.readFileSync(filePath, 'utf8')
  const { data } = matter(file)

  const steps = [
    { title: 'Consultation', icon: 'MessageCircle' },
    { title: 'Treatment', icon: 'Droplet' },
    { title: 'Aftercare', icon: 'Heart' },
    { title: 'Results', icon: 'Smile' },
  ]

  const benefits = [
    'Rejuvenates skin',
    'Improves texture',
    'Boosts confidence',
  ]

  const faq = [
    { q: 'How long does the treatment take?', a: 'About 60 minutes.' },
    { q: 'Is there any downtime?', a: 'Minimal downtime is expected.' },
  ]

  const testimonials = [
    { name: 'Alex', quote: 'My skin has never looked better!', image: '' },
    { name: 'Maria', quote: 'A wonderful, relaxing experience.', image: '' },
  ]

  return (
    <main>
      <Breadcrumb slug={data.slug} title={data.title} />
      <ServiceHero
        videoUrl="/videos/hero.mp4"
        poster="/images/hero_fallback.jpg"
        title={data.title}
        subtitle={data.description}
        ctaText="Book Now"
      />
      <OverviewBenefits overview={data.description} benefits={benefits} />
      <HowItWorks steps={steps} />
      <Gallery images={[data.image]} />
      <FAQAccordion faq={faq} />
      <TestimonialsCarousel testimonials={testimonials} />
      <StickyBookingBar serviceName={data.title} price={100} />
    </main>
  )
}
