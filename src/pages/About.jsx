import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Target, Eye, Award } from 'lucide-react'
import Reveal from '../components/Reveal'
import AboutHero from '../components/AboutHero'
import ServiceIcon from '../components/ServiceIcon'
import SectionVideo from '../components/SectionVideo'
import Seo from '../components/Seo'
import { whyChooseUs, services, company } from '../data/content'

const pillars = [
  {
    icon: Target,
    title: 'Our Mission',
    text: 'To make certification and compliance accessible, transparent, and manageable for businesses operating in the UAE, regardless of size or sector.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    text: 'To be the consultancy UAE businesses turn to first for certification, recognized for clarity, reliability, and follow-through.',
  },
  {
    icon: Award,
    title: 'Our Approach',
    text: 'Direct communication, realistic timelines, and documentation built specifically for your operations rather than recycled templates.',
  },
]

export default function About() {
  return (
    <div>
      <Seo
        title="About Us | JVALU — UAE Certification & Compliance Consultancy"
        description="Learn about JVALU, a UAE-based consultancy helping businesses achieve ICV, ISO, Asset Evaluation, and ADNOC certification with direct communication and end-to-end support."
      />
      <AboutHero
        eyebrow="About JVALU"
        title="Who We Are"
        subtitle="A UAE-based consultancy built around one goal: making certification and compliance straightforward for the businesses we work with."
      />

      <section className="relative overflow-hidden bg-teal-800">
        <SectionVideo src="/video/about-tower.mp4" />
        <div className="absolute inset-0 bg-teal-900/65" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-teal-900/55 via-transparent to-teal-900/45" aria-hidden="true" />
        {/* Blend from the hero colour into the video, with a fine gold line where the two meet */}
        <div className="absolute inset-x-0 top-0 h-44 md:h-60 bg-gradient-to-b from-teal-700 via-teal-700/70 to-transparent" aria-hidden="true" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bronze-500/80 to-transparent" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-5 md:px-8 pt-20 md:pt-24 pb-14 md:pb-16 grid md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-5">
            <Reveal>
              <p className="eyebrow text-bronze-400 mb-4">Who We Are</p>
              <h2 className="font-display font-bold text-3xl leading-tight text-white">
                Compliance expertise, applied to your business
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <Reveal delay={100}>
              <p className="text-paper/90 text-lg leading-relaxed">
                JVALU is a UAE-based consultancy dedicated to helping organizations improve compliance, strengthen operational performance, and achieve internationally recognized certifications.
              </p>
              <p className="mt-4 text-paper/80 leading-relaxed">
                We support businesses in obtaining and maintaining ICV Certification, ISO Certifications, Asset Evaluation, and ADNOC Vendor Registration. Each engagement is managed from the initial assessment through to certificate issuance, with the documentation and audit coordination handled on your behalf.
              </p>
              <p className="mt-4 text-paper/80 leading-relaxed">
                Our work sits at the intersection of regulatory requirement and operational reality, we translate what certification bodies expect into a process your team can actually follow.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-5 md:px-8 pb-24 md:pb-32 grid sm:grid-cols-3 gap-5">
          {pillars.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 100}>
              <div className="group h-full bg-white border border-teal-500/12 border-t-[3px] border-t-bronze-500 p-8 shadow-[0_18px_40px_-22px_rgba(16,38,34,0.35)] transition-[transform,box-shadow,background-color] duration-300 ease-out hover:bg-teal-500 hover:-translate-y-1 hover:shadow-[0_24px_36px_-18px_rgba(16,38,34,0.55)] motion-reduce:transition-none motion-reduce:hover:transform-none">
                <div className="flex items-center justify-between mb-6">
                  <span className="w-12 h-12 rounded-full bg-[#F8F0DD] flex items-center justify-center text-bronze-600 transition-colors duration-300 group-hover:bg-bronze-500 group-hover:text-teal-700">
                    <Icon size={22} strokeWidth={1.75} />
                  </span>
                  <span className="font-mono text-xs tracking-[0.14em] text-bronze-600 transition-colors duration-300 group-hover:text-bronze-400">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg text-teal-700 mb-3 transition-colors duration-300 group-hover:text-paper">{title}</h3>
                <p className="text-sm text-ink/65 leading-relaxed transition-colors duration-300 group-hover:text-paper/80">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white border-b border-teal-500/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
              <div>
                <p className="eyebrow text-bronze-600 mb-4">What We Do</p>
                <h2 className="font-display font-bold text-3xl leading-tight text-teal-700">
                  One team across every certification
                </h2>
              </div>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-teal-500 font-display font-semibold text-sm uppercase tracking-wide hover:text-teal-600 transition-colors"
              >
                View All Services <ArrowUpRight size={16} />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="flex flex-wrap gap-3">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="group inline-flex items-center gap-3 px-5 py-3 bg-paper border border-teal-500/15 hover:border-teal-500 hover:bg-teal-500/5 transition-colors"
                >
                  <span className="w-8 h-8 rounded-full bg-white border border-teal-500/10 flex items-center justify-center overflow-hidden p-1 shrink-0">
                    {s.logo ? (
                      <img src={s.logo} alt="" className="w-full h-full object-contain" />
                    ) : (
                      <ServiceIcon slug={s.slug} size={16} className="text-teal-600" />
                    )}
                  </span>
                  <span className="font-display font-semibold text-sm text-teal-700">{s.name}</span>
                  <ArrowUpRight size={15} className="text-teal-500/50 group-hover:text-teal-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className="eyebrow text-bronze-600 mb-4 text-center">Why Businesses Work With Us</p>
            <h2 className="font-display font-bold text-3xl md:text-[2.4rem] leading-tight text-teal-700 text-center max-w-2xl mx-auto">
              What sets our process apart
            </h2>
          </Reveal>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-teal-500/12">
            {whyChooseUs.map((item, i) => (
              <Reveal key={item.title} delay={i * 80} className="bg-paper hover:bg-white p-8 transition-colors">
                <h3 className="font-display font-semibold text-base text-teal-700 mb-2">{item.title}</h3>
                <p className="text-sm text-ink/65 leading-relaxed">{item.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-teal-700 text-paper">
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
          <Reveal>
            <h2 className="font-display font-bold text-2xl md:text-3xl">Let's discuss what your business needs</h2>
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
                WhatsApp Us
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
