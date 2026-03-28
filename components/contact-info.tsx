"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactInfo() {
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
      id="kontakt"
      ref={sectionRef}
      className="scroll-mt-20 bg-background py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Kontaktirajte nas
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Dosegljivi smo preko telefona, e-pošte ali nas obiščite v naši pisarni.
          </p>
        </div>

        <div
          className={`mt-12 grid gap-8 sm:grid-cols-3 transition-all duration-700 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {/* Email */}
          <a
            href="mailto:info@krovstvo-vrh.si"
            className="group flex flex-col items-center rounded-xl border border-border bg-card p-8 text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-accent/50"
          >
            <div className="flex size-14 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-accent/20">
              <Mail className="size-7 text-primary transition-colors group-hover:text-accent" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-foreground transition-colors group-hover:text-accent">E-pošta</h3>
            <span className="mt-2 text-muted-foreground transition-colors group-hover:text-foreground">
              info@krovstvo-vrh.si
            </span>
          </a>

          {/* Phone */}
          <a
            href="tel:+38612345678"
            className="group flex flex-col items-center rounded-xl border border-border bg-card p-8 text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-accent/50"
          >
            <div className="flex size-14 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-accent/20">
              <Phone className="size-7 text-primary transition-colors group-hover:text-accent" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-foreground transition-colors group-hover:text-accent">Telefon</h3>
            <span className="mt-2 text-muted-foreground transition-colors group-hover:text-foreground">
              +386 1 234 5678
            </span>
          </a>

          {/* Address */}
          <Link
            href="/kontakt"
            className="group flex flex-col items-center rounded-xl border border-border bg-card p-8 text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-accent/50"
          >
            <div className="flex size-14 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-accent/20">
              <MapPin className="size-7 text-primary transition-colors group-hover:text-accent" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-foreground transition-colors group-hover:text-accent">Naslov</h3>
            <p className="mt-2 text-muted-foreground transition-colors group-hover:text-foreground">
              Dunajska cesta 123<br />
              1000 Ljubljana
            </p>
            <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent transition-all group-hover:gap-2">
              Pošljite povpraševanje
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
