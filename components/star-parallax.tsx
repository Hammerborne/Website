"use client"

import { useEffect, useState } from "react"

function generateStars(count: number, seed: number) {
  const stars = []
  let s = seed
  for (let i = 0; i < count; i++) {
    s = (s * 1664525 + 1013904223) & 0xffffffff
    const x = ((s >>> 0) % 10000) / 100
    s = (s * 1664525 + 1013904223) & 0xffffffff
    const y = ((s >>> 0) % 100000) / 100
    s = (s * 1664525 + 1013904223) & 0xffffffff
    const opacity = 0.2 + (((s >>> 0) % 80) / 100)
    stars.push({ x, y, opacity })
  }
  return stars
}

const starLayers = [
  { stars: generateStars(35, 1), size: 2.5,   speed: 0.45 },
  { stars: generateStars(70,  2), size: 1.5, speed: 0.6 },
  { stars: generateStars(120,  3), size: 1, speed: 1 },
]

export function StarParallax({ sectionRef }: { sectionRef: React.RefObject<HTMLElement | null> }) {
  const [offsets, setOffsets] = useState([0, 0, 0])

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const scrolled = window.scrollY - sectionRef.current.offsetTop
      setOffsets(starLayers.map(l => scrolled * l.speed))
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sectionRef])

  return (
    <>
      {starLayers.map((layer, li) => (
        <div
          key={li}
          className="absolute inset-0 pointer-events-none"
          style={{ transform: `translateY(${offsets[li]}px)`, willChange: "transform" }}
        >
          {layer.stars.map((star, si) => (
            <span
              key={si}
              className="absolute rounded-full bg-white"
              style={{
                left: `${star.x}%`,
                top: `${star.y}px`,
                width: layer.size,
                height: layer.size,
                opacity: star.opacity,
              }}
            />
          ))}
        </div>
      ))}
    </>
  )
}
