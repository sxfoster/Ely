import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { GetStaticPaths, GetStaticProps } from 'next'
import Layout from '../../components/Layout'
import {
  ServiceHero,
  Breadcrumb,
  OverviewBenefits,
  HowItWorks,
  Gallery,
  FAQAccordion,
  TestimonialsCarousel,
  StickyBookingBar,
} from '../../components/services'

interface ServiceProps {
  frontMatter: any
  content: string
  slug: string
}

const ServicePage: React.FC<ServiceProps> = ({ frontMatter, content, slug }) => {
  return (
    <Layout>
      <ServiceHero
        videoUrl={frontMatter.video}
        poster={frontMatter.poster}
        title={frontMatter.title}
        subtitle={frontMatter.subtitle}
        ctaText="Book This Treatment"
      />
      <Breadcrumb slug={slug} title={frontMatter.title} />
      <OverviewBenefits overview={frontMatter.overview} benefits={frontMatter.benefits} />
      <HowItWorks steps={frontMatter.steps} />
      <Gallery images={frontMatter.gallery} />
      <FAQAccordion faq={frontMatter.faq} />
      <TestimonialsCarousel testimonials={frontMatter.testimonials} />
      <StickyBookingBar serviceName={frontMatter.title} price={frontMatter.price} />
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path.join(process.cwd(), 'content/services'))
  const paths = files.map((filename) => ({
    params: { slug: filename.replace(/\.mdx?$/, '') },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string
  const filePath = path.join(process.cwd(), 'content/services', `${slug}.md`)
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data: frontMatter, content } = matter(fileContent)

  return {
    props: { frontMatter, content, slug },
  }
}

export default ServicePage
