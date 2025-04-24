import { Header } from "./Components/header"
import { HeroSection } from "./Components/hero-section"
import { FeaturesSection } from "./Components/features-section"
import { StreamersSection } from "./Components/streamers-section"
import { PricingSection } from "./Components/pricing-section"
import { CTASection } from "./Components/cta-section"
import { Footer } from "./Components/footer"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <StreamersSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
