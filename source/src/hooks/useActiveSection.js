import { useEffect } from 'react'
import { sections } from '../data/portfolio.js'

/**
 * Tracks which full-screen section currently occupies the middle band of the
 * viewport, using IntersectionObserver. Keeps the navbar, the section
 * indicator and the command menu perfectly in sync.
 */
export function useActiveSection(onChange) {
  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean)
    if (!els.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) onChange(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [onChange])
}
