import React, { useState } from 'react'

export interface FAQItem { q: string; a: string }
export interface FAQAccordionProps { faq: FAQItem[] }

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ faq }) => (
  <section>
    <h2>FAQ</h2>
    {faq.map(({ q, a }, i) => <details key={i}><summary>{q}</summary><p>{a}</p></details>)}
  </section>
)
