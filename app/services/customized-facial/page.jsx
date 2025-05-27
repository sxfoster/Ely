import ServicePage, { generateMetadata as baseGenerateMetadata } from '../[slug]/page'

export function generateMetadata() {
  return baseGenerateMetadata({ params: { slug: 'customized-facial' } })
}

export default function CustomizedFacialPage() {
  return <ServicePage params={{ slug: 'customized-facial' }} />
}
