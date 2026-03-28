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
      // Frontend-only: show success message
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
    <section className="min-h-[calc(100vh-10rem)] bg-gradient-to-b from-muted/50 to-background py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Pridobite brezplačno ponudbo
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Izpolnite obrazec in v kratkem času vam bomo pripravili ponudbo po meri.
          </p>
        </div>

        {/* Form and Contact Info - Side by Side */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Form */}
          <Card className="border-accent/20 shadow-lg transition-all duration-300 hover:shadow-xl">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5">
              <CardTitle className="text-primary">Pošljite povpraševanje</CardTitle>
              <CardDescription>
                Izpolnite spodnji obrazec in odgovorili vam bomo v najkrajšem možnem času.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name">Ime in priimek *</Label>
                  <Input
                    id="name"
                    placeholder="Janez Novak"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    aria-invalid={!!errors.name}
                    className="transition-all focus:border-accent focus:ring-accent"
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive">{errors.name}</p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="phone">Telefon *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+386 40 123 456"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    aria-invalid={!!errors.phone}
                    className="transition-all focus:border-accent focus:ring-accent"
                  />
                  {errors.phone && (
                    <p className="text-sm text-destructive">{errors.phone}</p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">E-pošta *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="janez@primer.si"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    aria-invalid={!!errors.email}
                    className="transition-all focus:border-accent focus:ring-accent"
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email}</p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="service">Vrsta storitve</Label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) =>
                      setFormData({ ...formData, service: value })
                    }
                  >
                    <SelectTrigger id="service" className="w-full transition-all focus:border-accent focus:ring-accent">
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
                  <Label htmlFor="message">Sporočilo</Label>
                  <Textarea
                    id="message"
                    placeholder="Opišite vaše potrebe, lokacijo objekta, približno velikost strehe..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="transition-all focus:border-accent focus:ring-accent"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="privacy"
                    checked={formData.privacy}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, privacy: checked as boolean })
                    }
                    aria-invalid={!!errors.privacy}
                  />
                  <Label
                    htmlFor="privacy"
                    className="text-sm leading-relaxed text-muted-foreground"
                  >
                    Strinjam se s{" "}
                    <Link href="/zasebnost" className="text-accent hover:underline">
                      politiko zasebnosti
                    </Link>{" "}
                    *
                  </Label>
                </div>
                {errors.privacy && (
                  <p className="text-sm text-destructive">{errors.privacy}</p>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="mt-4 w-full bg-accent text-accent-foreground shadow-md transition-all hover:bg-accent/90 hover:scale-[1.02] hover:shadow-lg"
                >
                  Pošlji povpraševanje
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-xl font-semibold text-foreground">
                Kontaktni podatki
              </h2>
              <p className="mt-2 text-muted-foreground">
                Dosegljivi smo preko telefona, e-pošte ali nas obiščite v naši pisarni.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:info@krovstvo-vrh.si"
                className="group flex items-start gap-4 rounded-lg border border-border bg-card p-4 transition-all duration-300 hover:border-accent/50 hover:shadow-md hover:scale-[1.02]"
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-accent/20">
                  <Mail className="size-6 text-primary transition-colors group-hover:text-accent" />
                </div>
                <div>
                  <p className="font-medium text-foreground transition-colors group-hover:text-accent">E-pošta</p>
                  <span className="text-muted-foreground">
                    info@krovstvo-vrh.si
                  </span>
                </div>
              </a>

              <a
                href="tel:+38612345678"
                className="group flex items-start gap-4 rounded-lg border border-border bg-card p-4 transition-all duration-300 hover:border-accent/50 hover:shadow-md hover:scale-[1.02]"
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-accent/20">
                  <Phone className="size-6 text-primary transition-colors group-hover:text-accent" />
                </div>
                <div>
                  <p className="font-medium text-foreground transition-colors group-hover:text-accent">Telefon</p>
                  <span className="text-muted-foreground">
                    +386 1 234 5678
                  </span>
                </div>
              </a>

              <div className="group flex items-start gap-4 rounded-lg border border-border bg-card p-4 transition-all duration-300 hover:border-accent/50 hover:shadow-md">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-accent/20">
                  <MapPin className="size-6 text-primary transition-colors group-hover:text-accent" />
                </div>
                <div>
                  <p className="font-medium text-foreground transition-colors group-hover:text-accent">Naslov</p>
                  <p className="text-muted-foreground">
                    Dunajska cesta 123<br />
                    1000 Ljubljana, Slovenija
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Working Hours and Map */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Working Hours */}
          <div className="rounded-lg border border-border bg-gradient-to-br from-card to-accent/5 p-6 shadow-sm transition-all duration-300 hover:shadow-md">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-accent/20">
                <Clock className="size-5 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Delovni čas</h3>
            </div>
            <div className="mt-6 flex flex-col gap-3 text-sm">
              <div className="flex justify-between border-b border-border/50 pb-3">
                <span className="text-muted-foreground">Ponedeljek - Petek</span>
                <span className="font-medium text-foreground">7:00 - 17:00</span>
              </div>
              <div className="flex justify-between border-b border-border/50 pb-3">
                <span className="text-muted-foreground">Sobota</span>
                <span className="font-medium text-foreground">8:00 - 12:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Nedelja</span>
                <span className="font-medium text-destructive">Zaprto</span>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="overflow-hidden rounded-lg border border-border bg-gradient-to-br from-muted to-primary/5 transition-all duration-300 hover:shadow-md">
            <div className="flex h-full min-h-[200px] flex-col items-center justify-center gap-4 p-6 text-center">
              <div className="flex size-14 items-center justify-center rounded-full bg-primary/10">
                <MapPin className="size-7 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">Google Maps - Placeholder</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Dunajska cesta 123, Ljubljana
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
