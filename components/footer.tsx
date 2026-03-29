import Link from "next/link"
import { MapPin } from "lucide-react"

const serviceLinks = [
  { label: "Montaža streh", href: "/storitve/montaza" },
  { label: "Obnova strehe", href: "/storitve/obnova" },
  { label: "Zamenjava kritine", href: "/storitve/zamenjava" },
  { label: "Izolacija", href: "/storitve/izolacija" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Storitve
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Kontakt
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-primary-foreground/70">
              <li>
                <a
                  href="mailto:info@krovstvo-vrh.si"
                  className="transition-colors hover:text-primary-foreground"
                >
                  info@krovstvo-vrh.si
                </a>
              </li>
              <li>
                <a
                  href="tel:+38612345678"
                  className="transition-colors hover:text-primary-foreground"
                >
                  +386 1 234 5678
                </a>
              </li>
              <li>Dunajska cesta 123</li>
              <li>1000 Ljubljana</li>
              <li className="mt-2">
                <Link
                  href="/kontakt"
                  className="font-medium text-accent transition-colors hover:text-accent/80"
                >
                  Pošljite povpraševanje &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Google Maps Placeholder */}
          <div>
            <div className="aspect-[16/9] w-full overflow-hidden rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 transition-all duration-300 hover:border-primary-foreground/40">
              <div className="flex h-full flex-col items-center justify-center gap-2 p-4 text-center">
                <MapPin className="size-6 text-primary-foreground/60" />
                <p className="text-xs text-primary-foreground/60 font-medium">
                  Dunajska cesta 123, Ljubljana
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Logo & Description - Full Width at Bottom */}
        <div className="mt-16 border-t border-primary-foreground/20 pt-12 text-center lg:text-left">
          <div className="grid gap-8 lg:grid-cols-3 lg:items-center">
            <div className="lg:col-span-2">
              <Link href="/" className="text-3xl font-extrabold tracking-tight">
                Krovstvo Vrh
              </Link>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/70">
                Zanesljivi strokovnjaki za strehe z več kot 20-letnimi izkušnjami. 
                Ponosni smo na tisoče uspešno zaključenih projektov in zadovoljnih strank 
                po vsej Sloveniji. Vaša varnost pod našo streho je naša prioriteta.
              </p>
            </div>
            <div className="flex flex-col gap-4 lg:items-end">
              <div className="flex gap-6 text-sm">
                <Link
                  href="/zasebnost"
                  className="text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  Politika zasebnosti
                </Link>
                <Link
                  href="/piskotki"
                  className="text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  Piškotki
                </Link>
              </div>
              <p className="text-sm text-primary-foreground/50">
                &copy; {new Date().getFullYear()} Krovstvo Vrh. Vse pravice pridržane.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
