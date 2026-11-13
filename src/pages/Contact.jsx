import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MapPin, Send, CheckCircle2, AlertCircle, Loader2, ArrowUpRight } from 'lucide-react'
import ContactHero from '../components/ContactHero'
import Reveal from '../components/Reveal'
import Seo from '../components/Seo'
import { company, services } from '../data/content'

// Points at the standalone Node/Express API in server/ that sends mail via Zoho SMTP.
// Set VITE_CONTACT_API_URL in a .env file (e.g. https://jvalu.ae/api/contact) if the API
// isn't reachable at a same-origin /api/contact path. See server/README or root README for setup.
const CONTACT_API_ENDPOINT = import.meta.env.VITE_CONTACT_API_URL || '/api/contact'

const inputClass =
  'w-full border border-teal-500/20 bg-paper px-4 py-3 text-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-500/15 outline-none transition-all'
const labelClass = 'block font-display font-semibold text-xs uppercase tracking-wide text-teal-700 mb-2'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const navigate = useNavigate()

  // After the enquiry is sent (or the email app is opened), return to the home page.
  useEffect(() => {
    if (status !== 'success' && status !== 'error') return
    const timer = setTimeout(() => navigate('/'), status === 'success' ? 4000 : 6000)
    return () => clearTimeout(timer)
  }, [status, navigate])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch(CONTACT_API_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service || 'General Enquiry',
          message: form.message,
        }),
      })

      if (response.ok) {
        setStatus('success')
      } else {
        throw new Error('Form submission failed')
      }
    } catch (err) {
      // Fallback so the enquiry is never lost even if the form backend isn't configured yet
      const subject = encodeURIComponent(`Consultation Request — ${form.service || 'General Enquiry'}`)
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService of interest: ${form.service}\n\nMessage:\n${form.message}`
      )
      const mailtoUrl = `mailto:${company.email}?subject=${subject}&body=${body}`
      // Open in a new tab so the website isn't replaced by a webmail page.
      if (!window.open(mailtoUrl, '_blank')) window.location.href = mailtoUrl
      setStatus('error')
    }
  }

  return (
    <div>
      <Seo
        title="Contact Us | JVALU — Abu Dhabi Certification Consultancy"
        description="Get in touch with JVALU for ICV Certification, ISO Certification, Asset Evaluation, and ADNOC Vendor Registration support in Abu Dhabi, UAE."
      />
      <ContactHero
        title="Contact Us"
        subtitle="Send us a few details about your business and the certification you're working toward — we'll respond with next steps."
      />

      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Office and what happens next */}
          <div className="lg:col-span-4 space-y-5 order-2 lg:order-1">
            <Reveal>
              <div className="bg-white border border-teal-500/12 border-t-[3px] border-t-bronze-500 p-7 shadow-[0_18px_40px_-22px_rgba(16,38,34,0.35)]">
                <div className="flex items-center gap-4 mb-4">
                  <span className="shrink-0 w-12 h-12 rounded-full bg-[#F8F0DD] flex items-center justify-center text-bronze-600">
                    <MapPin size={21} strokeWidth={1.75} />
                  </span>
                  <p className="font-display font-bold text-lg text-teal-700">Our Office</p>
                </div>
                <p className="text-ink/70 text-sm leading-relaxed">
                  {company.address.line1}<br />{company.address.line2}
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Al+Wahda+Commercial+Tower+Abu+Dhabi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-teal-500 font-display font-semibold text-[13px] uppercase tracking-[0.06em] hover:text-teal-600 transition-colors"
                >
                  Get Directions <ArrowUpRight size={16} />
                </a>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="bg-teal-700 text-paper p-7">
                <p className="font-mono text-[11px] tracking-[0.16em] text-bronze-400 mb-3">WE CAN HELP WITH</p>
                {services.map((s, i) => (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    className="group flex items-center gap-4 py-3 border-t border-paper/10 first-of-type:border-t-0"
                  >
                    <span className="font-mono text-xs tracking-[0.14em] text-bronze-400 w-6">{String(i + 1).padStart(2, '0')}</span>
                    <span className="flex-1 font-display font-semibold text-[15px] text-white group-hover:text-bronze-400 transition-colors">{s.name}</span>
                    <ArrowUpRight size={16} className="text-paper/40 group-hover:text-bronze-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <div id="contact-form" className="lg:col-span-8 order-1 lg:order-2 scroll-mt-28">
            <Reveal delay={100}>
              <div className="bg-white border border-teal-500/12 border-t-[3px] border-t-bronze-500 p-7 md:p-10 shadow-[0_18px_40px_-22px_rgba(16,38,34,0.35)]">
                {status === 'success' ? (
                  <div className="py-12 text-center">
                    <CheckCircle2 size={40} className="text-teal-500 mx-auto mb-4" strokeWidth={1.5} />
                    <h3 className="font-display font-bold text-xl text-teal-700">Thank you — your request has been sent</h3>
                    <p className="text-ink/65 text-sm mt-2 max-w-sm mx-auto">
                      Our team will get back to you shortly. If it's urgent, you can also reach us directly on{' '}
                      <a href={company.whatsappLink} target="_blank" rel="noopener noreferrer" className="text-teal-500 underline">WhatsApp</a>.
                    </p>
                    <p className="text-ink/50 text-xs mt-4">Taking you back to the home page…</p>
                    <button
                      onClick={() => { setStatus('idle'); setForm({ name: '', email: '', phone: '', service: '', message: '' }) }}
                      className="mt-6 text-teal-500 font-display font-semibold text-sm uppercase tracking-wide hover:text-teal-600"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : status === 'error' ? (
                  <div className="py-12 text-center">
                    <AlertCircle size={40} className="text-bronze-500 mx-auto mb-4" strokeWidth={1.5} />
                    <h3 className="font-display font-bold text-xl text-teal-700">Your email app should now be open</h3>
                    <p className="text-ink/65 text-sm mt-2 max-w-sm mx-auto">
                      We couldn't reach our online form, so we've opened your email app with your message pre-filled instead. If it didn't open, email us directly at{' '}
                      <a href={company.mailLink} target="_blank" rel="noopener noreferrer" className="text-teal-500 underline">{company.email}</a>.
                    </p>
                    <p className="text-ink/50 text-xs mt-4">Taking you back to the home page shortly…</p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-6 text-teal-500 font-display font-semibold text-sm uppercase tracking-wide hover:text-teal-600"
                    >
                      Back to Form
                    </button>
                  </div>
                ) : (
                  <>
                    <p className="eyebrow text-bronze-600 mb-3">Request a Consultation</p>
                    <h2 className="font-display font-bold text-2xl md:text-[1.75rem] leading-tight text-teal-700">
                      Tell us what you need
                    </h2>
                    <p className="mt-2 mb-8 text-sm text-ink/60">Fields marked * are required.</p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className={labelClass}>Full Name *</label>
                          <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} className={inputClass} placeholder="Your name" />
                        </div>
                        <div>
                          <label htmlFor="phone" className={labelClass}>Phone Number</label>
                          <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} className={inputClass} placeholder="+971 ..." />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="email" className={labelClass}>Email Address *</label>
                          <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} className={inputClass} placeholder="you@company.com" />
                        </div>
                        <div>
                          <label htmlFor="service" className={labelClass}>Service of Interest</label>
                          <select id="service" name="service" value={form.service} onChange={handleChange} className={inputClass}>
                            <option value="">Select a service</option>
                            {services.map((s) => (
                              <option key={s.slug} value={s.name}>{s.name}</option>
                            ))}
                            <option value="General Enquiry">General Enquiry</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className={labelClass}>Message *</label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          required
                          value={form.message}
                          onChange={handleChange}
                          className={`${inputClass} resize-none`}
                          placeholder="Tell us a bit about your business and what you need."
                        />
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-1">
                        <button
                          type="submit"
                          disabled={status === 'sending'}
                          className="btn-press inline-flex items-center justify-center gap-3 h-[52px] px-7 bg-bronze-500 text-teal-700 font-display font-bold text-[13px] uppercase tracking-[0.06em] shadow-[inset_0_-3px_0_#96763A] transition-all duration-300 hover:bg-bronze-400 hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:transform-none disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                        >
                          {status === 'sending' ? (
                            <>Sending <Loader2 size={16} className="animate-spin" /></>
                          ) : (
                            <>Send Message <Send size={16} /></>
                          )}
                        </button>
                        <p className="text-xs text-ink/50">We reply to every enquiry, usually within 24 hours.</p>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map */}
      <section id="office" className="pb-20 md:pb-24 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="border border-teal-500/12 border-t-[3px] border-t-bronze-500 overflow-hidden shadow-[0_18px_40px_-22px_rgba(16,38,34,0.35)]">
              <iframe
                title="JVALU Office Location — Al Wahda Commercial Tower, Abu Dhabi"
                src="https://www.google.com/maps?q=Al+Wahda+Commercial+Tower+Abu+Dhabi&output=embed"
                width="100%"
                height="380"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
