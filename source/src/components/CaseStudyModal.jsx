import Modal from './Modal.jsx'
import { projects } from '../data/portfolio.js'
import { ArrowUpRight } from './Icons.jsx'

/** Premium case-study panel — overview, problem, solution, tech, features, screens. */
export default function CaseStudyModal({ which, onClose }) {
  const project = projects.find((p) => p.key === which)
  if (!project) return null

  const cs = project.caseStudy

  return (
    <Modal open={!!which} onClose={onClose} label={`${project.title} — case study`} wide>
      <p className="cs-tag">
        {project.num} · {project.tag}
      </p>
      <h3 className="cs-title">{project.title}</h3>

      <div className="cs-section">
        <h4 className="cs-h">Overview</h4>
        <p className="cs-p">{cs.overview}</p>
      </div>

      <div className="cs-section">
        <h4 className="cs-h">Problem</h4>
        <p className="cs-p">{cs.problem}</p>
      </div>

      <div className="cs-section">
        <h4 className="cs-h">Solution</h4>
        <p className="cs-p">{cs.solution}</p>
      </div>

      <div className="cs-section">
        <h4 className="cs-h">Technology</h4>
        <div className="cs-tech">
          {project.tech.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>

      <div className="cs-section">
        <h4 className="cs-h">Features</h4>
        <ul className="cs-features">
          {cs.features.map((f) => (
            <li key={f} className="cs-feat">
              {f}
            </li>
          ))}
        </ul>
      </div>

      <div className="cs-section">
        <h4 className="cs-h">Screens</h4>
        <div className="cs-gallery">
          {cs.gallery.map((g) => (
            <img key={g.src} src={g.src} alt={g.alt} loading="lazy" />
          ))}
        </div>
      </div>

      <div className="cs-actions">
        <a className="btn btn-primary" href={project.github} target="_blank" rel="noreferrer">
          View GitHub <ArrowUpRight />
        </a>
        {project.demo && (
          <a className="btn btn-outline" href={project.demo} target="_blank" rel="noreferrer">
            Live Demo <ArrowUpRight />
          </a>
        )}
      </div>
    </Modal>
  )
}
