import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TrustBar } from "@/components/trust-bar"
import { ServicesGrid } from "@/components/services-grid"
import { ServicesDetail } from "@/components/services-detail"
import { Benefits } from "@/components/benefits"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { ContactForm } from "@/components/contact-form"
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
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
