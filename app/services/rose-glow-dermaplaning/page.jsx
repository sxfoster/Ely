import ServicePage, { generateMetadata as baseGenerateMetadata } from '../[slug]/page'

export function generateMetadata() {
  return baseGenerateMetadata({ params: { slug: 'rose-glow-dermaplaning' } })
}

export default function RoseGlowDermaplaningPage() {
  return <ServicePage params={{ slug: 'rose-glow-dermaplaning' }} />
}
