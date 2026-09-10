import { about } from '../data/portfolio.js'
import Reveal from '../components/Reveal.jsx'
import SectionHeader from '../components/SectionHeader.jsx'

/** 02 — About. Two-column editorial layout + information grid. */
export default function About() {
  return (
    <section id="about" className="screen bg-ivory" aria-label="About">
      <div className="container">
        <SectionHeader num="02" label="About" />

        <div className="about-grid">
          <Reveal>
            <h2 className="about-statement">
              I enjoy turning ideas into <span className="accent">practical software.</span>
            </h2>
          </Reveal>
          <div className="about-copy">
            {about.paragraphs.map((p, i) => (
              <Reveal key={p.slice(0, 24)} delay={i * 90 + 80}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="about-info">
          {about.info.map((f, i) => (
            <Reveal key={f.n} delay={i * 80}>
              <div className="info-block">
                <div className="info-num" aria-hidden="true">{f.n}</div>
                <div className="info-label">{f.label}</div>
                <div className="info-value">{f.value}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
