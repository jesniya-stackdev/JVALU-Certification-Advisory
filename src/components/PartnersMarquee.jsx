import React from 'react'
import { partners } from '../data/content'

export default function PartnersMarquee() {
  // Duplicate the list — animation scrolls exactly one set's width (-50%),
  // then snaps back to start, creating a seamless infinite loop
  const track = [...partners, ...partners, ...partners]

  return (
    <div className="relative overflow-hidden py-4 w-full">
      {/* The track starts at left:0 and scrolls left by 1/3 of its total width
          (since we tripled the list). Using translate3d for GPU acceleration. */}
      <div
        className="marquee-track flex items-center"
        style={{ width: 'max-content' }}
      >
        {track.map((p, i) => (
          <div
            key={`${p.name}-${i}`}
            className="flex items-center shrink-0 opacity-75 hover:opacity-100 transition-opacity px-8 md:px-12"
            title={p.fullName}
          >
            <img
              src={p.logo}
              alt={p.fullName}
              className="h-10 md:h-12 w-auto object-contain"
              style={{ maxWidth: '120px' }}
            />
          </div>
        ))}
      </div>

      {/* Edge fade masks so logos fade in/out at edges cleanly */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-teal-700 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-teal-700 to-transparent z-10" />
    </div>
  )
}
