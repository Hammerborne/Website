"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { SystemLog } from "@/components/system-log"
import { MediaSection } from "@/components/media-section"
import { FeaturesSection } from "@/components/features-section"
import { Wishlist } from "@/components/wishlist"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background" data-home-probe>
      {/* <Navigation /> */}
      <HeroSection />
      <SystemLog />
      <MediaSection />
      <FeaturesSection />
      <Wishlist />
      <Footer />
    </main>
  )
}
