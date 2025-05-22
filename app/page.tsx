// app/page.js
import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import HomePageClient from './components/HomePageClient'
import Modal from './components/Modal'
import { useState } from 'react'


export default function HomePage() {
  // 1. Read all markdown files in content/services
  const servicesDir = path.join(process.cwd(), 'content/services')
  const files = fs.readdirSync(servicesDir).filter(f => f.endsWith('.md'))

  // 2. Parse front-matter of each
  const services = files.map(filename => {
    const fullPath = path.join(servicesDir, filename)
    const file = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(file)
    return {
      slug: data.slug,
      title: data.title,
      description: data.description,
      image: data.image,
      alt: data.alt,
      order: data.order ?? 0,   // default to 0 if missing
    }
  })
  services.sort((a, b) => a.order - b.order)
  return <HomePageWithModal services={services} />
}

function HomePageWithModal({ services }: { services: any[] }) {
  'use client'
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>Book Now</button>
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
      <HomePageClient services={services} />
    </>
  )
}
