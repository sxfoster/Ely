import React from 'react'

export interface BreadcrumbProps {
  slug: string
  title: string
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ slug, title }) => (
  <nav className="bg-gray-50 py-3 px-4 sm:px-6 lg:px-8" aria-label="breadcrumb">
    <ol className="flex space-x-2 text-sm text-gray-600">
      <li><a href="/" className="hover:text-gray-800">Home</a></li>
      <li>›</li>
      <li><a href="/services" className="hover:text-gray-800">Services</a></li>
      <li>›</li>
      <li className="text-gray-900" aria-current="page">{title}</li>
    </ol>
  </nav>
)
