"use client"

import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
// Add your screenshot paths here once you have them
const screenshots = [
  { src: "", alt: "Screenshot 1" },
  { src: "", alt: "Screenshot 2" },
  { src: "", alt: "Screenshot 3" },
  { src: "", alt: "Screenshot 4" },
  { src: "", alt: "Screenshot 5" },
]

export function MediaSection() {
  const videoRef = useRef<HTMLDivElement>(null)
  const [autoplay, setAutoplay] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAutoplay(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    if (videoRef.current) observer.observe(videoRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative py-24 px-6 bg-[#0e1011] overflow-hidden">
      <div className="container mx-auto max-w-4xl">

        {/* Section header */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-12"
        >
          <p className="text-muted-foreground max-w-md mx-auto">
            Media
          </p>
        </motion.div>

        {/* Main video embed */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative w-full border-4 border-border mb-6"
          style={{ aspectRatio: "16/9" }}
          ref={videoRef}
        >
          <iframe
            src={`https://www.youtube.com/embed/Kdo9aVyuQ0M?autoplay=${autoplay ? 1 : 0}&mute=1`}
            title="Asterium — Media"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </motion.div>

        {/* Screenshot thumbnails */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="grid grid-cols-5 gap-3"
        >
          {screenshots.map((shot, index) => (
            <div
              key={index}
              className="group relative border-2 border-border hover:border-cyan transition-colors duration-300 overflow-hidden cursor-pointer"
              style={{ aspectRatio: "16/9" }}
            >
              {shot.src ? (
                <img
                  src={shot.src}
                  alt={shot.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                // Placeholder until screenshots are added
                <div className="w-full h-full bg-[#232829] flex items-center justify-center">
                  <span className="text-xs font-mono text-muted-foreground/40 uppercase tracking-widest">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              )}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
