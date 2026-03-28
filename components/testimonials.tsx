"use client"

import { useEffect, useRef } from "react"
import { Star } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

const testimonials = [
  {
    name: "Marija K.",
    location: "Ljubljana",
    rating: 5,
    text: "Odlična ekipa! Streho so nam zamenjali v rekordnem času in pri tem pustili gradbišče popolnoma čisto. Priporočam vsem, ki iščejo zanesljive krovce.",
  },
  {
    name: "Janez P.",
    location: "Domžale",
    rating: 5,
    text: "Po dolgem iskanju smo končno našli strokovnjake, ki so resnično vedeli, kaj delajo. Izolacija strehe je bila izvedena brezhibno.",
  },
  {
    name: "Ana M.",
    location: "Kamnik",
    rating: 5,
    text: "Zelo profesionalen pristop od prvega klica do končne izvedbe. Brezplačen ogled in natančna ponudba brez skritih stroškov.",
  },
]

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll("[data-animate-card]")
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("animate-in", "fade-in", "slide-in-from-bottom-4")
                card.classList.remove("opacity-0")
              }, index * 100)
            })
          }
        })
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
      className="bg-background py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Kaj pravijo naše stranke
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Mnenja zadovoljnih strank, ki so nam zaupale svoje strehe.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              data-animate-card
              className="opacity-0 duration-500 transition-all hover:shadow-md hover:-translate-y-1"
            >
              <CardContent className="pt-6">
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="size-5 fill-accent text-accent"
                    />
                  ))}
                </div>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </CardContent>
              <CardFooter>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
