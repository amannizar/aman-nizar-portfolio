import { profile } from '../data/portfolio.js'
import Reveal from '../components/Reveal.jsx'
import { Download } from '../components/Icons.jsx'

/** Resume — Full-width deep-olive resume screen. */
export default function NextStep({ onResume }) {
  return (
    <section id="next-step" className="screen bg-olive" aria-label="Resume">
      <span className="next-watermark" aria-hidden="true">AMAN NIZAR</span>

      <div className="container next-inner">
        <Reveal>
          <h2 className="next-title">
            Let&apos;s take the <br />
            <span className="accent">next step.</span>
          </h2>
        </Reveal>
        <Reveal delay={90}>
          <p className="next-desc">A compact view of the skills, projects, and momentum behind the work.</p>
        </Reveal>
        <Reveal delay={180}>
          <div className="next-actions">
            <button type="button" className="btn btn-cream" onClick={onResume}>
              DOWNLOAD RESUME <Download />
            </button>
          </div>
        </Reveal>
      </div>
      <span className="next-role" aria-hidden="true">{profile.role}</span>
    </section>
  )
}
