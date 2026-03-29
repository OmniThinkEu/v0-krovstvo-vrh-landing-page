"use client"

import { useEffect, useCallback, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Marija K.",
    location: "Ljubljana",
    rating: 5,
    text: "Odlična ekipa! Streho so nam zamenjali v rekordnem času in pri tem pustili gradbišče popolnoma čisto. Priporočam vsem, ki iščejo zanesljive krovce.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Janez P.",
    location: "Domžale",
    rating: 5,
    text: "Po dolgem iskanju smo končno našli strokovnjake, ki so resnično vedeli, kaj delajo. Izolacija strehe je bila izvedena brezhibno.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Ana M.",
    location: "Kamnik",
    rating: 5,
    text: "Zelo profesionalen pristop od prvega klica do končne izvedbe. Brezplačen ogled in natančna ponudba brez skritih stroškov.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Peter S.",
    location: "Kranj",
    rating: 5,
    text: "Hitro in učinkovito delo. Ekipa je bila prijazna in komunikacija odlična. Naša nova streha je popolna!",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Mojca R.",
    location: "Vrhnika",
    rating: 5,
    text: "Že drugič smo sodelovali z njimi in ponovno smo navdušeni. Kvalitetno delo in korektni odnosi.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
  },
]

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: "start",
    loop: true,
    skipSnaps: false,
  })
  
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    
    // Auto-play
    const timer = setInterval(() => {
      emblaApi.scrollNext()
    }, 5000)

    return () => {
      emblaApi.off("select", onSelect)
      clearInterval(timer)
    }
  }, [emblaApi, onSelect])

  return (
    <section className="bg-gradient-to-b from-background to-muted/30 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Kaj pravijo naše stranke
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Mnenja zadovoljnih strank, ki so nam zaupale svoje strehe.
          </p>
        </div>

        <div className="relative mt-12">
          {/* embla carousel container */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y -ml-4">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.33%]"
                >
                  <Card className="h-full flex flex-col bg-gradient-to-br from-card to-accent/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <CardContent className="pt-6 flex-1">
                      <div className="flex gap-1">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="size-5 fill-accent text-accent" />
                        ))}
                      </div>
                      <p className="mt-4 leading-relaxed text-muted-foreground italic">
                        &ldquo;{testimonial.text}&rdquo;
                      </p>
                    </CardContent>
                    <CardFooter className="border-t border-border/50 bg-muted/30 pt-6">
                      <div className="flex items-center gap-4">
                        <div className="size-12 overflow-hidden rounded-full border-2 border-accent/20">
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.name} 
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-bold text-foreground">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.location}
                          </p>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute -left-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border-border bg-background/80 backdrop-blur-sm transition-all hover:scale-110 md:flex"
            onClick={scrollPrev}
          >
            <ChevronLeft className="size-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border-border bg-background/80 backdrop-blur-sm transition-all hover:scale-110 md:flex"
            onClick={scrollNext}
          >
            <ChevronRight className="size-5" />
          </Button>

          {/* Mobile Arrows */}
          <div className="mt-8 flex justify-center gap-4 md:hidden">
            <Button variant="outline" size="icon" className="rounded-full" onClick={scrollPrev}>
              <ChevronLeft className="size-5" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full" onClick={scrollNext}>
              <ChevronRight className="size-5" />
            </Button>
          </div>

          {/* Dots */}
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === selectedIndex ? "w-8 bg-accent" : "w-2 bg-border"
                }`}
                onClick={() => emblaApi?.scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
