"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Shield, Clock, Award, ImageIcon } from "lucide-react"

const trustBadges = [
  { icon: Shield, label: "Garancija na delo" },
  { icon: Clock, label: "20+ let izkušenj" },
  { icon: Award, label: "Certificirani mojstri" },
]

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in", "fade-in", "slide-in-from-bottom-4")
          }
        })
      },
      { threshold: 0.1 }
    )

    const animatedElements = sectionRef.current?.querySelectorAll("[data-animate]")
    animatedElements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      ref={sectionRef}
      id="domov"
      className="relative min-h-screen bg-gradient-to-b from-muted/50 to-background pt-20 lg:pt-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 py-12 lg:flex-row lg:gap-16 lg:py-20">
          {/* Text Content */}
          <div
            data-animate
            className="flex flex-1 flex-col items-center text-center opacity-0 duration-700 lg:items-start lg:text-left"
          >
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Zanesljiva streha za vaš dom
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground lg:text-xl">
              Več kot 20 let izkušenj z montažo, obnovo in vzdrževanjem streh v
              Ljubljani in okolici. Zaupajte svojo streho strokovnjakom.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <a href="#kontakt" onClick={(e) => handleNavClick(e, "#kontakt")}>
                  Pridobite brezplačno ponudbo
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#storitve" onClick={(e) => handleNavClick(e, "#storitve")}>
                  Naše storitve
                </a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              {trustBadges.map((badge, index) => (
                <div 
                  key={badge.label} 
                  className={`flex items-center gap-3 rounded-xl border border-border px-5 py-3 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105 ${
                    index % 2 === 0 ? "bg-blue-50/50" : "bg-amber-50/50"
                  }`}
                >
                  <div className={`flex size-10 items-center justify-center rounded-lg ${
                    index % 2 === 0 ? "bg-blue-100/50 text-blue-600" : "bg-amber-100/50 text-amber-600"
                  }`}>
                    <badge.icon className="size-6" />
                  </div>
                  <span className="text-sm font-bold tracking-tight text-foreground sm:text-base">
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Placeholder with CTA */}
          <div
            data-animate
            className="flex flex-1 items-center justify-center opacity-0 duration-700"
            style={{ animationDelay: "200ms" }}
          >
            <div className="relative aspect-[4/3] w-full max-w-lg overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-border shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
                <ImageIcon className="size-16 text-primary/40" />
                <span className="text-sm font-medium text-primary/60">Slika strehe - placeholder</span>
              </div>
              {/* CTA Overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 to-primary/70 p-6">
                <p className="text-sm font-medium text-primary-foreground/90">Potrebujete novo streho?</p>
                <Button
                  asChild
                  size="lg"
                  className="mt-3 w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-md"
                >
                  <a href="/kontakt">
                    Pridobite brezplačno ponudbo
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
