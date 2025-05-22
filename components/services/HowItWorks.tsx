import React from 'react'

export interface Step {
  title: string
  icon: string
}
export interface HowItWorksProps {
  steps: Step[]
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ steps }) => (
  <section>
    <h2>How It Works</h2>
    <div>
      {steps.map((step, i) => (
        <div key={i}>
          {/* TODO: render icon */}
          <p>{step.title}</p>
        </div>
      ))}
    </div>
  </section>
)
