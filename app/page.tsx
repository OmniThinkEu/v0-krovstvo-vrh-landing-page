import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TrustBar } from "@/components/trust-bar"
import { ServicesGrid } from "@/components/services-grid"
import { ServicesDetail } from "@/components/services-detail"
import { Benefits } from "@/components/benefits"
import { Testimonials } from "@/components/testimonials"
import { ContactInfo } from "@/components/contact-info"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { ProcessTimeline } from "@/components/process-timeline"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <ServicesGrid />
        <ServicesDetail />
        <Benefits />
        <Testimonials />
        <ContactInfo />
        <ProcessTimeline />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
