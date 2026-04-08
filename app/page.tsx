"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { SystemLog } from "@/components/system-log"
import { FeaturesSection } from "@/components/features-section"
import { MailingList } from "@/components/mailing-list"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background" data-home-probe>
      <Navigation />
      <HeroSection />
      <SystemLog />
      <FeaturesSection />
      <MailingList />
      <Footer />
    </main>
  )
}
