import { useState } from 'react'
import { profile } from '../data/portfolio.js'
import { GitHub, LinkedIn, Mail, MessageSquare, Plus } from './Icons.jsx'

/** Compact floating CONNECT button — expands into the four key channels. */
export default function ConnectFab({ onMessage }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`fab ${open ? 'open' : ''}`}>
      <div className="fab-menu" aria-hidden={!open}>
        <a className="fab-item" href={profile.github} target="_blank" rel="noreferrer" tabIndex={open ? 0 : -1}>
          <GitHub /> GitHub
        </a>
        <a className="fab-item" href={profile.linkedin} target="_blank" rel="noreferrer" tabIndex={open ? 0 : -1}>
          <LinkedIn /> LinkedIn
        </a>
        <a className="fab-item" href={`mailto:${profile.email}`} tabIndex={open ? 0 : -1}>
          <Mail /> Email
        </a>
        <button
          type="button"
          className="fab-item"
          tabIndex={open ? 0 : -1}
          onClick={() => {
            setOpen(false)
            onMessage()
          }}
        >
          <MessageSquare /> Message
        </button>
      </div>
      <button
        type="button"
        className="fab-toggle"
        aria-expanded={open}
        aria-label={open ? 'Close connect menu' : 'Open connect menu'}
        onClick={() => setOpen((v) => !v)}
      >
        Connect <Plus />
      </button>
    </div>
  )
}
