"use client"

import type React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import heroBg from "@/images/hero background.png"

export function HeroSection() {
  const handleDiscoverMore = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    document.getElementById("core-systems")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20">
      {/* Hero background image */}
      <Image
        src={heroBg}
        alt=""
        fill
        className="object-cover object-center pointer-events-none"
        priority
      />
      {/* Background gradient overlay - cold hangar feel */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1d1e]/95 via-[#1a1d1e]/60 to-[#ffffff]/0 pointer-events-none" />
      

      {/* Main content */}
      <div className="relative z-10 text-center">
        {/* Asterium Title */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h1
            className="text-[12vw] md:text-[10vw] lg:text-[8vw] leading-none tracking-[0.2em] font-light text-main-title"
            style={{ fontFamily: '"Corbel Light", Corbel, system-ui, sans-serif' }}
          >
            ASTERIUM
          </h1>
        </motion.div>

        {/* Subtitle line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-full max-w-md mx-auto h-0.5 bg-border my-8"
        />

        {/* Tagline */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-muted-foreground uppercase tracking-[0.3em] text-sm mb-12"
        >
          Colonize. Industrialize. Survive.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <a
            href="#core-systems"
            onClick={handleDiscoverMore}
            className="group inline-flex items-center gap-3 bg-cyan text-[#faf9f7] px-8 py-4 font-mono text-sm uppercase tracking-widest  border-4 border-cyan hover:bg-transparent hover:text-cyan transition-all duration-300"
          >
            <span>Discover more</span>
          </a>
        </motion.div>
      </div>

      {/* Bottom decoration */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[2px] h-16 bg-gradient-to-b from-transparent to-white/50" />
        <span className="text-xs uppercase tracking-widest text-secondary">Scroll</span>
      </motion.div>
    </section>
  )
}
