'use client'
import { useEffect, useState } from 'react'
import styles from './SaleBanner.module.css'

export default function SaleBanner({ message = '', enabled = false, sticky = false, id = 'default' }) {
  const storageKey = `saleBannerDismissed_${id}`
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (enabled && message && message.trim().length > 0) {
      setVisible(!window.localStorage.getItem(storageKey))
    }
  }, [enabled, message, id])

  function handleClose() {
    setVisible(false)
    window.localStorage.setItem(storageKey, 'true')
  }

  const displayMessage = message?.slice(0, 90)

  if (!enabled || !displayMessage || !visible) return null

  return (
    <div
      className={styles.banner}
      role="status"
      aria-live="polite"
      style={sticky ? { position: 'sticky', top: 0, zIndex: 999 } : {}}
    >
      <span className={styles.message}>{displayMessage}</span>
      <button
        className={styles.close}
        onClick={handleClose}
        aria-label="Close sale banner"
        tabIndex={0}
      >
        ×
      </button>
    </div>
  )
}
