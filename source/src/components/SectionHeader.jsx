import Reveal from './Reveal.jsx'

/** Editorial section header — `02 ────────── ABOUT` with an animated rule. */
export default function SectionHeader({ num, label }) {
  return (
    <Reveal className="section-head">
      <span className="sh-num">{num}</span>
      <span className="sh-line" aria-hidden="true" />
      <span className="sh-label">{label}</span>
    </Reveal>
  )
}
