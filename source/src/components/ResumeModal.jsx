import Modal from './Modal.jsx'
import { nextStep, profile } from '../data/portfolio.js'
import { Check, Download } from './Icons.jsx'

/** "Before you go..." — pre-download resume modal. */
export default function ResumeModal({ open, onClose, onDownloaded }) {
  const download = () => {
    const a = document.createElement('a')
    a.href = profile.resume
    a.download = 'Aman-Nizar-Resume.pdf'
    document.body.appendChild(a)
    a.click()
    a.remove()
    onDownloaded()
  }

  return (
    <Modal open={open} onClose={onClose} label="Before you go — resume">
      <p className="rm-eyebrow">Resume · PDF</p>
      <h3 className="rm-title">
        Before you <span className="accent">go...</span>
      </h3>
      <p className="rm-sub">A quick look at what's inside — one page, no fluff.</p>
      <ul className="rm-list">
        {nextStep.highlights.map((h) => (
          <li key={h} className="rm-item">
            <Check /> {h.toUpperCase()}
          </li>
        ))}
      </ul>
      <div className="rm-actions">
        <button type="button" className="btn btn-primary" onClick={download}>
          Download Resume <Download />
        </button>
        <button type="button" className="btn btn-outline" onClick={onClose}>
          Cancel
        </button>
      </div>
    </Modal>
  )
}
