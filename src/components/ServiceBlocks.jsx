import React from 'react'
import { Check } from 'lucide-react'
import Reveal from './Reveal'

// Shared building blocks for service pages that carry `highlights` / `checklist` data.

export function HighlightsStrip({ items }) {
  return (
    <section className="bg-teal-500 border-t-[3px] border-bronze-500">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-paper/10">
        {items.map((h) => (
          <div key={h.title} className="py-5 sm:px-8 first:sm:pl-0 last:sm:pr-0">
            <p className="font-display font-bold text-xl text-paper">{h.title}</p>
            <p className="text-paper/70 text-sm mt-0.5">{h.detail}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function ChecklistSection({ eyebrow, title, items, note }) {
  return (
    <section className="py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Reveal>
          <p className="eyebrow text-bronze-600 mb-4">{eyebrow}</p>
          <h2 className="font-display font-bold text-3xl md:text-[2.2rem] leading-tight text-teal-700 max-w-xl">
            {title}
          </h2>
        </Reveal>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {items.map((item, i) => (
            <Reveal key={item} delay={i * 50}>
              <div className="flex items-center gap-3 bg-white border border-teal-500/12 px-4 py-3.5 h-full">
                <span className="shrink-0 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center">
                  <Check size={14} className="text-paper" strokeWidth={3} />
                </span>
                <span className="text-sm text-ink/80">{item}</span>
              </div>
            </Reveal>
          ))}
        </div>
        {note && <p className="mt-4 text-xs text-ink/55">{note}</p>}
      </div>
    </section>
  )
}

export function ApproachSection({ approach, categories }) {
  const items = categories?.items || []
  return (
    <section id="case-categories" className="scroll-mt-28 py-20 md:py-24 bg-[#FAF4E6]">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow text-bronze-600 mb-4">{approach.eyebrow}</p>
            <h2 className="font-display font-bold text-3xl md:text-[2.2rem] leading-tight text-teal-700">
              {approach.title}
            </h2>
            <p className="mt-5 text-ink/70 text-lg leading-relaxed border-l-2 border-bronze-500 pl-5">
              {approach.text}
            </p>
          </Reveal>
        </div>
        {items.length > 0 && (
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow text-bronze-600 mb-4">{categories.eyebrow}</p>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {items.map((item, i) => (
                <Reveal
                  key={item}
                  delay={i * 60}
                  className={i === items.length - 1 && items.length % 2 === 1 ? 'sm:col-span-2' : ''}
                >
                  <div className="lift-card flex items-start gap-4 bg-white border border-teal-500/12 p-5 h-full">
                    <span className="font-mono text-sm text-bronze-600 pt-0.5">{String(i + 1).padStart(2, '0')}</span>
                    <span className="font-display font-semibold text-teal-700">{item}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
