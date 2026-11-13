import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'
import { services } from '../data/content'

// Hero for the Services page: same visual language as the About hero, with a quick-jump
// list of every service on the right.

export default function ServicesHero({ eyebrow, title, subtitle }) {
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
            {eyebrow && <p className="eyebrow text-bronze-400">{eyebrow}</p>}
            <h1 className="mb-5 font-playfair font-extrabold text-4xl sm:text-5xl xl:text-[3.4rem] leading-[1.07] tracking-[-0.01em] text-white">
              {title}
            </h1>
            <p className="text-paper/80 text-lg md:text-xl leading-relaxed max-w-xl">{subtitle}</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="group btn-press inline-flex items-center justify-center gap-3 h-[52px] px-6 bg-bronze-500 text-teal-700 font-display font-bold text-[13px] uppercase tracking-[0.06em] shadow-[inset_0_-3px_0_#96763A] transition-all duration-300 hover:bg-bronze-400 hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:transform-none"
              >
                Request Consultation
                <ArrowRight size={16} strokeWidth={2.5} className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none" />
              </Link>
              <a
                href="#all-services"
                className="btn-press inline-flex items-center justify-center h-[52px] px-6 border-[1.5px] border-paper/50 text-paper font-display font-bold text-[13px] uppercase tracking-[0.06em] transition-colors hover:bg-paper/10 hover:border-paper"
              >
                Browse Services
              </a>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={120}>
            <div className="bg-paper/[0.06] border border-paper/15 border-t-[3px] border-t-bronze-500 px-7 py-6 backdrop-blur-sm">
              <p className="font-mono text-[11px] tracking-[0.16em] text-bronze-400 mb-2">WHAT WE COVER</p>
              {services.map((s, i) => (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="group flex items-center gap-4 py-3.5 border-t border-paper/10 first-of-type:border-t-0 transition-colors"
                >
                  <span className="font-mono text-xs tracking-[0.14em] text-bronze-400 w-6">{String(i + 1).padStart(2, '0')}</span>
                  <span className="flex-1 font-display font-semibold text-[15px] text-white group-hover:text-bronze-400 transition-colors">{s.name}</span>
                  <ArrowUpRight size={16} className="text-paper/40 group-hover:text-bronze-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
