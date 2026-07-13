import React from 'react'

// Represents asset valuation: a document with a checkmark/scale motif.
// Used where a service has no official third-party logo (Asset Evaluation is
// our own service, unlike ICV/ISO/ADNOC which are issued by external bodies).
export default function AssetEvalIcon({ size = 40, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <rect x="9" y="5" width="26" height="38" rx="2" stroke="currentColor" strokeWidth="2.2" />
      <path d="M15 14h16M15 21h16M15 28h10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="33" cy="34" r="9" fill="var(--asset-icon-bg, #F7F5F0)" stroke="currentColor" strokeWidth="2.2" />
      <path d="M29.5 34l2.3 2.3L37 31.6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
