import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BadgeCheck, Calculator, ClipboardCheck, Factory, LineChart } from 'lucide-react'
import Reveal from './Reveal'

// Hero for the Case Studies page: the five case study categories as cards over a faint network backdrop.

const categoryIcons = [Calculator, BadgeCheck, Factory, LineChart, ClipboardCheck]

// Card positions for the side-by-side layout (xl and up).
const cardPositions = [
  { left: 0, top: 24 },
  { left: 335, top: 0 },
  { left: 0, top: 178 },
  { left: 335, top: 154 },
  { left: 168, top: 332 },
]

const networkNodes = [
  { left: '47%', top: '60%' },
  { left: '63%', top: '17%' },
  { left: '86%', top: '31%' },
  { left: '95%', top: '52%' },
]

function CategoryCard({ icon: Icon, index, title, className = '', style }) {
  return (
    <div
      style={style}
      className={`bg-white border border-teal-500/12 border-t-[3px] border-t-bronze-500 px-[22px] py-5 flex items-start gap-4 shadow-[0_18px_40px_-18px_rgba(16,38,34,0.35)] ${className}`}
    >
      <span className="shrink-0 w-[46px] h-[46px] rounded-full bg-sage flex items-center justify-center text-teal-500">
        <Icon size={22} strokeWidth={1.75} />
      </span>
      <div>
        <p className="font-mono text-[11px] tracking-[0.14em] text-bronze-600">CATEGORY {String(index + 1).padStart(2, '0')}</p>
        <h3 className="font-display font-bold text-[17px] leading-snug text-teal-700 mt-1.5">{title}</h3>
      </div>
    </div>
  )
}

export default function CaseStudiesHero({ service }) {
  const categories = service.categories?.items || []

  const scrollToCategories = () => {
    document.getElementById('case-categories')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="case-hero-bg relative overflow-hidden">
      <div className="case-hero-dots absolute inset-0 pointer-events-none" aria-hidden="true" />

      <svg className="hidden xl:block absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1440 640" preserveAspectRatio="none" aria-hidden="true">
        <path d="M560 520 C 760 120, 1080 60, 1400 190" fill="none" stroke="#1F4A45" strokeOpacity=".18" strokeWidth="1.2" />
        <path d="M640 600 C 880 260, 1160 180, 1440 330" fill="none" stroke="#B8924A" strokeOpacity=".35" strokeWidth="1.2" />
        <path d="M720 120 C 900 40, 1200 40, 1380 110" fill="none" stroke="#1F4A45" strokeOpacity=".12" strokeWidth="1.2" />
      </svg>
      {networkNodes.map((n) => (
        <span
          key={n.left}
          style={n}
          className="hidden xl:block absolute w-2.5 h-2.5 rounded-full bg-bronze-500 shadow-[0_0_0_6px_rgba(184,146,74,0.18)]"
          aria-hidden="true"
        />
      ))}
      <svg className="hidden xl:block absolute left-0 bottom-0 w-[420px] h-[186px] pointer-events-none" viewBox="0 0 520 230" aria-hidden="true">
        <path d="M0 40 C 120 70, 260 150, 330 230 L0 230 Z" fill="#15322E" />
        <path d="M0 40 C 120 70, 260 150, 330 230" fill="none" stroke="#B8924A" strokeWidth="2" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 pt-32 pb-12 md:pt-44 xl:pb-20 xl:min-h-[680px] grid xl:grid-cols-12 gap-10 xl:gap-6 items-center">
        <div className="xl:col-span-5">
          <Reveal>
            <Link to="/services" className="inline-flex items-center gap-1 text-teal-500/70 hover:text-teal-500 text-sm mb-7 transition-colors">
              ← All Services
            </Link>
            <div className="w-16 h-[3px] bg-bronze-500 mb-5" />
            <p className="eyebrow text-bronze-600">{service.eyebrow}</p>
            <h1 className="mt-4 mb-5 font-display font-extrabold text-5xl sm:text-6xl xl:text-7xl leading-[1.02] tracking-tight text-teal-700">
              {service.name}
            </h1>
            <p className="text-teal-600/85 text-lg leading-relaxed max-w-md">{service.summary}</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                onClick={scrollToCategories}
                className="btn-press inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-teal-500 text-paper font-display font-semibold text-sm uppercase tracking-wide hover:bg-teal-600 transition-colors"
              >
                Explore Our Work <ArrowRight size={16} />
              </button>
              <Link
                to="/contact"
                className="btn-press inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-teal-500 text-teal-500 font-display font-semibold text-sm uppercase tracking-wide hover:bg-teal-500/5 transition-colors"
              >
                Discuss A Project
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Side-by-side collage (xl and up) */}
        <div className="hidden xl:block xl:col-span-7 relative h-[470px]">
          {categories.map((title, i) => (
            <CategoryCard
              key={title}
              icon={categoryIcons[i % categoryIcons.length]}
              index={i}
              title={title}
              className="absolute w-[300px]"
              style={cardPositions[i]}
            />
          ))}
        </div>

        {/* Stacked cards (below xl) */}
        <div className="xl:hidden grid sm:grid-cols-2 gap-3">
          {categories.map((title, i) => (
            <CategoryCard
              key={title}
              icon={categoryIcons[i % categoryIcons.length]}
              index={i}
              title={title}
              className={i === categories.length - 1 && categories.length % 2 === 1 ? 'sm:col-span-2' : ''}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
