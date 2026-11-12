import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import { HighlightsStrip } from './ServiceBlocks'
import heroImage from '../assets/adnoc/adnoc-hero.webp'

// ADNOC-themed sections used by ServiceDetail for the ADNOC Vendor Registration page only.

export function AdnocHero({ service }) {
  const title = service.name.replace(/^ADNOC\s*/, '')

  const scrollToProcess = () => {
    document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <section className="relative overflow-hidden bg-[#F1F6F3]">
        {/* Desktop: photo anchored right, faded into the mint background */}
        <img
          src={heroImage}
          alt="Business handshake in front of an oil and gas facility"
          width="1672"
          height="941"
          fetchpriority="high"
          className="adnoc-photo-mask hidden xl:block absolute top-0 right-0 h-full w-auto max-w-none"
        />

        <div className="relative max-w-7xl mx-auto px-5 md:px-8 pt-32 pb-10 md:pt-44 xl:pb-24 xl:min-h-[640px] flex items-center">
          <Reveal>
            <div className="max-w-xl">
              <Link to="/services" className="inline-flex items-center gap-1 text-teal-500/70 hover:text-teal-500 text-sm mb-7 transition-colors">
                ← All Services
              </Link>
              <p className="eyebrow text-bronze-600 mb-5">ADNOC Registration · Vendor Prequalification</p>
              <h1 className="font-display text-teal-700 leading-[1.05] tracking-tight">
                <span className="block font-extrabold text-5xl sm:text-6xl lg:text-7xl">ADNOC</span>
                <span className="block mt-1 font-medium text-teal-500 text-3xl sm:text-4xl lg:text-[2.75rem]">{title}</span>
              </h1>
              <div className="w-16 h-[3px] bg-teal-500 my-6" />
              <p className="text-teal-600/85 text-lg leading-relaxed max-w-md">{service.summary}</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="btn-press inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-teal-500 text-paper font-display font-semibold text-sm uppercase tracking-wide hover:bg-teal-600 transition-colors"
                >
                  Request Consultation <ArrowRight size={16} />
                </Link>
                <button
                  type="button"
                  onClick={scrollToProcess}
                  className="btn-press inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-teal-500 text-teal-500 font-display font-semibold text-sm uppercase tracking-wide hover:bg-teal-500/5 transition-colors"
                >
                  View The Process
                </button>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Below xl: photo cropped to the handshake and refinery below the text */}
        <div className="xl:hidden relative aspect-[4/3] sm:aspect-[2/1] overflow-hidden">
          <img
            src={heroImage}
            alt="Business handshake in front of an oil and gas facility"
            width="1672"
            height="941"
            loading="lazy"
            className="absolute bottom-0 right-0 w-[200%] max-w-none"
          />
          <div className="absolute inset-y-0 left-0 w-[14%] bg-gradient-to-r from-[#F1F6F3] to-transparent" />
          <div className="absolute inset-x-0 top-0 h-[24%] bg-gradient-to-b from-[#F1F6F3] to-transparent" />
        </div>
      </section>

      <HighlightsStrip items={service.highlights} />

      <div className="bg-[#ECEAE2]">
        <p className="max-w-7xl mx-auto px-5 md:px-8 py-3 text-xs text-ink/55">
          JVALU is an independent consultancy and is not affiliated with or endorsed by ADNOC. ADNOC and its logo belong to their respective owner.
        </p>
      </div>
    </>
  )
}

export function AdnocJourney({ service }) {
  return (
    <section id="process" className="scroll-mt-28 py-20 md:py-24 bg-white border-y border-teal-500/10">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-4">
          <Reveal>
            <p className="eyebrow text-bronze-600 mb-4">The Registration Journey</p>
            <h2 className="font-display font-bold text-3xl md:text-[2.2rem] leading-tight text-teal-700">
              From eligibility review to activation
            </h2>
            <p className="mt-4 text-ink/65 leading-relaxed">
              Five clear steps, with JVALU handling the paperwork and the follow-up at each one.
            </p>
          </Reveal>
        </div>
        <div className="lg:col-span-8">
          <ol>
            {service.process.map((step, i) => (
              <Reveal key={step.title} delay={i * 70}>
                <li className="relative flex gap-5 md:gap-6 pb-9 last:pb-0">
                  {i < service.process.length - 1 && (
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
