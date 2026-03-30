"use client"

import { useState } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { 
  RefreshCw, 
  ShieldCheck, 
  Package, 
  HelpCircle,
  Construction,
  MessageSquare
} from "lucide-react"
import { Button } from "@/components/ui/button"

const categories = [
  { id: "montaza", title: "Montaža", count: 12, icon: Construction, color: "text-blue-500" },
  { id: "obnova", title: "Obnova", count: 8, icon: RefreshCw, color: "text-green-500" },
  { id: "materiali", title: "Materiali", count: 15, icon: Package, color: "text-orange-500" },
  { id: "garancija", title: "Garancija", count: 6, icon: ShieldCheck, color: "text-purple-500" },
]

const faqs = [
  // Montaza
  {
    category: "montaza",
    question: "Koliko časa traja montaža nove strehe?",
    answer: "Čas montaže je odvisen od velikosti in zahtevnosti strehe. Manjše strehe lahko dokončamo v 3-5 delovnih dneh, večje projekte pa v 1-2 tednih. Pred začetkom del vam podamo natančen časovni načrt."
  },
  {
    category: "montaza",
    question: "Ali lahko montirate streho pozimi?",
    answer: "Da, montaža je mogoča tudi pozimi, če so razmere suhe in ni ledu na konstrukciji. Napredne tehnike nam omogočajo varno delo skoraj celo leto, seveda pa določeni posegi zahtevajo optimalne temperature."
  },
  {
    category: "montaza",
    question: "Ali potrebujem gradbeno dovoljenje za novo streho?",
    answer: "Za redna vzdrževalna dela in zamenjavo kritine brez spreminjanja nosilne konstrukcije ali naklona strehe gradbeno dovoljenje običajno ni potrebno. Pri večjih posegih v konstrukcijo pa vam bomo z veseljem svetovali glede predpisov."
  },
  
  // Obnova
  {
    category: "obnova",
    question: "Kdaj je čas za obnovo namesto za popolno zamenjavo?",
    answer: "Obnova je smiselna, če je lesena konstrukcija ostrešja še zdrava in trdna, kritina pa je le estetsko dotrajana ali porozna. Če opazite le manjše napake ali želite osvežiti videz, je obnova stroškovno precej ugodnejša rešitev."
  },
  {
    category: "obnova",
    question: "Ali čiščenje in barvanje strehe dejansko deluje?",
    answer: "Da, profesionalni premazi ne le osvežijo barve, temveč predvsem zmanjšajo vpijanje vode v kritino, kar preprečuje pokanje zaradi zmrzali in zavira rast mahu."
  },
  {
    category: "obnova",
    question: "Kako hitro se lahko odzovete po neurju?",
    answer: "Nujna popravila po neurjih so naša prioriteta. Trudimo se odzvati v najkrajšem možnem času, da čim prej preprečimo vdor vode in nastanek večje škode v notranjosti vašega doma."
  },

  // Materiali
  {
    category: "materiali",
    question: "Kakšna je razlika med betonsko in opečnato kritino?",
    answer: "Betonska kritina (npr. Bramac) je znana po izjemni trdnosti, ki se s časom celo povečuje. Opečnata kritina (npr. Tondach) je naraven material s tradicijo, ki odlično diha. Obe sta vrhunska izbira, odločitev pa je odvisna od vaših želja in naklona strehe."
  },
  {
    category: "materiali",
    question: "Zakaj izbrati kovinsko kritino Gerard?",
    answer: "Gerard je izjemno lahka kritina, kar je odlično za starejša ostrešja, hkrati pa je ena najbolj odpornih na točo in močan veter zaradi specifičnega načina pritrjevanja."
  },
  {
    category: "materiali",
    question: "Kateri snegolovi so najbolj primerni za mojo streho?",
    answer: "Izbira snegolovov je odvisna od vrste kritine in naklona strehe ter geografske lege (količine snega). Za vas bomo izračunali potrebno število točkovnih ali linijskih snegolovov za maksimalno varnost."
  },

  // Garancija
  {
    category: "garancija",
    question: "Kakšno garancijo nudite na svoje delo?",
    answer: "Na vsa krovska in kleparska dela nudimo do 10 let garancije na izvedbo. To pomeni, da v primeru kakršnihkoli napak pri montaži poskrbimo za brezplačno sanacijo."
  },
  {
    category: "garancija",
    question: "Ali garancija vključuje tudi poškodbe zaradi toče?",
    answer: "Garancija na material (proizvajalca) pogosto vključuje odpornost na točo (npr. Gerard). Za delo pa garancija velja za pravilno pritrjevanje. Poškodbe, ki so posledica ekstremnih naravnih nesreč, pa so običajno predmet zavarovanja objekta."
  },
  {
    category: "garancija",
    question: "Kako uveljavim garancijo Bramac?",
    answer: "Bramac nudi 30-letno garancijo na strešnike. Pomembno je, da so bili vgrajeni v skladu s pravili stroke z uporabo originalnih dodatnih elementov, za kar poskrbi naša ekipa."
  },
]

