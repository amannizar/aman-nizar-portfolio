import Reveal from '../components/Reveal.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import { ArrowRight, ArrowUpRight } from '../components/Icons.jsx'

/**
 * 05 / 06 — Project case screens. Expense Tracker (cream, text left) and
 * Gym Management System (ivory, screenshot left) share this layout with a
 * flip for editorial rhythm.
 */
export default function ProjectScreen({ project, flip = false, onCaseStudy }) {
  const urlLabel = project.demo ? project.demoLabel : project.github.replace('https://', '')

  return (
    <section
      id={`project-${project.key}`}
      className={`screen ${flip ? 'bg-ivory' : 'bg-cream'}`}
      aria-label={`${project.title} project`}
    >
      <div className="container">
        <SectionHeader num={flip ? '06' : '05'} label={`Project ${project.num}`} />

        <div className={`project-grid ${flip ? 'flip' : ''}`}>
          <div className="proj-info">
            <Reveal>
              <div className="proj-num" aria-hidden="true">{project.num}</div>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="proj-title">{project.title}</h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="proj-tag">{project.tag}</p>
            </Reveal>
            <Reveal delay={180}>
              <p className="proj-desc">{project.short}</p>
            </Reveal>
            <Reveal delay={240}>
              <p className="proj-tech">
                {project.tech.map((t, i) => (
                  <span key={t}>
                    {i > 0 && <span className="sep" aria-hidden="true">·</span>}
                    {t}
                  </span>
                ))}
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="proj-actions">
                <a className="btn btn-primary" href={project.github} target="_blank" rel="noreferrer">
                  View GitHub <ArrowUpRight />
                </a>
                {project.demo ? (
                  <a className="btn btn-outline" href={project.demo} target="_blank" rel="noreferrer">
                    Live Demo <ArrowUpRight />
                  </a>
                ) : (
                  <button type="button" className="btn btn-outline" onClick={onCaseStudy}>
                    Case Study <ArrowUpRight />
                  </button>
                )}
                <button type="button" className="proj-case-link" onClick={onCaseStudy}>
                  View Case Study <ArrowRight />
                </button>
              </div>
            </Reveal>
          </div>

          <div className="shot-col">
            <Reveal delay={200}>
              <button type="button" className="shot" onClick={onCaseStudy} aria-label={`Open the ${project.title} case study`}>
                <span className="shot-bar">
                  <span className="shot-dots" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span className="shot-url">{urlLabel}</span>
                </span>
                <span className="shot-body">
                  <img src={project.shot} alt={project.shotAlt} loading="lazy" width="1400" height="900" />
                  <span className="shot-overlay">
                    <span>
                      View Case Study <ArrowUpRight />
                    </span>
                  </span>
                </span>
              </button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
