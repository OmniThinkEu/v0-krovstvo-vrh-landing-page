import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Piškotki | Krovstvo Vrh",
  description: "Politika piškotkov podjetja Krovstvo Vrh.",
}

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/">
            <ArrowLeft className="mr-2 size-4" />
            Nazaj na domačo stran
          </Link>
        </Button>

        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Politika piškotkov
        </h1>

        <div className="mt-8 prose prose-slate max-w-none text-muted-foreground">
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-foreground">
            Kaj so piškotki?
          </h2>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-foreground">
            Katere piškotke uporabljamo?
          </h2>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste
            natus error sit voluptatem accusantium doloremque laudantium.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-foreground">
            Nujni piškotki
          </h3>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
            sequi nesciunt.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-foreground">
            Analitični piškotki
          </h3>
          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-foreground">
            Upravljanje piškotkov
          </h2>
          <p>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-foreground">
            Kontakt
          </h2>
          <p>
            Za vprašanja glede piškotkov nas lahko kontaktirate na:
          </p>
          <ul className="mt-4">
            <li>E-pošta: info@krovstvo-vrh.si</li>
            <li>Telefon: +386 1 234 5678</li>
            <li>Naslov: Dunajska cesta 123, 1000 Ljubljana</li>
          </ul>
        </div>
      </div>
    </main>
  )
}
