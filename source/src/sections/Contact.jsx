import { useState } from 'react'
import { contact, formspreeEndpoint, profile } from '../data/portfolio.js'
import Reveal from '../components/Reveal.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import { ArrowRight, ArrowUpRight, MapPin } from '../components/Icons.jsx'

/** 11 — Contact. Editorial details + Formspree-powered form. */
export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [state, setState] = useState('idle') // idle | sending | success | error

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      errs.email = 'Please enter a valid email address.'
    }
    if (form.message.trim().length < 10) errs.message = 'Please write a short message (10+ characters).'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const submit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setState('sending')
    try {
      const res = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.target),
      })
      if (res.ok) {
        setState('success')
        setForm({ name: '', email: '', message: '' })
        e.target.reset()
      } else {
        setState('error')
      }
    } catch {
      setState('error')
    }
  }

  return (
    <section id="contact" className="bg-cream" aria-label="Contact">
      <div className="screen contact-section">
        <div className="container contact-grid">
          <div>
            <SectionHeader num="11" label="Contact" />
            <Reveal>
              <h2 className="contact-title">
                Let&apos;s <span className="accent">Talk.</span>
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="contact-msg">{contact.message}</p>
            </Reveal>

            <div className="contact-rows">
              {contact.rows.map((r, i) => (
                <Reveal key={r.label} delay={i * 70}>
                  {r.href ? (
                    <a
                      className="contact-row"
                      href={r.href}
                      target={r.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                    >
                      <span className="k">{r.label}</span>
                      <span className="v">{r.value}</span>
                      <ArrowUpRight className="ic" />
                    </a>
                  ) : (
                    <div className="contact-row">
                      <span className="k">{r.label}</span>
                      <span className="v">{r.value}</span>
                      <MapPin className="ic" />
                    </div>
                  )}
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={140}>
            <form className="form-card" onSubmit={submit} noValidate>
              <p className="form-title">Send a message</p>

              <div className="field">
                <label htmlFor="cf-name">Name</label>
                <input
                  id="cf-name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={set('name')}
                  placeholder="Your name"
                  autoComplete="name"
                  aria-invalid={!!errors.name}
                />
                {errors.name && <span className="err" role="alert">{errors.name}</span>}
              </div>

              <div className="field">
                <label htmlFor="cf-email">Email</label>
                <input
                  id="cf-email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={set('email')}
                  placeholder="you@example.com"
                  autoComplete="email"
                  aria-invalid={!!errors.email}
                />
                {errors.email && <span className="err" role="alert">{errors.email}</span>}
              </div>

              <div className="field">
                <label htmlFor="cf-message">Message</label>
                <textarea
                  id="cf-message"
                  name="message"
                  value={form.message}
                  onChange={set('message')}
                  placeholder="What would you like to talk about?"
                  aria-invalid={!!errors.message}
                />
                {errors.message && <span className="err" role="alert">{errors.message}</span>}
              </div>

              <button className="btn btn-primary" type="submit" disabled={state === 'sending'}>
                {state === 'sending' ? 'Sending…' : 'Send Message'} <ArrowRight />
              </button>

              {state === 'success' && (
                <p className="form-status ok" role="status">
                  Thank you — your message has been sent. I&apos;ll get back to you soon.
                </p>
              )}
              {state === 'error' && (
                <p className="form-status err" role="alert">
                  Something went wrong. Please try again, or email me directly at {profile.email}.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>

      {/* Thanks Section */}
      <div className="screen bg-olive thanks-section">
        <div className="container thanks-inner">
          <Reveal>
            <div className="thanks-eyebrow">12 / END</div>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="thanks-title">Thank You</h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="thanks-subtitle">for visiting my portfolio</p>
          </Reveal>
          <Reveal delay={180}>
            <div className="thanks-divider"></div>
          </Reveal>
          <Reveal delay={240}>
            <p className="thanks-role">{profile.role}</p>
            <p className="thanks-location">{profile.location}</p>
          </Reveal>
          <Reveal delay={300}>
            <div className="thanks-links">
              <a href={profile.github} target="_blank" rel="noreferrer" className="thanks-link">GitHub</a>
              <span className="thanks-dot">•</span>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="thanks-link">LinkedIn</a>
              <span className="thanks-dot">•</span>
              <a href={`mailto:${profile.email}`} className="thanks-link">Email</a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