export function FAQ() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const filteredFaqs = faqs.filter(faq => faq.category === activeCategory)

  return (
    <section
      id="faq"
      className="scroll-mt-20 bg-gradient-to-b from-muted-foreground/5 to-background py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 px-4">
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl italic">
            Kategorije pomoči
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Izberite področje spodaj, da dobite odgovore na svoja vprašanja.
          </p>
        </div>

        {/* Categories Selection - Card Style */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-20 px-2 lg:px-0">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id === activeCategory ? null : cat.id)}
              className={`p-8 rounded-3xl bg-card border-2 shadow-sm transition-all duration-500 text-left relative overflow-hidden group ${
                activeCategory === cat.id 
                  ? "border-accent ring-2 ring-accent/30 shadow-2xl scale-[1.03] z-10" 
                  : "border-border/40 hover:border-accent/40 hover:shadow-xl"
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                 <div className={`p-3 rounded-2xl bg-muted transition-colors ${activeCategory === cat.id ? "bg-accent/10" : ""}`}>
                    <cat.icon className={`size-8 ${activeCategory === cat.id ? "text-accent" : "text-muted-foreground"}`} />
                 </div>
                 <div className={`size-3 rounded-full ${activeCategory === cat.id ? "bg-accent animate-pulse" : "bg-border"}`} />
              </div>
              <h3 className={`text-2xl font-bold italic tracking-tight ${activeCategory === cat.id ? "text-accent" : "text-foreground"}`}>
                {cat.title}
              </h3>
              <p className="mt-2 text-muted-foreground font-medium">{cat.count} vprašanj</p>
              
              {/* Decorative background element on active */}
              {activeCategory === cat.id && (
                <div className="absolute -bottom-6 -right-6 opacity-5 rotate-12">
                   <cat.icon className="size-32" />
                </div>
              )}
            </button>
          ))}
        </div>

        {/* FAQ Display Area */}
        <div className={`transition-all duration-700 ease-in-out px-2 lg:px-0 ${activeCategory ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          {activeCategory && (
            <div className="mx-auto max-w-4xl">
               <div className="flex items-center gap-6 mb-12 border-l-4 border-accent pl-8">
                  <div>
                    <h3 className="text-3xl font-extrabold italic text-foreground tracking-tight">
                      {categories.find(c => c.id === activeCategory)?.title}
                    </h3>
                    <p className="text-muted-foreground font-medium mt-1">Najpogosteje zastavljena vprašanja in odgovori</p>
                  </div>
               </div>

              <div className="space-y-4">
                <Accordion type="single" collapsible className="w-full">
                  {filteredFaqs.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`item-${index}`}
                      className="border-none mb-4"
                    >
                      <AccordionTrigger className="w-full text-left text-xl font-bold hover:text-accent transition-all py-6 px-8 bg-card border border-border/60 rounded-2xl shadow-sm hover:shadow-md hover:no-underline [&[data-state=open]]:border-accent/40 [&[data-state=open]]:shadow-lg">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="bg-muted/30 px-8 py-8 rounded-b-2xl -mt-4 border-x border-b border-border/40 text-muted-foreground leading-relaxed text-lg tabular-nums">
                         <div className="prose prose-p:italic max-w-none text-foreground/90">
                            {faq.answer}
                         </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          )}
        </div>

        {!activeCategory && (
            <div className="text-center py-24 mb-16 px-4">
               <div className="inline-flex size-24 items-center justify-center rounded-3xl bg-muted border-2 border-dashed border-border/50 text-muted-foreground mb-8">
                  <HelpCircle className="size-12 opacity-50" />
               </div>
               <h3 className="text-3xl font-bold text-foreground/40 italic mb-4">Prosimo, izberite kategorijo zgoraj</h3>
               <p className="text-muted-foreground max-w-md mx-auto font-medium text-lg leading-relaxed">
                  Za dostop do odgovorov kliknite na eno od kategorij. Vsaka vsebuje preverjene informacije s strani naših strokovnjakov.
               </p>
            </div>
        )}

        <div className="mt-12 text-center bg-accent/5 py-12 rounded-3xl border border-accent/10 px-4">
            <p className="text-foreground font-bold text-lg mb-6 tracking-tight">Potrebujete dodatno pojasnilo ali nasvet?</p>
            <Button size="lg" asChild className="rounded-full px-12 bg-accent text-accent-foreground shadow-2xl hover:shadow-accent/40 hover:scale-105 transition-all duration-300">
                <a href="/kontakt" className="flex items-center gap-3">
                   <MessageSquare className="size-5" />
                   Pošljite povpraševanje
                </a>
            </Button>
        </div>
      </div>
    </section>
  )
}
