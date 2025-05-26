import styles from './ServicesSection.module.css'

const services = [
  { id: 1, name: 'Microneedling', image: '/images/microneedling-before-after.jpeg' },
  { id: 2, name: 'Skinbetter Peel', image: '/images/peel.jpeg' },
  { id: 3, name: 'Anti-Age Peptide Peel Treatment', image: '/images/anti_age.jpeg' },
  { id: 4, name: 'Rose Glow Dermaplaning Facial', image: '/images/dermaplaning-before-after.jpeg' },
  { id: 5, name: 'Platinum Hydrafacial', image: '/images/hydrafacial.jpg' },
  { id: 6, name: 'Customized Facial', image: '/images/before-after-1.jpeg' },
]

export default function ServicesSection() {
  return (
    <section id="services" className="services container">
      <h2 className={styles.heading}>Our Services</h2>
      <div className={styles.grid}>
        {services.map(service => (
          <div key={service.id} className={styles.card}>
            <img src={service.image} alt="" />
            <h3 className={styles.name}>{service.name}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

