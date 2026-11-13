import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import ServicesHero from '../components/ServicesHero'
import Reveal from '../components/Reveal'
import ServiceIcon from '../components/ServiceIcon'
import Seo from '../components/Seo'
import { services, company } from '../data/content'

// Short label shown on each card.
const tags = {
  'icv-certification': 'Certification',
  'iso-certification': 'Certification',
  'asset-evaluation': 'Evaluation',
  'adnoc-vendor-registration': 'Registration',
  classification: 'Classification',
  'case-studies': 'Proof of work',
}

export default function Services() {
  return (
    <div>
      <Seo
        title="Our Services | ICV, ISO, Classification, Asset Evaluation & ADNOC Registration — JVALU"
        description="Explore JVALU's certification and evaluation services: ICV Certification, ISO Certification, Asset Evaluation, ADNOC Vendor Registration, and Classification in the UAE, plus selected case studies."
      />
      <ServicesHero
        title="Our Services"
        subtitle="Certification, classification, and evaluation services, plus case studies that show our approach in practice. Each engagement is managed end-to-end so your team can stay focused on operations."
      />

      <section id="all-services" className="py-20 md:py-24 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="max-w-2xl mb-12">
              <p className="eyebrow text-bronze-600 mb-4">Choose a Service</p>
              <h2 className="font-display font-bold text-3xl md:text-[2.4rem] leading-tight text-teal-700">
                One team across every certification
              </h2>
              <p className="mt-4 text-ink/65 leading-relaxed">
                Pick the service you need and we handle the assessment, documentation and coordination from start to finish.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 90} className="h-full">
                <Link
                  to={`/services/${s.slug}`}
                  className="group h-full flex flex-col bg-white border border-teal-500/12 border-t-[3px] border-t-bronze-500 p-8 shadow-[0_18px_40px_-22px_rgba(16,38,34,0.35)] transition-[transform,box-shadow,background-color] duration-300 ease-out hover:bg-teal-500 hover:-translate-y-1 hover:shadow-[0_24px_36px_-18px_rgba(16,38,34,0.55)] motion-reduce:transition-none motion-reduce:hover:transform-none"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-14 h-14 rounded-full bg-sage flex items-center justify-center overflow-hidden p-2.5 transition-colors duration-300 group-hover:bg-white">
                      {s.logo ? (
                        <img src={s.logo} alt="" className="w-full h-full object-contain" />
                      ) : (
                        <ServiceIcon slug={s.slug} size={26} className="text-teal-600" />
                      )}
                    </span>
                    <span className="font-mono text-xs tracking-[0.14em] text-bronze-600 transition-colors duration-300 group-hover:text-bronze-400">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-bronze-600 mb-2 transition-colors duration-300 group-hover:text-bronze-400">
                    {tags[s.slug]}
                  </p>
                  <h3 className="font-display font-bold text-xl text-teal-700 mb-3 transition-colors duration-300 group-hover:text-paper">
                    {s.name}
                  </h3>
                  <p className="text-sm text-ink/65 leading-relaxed flex-1 transition-colors duration-300 group-hover:text-paper/80">
                    {s.summary}
                  </p>

                  <span className="mt-7 pt-5 border-t border-teal-500/12 inline-flex items-center justify-between font-display font-semibold text-[13px] uppercase tracking-[0.06em] text-teal-500 transition-colors duration-300 group-hover:text-bronze-400 group-hover:border-paper/20">
                    Learn More
                    <ArrowUpRight size={17} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
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
                className="group btn-press inline-flex items-center justify-center gap-3 h-[52px] px-6 bg-bronze-500 text-teal-700 font-display font-bold text-[13px] uppercase tracking-[0.06em] shadow-[inset_0_-3px_0_#96763A] transition-all duration-300 hover:bg-bronze-400 hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:transform-none"
              >
                Request Consultation
                <ArrowRight size={16} strokeWidth={2.5} className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none" />
              </Link>
              <a
                href={company.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press inline-flex items-center justify-center h-[52px] px-6 border-[1.5px] border-paper/50 text-paper font-display font-bold text-[13px] uppercase tracking-[0.06em] transition-colors hover:bg-paper/10 hover:border-paper"
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
