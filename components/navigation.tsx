"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function Navigation() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed top-0 left-0 right-0 z-50 border-b-2 border-border bg-background/95 backdrop-blur-sm"
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group">
          <span className="font-[family-name:var(--font-display)] text-2xl md:text-3xl tracking-wider text-foreground group-hover:text-cyan transition-colors">
            HAMMERBORNE
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <Link 
            href="#" 
            className="text-sm uppercase tracking-widest text-muted-foreground hover:text-cyan transition-colors border-b-2 border-transparent hover:border-cyan"
          >
            Press
          </Link>
          <Link 
            href="https://discord.gg/3cm95G9P63" 
            rel="noopener noreferrer"
            className="text-sm uppercase tracking-widest text-muted-foreground hover:text-cyan transition-colors border-b-2 border-transparent hover:border-cyan"
          >
            Discord
          </Link>
        </div>
      </nav>
    </motion.header>
  )
}
