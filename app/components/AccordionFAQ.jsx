'use client'
import { useState, useRef } from 'react'

// AccordionFAQ supports only one open item at a time, per a11y best practices.
export default function AccordionFAQ({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(null)
  const buttonRefs = useRef([])

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  const handleKeyDown = (e, idx) => {
    const count = items.length
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        buttonRefs.current[(idx + 1) % count]?.focus()
        break
      case 'ArrowUp':
        e.preventDefault()
        buttonRefs.current[(idx - 1 + count) % count]?.focus()
        break
      case 'Home':
        e.preventDefault()
        buttonRefs.current[0]?.focus()
        break
      case 'End':
        e.preventDefault()
        buttonRefs.current[count - 1]?.focus()
        break
      case 'Enter':
      case ' ': // spacebar
        e.preventDefault()
        toggle(idx)
        break
      default:
        break
    }
  }

  return (
    <div className="accordion-faq">
      {items.map((item, idx) => {
        const id = `faq-${idx}`
        return (
          <div className="faq-item" key={id}>
            <button
              ref={(el) => (buttonRefs.current[idx] = el)}
              id={`${id}-button`}
              aria-expanded={openIndex === idx}
              aria-controls={`${id}-panel`}
              onClick={() => toggle(idx)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
            >
              {item.q}
            </button>
            <div
              id={`${id}-panel`}
              role="region"
              aria-labelledby={`${id}-button`}
              className="faq-answer"
              style={{ display: openIndex === idx ? 'block' : 'none' }}
            >
              <p>{item.a}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
