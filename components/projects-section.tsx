"use client"

import { useEffect, useRef, useState } from "react"
import { ImageIcon, MapPin, ArrowRight } from "lucide-react"

const projects = [
  {
    title: "Celovita obnova stanovanjske hiše",
    location: "Ljubljana",
    description: "Zamenjava stare opečne kritine z novo sodobno kritino Tondach. Dodana je bila 20 cm izolacija in novi žlebovi.",
    beforeImage: "/projekti/roof-1-before.png",
    afterImage: "/projekti/roof-1-after.png",
    beforePlaceholder: "Pred obnovo",
    afterPlaceholder: "Po obnovi",
  },
  {
    title: "Novogradnja z ravno streho",
    location: "Domžale",
    description: "Montaža sodobne PVC folije za ravne strehe z vrhunsko toplotno izolacijo in odvodnjavanjem.",
    beforeImage: "/projekti/roof-2-before.png",
    afterImage: "/projekti/roof-2-after.png",
    beforePlaceholder: "Med gradnjo",
    afterPlaceholder: "Končan objekt",
  },
  {
    title: "Sanacija strehe na gospodarskem objektu",
    location: "Vrhnika",
    description: "Hitra in učinkovita sanacija poškodovane kritine po neurju z uporabo pločevinaste kritine Gerard.",
    beforeImage: "/projekti/roof-3-before.png",
    afterImage: "/uploaded/roof-3-after.jpg",
    beforePlaceholder: "Poškodovana streha",
    afterPlaceholder: "Sanirano stanje",
  },
]

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
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
      id="projekti"
      className="bg-background py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 text-center lg:flex-row lg:text-left">
          <div className="max-w-2xl">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Naši referenčni projekti
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Oglejte si nekaj naših dokončanih del. Vsak projekt je dokaz naše zavezanosti h kakovosti in natančnosti.
            </p>
          </div>
          <div className="mt-4 lg:mt-0">
            <a 
              href="/projekti" 
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-accent-foreground shadow-md transition-all hover:bg-accent/90 hover:scale-105"
            >
              Vsi projekti
              <ArrowRight className="size-5" />
            </a>
          </div>
        </div>

        <div className="mt-16 space-y-24">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`flex flex-col gap-12 transition-all duration-1000 lg:flex-row lg:items-center ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              } ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Before/After Visualization */}
              <div className="flex-1">
                <div className="relative grid grid-cols-2 gap-4 rounded-xl border border-border bg-muted/30 p-4 shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                  {/* Before */}
                  <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-muted-foreground/10 border border-border/50 group">
                    <img 
                      src={project.beforeImage} 
                      alt={project.beforePlaceholder} 
                      className="absolute inset-0 h-full w-full object-cover grayscale-[0.2] transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute bottom-4 left-4 rounded bg-background/90 px-2 py-1 text-[10px] font-bold text-foreground backdrop-blur-sm shadow-sm">PRED</div>
                  </div>
                  
                  {/* After */}
                  <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-accent/20 border border-accent/20 group">
                    <img 
                      src={project.afterImage} 
                      alt={project.afterPlaceholder} 
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-accent/10" />
                    <div className="absolute bottom-4 left-4 rounded bg-accent px-2 py-1 text-[10px] font-bold text-accent-foreground shadow-lg">PO POSEGU</div>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="flex flex-1 flex-col gap-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-accent">
                  <MapPin className="size-4" />
                  {project.location}
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-foreground lg:text-3xl">
                  {project.title}
                </h3>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <span className="rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary">Strešna kritina</span>
                  <span className="rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary">Izolacija</span>
                  <span className="rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary">Krovska dela</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
