import React from 'react'
import { BadgeCheck, BookOpenCheck } from 'lucide-react'
import AssetEvalIcon from './AssetEvalIcon'

// Fallback icon for services without a partner logo.
export default function ServiceIcon({ slug, size = 24, className = '' }) {
  if (slug === 'classification') {
    return <BadgeCheck size={size} className={className} strokeWidth={1.75} />
  }
  if (slug === 'case-studies') {
    return <BookOpenCheck size={size} className={className} strokeWidth={1.75} />
  }
  return <AssetEvalIcon size={size} className={className} />
}
