import React from 'react'
import * as Icons from 'lucide-react'

export interface Step {
  title: string
  icon: string
}
export interface HowItWorksProps {
  steps: Step[]
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ steps }) => (
  <section className="py-12 bg-gray-50 px-6 lg:px-8">
    <h2 className="text-2xl font-semibold text-center mb-8">How It Works</h2>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
      {steps.map((step, i) => {
        const IconComponent = (Icons as any)[step.icon] || Icons.Circle
        return (
          <div key={i} className="flex flex-col items-center text-center">
            <IconComponent className="w-10 h-10 text-accent mb-2" />
            <p className="text-gray-700 font-medium">{step.title}</p>
          </div>
        )
      })}
    </div>
  </section>
)
