"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Home, Wrench, RefreshCw, Thermometer, Hammer, Droplets, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const services = [
  {
    icon: Home,
    title: "Montaža novih streh",
    description: "Celovita montaža novih strešnih konstrukcij s kvalitetnimi materiali in strokovno izvedbo.",
    href: "/storitve/montaza",
    image: "/uploaded/image_7.png",
  },
  {
    icon: Wrench,
    title: "Obnova in sanacija",
    description: "Temeljita obnova obstoječih streh z zamenjavo poškodovanih elementov.",
    href: "/storitve/obnova",
    image: "/uploaded/image_4.png",
  },
  {
    icon: RefreshCw,
    title: "Zamenjava kritine",
    description: "Zamenjava stare kritine z novo, izbira med različnimi materiali in barvami.",
    href: "/storitve/zamenjava",
    image: "/uploaded/image_6.png",
  },
  {
    icon: Thermometer,
    title: "Izolacija in zateplitev",
    description: "Profesionalna toplotna izolacija za energetsko učinkovit dom.",
    href: "/storitve/izolacija",
    image: "/uploaded/image.png",
  },
  {
    icon: Hammer,
    title: "Popravila in vzdrževanje",
    description: "Hitra in zanesljiva popravila ter redno vzdrževanje vaše strehe.",
    href: "/storitve/popravila",
    image: "/uploaded/image_2.png",
  },
  {
    icon: Droplets,
    title: "Odvod vode - žlebovi",
    description: "Montaža in popravilo žlebov ter odtočnih cevi za učinkovit odvod vode.",
    href: "/storitve/zlebovi",
    image: "/uploaded/image_1.png",
  },
]

export function ServicesGrid() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll("[data-animate-card]")
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("animate-in", "fade-in", "slide-in-from-bottom-4")
                card.classList.remove("opacity-0")
              }, index * 100)
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="storitve"
      className="scroll-mt-20 bg-background py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Naše storitve
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Ponujamo celovite krovske storitve za vse vrste streh - od montaže
            do vzdrževanja.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <a
              key={service.title}
              href={service.href}
              className="group block"
            >
              <Card
                data-animate-card
                className="h-full overflow-hidden opacity-0 border border-border/50 duration-500 transition-all hover:shadow-2xl hover:scale-[1.02] hover:border-accent group-hover:bg-accent/5"
              >
                <div className="relative h-56 w-full overflow-hidden bg-muted flex items-center justify-center">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 z-10"
                    onError={(e) => {
                      (e.target as HTMLImageElement).classList.add("hidden");
                    }}
                  />
                  {/* Fallback Branding */}
                  <div className="flex flex-col items-center gap-2 text-primary/20 z-0">
                    <service.icon className="size-16" />
                    <p className="text-[10px] uppercase font-bold tracking-[0.2em]">Krovstvo Vrh</p>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-20" />
                  <div className="absolute bottom-4 left-6 flex size-14 items-center justify-center rounded-xl bg-background shadow-2xl backdrop-blur-md transition-all duration-300 group-hover:bg-accent group-hover:text-accent-foreground group-hover:-translate-y-1 z-30">
                    <service.icon className="size-7 text-primary transition-colors group-hover:text-white" />
                  </div>
                </div>
                <CardHeader className="pt-4">
                  <CardTitle className="text-xl font-bold transition-colors group-hover:text-accent">{service.title}</CardTitle>
                  <CardDescription className="leading-relaxed text-muted-foreground/90">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-accent transition-all group-hover:gap-3">
                    IZVEJTE VEČ
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
