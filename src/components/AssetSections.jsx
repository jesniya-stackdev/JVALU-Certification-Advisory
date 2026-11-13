import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Cog, Truck, Building2, Server, Briefcase, Scale } from 'lucide-react'
import Reveal from './Reveal'

// Asset Evaluation sections used by ServiceDetail for the Asset Evaluation page only.

const assetIcons = { machinery: Cog, vehicles: Truck, property: Building2, it: Server, business: Briefcase }

export function AssetHero({ service }) {
  const assets = service.assetTypes?.items || []

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
              Asset Evaluation
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
            {/* Dark glass panel: icon tiles for each asset type, then the valuation approaches */}
            <div className="bg-paper/[0.06] border border-paper/15 border-t-[3px] border-t-bronze-500 px-7 py-6 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-5">
                <p className="font-mono text-[11px] tracking-[0.16em] text-bronze-400">WHAT WE VALUE</p>
                <Scale size={18} strokeWidth={1.6} className="text-bronze-400" aria-hidden="true" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                {assets.map(({ key, title }, i) => {
                  const Icon = assetIcons[key]
                  const last = i === assets.length - 1 && assets.length % 2 === 1
                  return (
                    <div
                      key={key}
                      className={`group flex flex-col items-start gap-2.5 xl:flex-row xl:items-center xl:gap-3 border border-paper/15 bg-paper/[0.04] px-3.5 py-3.5 transition-colors hover:bg-paper/10 hover:border-bronze-400/60 ${last ? 'col-span-2' : ''}`}
                    >
                      <span className="shrink-0 w-10 h-10 rounded-full border-[1.5px] border-bronze-400/70 flex items-center justify-center text-bronze-400 transition-colors group-hover:bg-bronze-500 group-hover:text-teal-700">
                        <Icon size={18} strokeWidth={1.75} />
                      </span>
                      <span className="font-display font-semibold text-[14px] leading-tight text-white">{title}</span>
                    </div>
                  )
                })}
              </div>

              <div className="mt-6 pt-5 border-t border-paper/12">
                <p className="font-mono text-[11px] tracking-[0.16em] text-bronze-400 mb-3">VALUATION APPROACHES</p>
                <div className="grid grid-cols-3 divide-x divide-paper/15 border border-paper/15 text-center">
                  {['Cost', 'Market', 'Income'].map((a) => (
                    <span key={a} className="py-2.5 font-display font-bold text-[13px] uppercase tracking-[0.08em] text-white">
                      {a}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-sm text-paper/70 leading-snug">
                  Straightforward equipment valuations are typically completed within a week.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="relative border-t border-paper/10">
        <p className="max-w-7xl mx-auto px-5 md:px-8 py-3 text-xs text-paper/55">
          Scope and valuation approach are agreed with you before any work starts.
        </p>
      </div>
    </section>
  )
}

export function AssetTypes({ assetTypes }) {
  return (
    <section className="py-20 md:py-24 bg-white border-y border-teal-500/10">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow text-bronze-600 mb-4">{assetTypes.eyebrow}</p>
            <h2 className="font-display font-bold text-3xl md:text-[2.4rem] leading-tight text-teal-700">{assetTypes.title}</h2>
            <p className="mt-4 text-ink/65 leading-relaxed">{assetTypes.text}</p>
          </div>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {assetTypes.items.map(({ key, title, detail }, i) => {
            const Icon = assetIcons[key]
            return (
              <Reveal key={key} delay={i * 80} className="h-full">
                <div className="group h-full bg-paper border border-teal-500/12 border-t-[3px] border-t-bronze-500 p-6 shadow-[0_18px_40px_-22px_rgba(16,38,34,0.35)] transition-[transform,box-shadow,background-color] duration-300 ease-out hover:bg-teal-500 hover:-translate-y-1 hover:shadow-[0_24px_36px_-18px_rgba(16,38,34,0.55)] motion-reduce:transition-none motion-reduce:hover:transform-none">
                  <div className="flex items-center justify-between mb-5">
                    <span className="w-12 h-12 rounded-full bg-[#F8F0DD] flex items-center justify-center text-bronze-600 transition-colors duration-300 group-hover:bg-bronze-500 group-hover:text-teal-700">
                      <Icon size={22} strokeWidth={1.75} />
                    </span>
                    <span className="font-mono text-xs tracking-[0.14em] text-bronze-600 transition-colors duration-300 group-hover:text-bronze-400">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-[17px] text-teal-700 mb-2 transition-colors duration-300 group-hover:text-paper">{title}</h3>
                  <p className="text-sm text-ink/65 leading-relaxed transition-colors duration-300 group-hover:text-paper/80">{detail}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
        {assetTypes.note && <p className="mt-6 text-xs text-ink/55">{assetTypes.note}</p>}
      </div>
    </section>
  )
}

export function AssetPurposes({ purposes }) {
  return (
    <section className="py-20 md:py-24 bg-teal-700 text-paper relative overflow-hidden">
      <div className="about-hero-grid absolute inset-0 pointer-events-none opacity-60" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-4">
          <Reveal>
            <p className="eyebrow text-bronze-400 mb-4">{purposes.eyebrow}</p>
            <h2 className="font-display font-bold text-3xl md:text-[2.2rem] leading-tight text-white">{purposes.title}</h2>
            <p className="mt-4 text-paper/70 leading-relaxed">{purposes.text}</p>
          </Reveal>
        </div>
        <div className="lg:col-span-8">
          {purposes.items.map(({ title, detail }, i) => (
            <Reveal key={title} delay={i * 70}>
              <div className="group flex items-start gap-5 md:gap-7 py-5 border-t border-paper/15 last:border-b">
                <span className="font-mono text-sm text-bronze-400 pt-1 w-8 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-bronze-400 transition-colors">{title}</h3>
                  <p className="mt-1 text-sm text-paper/70 leading-relaxed max-w-xl">{detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
