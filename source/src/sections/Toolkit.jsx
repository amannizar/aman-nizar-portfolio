import { useEffect, useRef } from 'react'
import { ecosystem, skills } from '../data/portfolio.js'
import Reveal from '../components/Reveal.jsx'
import SectionHeader from '../components/SectionHeader.jsx'

/* Ecosystem diagram geometry — thin editorial constellation around Java. */
const CX = 280
const CY = 230
const R = 140

const NODES = ecosystem.nodes.map((label, i) => {
  const angle = (-90 + i * 45) * (Math.PI / 180)
  const x = CX + R * Math.cos(angle)
  const y = CY + R * Math.sin(angle)
  const anchor =
    Math.abs(Math.cos(angle)) < 0.2 ? 'middle' : Math.cos(angle) > 0 ? 'start' : 'end'
  const lx = x + (anchor === 'start' ? 16 : anchor === 'end' ? -16 : 0)
  const ly = y + (anchor === 'middle' ? (Math.sin(angle) > 0 ? 26 : -16) : 4)
  return { label, x, y, lx, ly, anchor }
})

/** 03 — Toolkit. Editorial skill list + subtle ecosystem visual. */
export default function Toolkit() {
  const ecoRef = useRef(null)

  useEffect(() => {
    const el = ecoRef.current
    if (!el) return undefined
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('revealed')
      return undefined
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed')
          observer.disconnect()
        }
      },
      { threshold: 0.25 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="toolkit" className="screen bg-cream" aria-label="Skills and toolkit">
      <div className="container">
        <SectionHeader num="03" label="Toolkit" />
        <Reveal>
          <h2 className="section-title">
            My <span className="accent">Toolkit.</span>
          </h2>
        </Reveal>

        <div className="toolkit-grid" style={{ marginTop: 'clamp(30px, 4.5vh, 48px)' }}>
          <Reveal delay={90}>
            <ul className="skill-list">
              {skills.map((s) => (
                <li key={s.n} className="skill-row">
                  <span className="skill-num" aria-hidden="true">{s.n}</span>
                  <span className="skill-name">{s.name}</span>
                  <span className="skill-desc">{s.desc}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="eco-wrap" aria-hidden="true">
            <svg className="eco" viewBox="0 0 560 460" ref={ecoRef} focusable="false">
              {NODES.map((n) => (
                <line key={n.label} className="eco-line" x1={CX} y1={CY} x2={n.x} y2={n.y} />
              ))}
              <circle className="eco-ring" cx={CX} cy={CY} r={R} />
              {NODES.map((n, i) => (
                <circle key={`node-${n.label}`} className={`eco-node g${i + 1}`} cx={n.x} cy={n.y} r="5" />
              ))}
              {NODES.map((n, i) => (
                <text
                  key={`label-${n.label}`}
                  className={`eco-label g${i + 1}`}
                  x={n.lx}
                  y={n.ly}
                  textAnchor={n.anchor}
                >
                  {n.label.toUpperCase()}
                </text>
              ))}
              <circle className="eco-center" cx={CX} cy={CY} r="56" />
              <text className="eco-center-label" x={CX} y={CY + 5} textAnchor="middle">
                {ecosystem.center.toUpperCase()}
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
