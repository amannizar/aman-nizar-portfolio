import { hero, profile } from '../data/portfolio.js'
import Reveal from '../components/Reveal.jsx'
import { ArrowDown, Download } from '../components/Icons.jsx'

/** 01 — Hero. Asymmetric editorial layout with the single portrait anchor. */
export default function Hero({ onWork, onResume }) {
  return (
    <section id="hero" className="screen bg-cream" aria-label="Introduction">
      <span className="crosshair" style={{ left: '3.5%', top: '24%' }} aria-hidden="true" />
      <span className="crosshair" style={{ right: '5%', bottom: '20%' }} aria-hidden="true" />

      <div className="container hero-grid">
        <div className="hero-top">
          <Reveal>
            <p className="hero-status">
              <span className="dot" aria-hidden="true" /> Open to Opportunities
            </p>
          </Reveal>
          <Reveal delay={70}>
            <p className="hero-eyebrow">{hero.eyebrow}</p>
          </Reveal>
          <Reveal as="p" className="hero-name-mobile">
            Aman Nizar M P
          </Reveal>
          <h1 className="hero-title">
            <Reveal as="span" className="row" delay={110}>
              Building
            </Reveal>
            <Reveal as="span" className="row accent" delay={190}>
              Software
            </Reveal>
            <Reveal as="span" className="row" delay={270}>
              With Purpose.
            </Reveal>
          </h1>
        </div>

        <div className="hero-portrait">
          <Reveal delay={260} className="portrait-wrap">
            <p className="portrait-label top">01 — Aman Nizar M P</p>
            <figure className="portrait">
              <span className="gold-tick" aria-hidden="true" />
              <div className="portrait-frame">
                <img
                  src={profile.photo}
                  alt="Aman Nizar M P — Java Full Stack Developer"
                  width="1100"
                  height="1100"
                  fetchPriority="high"
                />
              </div>
            </figure>
            <p className="portrait-label bottom">
              <span>Java Full Stack Developer</span>
              <span>BLR · IN</span>
            </p>
          </Reveal>
        </div>

        <div className="hero-rest">
          <Reveal delay={330}>
            <p className="hero-desc">{hero.description}</p>
          </Reveal>
          <Reveal delay={410}>
            <div className="hero-actions">
              <button type="button" className="btn btn-primary" onClick={onWork}>
                View My Work <ArrowDown />
              </button>
              <button type="button" className="btn btn-outline" onClick={onResume}>
                Download Resume <Download />
              </button>
            </div>
          </Reveal>
          <Reveal delay={490}>
            <ul className="hero-annotations" aria-label="Core technologies">
              {hero.annotations.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>

      <div className="scroll-cue" aria-hidden="true">
        <span>Scroll</span>
        <i />
      </div>
    </section>
  )
}
