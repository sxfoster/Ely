'use client'
import { useState, useRef } from 'react'

// AccordionFAQ supports only one open item at a time, per a11y best practices.
export default function AccordionFAQ({ faqs = [] }) {
  const [open, setOpen] = useState(null)
  const buttonRefs = useRef([])

  const toggle = (idx) => {
    setOpen(open === idx ? null : idx)
  }

  const handleKey = (e, idx) => {
    switch (e.key) {
      case 'ArrowDown': {
        e.preventDefault()
        const next = (idx + 1) % faqs.length
        buttonRefs.current[next]?.focus()
        break
      }
      case 'ArrowUp': {
        e.preventDefault()
        const prev = (idx - 1 + faqs.length) % faqs.length
        buttonRefs.current[prev]?.focus()
        break
      }
      case 'Enter':
      case ' ': {
        e.preventDefault()
        toggle(idx)
        break
      }
      default:
        break
    }
  }

  return (
    <div className="faq-accordion">
      {faqs.map((item, idx) => {
        const id = `faq-${idx}`
        return (
          <div className="faq-item" key={id}>
            <button
              ref={el => (buttonRefs.current[idx] = el)}
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
