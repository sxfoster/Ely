'use client'
import { useState } from 'react'

export default function FAQAccordion({ items = [] }) {
  const [open, setOpen] = useState(null)

  const toggle = (idx) => {
    setOpen(open === idx ? null : idx)
  }

  return (
    <div className="faq-accordion">
      {items.map((item, idx) => {
        const id = `faq-${idx}`
        return (
          <div className="faq-item" key={id}>
            <button
              className="faq-question"
              aria-expanded={open === idx}
              aria-controls={`${id}-panel`}
              id={`${id}-button`}
              onClick={() => toggle(idx)}
            >
              {item.q}
            </button>
            <div
              id={`${id}-panel`}
              role="region"
              aria-labelledby={`${id}-button`}
              className="faq-answer"
              style={{ display: open === idx ? 'block' : 'none' }}
            >
              <p>{item.a}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
