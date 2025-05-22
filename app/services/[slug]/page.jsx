import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote/rsc'

export async function generateStaticParams() {
  const servicesDir = path.join(process.cwd(), 'content/services')
  const files = fs.readdirSync(servicesDir).filter((f) => /\.mdx?$/.test(f))
  return files.map((filename) => ({ slug: filename.replace(/\.mdx?$/, '') }))
}

export default async function ServicePage({ params }) {
  const slug = params.slug
  // 1. Read the .md or .mdx file
  let filePath = path.join('content/services', `${slug}.mdx`)
  if (!fs.existsSync(filePath)) {
    filePath = path.join('content/services', `${slug}.md`)
  }
  const raw = fs.readFileSync(filePath, 'utf-8')
  // 2. Split front-matter & content
  const { data: frontMatter, content } = matter(raw)
  // 3. Serialize MDX
  const mdxSource = await serialize(content)

  return (
    <>
      {/* Placeholder: you will swap this for real components next */}
      <h1>{frontMatter.title}</h1>
      <p>{frontMatter.subtitle}</p>

      {/* Render the MDX body */}
      <section className="prose mx-auto py-8">
        <MDXRemote {...mdxSource} />
      </section>
    </>
  )
}
