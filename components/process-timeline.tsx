"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle2, FileText, Hammer, ShieldCheck } from "lucide-react"

const steps = [
  {
    icon: CheckCircle2,
    title: "Kontakt & Brezplačen Ogled",
    description: "Pokličite nas ali pošljite povpraševanje. Dogovorili se bomo za brezplačen ogled vaše strehe.",
  },
  {
    icon: FileText,
    title: "Ponudka & Načrt",
    description: "Pripravimo vam podrobno, jasno in transparentno ponudbo brez skritih stroškov.",
  },
  {
    icon: Hammer,
    title: "Izvedba",
    description: "Naša izkušena ekipa strokovno opravi delo v dogovorjenem roku in z vrhunskimi materiali.",
  },
  {
    icon: ShieldCheck,
    title: "Garancija & Skrb",
    description: "Po opravljenem delu prejmete garancijo. Za vašo streho skrbimo tudi dolgoročno.",
  },
]

export function ProcessTimeline() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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
      className="bg-muted/30 py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Vaša pot do nove strehe
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Enostaven in pregleden postopek v štirih korakih, ki zagotavlja vrhunsko kakovost in vaše zadovoljstvo.
          </p>
        </div>

        <div className="mt-16 overflow-hidden">
          <div className="relative">
            {/* Connecting line (desktop) */}
            <div className="absolute left-0 top-1/2 hidden h-0.5 w-full -translate-y-1/2 bg-border lg:block" />
            
            <div className="grid gap-8 lg:grid-cols-4 lg:gap-0">
              {steps.map((step, index) => (
                <div 
                  key={step.title}
                  className={`relative flex flex-col items-center text-center transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Step number circle */}
                  <div className="z-10 flex size-16 items-center justify-center rounded-full border-4 border-background bg-accent text-accent-foreground shadow-lg transition-transform duration-500 hover:scale-110">
                    <step.icon className="size-8" />
                  </div>
                  
                  {/* Step content */}
                  <div className="mt-6 flex flex-col items-center">
                    <span className="mb-2 text-xs font-bold uppercase tracking-widest text-accent">Korak {index + 1}</span>
                    <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                    <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>

                  {/* Connecting line (mobile) */}
                  {index < steps.length - 1 && (
                    <div className="mt-6 h-8 w-0.5 bg-border lg:hidden" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
