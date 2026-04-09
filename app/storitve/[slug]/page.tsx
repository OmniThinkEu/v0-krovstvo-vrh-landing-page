import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { ProcessTimeline } from "@/components/process-timeline"
import { Testimonials } from "@/components/testimonials"
import { 
  ArrowLeft, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Clock, 
  Award, 
  Leaf, 
  Scale, 
  HelpCircle,
  Construction,
  Layers,
  Thermometer,
  Hammer,
  Droplets
} from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const servicesData: Record<string, any> = {
  montaza: {
    title: "Montaža novih streh",
    description: "Celovita montaža novih strešnih konstrukcij s kvalitetnimi materiali in strokovno izvedbo.",
    longDescription: "Pri Krovstvo Vrh se zavedamo, da je nova streha ena največjih investicij v vaš dom. Zato k vsakemu projektu pristopimo z največjo mero natančnosti in strokovnosti. Naša ekipa izkušenih krovcev poskrbi za vse - od postavitve prvega špirovca do zadnje obrobe. Uporabljamo le najkakovostnejše materiale priznanih blagovnih znamk, ki zagotavljajo desetletja brezskrbnega bivanja pod trdno in varno krito steno.",
    image: "/uploaded/service-montaza-detail.jpg",
    icon: Construction,
    features: [
      "Svetovanje pri izbiri kritine",
      "Priprava konstrukcije in letvanja",
      "Strokovna krovska dela",
      "Varno delo na višini",
    ],
    detailedBenefits: [
      {
        title: "Vrhunski materiali",
        description: "Sodelujemo z vodilnimi proizvajalci (Bramac, Gerard, Tondach), kar zagotavlja trajnost.",
        icon: Award
      },
      {
        title: "Izjemna toplotna zaščita",
        description: "Z uporabo sodobnih izolacijskih tehnik zmanjšamo vaše stroške ogrevanja.",
        icon: Thermometer
      },
      {
        title: "Dolgoletna garancija",
        description: "Na vsa naša krovska dela nudimo do 10 let garancije na izvedbo.",
        icon: ShieldCheck
      }
    ],
    faqs: [
      {
        question: "Koliko časa traja postavitev nove strehe?",
        answer: "Trajanje je odvisno od velikosti in kompleksnosti, običajno pa celoten proces na stanovanjski hiši traja med 5 in 10 delovnih dni."
      },
      {
        question: "Katero kritino mi priporočate?",
        answer: "Izbira je odvisna od naklona strehe, lokacije in vaših estetskih želja. Ob ogledu vam bomo pripravili strokovno mnenje glede najboljše izbire za vaš objekt."
      },
      {
        question: "Ali nudite tudi tesarska dela?",
        answer: "Da, nudimo celovito storitev, ki vključuje tako pripravo lesene konstrukcije (tesarstvo) kot končno montažo kritine."
      }
    ]
  },
  obnova: {
    title: "Obnova in sanacija",
    description: "Temeljita obnova obstoječih streh z zamenjavo poškodovanih elementov in podaljšanjem življenjske dobe.",
    longDescription: "Obnova strehe je pogosto boljša in cenejša alternativa popolni zamenjavi. Z natančnim pregledom ugotovimo kritične točke, zamakanja ali dotrajan les. Z obnovo ne poskrbimo le za estetsko osvežitev vašega doma, temveč predvsem za njegovo varnost in energetsko učinkovitost. Proces vključuje vse od krpanja manjših lukenj do celovitega čiščenja in barvanja kritine s specialnimi premazi.",
    image: "/uploaded/service-obnova-detail.png",
    icon: Layers,
    features: [
      "Pregled stanja in detekcija zamakanj",
      "Sanacija ostrešja",
      "Barvanje in zaščita kritine",
      "Zamenjava poškodovanih elementov",
    ],
    detailedBenefits: [
      {
        title: "Stroškovno ugodno",
        description: "Obnova je običajno za 50-70% cenejša od popolne zamenjave kritine in konstrukcije.",
        icon: Scale
      },
      {
        title: "Ohranjanje lastnine",
        description: "Pravočasna sanacija preprečuje zamakanje, ki bi lahko trajno poškodovalo vašo notranjost.",
        icon: ShieldCheck
      },
      {
        title: "Osvežitev videza",
        description: "Z novimi premazi bo vaša streha spet videti kot nova, vaš dom pa bo pridobil na vrednosti.",
        icon: Zap
      }
    ],
    faqs: [
      {
        question: "Kdaj je streha primerna za obnovo namesto zamenjave?",
        answer: "Če je konstrukcija zdrava in je kritina le površinsko dotrajana ali pa zamaka le na določenih mestih, je obnova odlična rešitev."
      },
      {
        question: "Ali s sanacijo podaljšam življenjsko dobo strehe?",
        answer: "Da, kvalitetna sanacija lahko podaljša funkcionalnost strehe za dodatnih 15 do 20 let."
      }
    ]
  },
  zamenjava: {
    title: "Zamenjava kritine",
    description: "Zamenjava stare kritine z novo, izbira med različnimi materiali in barvami za moderen izgled.",
    longDescription: "Zamenjava kritine je najpogostejši poseg, s katerim lastniki hiš posodobijo svoj dom. Ne gre le za estetiko; sodobni materiali so lažji, trpežnejši in nudijo boljšo zaščito pred vedno močnejšimi vremenskimi nevšečnostmi. Naša ekipa poskrbi za varno odstranitev stare kritine (tudi salonitnih plošč po standardih), preveri letvanja in nato v rekordnem času namesti novo, izbrano kritino.",
    image: "/uploaded/service-zamenjava-grid.jpg",
    icon: Hammer,
    features: [
      "Odstranitev in odvoz stare kritine",
      "Montaža nove parne zapore",
      "Natančna krovska dela",
      "Finalna obdelava vseh obrob",
    ],
    detailedBenefits: [
      {
        title: "Moderni materiali",
        description: "Vgrajujemo kritine nove generacije, ki so odporne na točo in močan veter.",
        icon: ShieldCheck
      },
      {
        title: "Hitra izvedba",
        description: "Zaradi uigrane ekipe vaš dom ne bo ostal brez strehe več kot je nujno potrebno.",
        icon: Clock
      },
      {
        title: "Ekološko zavedno",
        description: "Poskrbimo za ekološko varno deponiranje nevarnih materialov, kot je salonit.",
        icon: Leaf
      }
    ],
    faqs: [
      {
        question: "Ali moramo med zamenjavo kritine zapustiti hišo?",
        answer: "Ne, dela potekajo zunaj in ne motijo bivanja v notranjosti, razen krajšega obdobja povišanega hrupa."
      },
      {
        question: "Kateri material je trenutno najbolj priljubljen?",
        answer: "Stranke se najpogosteje odločajo za kovinske kritine s posipom (Gerard) ali klasičen opečnat strešnik (Tondach)."
      }
    ]
  },
  izolacija: {
    title: "Izolacija in zateplitev",
    description: "Profesionalna toplotna izolacija za energetsko učinkovit dom in nižje stroške ogrevanja.",
    longDescription: "Slabo izolirana streha je odgovorna za do 30% izgub toplote v vašem domu. Kvalitetna izolacija podstrešja je najhitrejši način za povečanje bivalnega ugodja - poleti ohranja prostore hladne, pozimi pa tople. Pri delu uporabljamo najsodobnejše materiale, kot so kamena volna in visokokakovostne parne zapre, ki preprečujejo nastajanje vlage in plesni v konstrukciji.",
    image: "/uploaded/service-izolacija.jpg",
    icon: Thermometer,
    features: [
      "Namestitev sekundarne kritine",
      "Vgradnja izolacije vseh vrst",
      "Urejanje prezračevalnega kanala",
      "Tesnjenje parnih zapr",
    ],
    detailedBenefits: [
      {
        title: "Energetski prihranek",
        description: "Investicija v izolacijo se skozi nižje položnice povrne že v nekaj letih.",
        icon: Zap
      },
      {
        title: "Brez plesni in vlage",
        description: "Strokovno izvedeni detajli preprečujejo kondenzacijo in nastanek neprijetne vlage.",
        icon: ShieldCheck
      },
      {
        title: "Poleti hladneje",
        description: "Odlična fazna zamaknitev preprečuje pregrevanje mansarde v vročih mesecih.",
        icon: Thermometer
      }
    ],
    faqs: [
      {
        question: "Je izolacija primerna tudi za neogrevana podstrešja?",
        answer: "Da, izolacija medetažnice ali ostrešja je vedno smiselna, saj preprečuje ubežanje toplote iz ogrevanih bivalnih prostorov pod njim."
      }
    ]
  },
  popravila: {
    title: "Popravila in vzdrževanje",
    description: "Hitra in zanesljiva popravila po neurjih ter redno vzdrževanje vaše strehe.",
    longDescription: "Vsaka streha potrebuje redni 'servis'. Malenkosti, kot so počen strešnik ali zamašene odtočne cevi, lahko sčasoma povzročijo ogromno škodo na ostrešju in fasadi. Krovstvo Vrh nudi hitre intervencije predvsem po večjih neurjih s točo ali močnim vetrom. Poleg nujnih posegov priporočamo letni preventivni pregled, ki bo vašo streho ohranil v vrhunski formi skozi celo leto.",
    image: "/uploaded/service-popravila.jpg",
    icon: Hammer,
    features: [
      "Intervencije po neurjih",
      "Menjava posameznih kritin",
      "Čiščenje strehe in snegolovov",
      "Sanacija dimniških obrob",
    ],
    detailedBenefits: [
      {
        title: "Hitra odzivnost",
        description: "Zavedamo se resnosti zamakanja, zato pridemo v najkrajšem možnem času.",
        icon: Clock
      },
      {
        title: "Natančna diagnostika",
        description: "Z najnovejšo opremo hitro odkrijemo vzrok zamakanja, ki očesu ni viden.",
        icon: HelpCircle
      },
      {
        title: "Preventiva je ključ",
        description: "Redno vzdrževanje je cenejše od večjih sanacij ali nujnih posegov.",
        icon: ShieldCheck
      }
    ],
    faqs: [
      {
        question: "Ali popravljate tudi strehe drugih izvajalcev?",
        answer: "Seveda, pripravljeni smo pomagati in sanirati napake ne glede na to, kdo je prvotno montiral streho."
      }
    ]
  },
  zlebovi: {
    title: "Odvod vode - žlebovi",
    description: "Montaža in popravilo žlebov za učinkovit odvod vode in zaščito vašega objekta.",
    longDescription: "Žlebovi so ključen element vsake strehe, ki ščiti vašo fasado in temelje pred uničujočo močjo vode. Pri nas dobite vse - od klasičnih pocinkanih žlebov do estetskih bakrenih ali barvnih aluminijastih rešitev. Nudimo strokovno izračunane dimenzije odtokov, ki zagotavljajo, da bo vaša hiša varno odvajala vodo tudi med najmočnejšimi nalivi. Poskrbimo tudi za montažo mrežic proti listju in snegolovov.",
    image: "/uploaded/service-zlebovi.jpg",
    icon: Droplets,
    features: [
      "Montaža vseh vrst žlebov",
      "Bakrene in aluminijaste izvedbe",
      "Vgradnja snegolovov",
      "Čiščenje in pregled odtokov",
    ],
    detailedBenefits: [
      {
        title: "Barvna usklajenost",
        description: "Široka paleta barv omogoča, da se žlebovi popolnoma ujemajo z videzom vaše fasade.",
        icon: Zap
      },
      {
        title: "Brez rje",
        description: "Uporabljamo le nerjaveče materiale, ki kljubujejo času in vsem vremenskim vplivom.",
        icon: ShieldCheck
      },
      {
        title: "Dolga življenjska doba",
        description: "Pravilno zmontirani žlebovi bodo svojemu namenu služili več desetletij.",
        icon: Clock
      }
    ],
    faqs: [
      {
        question: "Kateri material za žlebove je najboljši?",
        answer: "Aluminijasti barvni žlebovi so trenutno najboljša izbira zaradi odličnega razmerja med ceno, videzom in vzdržljivostjo."
      }
    ]
  },
}

