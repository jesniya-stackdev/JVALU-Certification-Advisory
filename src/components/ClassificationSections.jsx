import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check, BadgeCheck } from 'lucide-react'
import Reveal from './Reveal'

// Classification page sections. Deliberately a light, airy design with a horizontal lifecycle,
// so it looks different from the dark ICV / ISO / Asset Evaluation pages.

// Four stages of a classification, drawn as a staircase in the hero.
const stairs = [
  { n: '01', label: 'Apply', h: 'h-24' },
  { n: '02', label: 'Certified', h: 'h-40' },
  { n: '03', label: 'Renew', h: 'h-56' },
  { n: '04', label: 'Upgrade', h: 'h-72' },
]

export function ClassificationHero({ service }) {
  const scrollToProcess = () => {
    document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative overflow-hidden bg-[#F6F2E8] text-teal-700">
      <div className="class-hero-grid absolute inset-0 pointer-events-none" aria-hidden="true" />
      <div
        className="absolute -left-40 -bottom-40 w-[560px] h-[560px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(184,146,74,0.16) 0%, rgba(184,146,74,0) 68%)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 pt-32 pb-14 md:pt-44 md:pb-20 grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        <div className="lg:col-span-6">
          <Reveal>
            <Link to="/services" className="inline-flex items-center gap-1 text-teal-500/70 hover:text-teal-500 text-sm mb-6 transition-colors">
              ← All Services
            </Link>
            <p className="eyebrow text-bronze-600">{service.eyebrow}</p>
            <h1 className="mt-4 font-display font-extrabold text-5xl sm:text-6xl xl:text-[4.25rem] leading-[1.05] tracking-[-0.03em] text-teal-700">
              Classification
            </h1>
            <div className="w-16 h-[3px] bg-bronze-500 my-6" />
            <p className="text-teal-700/80 text-lg md:text-xl leading-relaxed max-w-lg">{service.heroText || service.summary}</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="group btn-press inline-flex items-center justify-center gap-3 h-[52px] px-6 bg-teal-500 text-paper font-display font-bold text-[13px] uppercase tracking-[0.06em] shadow-[inset_0_-3px_0_#102622] transition-all duration-300 hover:bg-teal-600 hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:transform-none"
              >
                Request Consultation
                <ArrowRight size={16} strokeWidth={2.5} className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none" />
              </Link>
              <button
                type="button"
                onClick={scrollToProcess}
                className="btn-press inline-flex items-center justify-center h-[52px] px-6 border-[1.5px] border-teal-500 text-teal-500 font-display font-bold text-[13px] uppercase tracking-[0.06em] transition-colors hover:bg-teal-500/5"
              >
                View The Process
              </button>
            </div>
          </Reveal>
        </div>

        {/* Staircase: the path from application to a higher classification */}
        <div className="lg:col-span-6">
          <Reveal delay={120}>
            <div className="relative max-w-xl mx-auto lg:ml-auto">
              <p className="font-mono text-[11px] tracking-[0.16em] text-bronze-600 mb-5">THE CLASSIFICATION PATH</p>
              <div className="relative flex items-end gap-2.5 sm:gap-3 h-80">
                {stairs.map(({ n, label, h }, i) => {
                  const top = i === stairs.length - 1
                  return (
                    <div
                      key={n}
                      className={`${h} flex-1 relative flex flex-col justify-end p-3.5 sm:p-4 border-t-[3px] shadow-[0_18px_30px_-22px_rgba(16,38,34,0.6)] ${
                        top
                          ? 'bg-teal-700 border-t-bronze-500 text-paper'
                          : 'bg-white border-t-teal-500 text-teal-700'
                      }`}
                    >
                      {top && (
                        <span className="absolute -top-7 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-bronze-500 text-teal-700 flex items-center justify-center shadow-[0_10px_20px_-8px_rgba(150,118,58,0.8)]">
                          <BadgeCheck size={24} strokeWidth={1.8} />
                        </span>
                      )}
                      <span className={`font-mono text-[11px] tracking-[0.14em] ${top ? 'text-bronze-400' : 'text-bronze-600'}`}>{n}</span>
                      <span className="font-display font-bold text-[15px] sm:text-base mt-0.5">{label}</span>
                    </div>
                  )
                })}
              </div>
              <div className="h-px bg-teal-500/25" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export function ClassificationLifecycle({ service }) {
  const { journey, process } = service
  return (
    <section id="process" className="scroll-mt-28 py-20 md:py-24 bg-white border-y border-teal-500/10">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow text-bronze-600 mb-4">{journey.eyebrow}</p>
            <h2 className="font-display font-bold text-3xl md:text-[2.4rem] leading-tight text-teal-700">{journey.title}</h2>
            <p className="mt-4 text-ink/65 leading-relaxed">{journey.text}</p>
          </div>
        </Reveal>

        <ol className="mt-14 grid lg:grid-cols-5 gap-y-9 lg:gap-x-6">
          {process.map((step, i) => (
            <Reveal key={step.title} delay={i * 80}>
              <li className="relative flex lg:block gap-5">
                {i < process.length - 1 && (
                  <span
                    className="absolute left-5 top-10 -bottom-9 w-px bg-teal-500/25 lg:left-10 lg:right-[-1.5rem] lg:top-5 lg:bottom-auto lg:w-auto lg:h-px"
                    aria-hidden="true"
                  />
                )}
                <span className="relative z-10 shrink-0 w-10 h-10 rounded-full bg-teal-500 text-paper font-display font-bold text-sm flex items-center justify-center ring-4 ring-white">
                  {i + 1}
                </span>
                <div className="pt-1.5 lg:pt-5 lg:pr-2">
                  <h3 className="font-display font-semibold text-[17px] leading-snug text-teal-700 mb-2">{step.title}</h3>
                  <p className="text-ink/65 text-sm leading-relaxed">{step.detail}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function ClassificationIncluded({ eyebrow, title, items, note }) {
  return (
    <section className="py-20 md:py-24 bg-[#F6F2E8]">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <Reveal>
            <p className="eyebrow text-bronze-600 mb-4">{eyebrow}</p>
            <h2 className="font-display font-bold text-3xl md:text-[2.4rem] leading-tight text-teal-700">{title}</h2>
            <p className="mt-5 text-ink/70 text-lg leading-relaxed border-l-2 border-bronze-500 pl-5">
              One team handles the paperwork, the submission and the follow-up, so you can stay focused on the work.
            </p>
            {note && <p className="mt-5 text-xs text-ink/55">{note}</p>}
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <ul className="bg-white border border-teal-500/12 border-t-[3px] border-t-bronze-500 shadow-[0_18px_40px_-22px_rgba(16,38,34,0.35)]">
            {items.map((item, i) => (
              <Reveal key={item} delay={i * 50}>
                <li className="group flex items-center gap-4 px-6 py-4 border-t border-teal-500/10 first:border-t-0 transition-colors hover:bg-teal-500/[0.04]">
                  <span className="shrink-0 w-7 h-7 rounded-full bg-teal-500 flex items-center justify-center transition-colors group-hover:bg-bronze-500">
                    <Check size={15} className="text-paper group-hover:text-teal-700 transition-colors" strokeWidth={3} />
                  </span>
                  <span className="text-[15px] text-ink/80 leading-snug">{item}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
