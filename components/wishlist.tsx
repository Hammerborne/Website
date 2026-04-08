"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import starSystem from "@/images/star system.png"

export function Wishlist() {
  return (
    <section className="relative py-24 px-6">
      {/* Background image */}
      <Image
        src={starSystem}
        alt=""
        fill
        className="object-cover object-center pointer-events-none"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1d1e] via-[#1a1d1e]/80 to-[#1a1d1e] pointer-events-none" />
      <div className="relative z-10 container mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl tracking-wider text-foreground mb-4">
            WISHLIST
          </h2>
          <p className="text-muted-foreground mb-10 max-w-md mx-auto">
            Bind your will to Shamkalu, and heed the whisper that heralds its awakening.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Steam button */}
            <a
              href="#"
              className="group flex items-center justify-center gap-3 border-2 border-border bg-[#232829] px-8 py-4 hover:border-cyan transition-colors duration-300"
            >
              <Image
                src="/SteamLogoFull-white.png"
                alt="Steam"
                width={100}
                height={32}
                className="object-contain opacity-70 group-hover:opacity-100 transition-opacity"
              />
            </a>

            {/* Epic Games button */}
            <a
              href="#"
              className="group flex items-center justify-center gap-3 border-2 border-border bg-[#232829] px-8 py-4 hover:border-cyan transition-colors duration-300"
            >
              <Image
                src="/Epic_games_store_logo.png"
                alt="Epic Games Store"
                width={120}
                height={32}
                className="object-contain opacity-70 group-hover:opacity-100 transition-opacity"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
