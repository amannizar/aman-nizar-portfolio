import { journey } from '../data/portfolio.js'
import Reveal from '../components/Reveal.jsx'
import SectionHeader from '../components/SectionHeader.jsx'

/** 07 — Journey. Vertical timeline with a gold marker on the current milestone. */
export default function Journey() {
  return (
    <section id="journey" className="screen bg-sage" aria-label="Development journey">
      <div className="container journey-grid">
        <div className="journey-side">
          <SectionHeader num="07" label="Journey" />
          <Reveal>
            <h2 className="section-title">
              The <span className="accent">Journey.</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="journey-note">
              From a computer applications foundation to building real full stack products — a
              continuous path of learning, building and preparing for the industry.
            </p>
          </Reveal>
        </div>

        <div className="timeline">
          {journey.map((m, i) => (
            <Reveal key={m.n} delay={i * 70}>
              <div className={`tl-item ${m.status}`}>
                <span className="tl-marker" aria-hidden="true" />
                <div className="tl-head">
                  <span className="tl-num" aria-hidden="true">{m.n}</span>
                  <h3 className="tl-title">{m.title}</h3>
                  {m.status === 'current' && <span className="tl-badge">Current</span>}
                </div>
                <p className="tl-desc">{m.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
