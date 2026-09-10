import { certifications } from '../data/portfolio.js'
import Reveal from '../components/Reveal.jsx'
import SectionHeader from '../components/SectionHeader.jsx'

/** 09 — Certifications. Horizontal editorial gallery of real credentials. */
export default function Certifications() {
  return (
    <section id="certifications" className="screen bg-cream" aria-label="Certifications">
      <div className="container">
        <SectionHeader num="09" label="Certifications" />
        <Reveal>
          <h2 className="section-title">
            Certifications<span className="accent">.</span>
          </h2>
        </Reveal>

        <div className="cert-gallery" style={{ marginTop: 'clamp(30px, 4.5vh, 48px)' }}>
          {certifications.map((c, i) => (
            <Reveal key={c.name} delay={i * 80}>
              <article className="cert-card">
                <img
                  className="cert-img"
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                />
                <p className="cert-kind">Certificate</p>
                <h3 className="cert-name">{c.name}</h3>
                <p className="cert-issuer">{c.issuer}</p>
                <div className="cert-foot" aria-hidden="true">
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  <span className="line" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
