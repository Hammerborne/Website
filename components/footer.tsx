"use client"

import { motion } from "framer-motion"
import Link from "next/link"

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
            <span className="font-[family-name:var(--font-display)] text-3xl tracking-wider text-foreground">
              HAMMERBORNE
            </span>
            <span className="text-xs uppercase tracking-widest text-muted-foreground">
              Game Studio
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            <Link 
              href="#" 
              className="text-sm uppercase tracking-widest text-muted-foreground hover:text-cyan transition-colors"
            >
              Press Kit
            </Link>
            <a
              href="https://discord.gg/3cm95G9P63"
              rel="noopener noreferrer"
              className="text-sm uppercase tracking-widest text-muted-foreground hover:text-cyan transition-colors"
            >
              Discord
            </a>
            <Link 
              href="#" 
              className="text-sm uppercase tracking-widest text-muted-foreground hover:text-cyan transition-colors"
            >
              Twitter
            </Link>
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
