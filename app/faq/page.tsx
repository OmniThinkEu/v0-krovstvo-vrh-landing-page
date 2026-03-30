import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FAQ } from "@/components/faq"
import { CTASection } from "@/components/cta-section"

export default function FAQPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="relative overflow-hidden bg-primary py-24 lg:py-32">
          {/* Background Image */}
          <img 
            src="/faq-bg.jpg" 
            alt="FAQ Background" 
            className="absolute inset-0 h-full w-full object-cover grayscale-[0.5]"
          />
          <div className="absolute inset-0 bg-primary/90 backdrop-blur-[2px]" />
          
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-primary-foreground">
            <h1 className="text-balance text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-7xl drop-shadow-lg">
              Pogosta vprašanja
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-pretty text-xl text-primary-foreground/90 lg:text-2xl leading-relaxed">
              Tukaj boste našli odgovore na vsa vprašanja o naših storitvah, 
              postopku krovstva, materialih in garanciji.
            </p>
          </div>
        </section>

        <div className="bg-background">
          <FAQ />
        </div>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
