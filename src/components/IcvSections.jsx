import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Store, Users, Factory, Landmark } from 'lucide-react'
import Reveal from './Reveal'

// ICV-specific sections used by ServiceDetail for the ICV Certification page only.

const driverIcons = { spend: Store, people: Users, manufacturing: Factory, investment: Landmark }

const facts = [
  { label: 'Programme', value: 'UAE In-Country Value (ICV) Programme' },
  { label: 'Certificate validity', value: '14 months' },
  { label: 'Required for', value: 'ADNOC, government and semi-government tenders' },
]

export function IcvHero({ service }) {
  const drivers = service.drivers?.items || []

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
              <span className="block">ICV Certification{' '}</span>
              <span className="block text-bronze-400">in the UAE</span>
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
                <span className="shrink-0 w-14 h-14 rounded-full bg-white border border-teal-500/12 flex items-center justify-center p-2.5">
                  <img src={service.logo} alt="ICV logo" className="w-full h-full object-contain" />
                </span>
                <div>
                  <p className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-bronze-600">ICV at a glance</p>
                  <p className="font-playfair font-bold text-xl text-teal-700 leading-tight mt-0.5">In-Country Value Certificate</p>
                </div>
              </div>

              <div className="py-3.5 flex items-center gap-4">
                <span className="shrink-0 w-12 h-12 rounded-full bg-[#F8F0DD] border border-bronze-500/40 flex items-center justify-center text-bronze-600" aria-hidden="true">
                  <Landmark size={22} strokeWidth={1.6} />
                </span>
                <div>
                  <p className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-bronze-600">Governing authority</p>
                  <p className="font-display font-bold text-[15px] leading-snug mt-0.5">Ministry of Industry and Advanced Technology (MoIAT)</p>
                </div>
              </div>

              {facts.map(({ label, value }) => (
                <div key={label} className="py-3.5 border-t border-teal-500/12">
                  <p className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-bronze-600">{label}</p>
                  <p className="font-display font-bold text-[15px] leading-snug mt-0.5">{value}</p>
                </div>
              ))}

              <div className="pt-4 border-t border-teal-500/12">
                <p className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-bronze-600 mb-2.5">Score is built on</p>
                <div className="flex flex-wrap gap-2">
                  {drivers.map(({ key, title }) => (
                    <span key={key} className="px-3 py-1.5 bg-white border border-teal-500/15 text-xs font-display font-semibold text-teal-700">
                      {title}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="relative border-t border-paper/10">
        <p className="max-w-7xl mx-auto px-5 md:px-8 py-3 text-xs text-paper/55">
          JVALU is an independent consultancy and is not affiliated with or endorsed by MoIAT or ADNOC. Names and logos belong to their respective owners.
        </p>
      </div>
    </section>
  )
}

export function IcvDrivers({ drivers }) {
  return (
    <section className="py-20 md:py-24 bg-white border-y border-teal-500/10">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow text-bronze-600 mb-4">{drivers.eyebrow}</p>
            <h2 className="font-display font-bold text-3xl md:text-[2.4rem] leading-tight text-teal-700">{drivers.title}</h2>
            <p className="mt-4 text-ink/65 leading-relaxed">{drivers.text}</p>
          </div>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {drivers.items.map(({ key, title, detail }, i) => {
            const Icon = driverIcons[key]
            return (
              <Reveal key={key} delay={i * 90} className="h-full">
                <div className="group h-full bg-paper border border-teal-500/12 border-t-[3px] border-t-bronze-500 p-7 shadow-[0_18px_40px_-22px_rgba(16,38,34,0.35)] transition-[transform,box-shadow,background-color] duration-300 ease-out hover:bg-teal-500 hover:-translate-y-1 hover:shadow-[0_24px_36px_-18px_rgba(16,38,34,0.55)] motion-reduce:transition-none motion-reduce:hover:transform-none">
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-12 h-12 rounded-full bg-[#F8F0DD] flex items-center justify-center text-bronze-600 transition-colors duration-300 group-hover:bg-bronze-500 group-hover:text-teal-700">
                      <Icon size={22} strokeWidth={1.75} />
                    </span>
                    <span className="font-mono text-xs tracking-[0.14em] text-bronze-600 transition-colors duration-300 group-hover:text-bronze-400">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-teal-700 mb-2 transition-colors duration-300 group-hover:text-paper">{title}</h3>
                  <p className="text-sm text-ink/65 leading-relaxed transition-colors duration-300 group-hover:text-paper/80">{detail}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
        {drivers.note && <p className="mt-6 text-xs text-ink/55">{drivers.note}</p>}
      </div>
    </section>
  )
}

export function IcvJourney({ service }) {
  const { journey, process } = service
  return (
    <section id="process" className="scroll-mt-28 py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-4">
          <Reveal>
            <p className="eyebrow text-bronze-600 mb-4">{journey.eyebrow}</p>
            <h2 className="font-display font-bold text-3xl md:text-[2.2rem] leading-tight text-teal-700">{journey.title}</h2>
            <p className="mt-4 text-ink/65 leading-relaxed">{journey.text}</p>
          </Reveal>
        </div>
        <div className="lg:col-span-8">
          <ol>
            {process.map((step, i) => (
              <Reveal key={step.title} delay={i * 70}>
                <li className="relative flex gap-5 md:gap-6 pb-9 last:pb-0">
                  {i < process.length - 1 && (
                    <span className="absolute left-5 top-10 bottom-0 w-px bg-teal-500/20" aria-hidden="true" />
                  )}
                  <span className="relative z-10 shrink-0 w-10 h-10 rounded-full bg-teal-500 text-paper font-display font-bold text-sm flex items-center justify-center">
                    {i + 1}
                  </span>
                  <div className="pt-1.5">
                    <h3 className="font-display font-semibold text-lg text-teal-700 mb-1.5">{step.title}</h3>
                    <p className="text-ink/65 text-sm leading-relaxed max-w-2xl">{step.detail}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
