import React from 'react'
import { company } from '../data/content'
import WhatsAppIcon from './WhatsAppIcon'

export default function WhatsAppFloat() {
  return (
    <a
      href={company.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with JVALU on WhatsApp"
      className="whatsapp-pulse fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-stamp hover:bg-[#1ebe5a] hover:scale-105 transition-all duration-200"
    >
      <WhatsAppIcon size={28} />
    </a>
  )
}
