"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="relative py-16 px-6 border-t-2 border-border bg-[#1a1d1e]">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-3">
              <Image
                src="/company-logo.png"
                alt="Hammerborne"
                width={46}
                height={46}
                className="object-contain"
              />
              <span className="font-[family-name:var(--font-display)] text-3xl tracking-wider text-foreground">
                HAMMERBORNE
              </span>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-6">
            <a href="https://discord.gg/3cm95G9P63" target="_blank" rel="noopener noreferrer" aria-label="Discord">
              <Image src="/RRSS/Discord (64x).png" alt="Discord" width={28} height={28} className="opacity-100 hover:opacity-75 transition-opacity" />
            </a>
            <a href="https://www.reddit.com" target="_blank" rel="noopener noreferrer" aria-label="Reddit">
              <Image src="/RRSS/Reddit (64x).png" alt="Reddit" width={28} height={28} className="opacity-100 hover:opacity-75 transition-opacity" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <Image src="/RRSS/YouTube (64x).png" alt="YouTube" width={28} height={28} className="opacity-100 hover:opacity-75 transition-opacity" />
            </a>
            <a href="mailto:contact@hammerborne.com" aria-label="Email">
              <Image src="/RRSS/Email (64x).png" alt="Email" width={28} height={28} className="opacity-100 hover:opacity-75 transition-opacity" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-xs text-muted-foreground font-mono">
            <span className="text-cyan">{">>"}</span> {new Date().getFullYear()} HAMMERBORNE. ALL RIGHTS RESERVED.
          </div>
        </motion.div>

        {/* Bottom decoration */}
        <div className="mt-12 pt-8 border-t border-border flex items-center justify-center">
          <div className="flex items-center gap-4">
            <div className="w-8 h-px bg-border" />
            <div className="w-2 h-2 border border-cyan rotate-45" />
            <div className="w-8 h-px bg-border" />
          </div>
        </div>
      </div>
    </footer>
  )
}
