import React, { useEffect, useRef } from 'react'

// Muted background video for a section. It plays while the section is on screen and pauses when
// it scrolls away. The clip is a short camera move, so a hard loop would show a visible jump:
// instead the picture fades out just before the end and fades back in as it restarts.
// Shows a still frame only when the visitor prefers reduced motion.
const FADE_SECONDS = 0.6

export default function SectionVideo({ src, speed = 0.6 }) {
  const ref = useRef(null)

  useEffect(() => {
    const video = ref.current
    if (!video) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    video.playbackRate = speed
    let visible = false

    const fadeOutIfEnding = () => {
      const remaining = video.duration - video.currentTime
      if (video.duration && remaining <= FADE_SECONDS * speed + 0.05) video.style.opacity = '0'
    }
    const restart = () => {
      video.currentTime = 0.1
      video.style.opacity = '1'
      if (visible) video.play().catch(() => {})
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
        if (visible) video.play().catch(() => {})
        else video.pause()
      },
      { threshold: 0.2 }
    )
    observer.observe(video)
    video.addEventListener('timeupdate', fadeOutIfEnding)
    video.addEventListener('ended', restart)
    return () => {
      observer.disconnect()
      video.removeEventListener('timeupdate', fadeOutIfEnding)
      video.removeEventListener('ended', restart)
    }
  }, [speed])

  return (
    <video
      ref={ref}
      muted
      playsInline
      preload="auto"
      className="absolute inset-0 w-full h-full object-cover transition-opacity ease-in-out"
      style={{ transitionDuration: `${FADE_SECONDS * 1000}ms` }}
      aria-hidden="true"
    >
      <source src={`${src}#t=0.1`} type="video/mp4" />
    </video>
  )
}
