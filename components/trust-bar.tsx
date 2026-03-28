"use client"

import { useEffect, useRef, useState } from "react"

const partners = [
  "Bramac",
  "Tondach",
  "Gerard",
  "Velux",
  "Isover",
]

export function TrustBar() {
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
      className="border-y border-border bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 py-10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-primary/70">
          Sodelujemo z vodilnimi proizvajalci
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-12">
          {partners.map((partner, index) => (
            <div
              key={partner}
              className={`group flex h-14 items-center justify-center rounded-lg bg-background px-8 py-3 border border-border shadow-sm transition-all duration-500 hover:shadow-md hover:border-accent/50 hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <span className="text-sm font-semibold text-muted-foreground transition-colors group-hover:text-primary">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
