import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import ServiceCard from '../components/ServiceCard'

export const metadata = { title: 'Services' }

export default function ServicesPage() {
  const servicesDir = path.join(process.cwd(), 'content/services')
  const files = fs.readdirSync(servicesDir).filter(f => f.endsWith('.md'))
  const services = files.map(filename => {
    const file = fs.readFileSync(path.join(servicesDir, filename), 'utf8')
    const { data } = matter(file)
    return {
      slug: data.slug,
      title: data.title,
      description: data.description,
      image: data.image,
      alt: data.alt,
      order: data.order ?? 0,
    }
  })
  services.sort((a, b) => a.order - b.order)

  return (
    <main className="container py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map(svc => (
        <ServiceCard key={svc.slug} service={svc} />
      ))}
    </main>
  )
}
