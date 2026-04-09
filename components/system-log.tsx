"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

const LINE_1 = "PROJECT STATUS: UNDER DEVELOPMENT..."
const LINE_2 = "EXPECTED RELEASE CYCLE: 2028."

export function SystemLog() {
  const [displayedLine1, setDisplayedLine1] = useState("")
  const [displayedLine2, setDisplayedLine2] = useState("")
  const [line1Complete, setLine1Complete] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [showCursor, setShowCursor] = useState(true)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect()
          let index = 0
          // Type line 1
          interval = setInterval(() => {
            if (index < LINE_1.length) {
              setDisplayedLine1(LINE_1.slice(0, index + 1))
              index++
            } else {
              setLine1Complete(true)
              clearInterval(interval!)
              // Type line 2 after 2.5s delay
              setTimeout(() => {
              let index2 = 0
              interval = setInterval(() => {
                if (index2 < LINE_2.length) {
                  setDisplayedLine2(LINE_2.slice(0, index2 + 1))
                  index2++
                } else {
                  setIsComplete(true)
                  clearInterval(interval!)
                  setTimeout(() => setShowCursor(false), 2750)
                }
              }, 40)
              }, 1375)
            }
          }, 40)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => {
      observer.disconnect()
      if (interval) clearInterval(interval)
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative"
        >
          {/* Terminal box */}
          <div className="border-2 border-border bg-[#1a1d1e] p-6 md:p-8 relative scanlines">
            {/* Terminal header */}
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
              <div className="w-3 h-3 bg-cyan" />
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                System Log // Hammerborne Terminal v2.4
              </span>
            </div>

            {/* Log content */}
            <div className="font-mono text-lg md:text-xl text-cyan leading-relaxed space-y-2">
              <div>
                <span className="text-muted-foreground mr-2">{">>"}</span>
                <span>{displayedLine1}</span>
                {!line1Complete && <span className="typewriter-cursor" />}
              </div>
              {line1Complete && (
                <div>
                  <span className="text-muted-foreground mr-2">{">>"}</span>
                  <span>{displayedLine2}</span>
                  {showCursor && <span className="typewriter-cursor" />}
                </div>
              )}
            </div>

            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
