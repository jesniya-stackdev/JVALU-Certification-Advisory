import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import AssetEvalIcon from '../components/AssetEvalIcon'
import { services, company } from '../data/content'

export default function Services() {
  return (
    <div>
      <PageHeader
        eyebrow="Our Services"
        title="Certification &amp; Evaluation Services"
        subtitle="Four certification and evaluation services, each managed end-to-end so your team can stay focused on operations."
      />

      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8 space-y-5">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 60}>
              <Link
                to={`/services/${s.slug}`}
                className="lift-card group grid md:grid-cols-12 gap-6 md:gap-10 items-center bg-white border border-teal-500/12 hover:border-teal-500/40 p-7 md:p-10 stamp-mark"
              >
                <div className="md:col-span-1">
                  <div className="w-14 h-14 rounded-full bg-sage flex items-center justify-center overflow-hidden p-2">
                    {s.logo ? (
                      <img src={s.logo} alt="" className="w-full h-full object-contain" />
                    ) : (
                      <AssetEvalIcon size={28} className="text-teal-600" />
                    )}
                  </div>
                </div>
                <div className="md:col-span-8">
                  <h2 className="font-display font-bold text-2xl text-teal-700 mb-2.5">{s.name}</h2>
                  <p className="text-ink/65 leading-relaxed">{s.summary}</p>
                </div>
                <div className="md:col-span-3 flex md:justify-end">
                  <span className="inline-flex items-center gap-2 text-teal-500 font-display font-semibold text-sm uppercase tracking-wide group-hover:text-teal-600 transition-colors">
                    Learn More
                    <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-20 bg-teal-700 text-paper">
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
          <Reveal>
            <h2 className="font-display font-bold text-2xl md:text-3xl">Not sure which certification applies to you?</h2>
            <p className="mt-3 text-paper/70">Tell us about your business and we'll point you to the right starting place.</p>
            <div className="mt-7 flex flex-col sm:flex-row gap-4 justify-center">
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
                Message on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
