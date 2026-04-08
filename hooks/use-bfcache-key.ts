"use client"

import { useEffect, useState } from "react"

/**
 * Returns a key that bumps when the browser restores this page from the
 * Back/Forward Cache (BFCache) or does a back/forward SPA navigation.
 * Pass this key to a top-level wrapper so React remounts the whole tree,
 * resetting Framer Motion animation state without a full page reload.
 */
export function useBfcacheKey() {
  const [key, setKey] = useState(0)

  useEffect(() => {
    const bump = () => setKey((k) => k + 1)

    // BFCache restore: event.persisted is true when the page is thawed from cache.
    // popstate also fires for back/forward navigations (including BFCache restores).
    const onPageShow = (e: PageTransitionEvent) => { if (e.persisted) bump() }

    window.addEventListener("pageshow", onPageShow)
    window.addEventListener("popstate", bump)
    return () => {
      window.removeEventListener("pageshow", onPageShow)
      window.removeEventListener("popstate", bump)
    }
  }, [])

  return key
}
