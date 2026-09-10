import { useEffect } from 'react'
import { Check } from './Icons.jsx'

/** Bottom-centre status toast — e.g. "Resume download started". */
export default function Toast({ message, onDone }) {
  useEffect(() => {
    if (!message) return undefined
    const t = setTimeout(onDone, 3400)
    return () => clearTimeout(t)
  }, [message, onDone])

  return (
    <div className={`toast ${message ? 'show' : ''}`} role="status" aria-live="polite">
      <Check /> {message}
    </div>
  )
}
