import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FaqItem({ q, a, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-teal-500/12 py-5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 text-left group"
        aria-expanded={open}
      >
        <span className="font-display font-semibold text-base text-teal-700 group-hover:text-teal-500 transition-colors">{q}</span>
        <ChevronDown size={20} className={`shrink-0 text-bronze-500 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`grid transition-all duration-300 ease-in-out ${open ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <p className="text-ink/65 leading-relaxed text-sm">{a}</p>
        </div>
      </div>
    </div>
  )
}
