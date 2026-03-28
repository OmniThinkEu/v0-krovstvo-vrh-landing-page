import Link from "next/link"

const serviceLinks = [
  { label: "Montaža streh", href: "#storitve" },
  { label: "Obnova strehe", href: "#storitve" },
  { label: "Zamenjava kritine", href: "#storitve" },
  { label: "Izolacija", href: "#storitve" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl font-bold">
              Krovstvo Vrh
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
              Zanesljivi strokovnjaki za strehe z več kot 20-letnimi izkušnjami.
              Montaža, obnova in vzdrževanje streh v Ljubljani in okolici.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Storitve
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </a>
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
              <li>Dunajska cesta 123</li>
              <li>1000 Ljubljana</li>
              <li>
                <a
                  href="tel:+38612345678"
                  className="transition-colors hover:text-primary-foreground"
                >
                  +386 1 234 5678
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@krovstvo-vrh.si"
                  className="transition-colors hover:text-primary-foreground"
                >
                  info@krovstvo-vrh.si
                </a>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Delovni čas
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-primary-foreground/70">
              <li className="flex justify-between">
                <span>Pon - Pet</span>
                <span>7:00 - 17:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sobota</span>
                <span>8:00 - 12:00</span>
              </li>
              <li className="flex justify-between">
                <span>Nedelja</span>
                <span>Zaprto</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/20 pt-8 sm:flex-row">
          <p className="text-sm text-primary-foreground/70">
            &copy; {new Date().getFullYear()} Krovstvo Vrh. Vse pravice pridržane.
          </p>
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
        </div>
      </div>
    </footer>
  )
}
