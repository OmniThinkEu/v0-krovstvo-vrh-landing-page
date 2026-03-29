import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProjectsSection } from "@/components/projects-section"
import { Testimonials } from "@/components/testimonials"
import { CTASection } from "@/components/cta-section"

export default function ProjektiPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="bg-primary/5 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Naši uspešno zaključeni projekti
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground lg:text-xl leading-relaxed">
              Zaupajte nam svojo streho, tako kot so jo tisoči zadovoljnih strank. Oglejte si primere naše strokovne izvedbe.
            </p>
          </div>
        </section>

        <ProjectsSection />
        
        <div className="bg-muted/30">
          <Testimonials />
        </div>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
