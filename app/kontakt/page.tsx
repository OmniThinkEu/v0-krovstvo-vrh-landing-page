import type { Metadata } from "next"
import Link from "next/link"
import { ContactFormPage } from "@/components/contact-form-page"

export const metadata: Metadata = {
  title: "Kontakt | Krovstvo Vrh",
  description:
    "Kontaktirajte nas za brezplačno ponudbo. Izpolnite obrazec ali nas pokličite. Strokovnjaki za strehe v Ljubljani.",
  openGraph: {
    title: "Kontakt | Krovstvo Vrh",
    description:
      "Kontaktirajte nas za brezplačno ponudbo. Izpolnite obrazec ali nas pokličite.",
    type: "website",
    locale: "sl_SI",
  },
}

export default function KontaktPage() {
  return (
    <>
      {/* Simple Header for Contact Page */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between lg:h-20">
            <Link href="/" className="text-xl font-bold tracking-tight text-primary lg:text-2xl">
              Krovstvo Vrh
            </Link>
            <Link
              href="/"
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              &larr; Nazaj na domov
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-16 lg:pt-20">
        <ContactFormPage />
      </main>

      {/* Simple Footer */}
      <footer className="border-t border-border bg-muted/30 py-8">
        <div className="mx-auto max-w-7xl px-4 text-center text-sm text-muted-foreground sm:px-6 lg:px-8">
          <p>&copy; {new Date().getFullYear()} Krovstvo Vrh. Vse pravice pridržane.</p>
          <div className="mt-2 flex justify-center gap-4">
            <Link href="/zasebnost" className="hover:text-foreground">
              Politika zasebnosti
            </Link>
            <Link href="/piskotki" className="hover:text-foreground">
              Piškotki
            </Link>
          </div>
        </div>
      </footer>
    </>
  )
}
