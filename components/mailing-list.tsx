"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle, AlertCircle } from "lucide-react"

export function MailingList() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus("loading")
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    setStatus("success")
    setEmail("")
    
    setTimeout(() => setStatus("idle"), 3000)
  }

  return (
    <section className="relative py-24 px-6">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Terminal box */}
          <div className="border-4 border-border bg-[#1a1d1e] relative">
            {/* Header bar */}
            <div className="border-b-2 border-border px-6 py-4 flex items-center justify-between bg-[#232829]">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 border border-muted-foreground" />
                  <div className="w-3 h-3 border border-muted-foreground" />
                  <div className="w-3 h-3 bg-cyan" />
                </div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground ml-4">
                  Communications Terminal
                </span>
              </div>
              <span className="text-xs text-muted-foreground font-mono">
                SEC_LVL: PUBLIC
              </span>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12">
              {/* Title */}
              <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl tracking-wider text-foreground mb-4">
                ENLIST FOR UPDATES
              </h2>
              
              {/* Subtitle */}
              <p className="text-muted-foreground mb-8 max-w-md">
                Receive transmission alerts on development progress, early access opportunities, and strategic briefings.
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ENTER_EMAIL_ADDRESS"
                    className="w-full bg-[#232829] border-2 border-border px-4 py-4 font-mono text-foreground placeholder:text-muted-foreground focus:border-cyan focus:outline-none transition-colors"
                    disabled={status === "loading" || status === "success"}
                  />
                  <div className="absolute left-0 bottom-0 w-2 h-2 border-l-2 border-b-2 border-cyan" />
                  <div className="absolute right-0 bottom-0 w-2 h-2 border-r-2 border-b-2 border-cyan" />
                </div>
                
                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="group flex items-center justify-center gap-2 bg-cyan text-[#1a1d1e] px-8 py-4 font-mono text-sm uppercase tracking-widest font-bold border-2 border-cyan hover:bg-transparent hover:text-cyan transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <span>Processing...</span>
                  ) : status === "success" ? (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      <span>Enlisted</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Transmit</span>
                    </>
                  )}
                </button>
              </form>

              {/* Status message */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 flex items-center gap-2 text-cyan text-sm"
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>Transmission received. Stand by for further instructions.</span>
                </motion.div>
              )}
            </div>

            {/* Footer decoration */}
            <div className="border-t border-border px-6 py-3 flex items-center justify-between bg-[#232829]">
              <span className="text-xs text-muted-foreground font-mono">
                {">>"} HAMMERBORNE_COMMS_v1.2
              </span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan animate-pulse" />
                <span className="text-xs text-muted-foreground">ONLINE</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
