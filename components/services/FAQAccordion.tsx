import React from 'react'

export interface FAQItem { q: string; a: string }
export interface FAQAccordionProps { faq: FAQItem[] }

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ faq }) => (
  <section className="py-12 px-6 lg:px-8 max-w-3xl mx-auto">
    <h2 className="text-2xl font-semibold mb-6 text-center">FAQ</h2>
    <div className="space-y-4">
      {faq.map(({ q, a }, i) => (
        <details
          key={i}
          className="border-b pb-4"
          aria-labelledby={`faq-${i}-header`}
        >
          <summary
            id={`faq-${i}-header`}
            className="cursor-pointer font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent"
          >
            {q}
          </summary>
          <div className="mt-2 text-gray-600 pl-4">{a}</div>
        </details>
      ))}
    </div>
  </section>
)
