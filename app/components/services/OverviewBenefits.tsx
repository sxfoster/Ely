import React from 'react'

export interface OverviewBenefitsProps {
  overview: string
  benefits: string[]
}

export const OverviewBenefits: React.FC<OverviewBenefitsProps> = ({ overview, benefits }) => (
  <section className="py-12 px-6 lg:px-8 max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
    <div>
      <h2 className="text-2xl font-semibold mb-4">What It Is</h2>
      <p className="text-gray-700 leading-relaxed">{overview}</p>
    </div>
    <div>
      <h2 className="text-2xl font-semibold mb-4">Key Benefits</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        {benefits.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  </section>
)
