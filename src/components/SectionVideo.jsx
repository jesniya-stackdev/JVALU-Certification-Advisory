import React, { useEffect, useRef } from 'react'

// Muted background video for a section. It plays while the section is on screen and pauses when
// it scrolls away. The clip is a short camera move, so it is shown twice, stacked: just before the
// first copy ends the second one fades in on top and carries on from the start. The picture never
// freezes or jumps, and the loop is slow and gentle. A still frame is shown when the visitor
// prefers reduced motion.
const FADE_MS = 1600

export default function SectionVideo({ src, speed = 0.35 }) {
  const aRef = useRef(null)
  const bRef = useRef(null)

  useEffect(() => {
    const a = aRef.current
    const b = bRef.current
    if (!a || !b) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    a.playbackRate = speed
    b.playbackRate = speed
    let active = a
    let visible = false
    let raf = 0
    let resetTimer = 0

    const swap = () => {
      const outgoing = active
      const incoming = active === a ? b : a
      active = incoming
      incoming.currentTime = 0.1
      incoming.style.transition = 'none'
      incoming.style.opacity = '0'
      incoming.style.zIndex = '2'
      outgoing.style.zIndex = '1'
      incoming.play().catch(() => {})
      // let the zero opacity apply, then fade in
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          incoming.style.transition = `opacity ${FADE_MS}ms ease-in-out`
          incoming.style.opacity = '1'
        })
      )
      window.clearTimeout(resetTimer)
      resetTimer = window.setTimeout(() => {
        outgoing.pause()
        outgoing.currentTime = 0.1
      }, FADE_MS + 100)
    }

    const tick = () => {
      if (visible && active.duration) {
        const remainingMs = ((active.duration - active.currentTime) / speed) * 1000
        if (remainingMs <= FADE_MS) swap()
      }
      raf = requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
        if (visible) active.play().catch(() => {})
        else {
          a.pause()
          b.pause()
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(a)
    raf = requestAnimationFrame(tick)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(raf)
      window.clearTimeout(resetTimer)
    }
  }, [speed])

  const common = {
    muted: true,
    playsInline: true,
    preload: 'auto',
    className: 'absolute inset-0 w-full h-full object-cover',
    'aria-hidden': 'true',
  }

  return (
    <div className="absolute inset-0 isolate overflow-hidden" aria-hidden="true">
      <video ref={aRef} {...common} style={{ zIndex: 2 }}>
        <source src={`${src}#t=0.1`} type="video/mp4" />
      </video>
      <video ref={bRef} {...common} style={{ opacity: 0, zIndex: 1 }}>
        <source src={`${src}#t=0.1`} type="video/mp4" />
      </video>
    </div>
  )
}
