"use client"

import { useEffect, useRef } from "react"
import { Check, ImageIcon } from "lucide-react"

const servicesDetail = [
  {
    title: "Montaža novih streh",
    description:
      "Zagotavljamo celovito montažo novih strešnih konstrukcij, od načrtovanja do končne izvedbe. Naša ekipa izkušenih krovcev poskrbi za profesionalno namestitev z uporabo najkakovostnejših materialov.",
    benefits: [
      "Brezplačen ogled in svetovanje",
      "Uporaba certificiranih materialov",
      "Garancija na izvedbo do 10 let",
      "Čista in urejena gradbišča",
    ],
    imageAlt: "Montaža nove strehe",
  },
  {
    title: "Obnova strehe",
    description:
      "Popolna obnova vaše obstoječe strehe, ki zajema pregled stanja, zamenjavo poškodovanih elementov in temeljito sanacijo. Podaljšajte življenjsko dobo vaše strehe s strokovno obnovo.",
    benefits: [
      "Temeljit pregled obstoječega stanja",
      "Zamenjava dotrajanih elementov",
      "Izboljšanje hidroizolacije",
      "Energetska optimizacija",
    ],
    imageAlt: "Obnova strehe",
  },
  {
    title: "Zamenjava kritine",
    description:
      "Zamenjava stare ali poškodovane kritine z novo, ob upoštevanju vaših želja glede materiala in barve. Sodelujemo z vodilnimi proizvajalci kritine za najboljšo kakovost.",
    benefits: [
      "Širok izbor materialov in barv",
      "Partnerstvo z Bramac, Tondach, Gerard",
      "Hitra in čista izvedba",
      "Dolgotrajna obstojnost",
    ],
    imageAlt: "Zamenjava kritine",
  },
]

export function ServicesDetail() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in", "fade-in")
            entry.target.classList.remove("opacity-0")
          }
        })
      },
      { threshold: 0.1 }
    )

    const rows = sectionRef.current?.querySelectorAll("[data-animate-row]")
    rows?.forEach((row) => observer.observe(row))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="storitve-podrobno"
      className="scroll-mt-20 bg-muted/30 py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Podrobneje o storitvah
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Spoznajte naše najpogostejše storitve in kaj vam ponujamo.
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-16 lg:gap-24">
          {servicesDetail.map((service, index) => (
            <div
              key={service.title}
              data-animate-row
              className={`group flex flex-col items-center gap-8 opacity-0 duration-700 lg:gap-12 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Image Placeholder */}
              <div className={`flex-1 w-full transition-transform duration-500 ${
                index % 2 === 0 
                  ? "lg:group-hover:translate-x-2" 
                  : "lg:group-hover:-translate-x-2"
              }`}>
                <div className="aspect-video w-full overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 to-accent/5 flex items-center justify-center border border-border shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:border-accent/30">
                  <div className="flex flex-col items-center gap-3 text-muted-foreground">
                    <ImageIcon className="size-12 text-primary/40" />
                    <span className="text-sm font-medium text-primary/60">{service.imageAlt} - placeholder</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`flex-1 transition-transform duration-500 ${
                index % 2 === 0 
                  ? "lg:group-hover:-translate-x-2" 
                  : "lg:group-hover:translate-x-2"
              }`}>
                <h3 className="text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                  {service.title}
                </h3>
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <ul className="mt-6 flex flex-col gap-3">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3 transition-transform duration-300 hover:translate-x-1">
                      <Check className="mt-0.5 size-5 shrink-0 text-accent" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
