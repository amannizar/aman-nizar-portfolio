import { useCallback, useEffect, useState } from 'react'
import { projects } from './data/portfolio.js'
import { useActiveSection } from './hooks/useActiveSection.js'

import Nav from './components/Nav.jsx'
import SectionIndicator from './components/SectionIndicator.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import ConnectFab from './components/ConnectFab.jsx'
import CommandMenu from './components/CommandMenu.jsx'
import ResumeModal from './components/ResumeModal.jsx'
import CaseStudyModal from './components/CaseStudyModal.jsx'
import Toast from './components/Toast.jsx'

import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Toolkit from './sections/Toolkit.jsx'
import SelectedWork from './sections/SelectedWork.jsx'
import ProjectScreen from './sections/ProjectScreen.jsx'
import Journey from './sections/Journey.jsx'
import Education from './sections/Education.jsx'
import Certifications from './sections/Certifications.jsx'
import NextStep from './sections/NextStep.jsx'
import Contact from './sections/Contact.jsx'


export function scrollToSection(id) {
  const el = document.getElementById(id)
  if (!el) return
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
}

export default function App() {
  const [active, setActive] = useState('hero')
  const [resumeOpen, setResumeOpen] = useState(false)
  const [caseStudy, setCaseStudy] = useState(null) // 'expense' | 'gym'
  const [toast, setToast] = useState('')
  const [cmdOpen, setCmdOpen] = useState(false)

  useActiveSection(setActive)

  const anyOverlay = resumeOpen || !!caseStudy || cmdOpen
  useEffect(() => {
    document.documentElement.classList.toggle('overlay-open', anyOverlay)
  }, [anyOverlay])

  // Ctrl/Cmd + K — command menu
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setCmdOpen((v) => !v)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const openResume = useCallback(() => setResumeOpen(true), [])
  const showToast = useCallback((msg) => setToast(msg), [])
  const navigate = useCallback((id) => scrollToSection(id), [])

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <ScrollProgress />
      <Nav active={active} onNavigate={navigate} onResume={openResume} />

      <main id="main" tabIndex={-1}>
        <Hero onWork={() => navigate('work')} onResume={openResume} />
        <About />
        <Toolkit />
        <SelectedWork onOpen={navigate} />
        <ProjectScreen project={projects[0]} onCaseStudy={() => setCaseStudy('expense')} />
        <ProjectScreen project={projects[1]} flip onCaseStudy={() => setCaseStudy('gym')} />
        <Journey />
        <Education />
        <Certifications />
        <NextStep onResume={openResume} />
        <Contact />
      </main>

      

      <SectionIndicator active={active} onNavigate={navigate} />
      <ConnectFab onMessage={() => navigate('contact')} />

      <CommandMenu open={cmdOpen} onClose={() => setCmdOpen(false)} onNavigate={navigate} onResume={openResume} />

      <ResumeModal
        open={resumeOpen}
        onClose={() => setResumeOpen(false)}
        onDownloaded={() => {
          setResumeOpen(false)
          showToast('Resume download started')
        }}
      />

      <CaseStudyModal which={caseStudy} onClose={() => setCaseStudy(null)} />

      <Toast message={toast} onDone={() => setToast('')} />
    </>
  )
}
