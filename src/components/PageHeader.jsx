import React from 'react'
import Reveal from './Reveal'

export default function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <section className="relative overflow-hidden bg-teal-700 text-paper">
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <div
        className="absolute -right-20 -top-20 w-72 h-72 rounded-full opacity-[0.08] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #B8924A 0%, transparent 70%)' }}
      />
      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-16 pb-16 md:pt-20 md:pb-20 relative">
        <Reveal>
          {eyebrow && <p className="eyebrow text-bronze-400 mb-5">{eyebrow}</p>}
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-tight max-w-2xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 text-paper/75 text-lg leading-relaxed max-w-xl">{subtitle}</p>
          )}
        </Reveal>
      </div>
      <div className="h-px bg-paper/10" />
    </section>
  )
}
