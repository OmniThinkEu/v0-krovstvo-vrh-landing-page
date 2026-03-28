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
      className="bg-primary py-16 lg:py-20"
    >
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Potrebujete novo streho?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-primary-foreground/80">
            Pridobite brezplačno ponudbo še danes! Naši strokovnjaki vam bodo 
            pripravili personalizirano oceno stroškov brez obveznosti.
          </p>
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link href="/kontakt" className="inline-flex items-center gap-2">
                Pridobite brezplačno ponudbo
                <ArrowRight className="size-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
