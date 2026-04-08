"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { SystemLog } from "@/components/system-log"
import { FeaturesSection } from "@/components/features-section"
import { MailingList } from "@/components/mailing-list"
import { Footer } from "@/components/footer"
import { useBfcacheKey } from "@/hooks/use-bfcache-key"

export default function Home() {
  const bfcacheKey = useBfcacheKey()

  return (
    <main key={bfcacheKey} className="min-h-screen bg-background" data-home-probe>
      <Navigation />
      <HeroSection />
      <SystemLog />
      <FeaturesSection />
      <MailingList />
      <Footer />
    </main>
  )
}
