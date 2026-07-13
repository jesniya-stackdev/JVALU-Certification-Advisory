import React, { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, ChevronDown } from 'lucide-react'
import Reveal from '../components/Reveal'
import AssetEvalIcon from '../components/AssetEvalIcon'
import { services, company } from '../data/content'

function FaqItem({ q, a, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-teal-500/12 py-5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 text-left group"
        aria-expanded={open}
      >
        <span className="font-display font-semibold text-base text-teal-700 group-hover:text-teal-500 transition-colors">{q}</span>
        <ChevronDown size={20} className={`shrink-0 text-bronze-500 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`grid transition-all duration-300 ease-in-out ${open ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <p className="text-ink/65 leading-relaxed text-sm">{a}</p>
        </div>
      </div>
    </div>
  )
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)

  if (!service) return <Navigate to="/services" replace />

  const currentIndex = services.findIndex((s) => s.slug === slug)
  const next = services[(currentIndex + 1) % services.length]

  return (
    <div>
      {/* HEADER */}
      <section className="relative overflow-hidden bg-teal-700 text-paper">
        <div className="absolute inset-0 bg-noise pointer-events-none" />
        <div
          className="absolute -right-20 -top-20 w-72 h-72 rounded-full opacity-[0.08] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #B8924A 0%, transparent 70%)' }}
        />
        <div className="max-w-7xl mx-auto px-5 md:px-8 pt-16 pb-16 md:pt-20 md:pb-20 relative">
          <Reveal>
            <Link to="/services" className="inline-flex items-center gap-1 text-paper/60 hover:text-paper text-sm mb-6 transition-colors">
              ← All Services
            </Link>
            <div className="flex items-start justify-between gap-8 flex-wrap">
              <div>
                <p className="eyebrow text-bronze-400 mb-5">{service.shortName} · Certification &amp; Compliance</p>
                <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-tight max-w-2xl">
                  {service.name}
                </h1>
                <p className="mt-5 text-paper/75 text-lg leading-relaxed max-w-xl">{service.summary}</p>
              </div>
              <div className="hidden lg:flex shrink-0 w-28 h-28 rounded-full bg-paper items-center justify-center p-5 shadow-stamp">
                {service.logo ? (
                  <img src={service.logo} alt={`${service.name} logo`} className="w-full h-full object-contain" />
                ) : (
                  <AssetEvalIcon size={48} className="text-teal-600" />
                )}
              </div>
            </div>
          </Reveal>
        </div>
        <div className="h-px bg-paper/10" />
      </section>

      {/* OVERVIEW + WHO FOR */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-7">
            <Reveal>
              <p className="eyebrow text-bronze-600 mb-4">Overview</p>
              <p className="text-ink/75 text-lg leading-relaxed">{service.description}</p>
            </Reveal>
          </div>
          <div className="md:col-span-5">
            <Reveal delay={100}>
              <div className="bg-sage/70 border border-teal-500/12 p-7 stamp-mark">
                <p className="eyebrow text-bronze-600 mb-3">Who This Is For</p>
                <p className="text-ink/70 text-sm leading-relaxed">{service.whoFor}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 md:py-24 bg-sage/60">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className="eyebrow text-bronze-600 mb-4">Our Process</p>
            <h2 className="font-display font-bold text-3xl md:text-[2.2rem] leading-tight text-teal-700 max-w-xl">
              How we take this from start to certificate
            </h2>
          </Reveal>

          <div className="mt-12 space-y-0">
            {service.process.map((step, i) => (
              <Reveal key={step.title} delay={i * 70}>
                <div className="group flex gap-6 md:gap-10 py-7 border-t border-teal-500/15 last:border-b transition-colors hover:bg-white/60 -mx-4 px-4">
                  <div className="shrink-0 w-12 md:w-16">
                    <span className="font-mono text-sm text-bronze-600 transition-transform duration-300 inline-block group-hover:scale-110">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-teal-700 mb-1.5">{step.title}</h3>
                    <p className="text-ink/65 text-sm leading-relaxed max-w-2xl">{step.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-4">
            <Reveal>
              <p className="eyebrow text-bronze-600 mb-4">Common Questions</p>
              <h2 className="font-display font-bold text-2xl leading-tight text-teal-700">
                Frequently asked about {service.shortName}
              </h2>
              <Link
                to="/contact"
                className="sweep-link mt-6 inline-flex items-center gap-2 text-teal-500 font-display font-semibold text-sm uppercase tracking-wide hover:text-teal-600 transition-colors"
              >
                Ask Us Directly <ArrowUpRight size={16} />
              </Link>
            </Reveal>
          </div>
          <div className="md:col-span-8">
            <Reveal delay={100}>
              <div>
                {service.faqs.map((f, i) => (
                  <FaqItem key={f.q} q={f.q} a={f.a} defaultOpen={i === 0} />
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* NEXT SERVICE + CTA */}
      <section className="py-16 md:py-20 bg-teal-700 text-paper">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Reveal>
              <h2 className="font-display font-bold text-2xl md:text-3xl leading-tight">
                Ready to get started with {service.shortName}?
              </h2>
              <p className="mt-3 text-paper/70 max-w-md">
                Reach out and we'll walk you through what's needed for your specific situation.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="btn-press inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-bronze-500 text-teal-800 font-display font-semibold text-sm uppercase tracking-wide hover:bg-bronze-400 transition-colors"
                >
                  Request Consultation <ArrowRight size={16} />
                </Link>
                <a
                  href={company.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-press inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-paper/30 text-paper font-display font-semibold text-sm uppercase tracking-wide hover:bg-paper/10 transition-colors"
                >
                  WhatsApp Us
                </a>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <Link
                to={`/services/${next.slug}`}
                className="lift-card group block border border-paper/20 p-7 hover:bg-paper/5"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-full bg-paper flex items-center justify-center overflow-hidden p-1.5 shrink-0">
                    {next.logo ? (
                      <img src={next.logo} alt="" className="w-full h-full object-contain" />
                    ) : (
                      <AssetEvalIcon size={18} className="text-teal-700" />
                    )}
                  </div>
                  <p className="eyebrow text-bronze-400">Next Service</p>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-display font-bold text-xl">{next.name}</h3>
                  <ArrowUpRight size={20} className="shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <p className="mt-2 text-paper/60 text-sm leading-relaxed">{next.summary}</p>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}
