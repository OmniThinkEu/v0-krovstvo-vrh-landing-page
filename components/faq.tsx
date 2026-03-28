"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Koliko časa traja montaža nove strehe?",
    answer:
      "Čas montaže je odvisen od velikosti in zahtevnosti strehe. Manjše strehe lahko dokončamo v 3-5 delovnih dneh, večje projekte pa v 1-2 tednih. Pred začetkom del vam podamo natančen časovni načrt.",
  },
  {
    question: "Ali ponujate garancijo na delo?",
    answer:
      "Da, na vse naše storitve nudimo garancijo do 10 let. Garancija pokriva vse napake v izvedbi in materialu. Poleg tega so vsi uporabljeni materiali opremljeni s proizvajalčevo garancijo.",
  },
  {
    question: "Kakšne materiale uporabljate?",
    answer:
      "Sodelujemo z vodilnimi proizvajalci kritine, kot so Bramac, Tondach in Gerard. Uporabljamo izključno certificirane materiale najvišje kakovosti, ki zagotavljajo dolgo življenjsko dobo.",
  },
  {
    question: "Ali lahko obiščete moj dom za ogled?",
    answer:
      "Seveda! Ponujamo brezplačen ogled in svetovanje brez obveznosti. Naš strokovnjak bo pregledal vašo streho, ocenil stanje in pripravil ponudbo po meri vaših potreb.",
  },
  {
    question: "Kako pridobim ponudbo?",
    answer:
      "Ponudbo lahko pridobite na več načinov: izpolnite kontaktni obrazec na naši spletni strani, nas pokličite ali nam pišite na e-pošto. Odgovorili vam bomo v najkrajšem možnem času.",
  },
  {
    question: "Ali delate tudi v slabem vremenu?",
    answer:
      "Varnost in kakovost izvedbe sta nam na prvem mestu. V primeru neugodnih vremenskih razmer (močan dež, veter, zmrzal) dela preložimo na ustrezen termin, da zagotovimo optimalen rezultat.",
  },
]

export function FAQ() {
  return (
    <section
      id="faq"
      className="scroll-mt-20 bg-gradient-to-b from-muted/50 to-background py-16 lg:py-24"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Pogosta vprašanja
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Odgovori na najpogostejša vprašanja naših strank.
          </p>
        </div>

        <div className="mt-12 rounded-xl border border-border bg-card p-6 shadow-sm">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-border/50 px-4 -mx-4 rounded-lg"
              >
                <AccordionTrigger className="text-left text-base font-medium hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
