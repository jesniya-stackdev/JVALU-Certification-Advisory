import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Search } from 'lucide-react'
import { company, services } from '../data/content'
import logoTeal from '../assets/logo-teal.png'
import logoWhite from '../assets/logo-white.png'
import AssetEvalIcon from './AssetEvalIcon'

const ICV_TRACKING_URL = 'https://jesniya-stackdev.github.io/JVALU-ICV-tracking/'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
    setServicesOpen(false)
  }, [location])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
    className={`fixed top-0 z-50 w-full transition-all duration-300 ${
  scrolled
    ? 'bg-paper/95 backdrop-blur-md shadow-[0_1px_0_rgba(26,31,30,0.08)]'
    : 'bg-paper/15 backdrop-blur-sm'
}`}
    >
      {scrolled && <div className="ledger-rule" />}
      <nav className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between h-24 md:h-28">
        <Link to="/" className="flex items-center shrink-0 py-3 transition-transform duration-300 hover:scale-[1.02]">
          <img
            src={scrolled ? logoTeal : logoWhite}
            alt="JVALU — Certification & Evaluation"
            className="h-14 sm:h-16 md:h-20 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) =>
            link.label === 'Services' ? (
              <div
                key={link.to}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `font-display font-semibold text-sm tracking-wide uppercase transition-colors ${
                      isActive
                        ? 'text-teal-300'
                        : scrolled
                        ? 'text-ink/70 hover:text-teal-500'
                        : 'text-paper/90 hover:text-paper'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
                <div
                  className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 w-72 transition-all duration-200 ${
                    servicesOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-1 pointer-events-none'
                  }`}
                >
                  <div className="bg-white border border-teal-500/15 shadow-stamp rounded-sm overflow-hidden">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        to={`/services/${s.slug}`}
                        className="flex items-center gap-3 px-5 py-3.5 hover:bg-sage transition-colors border-b border-teal-500/8 last:border-b-0"
                      >
                        {s.logo ? (
                          <img src={s.logo} alt="" className="w-6 h-6 object-contain shrink-0" />
                        ) : (
                          <AssetEvalIcon size={20} className="text-teal-600 shrink-0" />
                        )}
                        <span className="text-sm font-medium text-ink">{s.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `font-display font-semibold text-sm tracking-wide uppercase transition-colors ${
                    isActive
                      ? 'text-teal-300'
                      : scrolled
                      ? 'text-ink/70 hover:text-teal-500'
                      : 'text-paper/90 hover:text-paper'
                  }`
                }
              >
                {link.label}
              </NavLink>
            )
          )}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={ICV_TRACKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn-press inline-flex items-center gap-2 px-5 py-2.5 border text-sm font-display font-semibold tracking-wide uppercase transition-colors ${
              scrolled
                ? 'border-teal-500 text-teal-500 hover:bg-sage'
                : 'border-paper/70 text-paper hover:bg-paper/10'
            }`}
          >
            <Search size={16} />
            ICV Tracking
          </a>
          <Link
            to="/contact"
            className="btn-press ml-1 inline-flex items-center px-5 py-2.5 bg-teal-500 text-paper text-sm font-display font-semibold tracking-wide uppercase hover:bg-teal-600 transition-colors"
          >
            Request Consultation
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className={`lg:hidden p-2 transition-colors ${scrolled ? 'text-ink' : 'text-paper'}`}
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-paper border-t border-teal-500/10 ${
          open ? 'max-h-[28rem]' : 'max-h-0'
        }`}
      >
        <div className="px-5 py-5 flex flex-col gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `py-3 font-display font-semibold text-base uppercase tracking-wide border-b border-teal-500/8 ${
                  isActive ? 'text-teal-500' : 'text-ink/80'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <a
              href={company.telLink}
              className="flex items-center justify-center gap-2 py-3 border border-teal-500 text-teal-500 font-display font-semibold text-sm uppercase tracking-wide"
            >
              <Phone size={16} /> Call Us
            </a>
            <a
              href={ICV_TRACKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 border border-teal-500 text-teal-500 font-display font-semibold text-sm uppercase tracking-wide"
            >
              <Search size={16} /> ICV Tracking
            </a>
            <Link
              to="/contact"
              className="flex items-center justify-center py-3 bg-teal-500 text-paper font-display font-semibold text-sm uppercase tracking-wide"
            >
              Request Consultation
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
