import ServicePage, { generateMetadata as baseGenerateMetadata } from '../[slug]/page'

export function generateMetadata() {
  return baseGenerateMetadata({ params: { slug: 'hydrafacial' } })
}

export default function HydrafacialPage() {
  return <ServicePage params={{ slug: 'hydrafacial' }} />
}
