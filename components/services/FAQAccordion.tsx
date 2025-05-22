import React from 'react'

export interface FAQItem { q: string; a: string }
export interface FAQAccordionProps { faq: FAQItem[] }

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ faq }) => (
  <section className="py-12 px-4 max-w-2xl mx-auto">
    <h2 className="text-2xl font-medium mb-4">FAQ</h2>
    {faq.map(({ q, a }, i) => (
      <details
        key={i}
        className="mb-3 border-b last:border-0"
        aria-labelledby={`faq-${i}-header`}
      >
        <summary
          id={`faq-${i}-header`}
          className="cursor-pointer py-2 font-semibold"
        >
          {q}
        </summary>
        <div className="pl-4 pb-2 text-gray-700">{a}</div>
      </details>
    ))}
  </section>
)
