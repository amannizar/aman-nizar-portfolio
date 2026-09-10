import { useEffect, useRef } from 'react'

/** Thin olive scroll-progress indicator — "where am I?", not "how much is left". */
export default function ScrollProgress() {
  const bar = useRef(null)

  useEffect(() => {
    let ticking = false

    const update = () => {
      ticking = false
      const max = document.documentElement.scrollHeight - window.innerHeight
      const progress = max > 0 ? Math.min(1, window.scrollY / max) : 0
      if (bar.current) bar.current.style.transform = `scaleX(${progress})`
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div className="progress" aria-hidden="true">
      <div className="progress-bar" ref={bar} />
    </div>
  )
}
