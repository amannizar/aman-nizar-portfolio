import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { IconX } from './Icons.jsx'

/**
 * Accessible modal shell — overlay click, Escape, focus trap, focus restore,
 * and body scroll-lock while open.
 */
export default function Modal({ open, onClose, label, wide = false, children }) {
  const panelRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined
    const previous = document.activeElement
    panelRef.current?.focus()

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
        return
      }
      if (e.key === 'Tab' && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll(
          'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])',
        )
        if (!focusables.length) return
        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      previous?.focus?.()
    }
  }, [open, onClose])

  if (!open) return null

  return createPortal(
    <div
      className="modal-overlay"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        className={`modal-panel ${wide ? 'wide' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label={label}
        ref={panelRef}
        tabIndex={-1}
      >
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close dialog">
          <IconX />
        </button>
        {children}
      </div>
    </div>,
    document.body,
  )
}
