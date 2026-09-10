import { profile } from '../data/portfolio.js'
import Reveal from '../components/Reveal.jsx'
import { ArrowDown, Download, GitHub, LinkedIn, Mail } from '../components/Icons.jsx'

const FOOT_NAV = [
  ['hero', 'Home'],
  ['about', 'About'],
  ['toolkit', 'Skills'],
  ['work', 'Work'],
  ['journey', 'Journey'],
  ['certifications', 'Certifications'],
  ['contact', 'Contact'],
]

/** 12 — End. Deep-olive footer screen. */
export default function Footer({ onNavigate }) {
  return (
    <footer id="end" className="screen bg-olive" aria-label="Footer">
      <div className="container">
        <div className="foot-head">
          <div>
            <Reveal>
              <h2 className="foot-name">
                AMAN NIZAR <span className="accent">M P.</span>
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="foot-role">Java Full Stack Developer</p>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <p className="foot-top-label">12 / End — Thank you for visiting</p>
          </Reveal>
        </div>

        <div className="foot-grid">
          <div className="foot-col">
            <h4>Navigate</h4>
            <ul className="foot-links">
              {FOOT_NAV.map(([id, label]) => (
                <li key={id}>
                  <button type="button" className="foot-link" onClick={() => onNavigate(id)}>
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="foot-col">
            <h4>Connect</h4>
            <ul className="foot-links">
              <li>
                <a className="foot-link" href={profile.github} target="_blank" rel="noreferrer">
                  <GitHub /> GitHub
                </a>
              </li>
              <li>
                <a className="foot-link" href={profile.linkedin} target="_blank" rel="noreferrer">
                  <LinkedIn /> LinkedIn
                </a>
              </li>
              <li>
                <a className="foot-link" href={`mailto:${profile.email}`}>
                  <Mail /> {profile.email}
                </a>
              </li>
              <li>
                <a className="foot-link" href={profile.resume} download="Aman-Nizar-Resume.pdf">
                  <Download /> Resume (PDF)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="foot-bottom">
          <span>© 2026 Aman Nizar M P</span>
          <span>{profile.location}</span>
          <button type="button" className="foot-up" onClick={() => onNavigate('hero')}>
            Back to top <ArrowDown />
          </button>
        </div>
      </div>
    </footer>
  )
}
