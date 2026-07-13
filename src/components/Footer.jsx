import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import { company, services } from '../data/content'
import logoWhite from '../assets/logo-white.png'
import WhatsAppIcon from './WhatsAppIcon'

export default function Footer() {
  return (
    <footer className="bg-teal-700 text-paper">
      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4">
            <img src={logoWhite} alt="JVALU" className="h-14 w-auto mb-5" />
            <p className="text-sm text-paper/65 leading-relaxed max-w-xs">
              UAE-based consultancy supporting businesses through ICV certification, ISO management systems, asset evaluation, and ADNOC vendor registration.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow text-bronze-400 mb-4">Registry</p>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/" className="text-paper/75 hover:text-paper transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-paper/75 hover:text-paper transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-paper/75 hover:text-paper transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-paper/75 hover:text-paper transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow text-bronze-400 mb-4">Services</p>
            <ul className="space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="text-paper/75 hover:text-paper transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow text-bronze-400 mb-4">Contact</p>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={company.telLink} className="flex items-start gap-2 text-paper/75 hover:text-paper transition-colors">
                  <Phone size={15} className="mt-0.5 shrink-0" />
                  <span>{company.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a href={company.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-paper/75 hover:text-paper transition-colors">
                  <WhatsAppIcon size={15} className="mt-0.5 shrink-0" />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a href={company.mailLink} className="flex items-start gap-2 text-paper/75 hover:text-paper transition-colors break-all">
                  <Mail size={15} className="mt-0.5 shrink-0" />
                  <span>{company.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-paper/75">
                <MapPin size={15} className="mt-0.5 shrink-0" />
                <span>{company.address.line1}, {company.address.line2}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-paper/15 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-paper/50">© {new Date().getFullYear()} JVALU Certification & Evaluation. All rights reserved.</p>
          <p className="text-xs text-paper/50 font-mono">Abu Dhabi, United Arab Emirates</p>
        </div>
      </div>
    </footer>
  )
}
