"use client"

import { useEffect, useRef, useState } from "react"
import { Award, Eye, Shield, MapPin } from "lucide-react"

const benefits = [
  {
    icon: Award,
    value: 20,
    suffix: "+",
    label: "let izkušenj",
    description: "Več kot dve desetletji strokovnega znanja",
  },
  {
    icon: Eye,
    value: 0,
    suffix: "",
    label: "Brezplačen ogled",
    description: "Ogled in svetovanje brez obveznosti",
    isText: true,
  },
  {
    icon: Shield,
    value: 10,
    suffix: " let",
    label: "Garancija na delo",
    description: "Dolgoročna garancija za vso izvedbo",
  },
  {
    icon: MapPin,
    value: 0,
    suffix: "",
    label: "Lokalni strokovnjaki",
    description: "Dostopni po vsej Ljubljani in okolici",
    isText: true,
  },
]

function Counter({
  target,
  suffix,
  isText,
  label,
  inView,
}: {
  target: number
  suffix: string
  isText?: boolean
  label: string
  inView: boolean
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView || isText) return

    const duration = 1500
    const steps = 30
    const increment = target / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [inView, target, isText])

  if (isText) {
    return <span className="text-3xl font-bold text-accent lg:text-4xl">{label}</span>
  }

  return (
    <span className="text-3xl font-bold text-accent lg:text-4xl">
      {count}
      {suffix}
    </span>
  )
}

export function Benefits() {
  const sectionRef = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true)
          }
        })
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-primary py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Zakaj izbrati nas?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-primary-foreground/80">
            Naše prednosti, ki nas ločijo od konkurence.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.label}
              className="group flex flex-col items-center rounded-xl bg-primary-foreground/5 p-6 text-center transition-all duration-300 hover:bg-primary-foreground/10 hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex size-16 items-center justify-center rounded-full bg-accent/20 transition-colors group-hover:bg-accent/30">
                <benefit.icon className="size-8 text-accent" />
              </div>
              <div className="mt-4">
                <Counter
                  target={benefit.value}
                  suffix={benefit.suffix}
                  isText={benefit.isText}
                  label={benefit.label}
                  inView={inView}
                />
              </div>
              {!benefit.isText && (
                <p className="mt-1 text-lg font-semibold text-primary-foreground">
                  {benefit.label}
                </p>
              )}
              <p className="mt-2 text-sm text-primary-foreground/80">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
