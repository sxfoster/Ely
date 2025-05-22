import React from 'react'

export interface BreadcrumbProps {
  slug: string
  title: string
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ slug, title }) => (
  <nav aria-label="breadcrumb">
    <ol>
      <li><a href="/">Home</a></li>
      <li><a href="/services">Services</a></li>
      <li aria-current="page">{title}</li>
    </ol>
  </nav>
)
