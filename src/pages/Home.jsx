import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, ShieldCheck } from 'lucide-react'
import { company, services, whyChooseUs, stats } from '../data/content'
import Reveal from '../components/Reveal'
import CountUp from '../components/CountUp'
import HeroVideo from '../components/HeroVideo'
import PartnersMarquee from '../components/PartnersMarquee'
import AssetEvalIcon from '../components/AssetEvalIcon'
import Seo from '../components/Seo'

export default function Home() {
  return (
    <div>
      <Seo
        title="JVALU | ICV, ISO & ADNOC Certification Consultancy — Abu Dhabi"
        description="JVALU is a UAE-based consultancy specializing in ICV Certification, ISO Certification, Asset Evaluation, and ADNOC Vendor Registration. Based in Abu Dhabi."
      />
      {/* HERO */}
      <section className="relative overflow-hidden text-paper">
        <HeroVideo />
        <div className="max-w-7xl mx-auto px-5 md:px-8 pt-28 pb-10 md:pt-36 md:pb-14 relative">
          <div className="grid md:grid-cols-12 gap-12 items-end">
            <div className="md:col-span-9">
              <p className="hero-in hero-in-1 eyebrow text-bronze-400 mb-5">Abu Dhabi, United Arab Emirates</p>
              <h1 className="hero-in hero-in-2 font-display font-extrabold text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] tracking-tight max-w-3xl">
                Empowering Businesses Through Compliance &amp; Certification Excellence
              </h1>
              <p className="hero-in hero-in-3 mt-6 text-paper/80 text-lg leading-relaxed max-w-xl">
                {company.name} provides professional consultancy services for ICV Certification, ISO Management Systems, Asset Evaluation, and ADNOC Vendor Registration across the UAE.
              </p>
              <div className="hero-in hero-in-4 mt-9 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="btn-press inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-bronze-500 text-teal-800 font-display font-semibold text-sm uppercase tracking-wide hover:bg-bronze-400 transition-colors"
                >
                  Request Consultation <ArrowRight size={16} />
                </Link>
                <Link
                  to="/contact"
                  className="btn-press inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-paper/30 text-paper font-display font-semibold text-sm uppercase tracking-wide hover:bg-paper/10 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* Stats row — alive, counts up on first view */}
          <div className="hero-in hero-in-4 mt-10 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-7 md:pt-8 border-t border-paper/15">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display font-extrabold text-3xl md:text-4xl text-paper">
                  <CountUp to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-1.5 text-paper/70 text-xs md:text-sm leading-snug max-w-[16ch]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS MARQUEE */}
      <section className="bg-paper border-b border-teal-500/10 py-7">
        <div className="max-w-7xl mx-auto px-5 md:px-8 mb-4">
          <p className="text-center text-xs font-mono tracking-widest uppercase text-ink/40">
            Certifications &amp; Registrations We Work With
          </p>
        </div>
        <PartnersMarquee />
      </section>

      {/* ABOUT PREVIEW */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background: subtle geometric diamond grid + soft radial glow */}
        <div className="absolute inset-0 bg-paper" />
        {/* Teal-tinted radial glow from bottom-right — adds depth */}
        <div
          className="absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(31,74,69,0.07) 0%, transparent 70%)',
          }}
        />
        {/* Gold accent glow top-left */}
        <div
          className="absolute -top-20 -left-20 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(184,146,74,0.06) 0%, transparent 70%)',
          }}
        />
        {/* Geometric diamond grid pattern as SVG background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M30 0 L60 30 L30 60 L0 30 Z' fill='none' stroke='%231F4A45' stroke-width='0.4' stroke-opacity='0.12'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}
        />
        {/* Decorative large teal corner accent — architectural feel */}
        <div
          className="absolute top-0 right-0 w-72 h-72 pointer-events-none opacity-[0.04]"
          style={{
            background: 'linear-gradient(225deg, #1F4A45 0%, transparent 60%)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="md:col-span-5">
              <Reveal>
                <p className="eyebrow text-bronze-600 mb-4">Who We Are</p>
                <h2 className="font-display font-bold text-3xl md:text-[2.4rem] leading-tight text-teal-700">
                  A consultancy built around UAE compliance
                </h2>
                {/* Decorative accent bar under the heading */}
                <div className="mt-6 flex gap-1.5">
                  <div className="h-1 w-10 bg-teal-500 rounded-full" />
                  <div className="h-1 w-4 bg-bronze-500 rounded-full" />
                  <div className="h-1 w-2 bg-teal-300 rounded-full opacity-50" />
                </div>
              </Reveal>
            </div>
            <div className="md:col-span-7">
              <Reveal delay={100}>
                {/* Floating stat badges — adds visual interest to the empty right side */}
                <div className="flex gap-4 mb-8 flex-wrap">
                  {[
                    { num: 'ICV', label: 'Certification' },
                    { num: 'ISO', label: 'Management Systems' },
                    { num: 'ADNOC', label: 'Vendor Registration' },
                  ].map((badge) => (
                    <div
                      key={badge.num}
                      className="flex items-center gap-2 px-4 py-2 bg-white border border-teal-500/15 shadow-sm"
                    >
                      <span className="font-mono text-xs font-semibold text-bronze-600 tracking-wider">{badge.num}</span>
                      <span className="text-xs text-ink/50">{badge.label}</span>
                    </div>
                  ))}
                </div>
                <p className="text-ink/75 text-lg leading-relaxed">
                  {company.name} is a UAE-based consultancy dedicated to helping organizations improve compliance, strengthen operational performance, and achieve internationally recognized certifications.
                </p>
                <p className="mt-4 text-ink/75 leading-relaxed">
                  We support businesses in obtaining and maintaining ICV Certification, ISO Certifications, Asset Evaluation reports, and ADNOC Vendor Registration, managing each engagement from initial assessment through to certificate issuance and renewal.
                </p>
                <Link
                  to="/about"
                  className="sweep-link mt-6 inline-flex items-center gap-2 text-teal-500 font-display font-semibold text-sm uppercase tracking-wide hover:text-teal-600 transition-colors"
                >
                  More About Us <ArrowUpRight size={16} />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 md:py-28 bg-sage/60">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
              <div>
                <p className="eyebrow text-bronze-600 mb-4">Our Services</p>
                <h2 className="font-display font-bold text-3xl md:text-[2.4rem] leading-tight text-teal-700 max-w-xl">
                  Four certifications. One point of contact.
                </h2>
              </div>
              <Link
                to="/services"
                className="hidden sm:inline-flex items-center gap-2 text-teal-500 font-display font-semibold text-sm uppercase tracking-wide hover:text-teal-600 transition-colors"
              >
                View All Services <ArrowUpRight size={16} />
              </Link>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-5">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 80}>
                <Link
                  to={`/services/${s.slug}`}
                  className="lift-card group block bg-white border border-teal-500/12 p-7 md:p-8 hover:border-teal-500/40 h-full stamp-mark"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-11 h-11 rounded-full bg-sage flex items-center justify-center overflow-hidden p-1.5">
                      {s.logo ? (
                        <img src={s.logo} alt="" className="w-full h-full object-contain" />
                      ) : (
                        <AssetEvalIcon size={22} className="text-teal-600" />
                      )}
                    </div>
                    <ArrowUpRight size={18} className="text-teal-500/40 group-hover:text-teal-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-teal-700 mb-3">{s.name}</h3>
                  <p className="text-ink/65 text-sm leading-relaxed">{s.summary}</p>
                </Link>
              </Reveal>
            ))}
          </div>

          <Link
            to="/services"
            className="sm:hidden mt-8 inline-flex items-center gap-2 text-teal-500 font-display font-semibold text-sm uppercase tracking-wide"
          >
            View All Services <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className="eyebrow text-bronze-600 mb-4 text-center">Why Choose Us</p>
            <h2 className="font-display font-bold text-3xl md:text-[2.4rem] leading-tight text-teal-700 text-center max-w-2xl mx-auto">
              Built for businesses navigating UAE compliance
            </h2>
          </Reveal>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-teal-500/12">
            {whyChooseUs.map((item, i) => (
              <Reveal key={item.title} delay={i * 80} className="group bg-paper hover:bg-white p-8 transition-colors">
                <ShieldCheck size={22} className="text-bronze-500 mb-4 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.75} />
                <h3 className="font-display font-semibold text-base text-teal-700 mb-2">{item.title}</h3>
                <p className="text-sm text-ink/65 leading-relaxed">{item.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-teal-700 text-paper relative overflow-hidden">
        <div className="absolute inset-0 bg-noise pointer-events-none" />
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center relative">
          <Reveal>
            <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight">
              Ready to move your certification forward?
            </h2>
            <p className="mt-4 text-paper/70 text-lg max-w-xl mx-auto">
              Tell us what you're working toward and we'll outline the clearest path to get there.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
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
