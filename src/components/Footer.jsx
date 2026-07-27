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
          <div className="flex items-center gap-3">
            
             <a href="https://instagram.com/jvalu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex items-center justify-center w-8 h-8 rounded-full border border-paper/30 text-paper/50 hover:text-paper hover:border-paper transition-colors"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            
              <a href="https://www.linkedin.com/in/jvalu-icv-804324404"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center justify-center w-8 h-8 rounded-full border border-paper/30 text-paper/50 hover:text-paper hover:border-paper transition-colors"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            
              <a href="https://facebook.com/jvalu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex items-center justify-center w-8 h-8 rounded-full border border-paper/30 text-paper/50 hover:text-paper hover:border-paper transition-colors"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
