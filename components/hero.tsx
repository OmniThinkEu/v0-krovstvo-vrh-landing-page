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

          {/* Image with CTA Overlay */}
          <div
            data-animate
            className="flex flex-1 items-center justify-center opacity-0 duration-700"
            style={{ animationDelay: "200ms" }}
          >
            <div className="group relative aspect-[4/3] w-full max-w-lg overflow-hidden rounded-2xl border border-border bg-muted/30 shadow-2xl transition-all duration-500 hover:shadow-primary/10">
              <img 
                src="/uploaded/hero-premium.jpg" 
                alt="Kvalitetna streha Krovstvo Vrh" 
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 transition-opacity duration-500 group-hover:opacity-80" />
              
              {/* Floating Badge */}
              <div className="absolute right-6 top-6 flex flex-col items-end gap-2">
                <div className="rounded-full bg-accent px-4 py-1.5 text-xs font-bold text-accent-foreground shadow-lg backdrop-blur-sm">
                  100% KAKOVOST
                </div>
              </div>

              {/* CTA Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-8 transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                <p className="text-lg font-bold text-white drop-shadow-md">Vaša nova streha se začne tukaj</p>
                <Button
                  asChild
                  size="lg"
                  className="mt-4 w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-xl"
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
