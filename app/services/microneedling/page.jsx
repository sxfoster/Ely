import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import styles from '../[slug]/page.module.css'
import AccordionFAQ from '@components/AccordionFAQ'
import { notFound } from 'next/navigation'

const microneedlingFAQs = [
  {
    question: 'What is microneedling?',
    answer:
      'Microneedling is a minimally invasive skin treatment that uses fine needles to create micro-channels in the skin, stimulating your body\u2019s natural collagen production and promoting smoother, firmer, and more even-toned skin.'
  },
  {
    question: 'Does microneedling hurt?',
    answer:
      'Most clients describe the sensation as mild and tolerable. A topical numbing cream is applied before treatment to ensure your comfort.'
  },
  {
    question: 'How many sessions will I need?',
    answer:
      'While many clients see visible improvements after just one session, a series of 3\u20136 treatments spaced about 4\u20136 weeks apart is recommended for optimal results.'
  },
  {
    question: 'What is the downtime after microneedling?',
    answer:
      'Downtime is minimal. You may experience mild redness, sensitivity, or swelling for 1\u20133 days post-treatment, similar to a light sunburn.'
  },
  {
    question: 'When will I see results?',
    answer:
      'Many clients notice improved skin texture and glow within a week, with continued improvement as collagen production increases over the following weeks.'
  },
  {
    question: 'Are there any side effects?',
    answer:
      'Temporary redness, sensitivity, or slight swelling are common but subside quickly. Your esthetician will review all aftercare and safety guidelines with you.'
  },
  {
    question: 'Is microneedling safe for all skin types?',
    answer:
      'Yes! Microneedling is safe and effective for most skin types and tones. A consultation will help determine the best approach for your unique needs.'
  },
  {
    question: 'What should I avoid after microneedling?',
    answer:
      'Avoid direct sun exposure, heavy makeup, and active skincare ingredients (like retinol or acids) for a few days. Your provider will share detailed aftercare instructions.'
  },
  {
    question: 'Can I combine microneedling with other treatments?',
    answer:
      'Absolutely! Many clients combine microneedling with facials or peels for enhanced results. Your esthetician can recommend a custom plan.'
  }
]

function getService() {
  const dir = path.join(process.cwd(), 'content/services')
  const file = fs.readdirSync(dir).find(f => f.endsWith('.md') && f.includes('microneedling'))
  if (!file) return null
  const source = fs.readFileSync(path.join(dir, file), 'utf8')
  const { data, content } = matter(source)
  return { ...data, content }
}

export default async function MicroneedlingPage() {
  const service = getService()
  if (!service) return notFound()
  const processed = await remark().use(html).process(service.content)
  const contentHtml = processed.toString()
  return (
    <div className={`container ${styles.service}`}>
      <div className={styles.image}>
        <img src={service.image} alt={service.alt} />
      </div>
      <h1 className={styles.title}>{service.title}</h1>
      <p className={styles.description}>{service.description}</p>
      {service.content && (
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      )}
      <section>
        <h2 className={styles['faq-heading']}>Frequently Asked Questions</h2>
        <AccordionFAQ faqs={microneedlingFAQs} />
      </section>
    </div>
  )
}
