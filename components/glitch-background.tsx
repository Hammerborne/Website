"use client"

import { useEffect, useRef } from "react"

export function GlitchBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animId: number
    let frame = 0

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener("resize", resize)

    const rand = (min: number, max: number) => Math.random() * (max - min) + min
    const randInt = (min: number, max: number) => Math.floor(rand(min, max))

    const draw = () => {
      frame++
      const w = canvas.width
      const h = canvas.height

      // Base dark fill
      ctx.fillStyle = "#0e1011"
      ctx.fillRect(0, 0, w, h)

      // --- Noise static ---
      const imageData = ctx.getImageData(0, 0, w, h)
      const data = imageData.data
      const noiseIntensity = Math.random() > 0.85 ? 120 : 55
      for (let i = 0; i < data.length; i += 4) {
        const noise = (Math.random() - 0.5) * noiseIntensity
        data[i] += noise
        data[i + 1] += noise
        data[i + 2] += noise
      }
      ctx.putImageData(imageData, 0, 0)

      // --- Scanlines ---
      for (let y = 0; y < h; y += 3) {
        ctx.fillStyle = "rgba(0,0,0,0.18)"
        ctx.fillRect(0, y, w, 1)
      }

      // --- Horizontal glitch bars ---
      const glitchChance = Math.random()
      if (glitchChance > 0.55) {
        const barCount = randInt(1, 5)
        for (let i = 0; i < barCount; i++) {
          const barY = randInt(0, h)
          const barH = randInt(1, 12)
          const shift = rand(-40, 40)
          const alpha = rand(0.04, 0.18)

          // Grab a slice and shift it horizontally
          try {
            const slice = ctx.getImageData(0, barY, w, barH)
            ctx.putImageData(slice, shift, barY)
          } catch {}

          // Color tint on the bar
          const tints = [
            `rgba(0,255,255,${alpha})`,
            `rgba(255,0,80,${alpha})`,
            `rgba(255,255,255,${alpha * 0.5})`,
          ]
          ctx.fillStyle = tints[randInt(0, tints.length)]
          ctx.fillRect(0, barY, w, barH)
        }
      }

      // --- Signal interference lines ---
      if (Math.random() > 0.7) {
        const lineCount = randInt(1, 4)
        for (let i = 0; i < lineCount; i++) {
          const y = randInt(0, h)
          const alpha = rand(0.05, 0.25)
          ctx.strokeStyle = `rgba(0,255,255,${alpha})`
          ctx.lineWidth = rand(0.5, 2)
          ctx.beginPath()
          ctx.moveTo(0, y)
          ctx.lineTo(w, y)
          ctx.stroke()
        }
      }

      // --- Vertical chromatic split (rare, intense burst) ---
      if (Math.random() > 0.94) {
        const sliceY = randInt(0, h - 80)
        const sliceH = randInt(20, 80)
        try {
          const slice = ctx.getImageData(0, sliceY, w, sliceH)
          ctx.globalCompositeOperation = "screen"
          ctx.fillStyle = `rgba(255,0,60,0.08)`
          ctx.fillRect(-6, sliceY, w, sliceH)
          ctx.fillStyle = `rgba(0,255,255,0.08)`
          ctx.fillRect(6, sliceY, w, sliceH)
          ctx.globalCompositeOperation = "source-over"
        } catch {}
      }

      // --- Rolling bright scanline ---
      const scanY = (frame * 1.2) % h
      const grad = ctx.createLinearGradient(0, scanY - 20, 0, scanY + 20)
      grad.addColorStop(0, "rgba(0,255,255,0)")
      grad.addColorStop(0.5, "rgba(0,255,255,0.04)")
      grad.addColorStop(1, "rgba(0,255,255,0)")
      ctx.fillStyle = grad
      ctx.fillRect(0, scanY - 20, w, 40)

      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  )
}
