import { education, qspiders } from '../data/portfolio.js'
import Reveal from '../components/Reveal.jsx'
import SectionHeader from '../components/SectionHeader.jsx'

/** 08 — Education. QSpiders (currently learning) + BCA degree card. */
export default function Education() {
  return (
    <section id="education" className="screen bg-ivory" aria-label="Education and current training">
      <div className="container">
        <SectionHeader num="08" label="Education" />

        <div className="edu-grid">
          <div className="qs-panel">
            <Reveal>
              <p className="qs-eyebrow">
                <span className="dot" aria-hidden="true" /> Currently Learning
              </p>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="qs-heading">Java Full Stack Development</h2>
            </Reveal>
            <Reveal delay={110}>
              <p className="qs-place">QSpiders — Hebbal, Bengaluru</p>
            </Reveal>
            <Reveal delay={150}>
              <p className="qs-status">
                <span className="dot" aria-hidden="true" /> Currently pursuing
              </p>
            </Reveal>
            <Reveal delay={200}>
              <ul className="qs-areas">
                {qspiders.areas.map((a, i) => (
                  <li key={a} className="qs-area">
                    <span className="n" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                    {a}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <div className="edu-card">
              <p className="edu-label">Education</p>
              <div className="edu-degree">{education.degree}</div>
              <p className="edu-full">{education.full}</p>
              <div className="edu-meta">
                <div className="edu-meta-row">
                  <span className="k">College</span>
                  <span className="v">{education.college}</span>
                </div>
                <div className="edu-meta-row">
                  <span className="k">University</span>
                  <span className="v">{education.university}</span>
                </div>
                <div className="edu-meta-row">
                  <span className="k">Year</span>
                  <span className="v">{education.year}</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
