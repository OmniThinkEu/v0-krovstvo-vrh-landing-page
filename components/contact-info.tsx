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
          <div className="flex flex-col items-center rounded-xl border border-border bg-card p-8 text-center shadow-sm transition-shadow hover:shadow-md">
            <div className="flex size-14 items-center justify-center rounded-full bg-primary/10">
              <Mail className="size-7 text-primary" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-foreground">E-pošta</h3>
            <a
              href="mailto:info@krovstvo-vrh.si"
              className="mt-2 text-muted-foreground transition-colors hover:text-accent"
            >
              info@krovstvo-vrh.si
            </a>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center rounded-xl border border-border bg-card p-8 text-center shadow-sm transition-shadow hover:shadow-md">
            <div className="flex size-14 items-center justify-center rounded-full bg-primary/10">
              <Phone className="size-7 text-primary" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-foreground">Telefon</h3>
            <a
              href="tel:+38612345678"
              className="mt-2 text-muted-foreground transition-colors hover:text-accent"
            >
              +386 1 234 5678
            </a>
          </div>

          {/* Address */}
          <div className="flex flex-col items-center rounded-xl border border-border bg-card p-8 text-center shadow-sm transition-shadow hover:shadow-md">
            <div className="flex size-14 items-center justify-center rounded-full bg-primary/10">
              <MapPin className="size-7 text-primary" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-foreground">Naslov</h3>
            <p className="mt-2 text-muted-foreground">
              Dunajska cesta 123<br />
              1000 Ljubljana
            </p>
            <Link
              href="/kontakt"
              className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent/80"
            >
              Pošljite povpraševanje
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
