import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import styles from './ServicePage.module.css'

export async function generateStaticParams() {
  const servicesDir = path.join(process.cwd(), 'content/services')
  const files = fs.readdirSync(servicesDir).filter(f => f.endsWith('.md'))
  return files.map(file => {
    const { data } = matter(fs.readFileSync(path.join(servicesDir, file), 'utf8'))
    return { slug: data.slug }
  })
}

function getServiceData(slug) {
  const servicesDir = path.join(process.cwd(), 'content/services')
  const files = fs.readdirSync(servicesDir).filter(f => f.endsWith('.md'))
  for (const file of files) {
    const { data } = matter(fs.readFileSync(path.join(servicesDir, file), 'utf8'))
    if (data.slug === slug) return data
  }
  return null
}

export default function ServicePage({ params }) {
  const svc = getServiceData(params.slug)
  if (!svc) return <div>Service not found</div>
  return (
    <>
      <header className="site-header sticky">
        <div className="container">
          <a href="/" className="logo">Ely Aesthetics</a>
          <button id="open-booking-dialog" className="btn btn-primary">Book Now</button>
          <div className="menu-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
        </div>
      </header>

      <section className="hero">
        <video className="hero-video" autoPlay muted loop playsInline preload="auto" poster="/images/hero_fallback.jpg">
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-content container">
          <h1>{svc.title}</h1>
          {svc.subtitle && <h2>{svc.subtitle}</h2>}
          <button className="btn btn-primary">Book This Treatment</button>
        </div>
      </section>

      <nav className={styles.breadcrumbs}>
        <a href="/">Home</a> › <a href="/#services">Services</a> › {svc.title}
      </nav>

      <section className={styles.overview}>
        <div className={styles.whatItIs}>
          <h2>What it is</h2>
          <p>{svc.description}</p>
        </div>
        <div className={styles.benefits}>
          <h2>Key Benefits</h2>
          <ul>
            <li>Benefit one</li>
            <li>Benefit two</li>
            <li>Benefit three</li>
          </ul>
        </div>
      </section>

      <section className={styles.howItWorks}>
        <h2>How It Works</h2>
        <ol className={styles.stepper}>
          <li>Consult</li>
          <li>Cleanse</li>
          <li>Infuse</li>
          <li>Protect</li>
        </ol>
      </section>

      <section className={styles.gallery}>
        <h2>Before &amp; After Gallery</h2>
        <div className={styles.galleryGrid}>
          <img src="/images/placeholder1.jpg" alt="Before" />
          <img src="/images/placeholder2.jpg" alt="After" />
        </div>
      </section>

      <section className={styles.faq}>
        <h2>FAQ</h2>
        <details>
          <summary>Question 1</summary>
          <p>Answer to question 1.</p>
        </details>
        <details>
          <summary>Question 2</summary>
          <p>Answer to question 2.</p>
        </details>
      </section>

      <section className={styles.testimonials}>
        <h2>Testimonials</h2>
        <blockquote>"Amazing results!"</blockquote>
        <blockquote>"My skin feels incredible."</blockquote>
      </section>

      <div className={styles.bookingBar}>
        <span>{svc.title} – $0</span>
        <button className="btn btn-primary">Book Now</button>
      </div>
    </>
  )
}
