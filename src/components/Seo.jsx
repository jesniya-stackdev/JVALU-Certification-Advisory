import { useEffect } from 'react'

function upsertMeta(attr, key, content) {
  let el = document.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertCanonical(href) {
  let el = document.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

// Sets a unique document title + meta description/OG/Twitter tags per page.
// Runs on every route change since it's a client-side SPA with one shared index.html.
export default function Seo({ title, description, noIndex = false }) {
  useEffect(() => {
    const image = `${window.location.origin}/video/hero-poster.jpg`

    document.title = title
    upsertMeta('name', 'description', description)
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:url', window.location.href)
    upsertMeta('property', 'og:image', image)
    upsertMeta('property', 'og:site_name', 'JVALU')
    upsertMeta('property', 'og:locale', 'en_AE')
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', image)
    upsertMeta('name', 'robots', noIndex ? 'noindex, nofollow' : 'index, follow')
    upsertCanonical(window.location.href)
  }, [title, description, noIndex])

  return null
}
