import { sections } from '../data/portfolio.js'

/** Fixed right-rail section indicator — 01 … 12, current screen in olive. */
export default function SectionIndicator({ active, onNavigate }) {
  return (
    <nav className="indicator" aria-label="Section indicator">
      {sections.map((s) => (
        <button
          key={s.id}
          type="button"
          className={`ind ${active === s.id ? 'active' : ''}`}
          onClick={() => onNavigate(s.id)}
          aria-label={`Go to ${s.label}`}
          aria-current={active === s.id ? 'true' : undefined}
        >
          {s.num}
        </button>
      ))}
    </nav>
  )
}
