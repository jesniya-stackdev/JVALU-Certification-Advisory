import React from 'react'

export default function HeroVideo() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Poster shows instantly while video loads, same crop/scale */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/video/hero-poster.jpg')" }}
        aria-hidden="true"
      />

      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/video/hero-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      >
        <source src="/video/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Dark teal wash — keeps headline text readable over any frame of the video */}
      <div className="absolute inset-0 bg-teal-900/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-teal-900/75 via-teal-800/20 to-transparent" />
    </div>
  )
}
