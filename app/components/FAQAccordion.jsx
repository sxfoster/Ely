'use client'
import { useState } from 'react'

export default function FAQAccordion({ items = [] }) {
  const [open, setOpen] = useState(null)

  const toggle = (idx) => {
    setOpen(open === idx ? null : idx)
  }

  const handleKey = (e, idx) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggle(idx)
    }
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
              onKeyDown={(e) => handleKey(e, idx)}
            >
              {item.q}
            </button>
            <div
              id={`${id}-panel`}
              role="region"
              aria-labelledby={`${id}-button`}
              className={`faq-answer${open === idx ? ' open' : ''}`}
            >
              <p>{item.a}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
