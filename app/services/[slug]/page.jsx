import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import styles from './page.module.css'
import { notFound } from 'next/navigation'

function getService(slug) {
  const dir = path.join(process.cwd(), 'content/services')
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'))
  for (const file of files) {
    const source = fs.readFileSync(path.join(dir, file), 'utf8')
    const { data, content } = matter(source)
    if (data.slug === slug) {
      return { ...data, content }
    }
  }
  return null
}

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), 'content/services')
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'))
  return files.map(file => {
    const source = fs.readFileSync(path.join(dir, file), 'utf8')
    const { data } = matter(source)
    return { slug: data.slug }
  })
}

export default async function ServicePage({ params }) {
  const service = getService(params.slug)
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
    </div>
  )
}
