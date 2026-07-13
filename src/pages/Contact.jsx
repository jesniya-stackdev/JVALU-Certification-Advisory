import React, { useState } from 'react'
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import { company, services } from '../data/content'

// Formspree endpoint — replace YOUR_FORM_ID with the ID from your Formspree dashboard.
// See README.md "Setting up consultation request notifications" for full setup steps.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mlgqelny'


export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service || 'General Enquiry',
          message: form.message,
          _subject: `New Consultation Request — ${form.service || 'General Enquiry'}`,
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
      window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`
      setStatus('error')
    }
  }

  return (
    <div>
      <PageHeader
        eyebrow="Get In Touch"
        title="Contact Us"
        subtitle="Send us a few details about your business and the certification you're working toward — we'll respond with next steps."
      />

      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Contact info */}
          <div className="lg:col-span-4 space-y-4">
            <Reveal>
              <a
                href={company.telLink}
                className="lift-card flex items-start gap-4 bg-white border border-teal-500/12 p-6 hover:border-teal-500/40"
              >
                <div className="shrink-0 w-11 h-11 rounded-full bg-sage flex items-center justify-center">
                  <Phone size={18} className="text-teal-600" />
                </div>
                <div>
                  <p className="font-display font-semibold text-sm text-teal-700 uppercase tracking-wide">Call Us</p>
                  <p className="text-ink/70 text-sm mt-1">{company.phoneDisplay}</p>
                </div>
              </a>
            </Reveal>
            <Reveal delay={60}>
              <a
                href={company.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="lift-card flex items-start gap-4 bg-white border border-teal-500/12 p-6 hover:border-teal-500/40"
              >
                <div className="shrink-0 w-11 h-11 rounded-full bg-sage flex items-center justify-center">
                  <MessageCircle size={18} className="text-teal-600" />
                </div>
                <div>
                  <p className="font-display font-semibold text-sm text-teal-700 uppercase tracking-wide">WhatsApp</p>
                  <p className="text-ink/70 text-sm mt-1">{company.phoneDisplay}</p>
                </div>
              </a>
            </Reveal>
            <Reveal delay={120}>
              <a
                href={company.mailLink}
                className="lift-card flex items-start gap-4 bg-white border border-teal-500/12 p-6 hover:border-teal-500/40"
              >
                <div className="shrink-0 w-11 h-11 rounded-full bg-sage flex items-center justify-center">
                  <Mail size={18} className="text-teal-600" />
                </div>
                <div>
                  <p className="font-display font-semibold text-sm text-teal-700 uppercase tracking-wide">Email</p>
                  <p className="text-ink/70 text-sm mt-1 break-all">{company.email}</p>
                </div>
              </a>
            </Reveal>
            <Reveal delay={180}>
              <div className="flex items-start gap-4 bg-white border border-teal-500/12 p-6">
                <div className="shrink-0 w-11 h-11 rounded-full bg-sage flex items-center justify-center">
                  <MapPin size={18} className="text-teal-600" />
                </div>
                <div>
                  <p className="font-display font-semibold text-sm text-teal-700 uppercase tracking-wide">Office</p>
                  <p className="text-ink/70 text-sm mt-1 leading-relaxed">
                    {company.address.line1}<br />{company.address.line2}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <div className="lg:col-span-8">
            <Reveal delay={100}>
              <div className="bg-white border border-teal-500/12 p-7 md:p-10 stamp-mark">
                {status === 'success' ? (
                  <div className="py-12 text-center">
                    <CheckCircle2 size={40} className="text-teal-500 mx-auto mb-4" strokeWidth={1.5} />
                    <h3 className="font-display font-bold text-xl text-teal-700">Thank you — your request has been sent</h3>
                    <p className="text-ink/65 text-sm mt-2 max-w-sm mx-auto">
                      Our team will get back to you shortly. If it's urgent, you can also reach us directly on{' '}
                      <a href={company.whatsappLink} target="_blank" rel="noopener noreferrer" className="text-teal-500 underline">WhatsApp</a>.
                    </p>
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
                      <a href={company.mailLink} className="text-teal-500 underline">{company.email}</a>.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-6 text-teal-500 font-display font-semibold text-sm uppercase tracking-wide hover:text-teal-600"
                    >
                      Back to Form
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block font-display font-semibold text-xs uppercase tracking-wide text-teal-700 mb-2">
                          Full Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          className="w-full border border-teal-500/20 bg-paper px-4 py-3 text-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-500/15 outline-none transition-all"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block font-display font-semibold text-xs uppercase tracking-wide text-teal-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          className="w-full border border-teal-500/20 bg-paper px-4 py-3 text-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-500/15 outline-none transition-all"
                          placeholder="+971 ..."
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block font-display font-semibold text-xs uppercase tracking-wide text-teal-700 mb-2">
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="w-full border border-teal-500/20 bg-paper px-4 py-3 text-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-500/15 outline-none transition-all"
                        placeholder="you@company.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block font-display font-semibold text-xs uppercase tracking-wide text-teal-700 mb-2">
                        Service of Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full border border-teal-500/20 bg-paper px-4 py-3 text-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-500/15 outline-none transition-all"
                      >
                        <option value="">Select a service</option>
                        {services.map((s) => (
                          <option key={s.slug} value={s.name}>{s.name}</option>
                        ))}
                        <option value="General Enquiry">General Enquiry</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block font-display font-semibold text-xs uppercase tracking-wide text-teal-700 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={form.message}
                        onChange={handleChange}
                        className="w-full border border-teal-500/20 bg-paper px-4 py-3 text-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-500/15 outline-none transition-all resize-none"
                        placeholder="Tell us a bit about your business and what you need."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="btn-press inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-teal-500 text-paper font-display font-semibold text-sm uppercase tracking-wide hover:bg-teal-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'sending' ? (
                        <>Sending <Loader2 size={16} className="animate-spin" /></>
                      ) : (
                        <>Send Message <Send size={16} /></>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-20 md:pb-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="border border-teal-500/12 overflow-hidden">
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
