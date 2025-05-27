import ServicePage, { generateMetadata as baseGenerateMetadata } from '../[slug]/page'

export function generateMetadata() {
  return baseGenerateMetadata({ params: { slug: 'anti-age-peptide-peel' } })
}

export default function AntiAgePeptidePeelPage() {
  return <ServicePage params={{ slug: 'anti-age-peptide-peel' }} />
}
