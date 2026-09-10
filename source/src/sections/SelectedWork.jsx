import { projects, work } from '../data/portfolio.js'
import Reveal from '../components/Reveal.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import { ArrowUpRight } from '../components/Icons.jsx'

/** 04 — Selected Work. Editorial index of the two real projects. */
export default function SelectedWork({ onOpen }) {
  return (
    <section id="work" className="screen bg-ivory" aria-label="Selected work">
      <div className="container">
        <SectionHeader num="04" label="Selected Work" />
        <Reveal>
          <p className="work-label">{work.label}</p>
        </Reveal>
        <Reveal delay={70}>
          <h2 className="section-title work-title">
            Things I&apos;ve <span className="accent">Built.</span>
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="work-intro-text">{work.intro}</p>
        </Reveal>

        <div className="work-index">
          {projects.map((p, i) => (
            <Reveal key={p.key} delay={i * 100}>
              <button
                type="button"
                className="work-row"
                onClick={() => onOpen(`project-${p.key}`)}
                aria-label={`Open the ${p.title} project screen`}
              >
                <span className="num" aria-hidden="true">{p.num}</span>
                <span className="mid">
                  <span className="t">{p.title}</span>
                  <span className="tag">{p.tag}</span>
                </span>
                <ArrowUpRight className="arrow" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
