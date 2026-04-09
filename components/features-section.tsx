"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const features = [
  {
    title: "Infinite Revelation",
    description: "Every galaxy a new testament. Each pilgrimage a different revelation, a different damnation.",
  },
  {
    title: "Realtime Battles",
    description: "Command your flagship through the battlefield, aiming and firing your ship's turrets to lead your fleet to victory.",
  },
  {
    title: "Low-Tech Sovereignty",
    description: "Embrace the aesthetic of analog interfaces and brutal efficiency. No sleek holograms here—only switches, dials, and the hum of heavy machinery.",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

export function FeaturesSection() {
  return (
    <section id="core-systems" className="relative scroll-mt-24 py-24 px-6 bg-[#232829]">
      {/* Section header */}
      <div className="container mx-auto max-w-6xl mb-16">
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}

          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex items-center gap-4"
        >
          <div className="w-12 h-0.5 bg-cyan" />
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Core Systems
          </span>
        </motion.div>
      </div>

      {/* Features grid */}
      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group relative isolate aspect-square border-4 border-border bg-[#1a1d1e] p-4 hover:border-cyan transition-colors duration-300 overflow-hidden"
            >
              {feature.title === "Realtime Battles" && (
                <>
                  <Image
                    src="/ezgif-83204204fdda3117.gif"
                    alt=""
                    fill
                    unoptimized
                    className="object-cover object-center pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-[#1a1d1e]/70 pointer-events-none" />
                </>
              )}

              {/* Content above overlay */}
              <div className="relative z-10 flex flex-col h-full justify-end">
                {/* Title */}
                <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl tracking-wider text-foreground mb-4">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8 z-10">
                <div className="absolute top-0 right-0 w-full h-0.5 bg-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-0 right-0 w-0.5 h-full bg-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
