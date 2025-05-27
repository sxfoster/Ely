import ServicePage, { generateMetadata as baseGenerateMetadata } from '../[slug]/page'

export function generateMetadata() {
  return baseGenerateMetadata({ params: { slug: 'skinbetter-peel' } })
}

export default function SkinbetterPeelPage() {
  return <ServicePage params={{ slug: 'skinbetter-peel' }} />
}
