import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Target, Eye, Award } from 'lucide-react'
import Reveal from '../components/Reveal'
import PageHeader from '../components/PageHeader'
import Seo from '../components/Seo'
import { whyChooseUs } from '../data/content'

export default function About() {
  return (
    <div>
      <Seo
        title="About Us | JVALU — UAE Certification & Compliance Consultancy"
        description="Learn about JVALU, a UAE-based consultancy helping businesses achieve ICV, ISO, Asset Evaluation, and ADNOC certification with direct communication and end-to-end support."
      />
      <PageHeader eyebrow="About JVALU" title="Who We Are" subtitle="A UAE-based consultancy built around one goal: making certification and compliance straightforward for the businesses we work with." />

      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-5">
            <Reveal>
              <p className="eyebrow text-bronze-600 mb-4">Who We Are</p>
              <h2 className="font-display font-bold text-3xl leading-tight text-teal-700">
                Compliance expertise, applied to your business
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <Reveal delay={100}>
              <p className="text-ink/75 text-lg leading-relaxed">
                JVALU is a UAE-based consultancy dedicated to helping organizations improve compliance, strengthen operational performance, and achieve internationally recognized certifications.
              </p>
              <p className="mt-4 text-ink/75 leading-relaxed">
                We support businesses in obtaining and maintaining ICV Certification, ISO Certifications, Asset Evaluation, and ADNOC Vendor Registration. Each engagement is managed from the initial assessment through to certificate issuance, with the documentation and audit coordination handled on your behalf.
              </p>
              <p className="mt-4 text-ink/75 leading-relaxed">
                Our work sits at the intersection of regulatory requirement and operational reality, we translate what certification bodies expect into a process your team can actually follow.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-sage/60">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid sm:grid-cols-3 gap-5">
          <Reveal>
            <div className="lift-card group bg-white border border-teal-500/12 p-8 h-full stamp-mark">
              <Target size={24} className="text-bronze-500 mb-5 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.75} />
              <h3 className="font-display font-bold text-lg text-teal-700 mb-3">Our Mission</h3>
              <p className="text-sm text-ink/65 leading-relaxed">
                To make certification and compliance accessible, transparent, and manageable for businesses operating in the UAE, regardless of size or sector.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="lift-card group bg-white border border-teal-500/12 p-8 h-full stamp-mark">
              <Eye size={24} className="text-bronze-500 mb-5 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.75} />
              <h3 className="font-display font-bold text-lg text-teal-700 mb-3">Our Vision</h3>
              <p className="text-sm text-ink/65 leading-relaxed">
                To be the consultancy UAE businesses turn to first for certification, recognized for clarity, reliability, and follow-through.
              </p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="lift-card group bg-white border border-teal-500/12 p-8 h-full stamp-mark">
              <Award size={24} className="text-bronze-500 mb-5 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.75} />
              <h3 className="font-display font-bold text-lg text-teal-700 mb-3">Our Approach</h3>
              <p className="text-sm text-ink/65 leading-relaxed">
                Direct communication, realistic timelines, and documentation built specifically for your operations rather than recycled templates.
              </p>
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
            <Link
              to="/contact"
              className="btn-press mt-7 inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-bronze-500 text-teal-800 font-display font-semibold text-sm uppercase tracking-wide hover:bg-bronze-400 transition-colors"
            >
              Request Consultation <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
