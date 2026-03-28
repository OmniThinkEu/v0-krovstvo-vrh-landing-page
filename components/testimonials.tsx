"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

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
  {
    name: "Peter S.",
    location: "Kranj",
    rating: 5,
    text: "Hitro in učinkovito delo. Ekipa je bila prijazna in komunikacija odlična. Naša nova streha je popolna!",
  },
  {
    name: "Mojca R.",
    location: "Vrhnika",
    rating: 5,
    text: "Že drugič smo sodelovali z njimi in ponovno smo navdušeni. Kvalitetno delo in korektni odnosi.",
  },
]

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isVisible, setIsVisible] = useState(false)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying || !isVisible) return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, isVisible, nextSlide])

  // Intersection observer for visibility and animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          } else {
            setIsVisible(false)
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

  // Get visible testimonials (show 3 on desktop, 1 on mobile)
  const getVisibleTestimonials = () => {
    const result = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length
      result.push({ ...testimonials[index], index })
    }
    return result
  }

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-background to-muted/30 py-16 lg:py-24"
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

        <div 
          className="relative mt-12"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute -left-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border-border bg-background/80 backdrop-blur-sm transition-all hover:scale-110 hover:bg-background md:flex"
            onClick={prevSlide}
            aria-label="Prejšnja ocena"
          >
            <ChevronLeft className="size-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border-border bg-background/80 backdrop-blur-sm transition-all hover:scale-110 hover:bg-background md:flex"
            onClick={nextSlide}
            aria-label="Naslednja ocena"
          >
            <ChevronRight className="size-5" />
          </Button>

          {/* Testimonials Grid */}
          <div className="overflow-hidden">
            <div className="grid gap-6 md:grid-cols-3">
              {getVisibleTestimonials().map((testimonial, idx) => (
                <Card
                  key={`${testimonial.index}-${currentIndex}`}
                  className={`group transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:border-accent/30 bg-gradient-to-br from-card to-accent/5 ${
                    idx === 1 ? "md:scale-105 md:shadow-lg" : "md:opacity-80 md:hover:opacity-100"
                  }`}
                >
                  <CardContent className="pt-6">
                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="size-5 fill-accent text-accent transition-transform duration-300 group-hover:scale-110"
                          style={{ transitionDelay: `${i * 50}ms` }}
                        />
                      ))}
                    </div>
                    <p className="mt-4 leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                  </CardContent>
                  <CardFooter className="border-t border-border/50 bg-muted/30">
                    <div>
                      <p className="font-semibold text-foreground transition-colors group-hover:text-primary">
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

          {/* Mobile Navigation */}
          <div className="mt-6 flex items-center justify-center gap-4 md:hidden">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={prevSlide}
              aria-label="Prejšnja ocena"
            >
              <ChevronLeft className="size-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={nextSlide}
              aria-label="Naslednja ocena"
            >
              <ChevronRight className="size-5" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "w-8 bg-accent" 
                    : "w-2 bg-border hover:bg-muted-foreground/50"
                }`}
                aria-label={`Pojdi na oceno ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
