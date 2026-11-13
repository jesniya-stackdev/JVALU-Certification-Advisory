import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Search, ArrowRight } from 'lucide-react'
import { company, services } from '../data/content'
import logoTeal from '../assets/logo-teal.png'
import logoWhite from '../assets/logo-white.png'
import ServiceIcon from './ServiceIcon'

const ICV_TRACKING_URL = 'https://jvalu-icv-web.vercel.app/'

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

  // Pages with a light hero get a visible line under the nav so it reads as a separate bar.
  const navBorder = location.pathname === '/services/case-studies' ? 'border-b border-bronze-500/60' : ''

  return (
    <header
    className={`fixed top-0 z-50 w-full transition-all duration-300 ${navBorder} ${
  scrolled
    ? 'bg-paper/95 backdrop-blur-md shadow-[0_1px_0_rgba(26,31,30,0.08)]'
    : 'bg-paper/80 backdrop-blur-sm'
}`}
    >
      {scrolled && <div className="ledger-rule" />}
      <nav className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between h-24 md:h-28">
        <Link to="/" className="flex items-center shrink-0 py-3 transition-transform duration-300 hover:scale-[1.02]">
          <img
            src={logoTeal}
            alt="JVALU — Certification & Evaluation"
            className="h-14 sm:h-16 md:h-20 lg:h-16 xl:h-20 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-10">
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
                        ? 'text-teal-600'
                       : 'text-teal-500 hover:text-teal-700'
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
                          <ServiceIcon slug={s.slug} size={20} className="text-teal-600 shrink-0" />
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
                      ? 'text-teal-700'
                      : 'text-teal-500 hover:text-teal-700'
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
           className="group btn-press inline-flex items-center gap-2.5 h-11 whitespace-nowrap pl-3 pr-4 xl:pr-5 border-[1.5px] border-teal-500 bg-white/50 text-teal-500 text-[13px] font-display font-bold tracking-[0.06em] uppercase transition-all duration-300 hover:bg-teal-500 hover:text-paper hover:-translate-y-0.5 hover:shadow-[0_12px_20px_-12px_rgba(16,38,34,0.55)] motion-reduce:transition-none motion-reduce:hover:transform-none"
          >
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-sage text-teal-500 transition-colors duration-300 group-hover:bg-bronze-500 group-hover:text-teal-700">
              <Search size={13} strokeWidth={2.5} />
            </span>
            ICV Tracking
          </a>
          <Link
            to="/contact"
            className="group btn-press ml-1 inline-flex items-center gap-2.5 h-11 whitespace-nowrap pl-4 xl:pl-5 pr-3 bg-teal-500 text-paper text-[13px] font-display font-bold tracking-[0.06em] uppercase shadow-[inset_0_-3px_0_#B8924A] transition-all duration-300 hover:bg-teal-700 hover:-translate-y-0.5 hover:shadow-[inset_0_-3px_0_#CBA75F,0_12px_20px_-12px_rgba(16,38,34,0.6)] motion-reduce:transition-none motion-reduce:hover:transform-none"
          >
            Request Consultation
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-bronze-500 text-teal-700 transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transition-none">
              <ArrowRight size={13} strokeWidth={2.5} />
            </span>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 transition-colors text-teal-500"
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
          open ? 'max-h-[34rem]' : 'max-h-0'
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
              className="flex items-center justify-center gap-2.5 py-3.5 border-[1.5px] border-teal-500 bg-white/60 text-teal-500 font-display font-bold text-sm uppercase tracking-[0.06em] active:bg-teal-500 active:text-paper transition-colors"
            >
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-sage text-teal-500">
                <Search size={13} strokeWidth={2.5} />
              </span>
              ICV Tracking
            </a>
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2.5 py-3.5 bg-teal-500 text-paper font-display font-bold text-sm uppercase tracking-[0.06em] shadow-[inset_0_-3px_0_#B8924A] active:bg-teal-700 transition-colors"
            >
              Request Consultation
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-bronze-500 text-teal-700">
                <ArrowRight size={13} strokeWidth={2.5} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
