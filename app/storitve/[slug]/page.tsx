import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { ProcessTimeline } from "@/components/process-timeline"
import { Testimonials } from "@/components/testimonials"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const servicesData: Record<string, any> = {
  montaza: {
    title: "Montaža novih streh",
    description: "Celovita montaža novih strešnih konstrukcij s kvalitetnimi materiali in strokovno izvedbo. Zagotavljamo dolgoročno varnost in estetski izgled vašega doma.",
    features: [
      "Svetovanje pri izbiri kritine",
      "Priprava konstrukcije",
      "Kakovostna montaža",
      "Garancija na izvedbo",
    ],
  },
  obnova: {
    title: "Obnova in sanacija",
    description: "Temeljita obnova obstoječih streh z zamenjavo poškodovanih elementov. Podaljšujemo življenjsko dobo vaše strehe z uporabo sodobnih tehnik.",
    features: [
      "Pregled stanja strehe",
      "Sanacija konstrukcije",
      "Zamenjava poškodovanih delov",
      "Sodobna zaščita pred vremenskimi vplivi",
    ],
  },
  zamenjava: {
    title: "Zamenjava kritine",
    description: "Zamenjava stare kritine z novo, izbira med različnimi materiali in barvami. Izboljšujemo vizualno podobo in zaščito vašega objekta.",
    features: [
      "Odstranitev stare kritine",
      "Sanacija letvanja",
      "Montaža nove kritine",
      "Finalna obdelava obrob",
    ],
  },
  izolacija: {
    title: "Izolacija in zateplitev",
    description: "Profesionalna toplotna izolacija za energetsko učinkovit dom. Zmanjšajte stroške ogrevanja in hkrati izboljšajte bivalno ugodje.",
    features: [
      "Vgradnja parne zapore",
      "Izolacija med špirovci",
      "Dodatna izolacija pod špirovci",
      "Zračni kanali za prezračevanje",
    ],
  },
  popravila: {
    title: "Popravila in vzdrževanje",
    description: "Hitra in zanesljiva popravila ter redno vzdrževanje vaše strehe. Preprečujemo večje poškodbe z rednim pregledovanjem in nujnimi posegi.",
    features: [
      "Popravila obrob in žlebov",
      "Menjava posameznih strešnikov",
      "Čiščenje žlebov in strehe",
      "Nujni posegi po neurjih",
    ],
  },
  zlebovi: {
    title: "Odvod vode - žlebovi",
    description: "Montaža in popravilo žlebov ter odtočnih cevi za učinkovit odvod vode. Preprečujemo zamakanje fasade in temeljev vašega doma.",
    features: [
      "Montaža bakrenih žlebov",
      "Montaža barvnih pločevinastih žlebov",
      "Čiščenje in pregled odtokov",
      "Namestitev snežnih zadrževalcev",
    ],
  },
}

export default async function ServicePage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params
  const service = servicesData[params.slug]

  if (!service) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="bg-primary/5 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link 
              href="/#storitve" 
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline mb-8"
            >
              <ArrowLeft className="size-4" />
              Nazaj na vse storitve
            </Link>
            
            <div className="flex flex-col lg:flex-row gap-16">
              <div className="lg:w-1/2">
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  {service.title}
                </h1>
                <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  {service.features.map((feature: string) => (
                    <div key={feature} className="flex items-center gap-3 bg-background p-4 rounded-xl border border-border shadow-sm">
                      <CheckCircle2 className="size-5 text-accent shrink-0" />
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Placeholder */}
              <div className="lg:w-1/2 rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 border border-border aspect-[4/3] shadow-2xl relative">
                  <div className="absolute inset-0 flex items-center justify-center p-8 text-center text-primary/40">
                    <div>
                        <CheckCircle2 className="size-24 mx-auto mb-4" />
                        <p className="text-2xl font-bold uppercase tracking-widest">{service.title}</p>
                        <p className="mt-2 text-sm font-medium">Naša strokovna izvedba</p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </section>

        <ProcessTimeline />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
