import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Seo from '../components/Seo'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <Seo
        title="Page Not Found | JVALU"
        description="The page you're looking for doesn't exist or may have moved."
        noIndex
      />
      <div className="text-center px-5">
        <p className="eyebrow text-bronze-600 mb-4">File Not Found</p>
        <h1 className="font-display font-extrabold text-5xl text-teal-700">404</h1>
        <p className="mt-4 text-ink/65 max-w-sm mx-auto">
          The page you're looking for doesn't exist or may have moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 bg-teal-500 text-paper font-display font-semibold text-sm uppercase tracking-wide hover:bg-teal-600 transition-colors"
        >
          Back to Home <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  )
}
