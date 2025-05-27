'use client'
import { useState } from 'react'
import styles from './AccordionFAQ.module.css'

export default function AccordionFAQ({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null)
  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }
  return (
    <div className={styles.faqContainer} role="list">
      {faqs.map((faq, idx) => (
        <div key={idx} className={styles.faqItem}>
          <button
            className={styles.faqQuestion}
            aria-expanded={openIndex === idx}
            aria-controls={`faq-panel-${idx}`}
            id={`faq-header-${idx}`}
            onClick={() => toggle(idx)}
          >
            {faq.question}
          </button>
          <div
            id={`faq-panel-${idx}`}
            role="region"
            aria-labelledby={`faq-header-${idx}`}
            className={openIndex === idx ? styles.faqAnswerOpen : styles.faqAnswer}
            hidden={openIndex !== idx}
          >
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  )
}
