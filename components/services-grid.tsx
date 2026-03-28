"use client"

import { useEffect, useRef } from "react"
import { Home, Wrench, RefreshCw, Thermometer, Hammer, Droplets } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const services = [
  {
    icon: Home,
    title: "Montaža novih streh",
    description: "Celovita montaža novih strešnih konstrukcij s kvalitetnimi materiali in strokovno izvedbo.",
  },
  {
    icon: Wrench,
    title: "Obnova in sanacija",
    description: "Temeljita obnova obstoječih streh z zamenjavo poškodovanih elementov.",
  },
  {
    icon: RefreshCw,
    title: "Zamenjava kritine",
    description: "Zamenjava stare kritine z novo, izbira med različnimi materiali in barvami.",
  },
  {
    icon: Thermometer,
    title: "Izolacija in zateplitev",
    description: "Profesionalna toplotna izolacija za energetsko učinkovit dom.",
  },
  {
    icon: Hammer,
    title: "Popravila in vzdrževanje",
    description: "Hitra in zanesljiva popravila ter redno vzdrževanje vaše strehe.",
  },
  {
    icon: Droplets,
    title: "Odvod vode - žlebovi",
    description: "Montaža in popravilo žlebov ter odtočnih cevi za učinkovit odvod vode.",
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
            <Card
              key={service.title}
              data-animate-card
              className="opacity-0 duration-500 transition-all hover:shadow-md hover:scale-[1.02]"
            >
              <CardHeader>
                <div className="mb-2 flex size-12 items-center justify-center rounded-lg bg-primary/10">
                  <service.icon className="size-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
                <CardDescription className="leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="#storitve-podrobno"
                  className="text-sm font-medium text-accent hover:underline"
                >
                  Več o storitvi
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
