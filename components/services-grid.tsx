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
    href: "#storitve-podrobno",
  },
  {
    icon: Wrench,
    title: "Obnova in sanacija",
    description: "Temeljita obnova obstoječih streh z zamenjavo poškodovanih elementov.",
    href: "#storitve-podrobno",
  },
  {
    icon: RefreshCw,
    title: "Zamenjava kritine",
    description: "Zamenjava stare kritine z novo, izbira med različnimi materiali in barvami.",
    href: "#storitve-podrobno",
  },
  {
    icon: Thermometer,
    title: "Izolacija in zateplitev",
    description: "Profesionalna toplotna izolacija za energetsko učinkovit dom.",
    href: "#storitve-podrobno",
  },
  {
    icon: Hammer,
    title: "Popravila in vzdrževanje",
    description: "Hitra in zanesljiva popravila ter redno vzdrževanje vaše strehe.",
    href: "#storitve-podrobno",
  },
  {
    icon: Droplets,
    title: "Odvod vode - žlebovi",
    description: "Montaža in popravilo žlebov ter odtočnih cevi za učinkovit odvod vode.",
    href: "#storitve-podrobno",
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
                className="h-full opacity-0 duration-500 transition-all hover:shadow-lg hover:scale-[1.02] hover:border-accent/50 group-hover:bg-accent/5"
              >
                <CardHeader>
                  <div className="mb-2 flex size-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-accent/20">
                    <service.icon className="size-6 text-primary transition-colors group-hover:text-accent" />
                  </div>
                  <CardTitle className="text-lg transition-colors group-hover:text-accent">{service.title}</CardTitle>
                  <CardDescription className="leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-all group-hover:gap-3">
                    Več o storitvi
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
