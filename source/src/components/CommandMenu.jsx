import { useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { profile } from '../data/portfolio.js'
import { Search } from './Icons.jsx'

/** Lightweight Ctrl/Cmd + K command menu. */
export default function CommandMenu({ open, onClose, onNavigate, onResume }) {
  const [query, setQuery] = useState('')
  const [sel, setSel] = useState(0)
  const inputRef = useRef(null)
  const listRef = useRef(null)

  const actions = useMemo(
    () => [
      { label: 'Go to About', hint: 'Section 02', run: () => onNavigate('about') },
      { label: 'Go to Skills', hint: 'Section 03', run: () => onNavigate('toolkit') },
      { label: 'Go to Work', hint: 'Section 04', run: () => onNavigate('work') },
      { label: 'Go to Journey', hint: 'Section 07', run: () => onNavigate('journey') },
      { label: 'Go to Education', hint: 'Section 08', run: () => onNavigate('education') },
      { label: 'Go to Certifications', hint: 'Section 09', run: () => onNavigate('certifications') },
      { label: 'Go to Contact', hint: 'Section 11', run: () => onNavigate('contact') },
      { label: 'Download Resume', hint: 'PDF', run: onResume },
      { label: 'Open GitHub', hint: 'External', run: () => window.open(profile.github, '_blank', 'noopener') },
      { label: 'Open LinkedIn', hint: 'External', run: () => window.open(profile.linkedin, '_blank', 'noopener') },
      { label: 'Email Aman', hint: 'Mail', run: () => { window.location.href = `mailto:${profile.email}` } },
    ],
    [onNavigate, onResume],
  )

  const filtered = actions.filter((a) => a.label.toLowerCase().includes(query.trim().toLowerCase()))

  useEffect(() => {
    if (open) {
      setQuery('')
      setSel(0)
      const t = setTimeout(() => inputRef.current?.focus(), 30)
      return () => clearTimeout(t)
    }
    return undefined
  }, [open])

  useEffect(() => setSel(0), [query])

  useEffect(() => {
    if (!open) return undefined
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
      } else if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSel((s) => Math.min(s + 1, filtered.length - 1))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSel((s) => Math.max(s - 1, 0))
      } else if (e.key === 'Enter') {
        e.preventDefault()
        const action = filtered[sel]
        if (action) {
          onClose()
          action.run()
        }
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open, filtered, sel, onClose])

  useEffect(() => {
    const el = listRef.current?.querySelector(`[data-idx="${sel}"]`)
    el?.scrollIntoView({ block: 'nearest' })
  }, [sel])

  if (!open) return null

  return createPortal(
    <div
      className="cmdk-overlay"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="cmdk" role="dialog" aria-modal="true" aria-label="Command menu">
        <div className="cmdk-input-row">
          <Search />
          <input
            ref={inputRef}
            className="cmdk-input"
            placeholder="Search portfolio..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search portfolio"
          />
        </div>
        <div className="cmdk-list" ref={listRef}>
          {filtered.length === 0 && <p className="cmdk-empty">No matches — try “work” or “resume”.</p>}
          {filtered.map((a, i) => (
            <button
              key={a.label}
              type="button"
              data-idx={i}
              className={`cmdk-item ${i === sel ? 'sel' : ''}`}
              onMouseEnter={() => setSel(i)}
              onClick={() => {
                onClose()
                a.run()
              }}
            >
              <span>{a.label}</span>
              <span className="hint">{a.hint}</span>
            </button>
          ))}
        </div>
        <div className="cmdk-foot">
          <span>
            <kbd>↑↓</kbd> navigate
          </span>
          <span>
            <kbd>↵</kbd> select
          </span>
          <span>
            <kbd>esc</kbd> close
          </span>
        </div>
      </div>
    </div>,
    document.body,
  )
}
