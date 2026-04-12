"use client"

import { useEffect } from "react"

const WHEEL_MULTIPLIER = 0.4
const LERP_FACTOR = 0.1

export function SmoothScroll() {
  useEffect(() => {
    let target = window.scrollY
    let current = window.scrollY
    let raf: number

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      const maxScroll = document.body.scrollHeight - window.innerHeight
      target = Math.min(Math.max(target + e.deltaY * WHEEL_MULTIPLIER, 0), maxScroll)
    }

    const tick = () => {
      current += (target - current) * LERP_FACTOR
      if (Math.abs(target - current) > 0.5) {
        window.scrollTo({ top: current, behavior: "instant" })
      }
      raf = requestAnimationFrame(tick)
    }

    document.addEventListener("wheel", handleWheel, { passive: false })
    raf = requestAnimationFrame(tick)

    return () => {
      document.removeEventListener("wheel", handleWheel)
      cancelAnimationFrame(raf)
    }
  }, [])

  return null
}
