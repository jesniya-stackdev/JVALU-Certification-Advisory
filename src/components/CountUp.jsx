import React, { useEffect, useRef, useState } from 'react'

export default function CountUp({ to, suffix = '', duration = 3200, className = '' }) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const animate = (now) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = -(Math.cos(Math.PI * progress) - 1) / 2
            setValue(Math.round(eased * to))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [to, duration])

  return (
    <span ref={ref} className={className}>
      {value}{suffix}
    </span>
  )
}
