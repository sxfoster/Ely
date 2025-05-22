import React from 'react'

export interface OverviewBenefitsProps {
  overview: string
  benefits: string[]
}

export const OverviewBenefits: React.FC<OverviewBenefitsProps> = ({ overview, benefits }) => (
  <section>
    <div>
      <h2>What It Is</h2>
      <p>{overview}</p>
    </div>
    <div>
      <h2>Key Benefits</h2>
      <ul>
        {benefits.map((b, i) => (<li key={i}>{b}</li>))}
      </ul>
    </div>
  </section>
)
