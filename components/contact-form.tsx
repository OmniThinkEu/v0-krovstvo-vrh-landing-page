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
import { Phone, Mail, MapPin, CheckCircle } from "lucide-react"

const serviceOptions = [
  { value: "montaza", label: "Montaža nove strehe" },
  { value: "obnova", label: "Obnova strehe" },
  { value: "zamenjava", label: "Zamenjava kritine" },
  { value: "izolacija", label: "Izolacija in zateplitev" },
  { value: "popravila", label: "Popravila in vzdrževanje" },
  { value: "zlebovi", label: "Odvod vode - žlebovi" },
  { value: "drugo", label: "Drugo" },
]

export function ContactForm() {
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
      <section id="kontakt" className="scroll-mt-20 bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card className="mx-auto max-w-lg">
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
              <Button
                className="mt-8"
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
              >
                Pošlji novo povpraševanje
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section id="kontakt" className="scroll-mt-20 bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Kontaktirajte nas
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Izpolnite obrazec in v kratkem času vam bomo pripravili brezplačno ponudbo.
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground">
                Kontaktni podatki
              </h3>
              <p className="mt-2 text-muted-foreground">
                Dosegljivi smo preko telefona, e-pošte ali nas obiščite v naši pisarni.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Phone className="size-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Telefon</p>
                  <a
                    href="tel:+38612345678"
                    className="text-muted-foreground hover:text-accent"
                  >
                    +386 1 234 5678
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Mail className="size-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">E-pošta</p>
                  <a
                    href="mailto:info@krovstvo-vrh.si"
                    className="text-muted-foreground hover:text-accent"
                  >
                    info@krovstvo-vrh.si
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="size-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Naslov</p>
                  <p className="text-muted-foreground">
                    Dunajska cesta 123<br />
                    1000 Ljubljana, Slovenija
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-muted/30 p-6">
              <h4 className="font-semibold text-foreground">Delovni čas</h4>
              <div className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Ponedeljek - Petek</span>
                  <span>7:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sobota</span>
                  <span>8:00 - 12:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Nedelja</span>
                  <span>Zaprto</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <Card>
            <CardHeader>
              <CardTitle>Pošljite povpraševanje</CardTitle>
              <CardDescription>
                Izpolnite spodnji obrazec in odgovorili vam bomo v najkrajšem možnem času.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive">{errors.name}</p>
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
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email}</p>
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
                  />
                  {errors.phone && (
                    <p className="text-sm text-destructive">{errors.phone}</p>
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
                    <SelectTrigger id="service" className="w-full">
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
                    placeholder="Opišite vaše potrebe..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
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
                    <a href="/zasebnost" className="text-accent hover:underline">
                      politiko zasebnosti
                    </a>{" "}
                    *
                  </Label>
                </div>
                {errors.privacy && (
                  <p className="text-sm text-destructive">{errors.privacy}</p>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="mt-4 w-full bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Pošlji povpraševanje
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
