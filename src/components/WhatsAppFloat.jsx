import React, { useEffect, useState } from 'react'
import { company } from '../data/content'
import WhatsAppIcon from './WhatsAppIcon'

export default function WhatsAppFloat() {
  const [overFooter, setOverFooter] = useState(false)

  useEffect(() => {
    const footer = document.querySelector('footer')
    if (!footer) return
    const observer = new IntersectionObserver(([entry]) => setOverFooter(entry.isIntersecting))
    observer.observe(footer)
    return () => observer.disconnect()
  }, [])

  return (
    <a
      href={company.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with JVALU on WhatsApp"
      className={`whatsapp-pulse fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-stamp hover:bg-[#1ebe5a] hover:scale-105 transition-all duration-300 ${
        overFooter ? 'opacity-0 translate-y-3 pointer-events-none' : 'opacity-100 translate-y-0'
      }`}
    >
      <WhatsAppIcon size={28} />
    </a>
  )
}
