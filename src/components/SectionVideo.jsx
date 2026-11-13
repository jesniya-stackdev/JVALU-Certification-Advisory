import React, { useEffect, useRef } from 'react'

// Muted background video for a section. It waits until the section is on screen, plays once
// at a gentle speed, then rests on its last frame (the clip is a short camera move, so a hard
// loop would show a visible jump). Shows a still frame only when the visitor prefers reduced motion.
export default function SectionVideo({ src, speed = 0.6 }) {
  const ref = useRef(null)

  useEffect(() => {
    const video = ref.current
    if (!video) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    video.playbackRate = speed
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {})
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(video)
    return () => observer.disconnect()
  }, [speed])

  return (
    <video
      ref={ref}
      muted
      playsInline
      preload="metadata"
      className="absolute inset-0 w-full h-full object-cover"
      aria-hidden="true"
    >
      <source src={`${src}#t=0.1`} type="video/mp4" />
    </video>
  )
}
