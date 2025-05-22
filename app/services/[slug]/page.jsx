import fs from 'fs'
import path from 'path'

/*
  generateStaticParams
  - Reads all filenames under content/services
  - Strips .mdx or .md and returns [{ slug }]
*/
export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), 'content/services'))
  return files.map((filename) => ({
    slug: filename.replace(/\.mdx?$/, '')
  }))
}

/*
  ServicePage
  - Receives params.slug
  - For now, render a stub so routing works
*/
export default async function ServicePage({ params }) {
  const { slug } = params
  return (
    <main>
      <h1>Service: {slug}</h1>
      <p>This is the stub for /services/{slug}</p>
    </main>
  )
}
