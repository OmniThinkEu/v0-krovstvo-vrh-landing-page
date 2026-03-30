import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServicesGrid } from "@/components/services-grid"
import { FAQ } from "@/components/faq"
import { CTASection } from "@/components/cta-section"
import { ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow pt-20">
        {/* Services Hero */}
        <section className="relative py-20 lg:py-32 overflow-hidden bg-primary shadow-2xl">
           {/* Background decorative elements */}
           <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-50" />
           <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-80 h-80 bg-background/10 rounded-full blur-3xl opacity-30" />
           
           <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
             <div className="flex flex-col items-center text-center">
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent-foreground text-sm font-bold mb-6 animate-in fade-in slide-in-from-bottom-2 duration-700">
                 <ShieldCheck className="size-4 text-accent" />
                 <span>Strokovne krovske rešitve</span>
               </div>
               <h1 className="text-4xl font-extrabold tracking-tight text-white mb-6 sm:text-5xl lg:text-7xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 italic">
                 Naše Storitve
               </h1>
               <p className="max-w-2xl text-xl text-white/80 leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
                 Ponujamo celovite in kakovostne krovske storitve, prilagojene vašim potrebam. 
                 Zaupajte nam svojo streho in poskrbeli bomo za dolgotrajno varnost vašega doma.
               </p>
               
               <div className="mt-10 flex gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
                  <div className="flex items-center gap-2 text-white/70 text-sm">
                    <CheckCircle2 className="size-5 text-accent" />
                    <span>Brezplačen ogled</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/70 text-sm px-4 border-l border-white/20">
                    <CheckCircle2 className="size-5 text-accent" />
                    <span>Garancija na izvedbo</span>
                  </div>
               </div>
             </div>
           </div>
        </section>

        {/* The existing grid component */}
        <div className="bg-background">
          <ServicesGrid />
        </div>

        {/* Why Choose Us for Services */}
        <section className="py-20 bg-background">
           <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                 <div className="space-y-8">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl italic">
                       Zakaj izbrati Krovstvo Vrh?
                    </h2>
                    <ul className="space-y-6">
                       {[
                         { title: "Več kot 20 let izkušenj", desc: "Naše znanje se prenaša iz generacije v generacijo, kar zagotavlja mojstrsko izvedbo." },
                         { title: "Uporaba le najboljših materialov", desc: "Sodelujemo z znamkami Bramac, Gerard, Tondach in drugimi vodilnimi proizvajalci." },
                         { title: "Stranka na prvem mestu", desc: "Vsak projekt obravnavamo individualno in poskrbimo za popolno zadovoljstvo." }
                       ].map((item, i) => (
                         <li key={i} className="flex gap-4">
                            <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold text-sm">
                               {i + 1}
                            </div>
                            <div>
                               <h3 className="font-bold text-lg text-foreground">{item.title}</h3>
                               <p className="text-muted-foreground">{item.desc}</p>
                            </div>
                         </li>
                       ))}
                    </ul>
                 </div>
                 <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-accent/20 relative aspect-video">
                    <img src="/uploaded/hero-premium.jpg" alt="Delo na strehi" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white italic font-bold text-xl">
                      Kakovost, ki ji lahko zaupate.
                    </div>
                 </div>
              </div>
           </div>
        </section>

        <div className="bg-muted/10">
          <FAQ />
        </div>

        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
