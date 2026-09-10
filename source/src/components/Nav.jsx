import { useEffect, useState } from 'react'
import { profile } from '../data/portfolio.js'
import { ArrowUpRight, IconX, Menu } from './Icons.jsx'

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'toolkit', label: 'Skills' },
  { id: 'work', label: 'Work' },
  { id: 'journey', label: 'Journey' },
  { id: 'certifications', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
]

const MOBILE_ITEMS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'toolkit', label: 'Skills' },
  { id: 'work', label: 'Work' },
  { id: 'journey', label: 'Journey' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

/** Premium floating navigation with active-section tracking + mobile menu. */
export default function Nav({ active, onNavigate, onResume }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('overlay-open', open)
    return () => document.documentElement.classList.remove('overlay-open')
  }, [open])

  const go = (id) => {
    setOpen(false)
    // wait for the scroll lock to be released before smooth-scrolling
    requestAnimationFrame(() => requestAnimationFrame(() => onNavigate(id)))
  }

  return (
    <>
      <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <nav className="nav-inner" aria-label="Primary">
          <button type="button" className="nav-brand" onClick={() => go('hero')}>
            AMAN NIZAR<span className="dot">.</span>
          </button>

          <ul className="nav-links">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  className={`nav-link ${active === item.id ? 'active' : ''}`}
                  onClick={() => go(item.id)}
                  aria-current={active === item.id ? 'true' : undefined}
                >
                  {item.label.toUpperCase()}
                </button>
              </li>
            ))}
          </ul>

          <div className="nav-cta">
            <button type="button" className="btn btn-primary btn-nav" onClick={onResume}>
              Resume <ArrowUpRight />
            </button>
            <button
              type="button"
              className="nav-burger"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
            >
              <Menu />
            </button>
          </div>
        </nav>
      </header>

      <div className={`mmenu ${open ? 'open' : ''}`} role="dialog" aria-modal="true" aria-label="Menu">
        <button type="button" className="mmenu-close" onClick={() => setOpen(false)} aria-label="Close menu">
          <IconX />
        </button>
        <ul className="mmenu-list">
          {MOBILE_ITEMS.map((item, i) => (
            <li key={item.id}>
              <button
                type="button"
                className={`mmenu-item ${active === item.id ? 'active' : ''}`}
                onClick={() => go(item.id)}
              >
                <span className="n">{String(i + 1).padStart(2, '0')}</span>
                {item.label}
              </button>
            </li>
          ))}
          <li>
            <button
              type="button"
              className="mmenu-item"
              onClick={() => {
                setOpen(false)
                onResume()
              }}
            >
              <span className="n">08</span>
              Resume
            </button>
          </li>
        </ul>
        <div className="mmenu-foot">
          <span>{profile.location}</span>
          <span>{profile.email}</span>
        </div>
      </div>
    </>
  )
}
