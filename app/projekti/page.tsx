"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { ShieldCheck, CheckCircle2 } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProjectsSection } from "@/components/projects-section"
import { Testimonials } from "@/components/testimonials"
import { CTASection } from "@/components/cta-section"

export default function ProjektiPage() {
  const [stage, setStage] = useState(0)

  useEffect(() => {
    setStage(1)
    const t2 = setTimeout(() => setStage(2), 150)
    const t3 = setTimeout(() => setStage(3), 300)
    const t4 = setTimeout(() => setStage(4), 450)
    return () => {
      clearTimeout(t2)
      clearTimeout(t3)
      clearTimeout(t4)
    }
  }, [])

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="relative py-20 lg:py-32 overflow-hidden bg-primary shadow-2xl">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-80 h-80 bg-background/10 rounded-full blur-3xl opacity-30" />
          
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <div 
                className={cn(
                  "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent-foreground text-sm font-bold mb-6 transition-all duration-700",
                  stage >= 1 ? "hero-animate" : "hero-initial"
                )}
              >
                <ShieldCheck className="size-4 text-accent" />
                <span>Reference in uspešno zaključena dela</span>
              </div>

              <h1 
                className={cn(
                  "text-balance text-4xl font-extrabold tracking-tight text-white mb-6 sm:text-5xl lg:text-7xl italic transition-all duration-700",
                  stage >= 2 ? "hero-animate" : "hero-initial"
                )}
              >
                Naši uspešno zaključeni projekti
              </h1>
              
              <p 
                className={cn(
                  "mx-auto mt-6 max-w-2xl text-pretty text-xl text-white/80 leading-relaxed transition-all duration-700",
                  stage >= 3 ? "hero-animate" : "hero-initial"
                )}
              >
                Zaupajte nam svojo streho, tako kot so jo tisoči zadovoljnih strank. Oglejte si primere naše strokovne izvedbe.
              </p>

              <div 
                className={cn(
                  "mt-10 flex gap-4 transition-all duration-700",
                  stage >= 4 ? "hero-animate" : "hero-initial"
                )}
              >
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <CheckCircle2 className="size-5 text-accent" />
                  <span>Dejanske fotografije del</span>
                </div>
                <div className="flex items-center gap-2 text-white/70 text-sm px-4 border-l border-white/20">
                  <CheckCircle2 className="size-5 text-accent" />
                  <span>Dolgotrajna obstojnost</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div>
          <ProjectsSection />
        </div>
        
        <div className="bg-muted/30">
          <Testimonials />
        </div>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