export default async function ServicePage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params
  const service = servicesData[params.slug]

  if (!service) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-primary/5 py-16 lg:py-24">
          <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent z-10" />
             <img 
               src={service.image} 
               alt="" 
               className="h-full w-full object-cover object-center opacity-30"
             />
          </div>

          <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link 
              href="/#storitve" 
              className="group inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 mb-8 transition-colors"
            >
              <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
              Nazaj na vse storitve
            </Link>
            
            <div className="max-w-3xl">
              <Badge variant="outline" className="mb-4 border-accent text-accent px-3 py-1 text-xs uppercase tracking-widest font-bold">
                Krovstvo Vrh d.o.o.
              </Badge>
              <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-7xl">
                {service.title}
              </h1>
              <p className="mt-8 text-xl leading-relaxed text-muted-foreground lg:text-2xl">
                {service.description}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link 
                   href="/#kontakt"
                   className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-8 text-sm font-bold text-accent-foreground shadow-lg transition-all hover:scale-105 active:scale-95"
                >
                  Brezplačna ponudba
                </Link>
                <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                  <ShieldCheck className="size-5 text-accent" />
                  Garancija na izvedbo
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Content & Image Grid */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    Strokovna izvedba po meri
                  </h2>
                  <div className="prose prose-lg text-muted-foreground max-w-none">
                    <p className="leading-relaxed">
                      {service.longDescription}
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {service.features.map((feature: string) => (
                    <div key={feature} className="flex items-center gap-4 bg-muted/30 p-5 rounded-2xl border border-border/50 group transition-colors hover:bg-background hover:border-accent/30">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform group-hover:scale-110">
                        <CheckCircle2 className="size-6" />
                      </div>
                      <span className="font-semibold text-foreground/90">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-muted border border-border shadow-2xl relative group">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute bottom-8 left-8 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    <p className="text-white font-bold text-xl drop-shadow-md">Kakovost brez kompromisov</p>
                    <p className="text-white/80 text-sm">Zaupanja vreden partner</p>
                  </div>
                </div>
                
                {/* Image Placeholders / Secondary Gallery */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-video rounded-2xl overflow-hidden bg-muted border border-border relative group grayscale hover:grayscale-0 transition-all cursor-crosshair">
                     <div className="absolute inset-0 flex items-center justify-center text-primary/20">
                        <service.icon className="size-12" />
                     </div>
                     <img src="/placeholder.jpg" alt="Delovni proces" className="absolute inset-0 h-full w-full object-cover opacity-50" />
                  </div>
                  <div className="aspect-video rounded-2xl overflow-hidden bg-muted border border-border relative group grayscale hover:grayscale-0 transition-all cursor-crosshair">
                     <div className="absolute inset-0 flex items-center justify-center text-primary/20">
                        <ShieldCheck className="size-12" />
                     </div>
                     <img src="/placeholder.jpg" alt="Finalni detajl" className="absolute inset-0 h-full w-full object-cover opacity-50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Benefits Grid */}
        <section className="bg-primary/5 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                 Kaj pridobite z našo storitvijo?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Naše delo temelji na treh ključnih stebrih, ki zagotavljajo vaše dolgoročno zadovoljstvo.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {service.detailedBenefits.map((benefit: any) => (
                <Card key={benefit.title} className="bg-background border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group">
                  <CardHeader className="pb-2">
                    <div className="mb-4 inline-flex size-14 items-center justify-center rounded-2xl bg-accent text-accent-foreground group-hover:scale-110 transition-transform duration-500">
                      <benefit.icon className="size-8" />
                    </div>
                    <CardTitle className="text-xl font-bold">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>


        <ProcessTimeline />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
