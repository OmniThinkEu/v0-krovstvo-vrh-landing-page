import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TrustBar } from "@/components/trust-bar"
import { ServicesGrid } from "@/components/services-grid"
import { ServicesDetail } from "@/components/services-detail"
import { Benefits } from "@/components/benefits"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { ContactInfo } from "@/components/contact-info"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

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
        <FAQ />
        <ContactInfo />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
