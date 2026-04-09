"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Clock, Award, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

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
  const [stage, setStage] = useState(0)
  const [isZooming, setIsZooming] = useState(false)

  useEffect(() => {
    // Start initial zoom effect
    setIsZooming(true)
    
    // Group 1: Header + Top Badge (Immediate)
    setStage(1)
    
    // Group 2: Text + CTA (after 300ms)
    const t2 = setTimeout(() => setStage(2), 300)
    
    // Group 3: Bottom trust badges (after 600ms)
    const t3 = setTimeout(() => setStage(3), 600)
    
    return () => {
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [])

  // Separate effect for slideshow timer to reset on interaction
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(slideTimer)
  }, [currentSlide])

  return (
    <section
      id="domov"
      className="relative min-h-[90vh] w-full overflow-hidden flex items-center justify-center pt-20"
    >
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-black/50 z-10" />
            <img
              src={slide.url}
              alt={slide.alt}
              className={cn(
                "h-full w-full object-cover transition-transform duration-[10000ms] ease-linear",
                index === currentSlide && isZooming ? "scale-110" : "scale-100"
              )}
            />
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-[30] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <div className="flex flex-col items-center text-center">
          {/* GROUP 1: Top Badge (Certificate) */}
          <div 
            className={cn(
              "inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-1.5 text-xs font-bold text-white shadow-xl backdrop-blur-md mb-8",
              stage >= 1 ? "hero-animate" : "hero-initial"
            )}
          >
            <span className="relative flex h-2 w-2">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            VRHUNSKA KAKOVOST ŽE VEČ KOT 20 LET
          </div>

          {/* GROUP 1: Main Header Title */}
          <h1 
            className={cn(
              "text-balance text-5xl font-black tracking-tight text-white sm:text-7xl lg:text-8xl leading-[1.1]",
              stage >= 1 ? "hero-animate" : "hero-initial"
            )}
          >
            Vaša varna in trajna <br className="hidden lg:block" />
            <span className="text-amber-400 drop-shadow-[0_0_20px_rgba(0,0,0,0.5)]">streha se začne tukaj</span>
          </h1>
          
          {/* GROUP 2: Description Text */}
          <p 
            className={cn(
              "mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-white lg:text-2xl font-bold drop-shadow-lg",
              stage >= 2 ? "hero-animate" : "hero-initial"
            )}
          >
            Zaupajte krovskim mojstrom z dolgoletno tradicijo. Zagotavljamo brezhibno montažo, 
            estetsko dovršenost in dolgotrajno garancijo na vsa opravljena dela.
          </p>

          {/* GROUP 2: CTA Buttons */}
          <div 
            className={cn(
              "mt-12 flex flex-col items-center gap-5 sm:flex-row",
              stage >= 2 ? "hero-animate" : "hero-initial"
            )}
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

          {/* GROUP 3: 3 Certificates (Trust Badges) */}
          <div 
            className={cn(
              "mt-20 flex flex-wrap items-center justify-center gap-8",
              stage >= 3 ? "hero-animate" : "hero-initial"
            )}
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
