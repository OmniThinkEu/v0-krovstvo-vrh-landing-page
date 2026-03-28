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
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
              {trustBadges.map((badge) => (
                <div key={badge.label} className="flex items-center gap-2">
                  <badge.icon className="size-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Placeholder */}
          <div
            data-animate
            className="flex flex-1 items-center justify-center opacity-0 duration-700"
            style={{ animationDelay: "200ms" }}
          >
            <div className="aspect-[4/3] w-full max-w-lg rounded-xl bg-muted flex items-center justify-center border border-border">
              <div className="flex flex-col items-center gap-3 text-muted-foreground">
                <ImageIcon className="size-16" />
                <span className="text-sm font-medium">Slika strehe</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
