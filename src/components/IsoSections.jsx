import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Award, Leaf, HardHat, Utensils } from 'lucide-react'
import Reveal from './Reveal'

// ISO-specific sections used by ServiceDetail for the ISO Certification page only.

const standardIcons = { quality: Award, environment: Leaf, safety: HardHat, food: Utensils }

const facts = [
  { label: 'Typical timeline', value: '2 to 4 months, gap analysis to certificate' },
  { label: 'Certification audit', value: 'Stage 1 and Stage 2, by an accredited certification body' },
  { label: 'Certificate cycle', value: '3 years, with annual surveillance audits' },
]

export function IsoHero({ service }) {
  const standards = service.standards?.items || []

  const scrollToProcess = () => {
    document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative overflow-hidden bg-teal-700 text-paper">
      <div className="about-hero-grid absolute inset-0 pointer-events-none" aria-hidden="true" />
      <div
        className="absolute -right-32 -top-36 w-[620px] h-[620px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(184,146,74,0.22) 0%, rgba(184,146,74,0) 68%)' }}
        aria-hidden="true"
      />
      <svg className="hidden md:block absolute -right-[200px] top-10 w-[720px] h-[720px] pointer-events-none" viewBox="0 0 720 720" fill="none" aria-hidden="true">
        <circle cx="360" cy="360" r="340" stroke="#B8924A" strokeOpacity=".16" />
        <circle cx="360" cy="360" r="270" stroke="#F7F5F0" strokeOpacity=".08" />
        <circle cx="360" cy="360" r="200" stroke="#B8924A" strokeOpacity=".22" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 pt-32 pb-16 md:pt-44 md:pb-24 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <div className="lg:col-span-7">
          <Reveal>
            <Link to="/services" className="inline-flex items-center gap-1 text-paper/60 hover:text-paper text-sm mb-6 transition-colors">
              ← All Services
            </Link>
            <p className="eyebrow text-bronze-400">{service.eyebrow}</p>
            <h1 className="mt-4 mb-5 font-playfair font-extrabold text-4xl sm:text-5xl xl:text-6xl leading-[1.05] tracking-[-0.01em] text-white">
              ISO Certification
            </h1>
            <p className="text-paper/80 text-lg md:text-xl leading-relaxed max-w-xl">{service.heroText || service.summary}</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="group btn-press inline-flex items-center justify-center gap-3 h-[52px] px-6 bg-bronze-500 text-teal-700 font-display font-bold text-[13px] uppercase tracking-[0.06em] shadow-[inset_0_-3px_0_#96763A] transition-all duration-300 hover:bg-bronze-400 hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:transform-none"
              >
                Request Consultation
                <ArrowRight size={16} strokeWidth={2.5} className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none" />
              </Link>
              <button
                type="button"
                onClick={scrollToProcess}
                className="btn-press inline-flex items-center justify-center h-[52px] px-6 border-[1.5px] border-paper/50 text-paper font-display font-bold text-[13px] uppercase tracking-[0.06em] transition-colors hover:bg-paper/10 hover:border-paper"
              >
                View The Process
              </button>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={120}>
            {/* Official-document style fact card with a double gold frame */}
            <div className="relative bg-paper text-teal-700 border border-bronze-500/70 shadow-[inset_0_0_0_5px_#F7F5F0,inset_0_0_0_6px_rgba(184,146,74,0.55),0_30px_60px_-30px_rgba(0,0,0,0.6)] p-8">
              <div className="flex items-center gap-4 pb-5 mb-1 border-b border-teal-500/15">
                <span className="shrink-0 w-14 h-14 rounded-full bg-white border border-teal-500/12 flex items-center justify-center p-2.5 overflow-hidden">
                  <img src={service.logo} alt="ISO logo" className="w-full h-full object-contain" />
                </span>
                <div>
                  <p className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-bronze-600">ISO at a glance</p>
                  <p className="font-playfair font-bold text-xl text-teal-700 leading-tight mt-0.5">Management System Certification</p>
                </div>
              </div>

              <div className="py-3.5">
                <p className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-bronze-600 mb-2.5">Standards we support</p>
                <div className="flex flex-wrap gap-2">
                  {standards.map(({ key, code }) => (
                    <span key={key} className="px-3 py-1.5 bg-white border border-teal-500/15 text-xs font-display font-bold text-teal-700">
                      {code}
                    </span>
                  ))}
                </div>
              </div>

              {facts.map(({ label, value }) => (
                <div key={label} className="py-3.5 border-t border-teal-500/12 last:pb-0">
                  <p className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-bronze-600">{label}</p>
                  <p className="font-display font-bold text-[15px] leading-snug mt-0.5">{value}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <div className="relative border-t border-paper/10">
        <p className="max-w-7xl mx-auto px-5 md:px-8 py-3 text-xs text-paper/55">
          JVALU is an independent consultancy and is not affiliated with ISO or any certification body. ISO is a trademark of its owner.
        </p>
      </div>
    </section>
  )
}

export function IsoStandards({ standards }) {
  return (
    <section className="py-20 md:py-24 bg-white border-y border-teal-500/10">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow text-bronze-600 mb-4">{standards.eyebrow}</p>
            <h2 className="font-display font-bold text-3xl md:text-[2.4rem] leading-tight text-teal-700">{standards.title}</h2>
            <p className="mt-4 text-ink/65 leading-relaxed">{standards.text}</p>
          </div>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {standards.items.map(({ key, code, title, detail }, i) => {
            const Icon = standardIcons[key]
            return (
              <Reveal key={key} delay={i * 90} className="h-full">
                <div className="group h-full bg-paper border border-teal-500/12 border-t-[3px] border-t-bronze-500 p-7 shadow-[0_18px_40px_-22px_rgba(16,38,34,0.35)] transition-[transform,box-shadow,background-color] duration-300 ease-out hover:bg-teal-500 hover:-translate-y-1 hover:shadow-[0_24px_36px_-18px_rgba(16,38,34,0.55)] motion-reduce:transition-none motion-reduce:hover:transform-none">
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-12 h-12 rounded-full bg-[#F8F0DD] flex items-center justify-center text-bronze-600 transition-colors duration-300 group-hover:bg-bronze-500 group-hover:text-teal-700">
                      <Icon size={22} strokeWidth={1.75} />
                    </span>
                    <span className="font-mono text-xs tracking-[0.14em] text-bronze-600 transition-colors duration-300 group-hover:text-bronze-400">
                      {code}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-teal-700 mb-2 transition-colors duration-300 group-hover:text-paper">{title}</h3>
                  <p className="text-sm text-ink/65 leading-relaxed transition-colors duration-300 group-hover:text-paper/80">{detail}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
        {standards.note && <p className="mt-6 text-xs text-ink/55">{standards.note}</p>}
      </div>
    </section>
  )
}
