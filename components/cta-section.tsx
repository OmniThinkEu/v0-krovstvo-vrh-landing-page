"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

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
      className="relative overflow-hidden bg-accent py-20 lg:py-28"
    >
      {/* Background Image */}
      <img 
        src="/cta-bg.jpg" 
        alt="Krovstvo Vrh Background" 
        className="absolute inset-0 h-full w-full object-cover grayscale-[0.3]"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/95 via-accent/80 to-amber-600/90" />
      
      {/* Decorative dots */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
      
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-12 opacity-0 scale-95"
          }`}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-md mb-8 border border-white/20">
            Pripravljeni na novo streho?
          </div>
          <h2 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl drop-shadow-lg">
            Zagotovite si varno streho nad glavo
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-pretty text-xl text-white/90 lg:text-2xl leading-relaxed">
            Kontaktirajte nas za brezplačen ogled in strokovno ponudbo. Naša ekipa vam bo pomagala najti optimalno rešitev za vaš dom.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground shadow-2xl transition-all hover:bg-primary/90 hover:scale-110 hover:-rotate-1 active:scale-95 h-16 px-10 text-xl font-bold"
            >
              <Link href="/kontakt" className="inline-flex items-center gap-2">
                Brezplačna ponudba
                <ArrowRight className="size-6 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
