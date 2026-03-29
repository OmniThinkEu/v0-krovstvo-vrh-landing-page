import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FAQ } from "@/components/faq"
import { CTASection } from "@/components/cta-section"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

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
            
            {/* Search Bar */}
            <div className="mt-12 mx-auto max-w-xl relative group">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 size-6 text-muted-foreground transition-colors group-focus-within:text-accent" />
              <Input 
                placeholder="Iščite po vprašanjih..." 
                className="h-16 pl-14 rounded-full border-none bg-background/95 text-foreground shadow-2xl transition-all focus:ring-4 focus:ring-accent/50 text-lg"
              />
            </div>
          </div>
        </section>

        <div className="bg-background">
          <FAQ />
        </div>

        {/* Categories Section - Aesthetic addition */}
        <section className="py-16 lg:py-24 bg-muted/20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold tracking-tight">Kategorije pomoči</h2>
                <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                        { title: "Montaža", count: 12 },
                        { title: "Obnova", count: 8 },
                        { title: "Materiali", count: 15 },
                        { title: "Garancija", count: 6 }
                    ].map((cat) => (
                        <div key={cat.title} className="p-8 rounded-2xl bg-card border border-border shadow-sm hover:shadow-xl hover:scale-105 transition-all">
                            <h3 className="text-xl font-bold">{cat.title}</h3>
                            <p className="mt-2 text-muted-foreground">{cat.count} vprašanj</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
