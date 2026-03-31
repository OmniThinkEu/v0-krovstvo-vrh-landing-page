"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Clock, Award, ChevronRight } from "lucide-react"

const slides = [
  { 
    url: "/hero/slide4.jpg", 
    alt: "Moderna streha v naravi" 
  },
  { 
    url: "/hero/slide1.jpg", 
    alt: "Kvalitetna opečna streha" 
  },
  { 
    url: "/hero/slide2.jpg", 
    alt: "Detajl strešne kritine" 
  },
  { 
    url: "/hero/slide3.jpg", 
    alt: "Pogled na streho od zgoraj" 
  },
]

const trustBadges = [
  { icon: Shield, label: "Garancija na delo" },
  { icon: Clock, label: "20+ let izkušenj" },
  { icon: Award, label: "Certificirani mojstri" },
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

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
      className="relative min-h-[90vh] w-full overflow-hidden flex items-center justify-center pt-20"
    >
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-black/50 z-10" />
            <img
              src={slide.url}
              alt={slide.alt}
              className={`h-full w-full object-cover transition-transform duration-[10000ms] ease-linear ${
                index === currentSlide ? "scale-110" : "scale-100"
              }`}
            />
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-[30] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <div className="flex flex-col items-center text-center">
          <div 
            data-animate 
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-1.5 text-xs font-bold text-white shadow-xl backdrop-blur-md mb-8 duration-700"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            VRHUNSKA KAKOVOST ŽE VEČ KOT 20 LET
          </div>

          <h1 
            data-animate
            className="text-balance text-5xl font-black tracking-tight text-white sm:text-7xl lg:text-8xl duration-700 leading-[1.1]"
            style={{ animationDelay: "100ms" }}
          >
            Vaša varna in trajna <br className="hidden lg:block" />
            <span className="text-amber-400 drop-shadow-[0_0_20px_rgba(0,0,0,0.5)]">streha se začne tukaj</span>
          </h1>
          
          <p 
            data-animate
            className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-white lg:text-2xl font-bold duration-700 drop-shadow-lg"
            style={{ animationDelay: "200ms" }}
          >
            Zaupajte krovskim mojstrom z dolgoletno tradicijo. Zagotavljamo brezhibno montažo, 
            estetsko dovršenost in dolgotrajno garancijo na vsa opravljena dela.
          </p>

          <div 
            data-animate
            className="mt-12 flex flex-col items-center gap-5 sm:flex-row duration-700"
            style={{ animationDelay: "300ms" }}
          >
            <Button
              asChild
              size="lg"
              className="bg-amber-500 text-black hover:bg-amber-400 px-10 py-8 text-xl font-black shadow-[0_0_30px_rgba(245,158,11,0.5)] transition-all hover:scale-105 active:scale-95"
            >
              <Link href="/kontakt">
                Brezplačna ponudba
                <ChevronRight className="ml-2 size-6 stroke-[3px]" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/30 bg-black/40 text-white hover:bg-black/60 backdrop-blur-sm px-10 py-8 text-xl font-bold"
            >
              <Link href="/storitve">
                Naše storitve
              </Link>
            </Button>
          </div>

          {/* Trust Badges Floating */}
          <div 
            data-animate
            className="mt-20 flex flex-wrap items-center justify-center gap-8 duration-700"
            style={{ animationDelay: "400ms" }}
          >
            {trustBadges.map((badge) => (
              <div 
                key={badge.label} 
                className="flex items-center gap-4 rounded-2xl border border-white/20 bg-black/60 px-8 py-4 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:bg-black/80 hover:-translate-y-1 group"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-amber-500/20 text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-colors duration-300">
                  <badge.icon className="size-7" />
                </div>
                <span className="text-base font-bold tracking-tight text-white">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 z-30 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentSlide ? "w-8 bg-accent" : "w-2 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
