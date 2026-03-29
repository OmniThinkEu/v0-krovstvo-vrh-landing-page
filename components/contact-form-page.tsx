"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, CheckCircle, Clock } from "lucide-react"
import Link from "next/link"
import { ProcessTimeline } from "@/components/process-timeline"

const serviceOptions = [
  { value: "montaza", label: "Montaža nove strehe" },
  { value: "obnova", label: "Obnova strehe" },
  { value: "zamenjava", label: "Zamenjava kritine" },
  { value: "izolacija", label: "Izolacija in zateplitev" },
  { value: "popravila", label: "Popravila in vzdrževanje" },
  { value: "zlebovi", label: "Odvod vode - žlebovi" },
  { value: "drugo", label: "Drugo" },
]

export function ContactFormPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    privacy: false,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Prosimo, vnesite ime in priimek"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Prosimo, vnesite e-poštni naslov"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Prosimo, vnesite veljaven e-poštni naslov"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Prosimo, vnesite telefonsko številko"
    }

    if (!formData.privacy) {
      newErrors.privacy = "Morate se strinjati s politiko zasebnosti"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      setIsSubmitted(true)
    }
  }

  if (isSubmitted) {
    return (
      <section className="min-h-[calc(100vh-10rem)] bg-gradient-to-b from-muted/50 to-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card className="mx-auto max-w-lg border-accent/20 shadow-lg">
            <CardContent className="flex flex-col items-center py-12 text-center">
              <div className="flex size-16 items-center justify-center rounded-full bg-green-100">
                <CheckCircle className="size-8 text-green-600" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-foreground">
                Hvala za vaše povpraševanje!
              </h3>
              <p className="mt-4 text-muted-foreground">
                Vaše sporočilo smo prejeli. Kontaktirali vas bomo v najkrajšem možnem času.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  variant="outline"
                  onClick={() => {
                    setIsSubmitted(false)
                    setFormData({
                      name: "",
                      email: "",
                      phone: "",
                      service: "",
                      message: "",
                      privacy: false,
                    })
                  }}
                  className="transition-all hover:scale-105"
                >
                  Pošlji novo povpraševanje
                </Button>
                <Button asChild className="transition-all hover:scale-105">
                  <Link href="/">Nazaj na domov</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <div className="bg-gradient-to-b from-muted/50 to-background">
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Pridobite brezplačno ponudbo
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground lg:text-xl">
              Izpolnite obrazec in v kratkem času vam bomo pripravili ponudbo po meri, ki bo ustrezala vašim potrebam.
            </p>
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-start">
            {/* Left Column: Contact info provided first as requested */}
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  Kontaktni podatki
                </h2>
                <p className="mt-3 text-lg text-muted-foreground">
                  Na voljo smo vam za vsa vprašanja in svetovanje. Kontaktirajte nas preko spodnjih kanalov.
                </p>
              </div>

              <div className="flex flex-col gap-5">
                <a
                  href="mailto:info@krovstvo-vrh.si"
                  className="group flex items-center gap-5 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/50 hover:shadow-xl hover:scale-[1.02]"
                >
                  <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-accent/20">
                    <Mail className="size-7 text-primary transition-colors group-hover:text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">E-pošta</p>
                    <span className="text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
                      info@krovstvo-vrh.si
                    </span>
                  </div>
                </a>

                <a
                  href="tel:+38612345678"
                  className="group flex items-center gap-5 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/50 hover:shadow-xl hover:scale-[1.02]"
                >
                  <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-accent/20">
                    <Phone className="size-7 text-primary transition-colors group-hover:text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Telefon</p>
                    <span className="text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
                      +386 1 234 5678
                    </span>
                  </div>
                </a>

                <div className="group flex items-center gap-5 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/50 hover:shadow-xl">
                  <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-accent/20">
                    <MapPin className="size-7 text-primary transition-colors group-hover:text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Naslov</p>
                    <p className="text-lg font-semibold text-foreground">
                      Dunajska cesta 123, 1000 Ljubljana
                    </p>
                  </div>
                </div>
              </div>

              {/* Working Hours Integrated Here */}
              <div className="rounded-2xl border border-border bg-gradient-to-br from-card to-accent/5 p-8 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-accent text-accent-foreground shadow-md">
                    <Clock className="size-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Delovni čas</h3>
                </div>
                <div className="mt-8 flex flex-col gap-4 text-sm font-medium">
                  <div className="flex justify-between border-b border-border/50 pb-4">
                    <span className="text-muted-foreground">Ponedeljek - Petek</span>
                    <span className="text-foreground">7:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between border-b border-border/50 pb-4">
                    <span className="text-muted-foreground">Sobota</span>
                    <span className="text-foreground">8:00 - 12:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Nedelja</span>
                    <span className="font-bold text-destructive">Zaprto</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <Card className="rounded-2xl border-accent/20 shadow-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-8">
                <CardTitle className="text-2xl font-bold">Pošljite povpraševanje</CardTitle>
                <CardDescription className="text-primary-foreground/80 mt-2">
                  Izpolnite spodnji obrazec in odgovorili vam bomo v najkrajšem možnem času.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="name" className="font-bold">Ime in priimek *</Label>
                      <Input
                        id="name"
                        placeholder="Janez Novak"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="h-12 border-border/60 focus:ring-accent"
                      />
                      {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="phone" className="font-bold">Telefon *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+386 40 123 456"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="h-12 border-border/60 focus:ring-accent"
                      />
                      {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email" className="font-bold">E-pošta *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="janez@primer.si"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-12 border-border/60 focus:ring-accent"
                    />
                    {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="service" className="font-bold">Izberite storitev</Label>
                    <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                      <SelectTrigger id="service" className="h-12 border-border/60 focus:ring-accent">
                        <SelectValue placeholder="Izberite storitev" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="message" className="font-bold">Vaše sporočilo</Label>
                    <Textarea
                      id="message"
                      placeholder="Opišite vaše potrebe, lokacijo, velikost strehe..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="border-border/60 focus:ring-accent min-h-[150px]"
                    />
                  </div>

                  <div className="flex items-start gap-4">
                    <Checkbox
                      id="privacy"
                      checked={formData.privacy}
                      onCheckedChange={(checked) => setFormData({ ...formData, privacy: checked as boolean })}
                      className="mt-1"
                    />
                    <Label htmlFor="privacy" className="block text-sm leading-relaxed text-muted-foreground font-medium cursor-pointer">
                      Strinjam se s{" "}
                      <Link href="/zasebnost" className="text-accent hover:underline font-bold">
                        politiko zasebnosti
                      </Link>{" "}
                      in obdelavo mojih podatkov za namen priprave ponudbe. *
                    </Label>
                  </div>
                  {errors.privacy && <p className="text-xs text-destructive">{errors.privacy}</p>}

                  <Button
                    type="submit"
                    size="lg"
                    className="mt-4 h-14 bg-accent text-lg font-bold text-accent-foreground shadow-xl transition-all hover:bg-accent/90 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Pošlji povpraševanje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Timeline Integrated Here */}
      <div className="border-t border-border bg-background">
        <ProcessTimeline />
      </div>

      {/* Map Section */}
      <section className="py-16 lg:py-24 bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-border shadow-2xl aspect-[21/9] relative group">
             <img 
               src="/contact-map.jpg" 
               alt="Lokacija Krovstvo Vrh v Ljubljani" 
               className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
             />
             <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 group-hover:opacity-60" />
             <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-12 text-center text-white">
                <MapPin className="size-16 text-accent drop-shadow-lg" />
                <div>
                  <h3 className="text-3xl font-bold drop-shadow-md">Najdete nas v Ljubljani</h3>
                  <p className="mt-2 text-xl font-medium drop-shadow-md text-white/90">Dunajska cesta 123, 1000 Ljubljana</p>
                </div>
                <Button asChild className="rounded-full px-10 h-14 bg-accent text-lg font-bold text-accent-foreground shadow-xl transition-all hover:bg-accent/90 hover:scale-110">
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                    Odpri v Google Maps
                  </a>
                </Button>
             </div>
          </div>
        </div>
      </section>
    </div>
  )
}
