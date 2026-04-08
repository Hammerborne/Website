"use client"

import { motion } from "framer-motion"

const features = [
  {
    title: "Grand Strategy",
    description: "Command vast fleets and manage sprawling empires across procedurally generated star systems. Every decision shapes the fate of civilizations.",
  },
  {
    title: "Tactical Industrialism",
    description: "Build planet-spanning factories and orbital megastructures. Extract, refine, and weaponize resources in a universe where scarcity drives conflict.",
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
              className="group relative isolate border-4 border-border bg-[#1a1d1e] p-8 hover:border-cyan transition-colors duration-300"
            >
              {/* Title */}
              <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl tracking-wider text-foreground mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8">
                <div className="absolute top-0 right-0 w-full h-0.5 bg-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-0 right-0 w-0.5 h-full bg-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Number indicator */}
              <div className="absolute bottom-4 right-4 font-[family-name:var(--font-display)] text-6xl text-border group-hover:text-cyan/20 transition-colors -z-10 pointer-events-none">
                0{index + 1}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
