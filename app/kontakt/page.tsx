import type { Metadata } from "next"
import { Header } from "@/components/header"
import { ContactFormPage } from "@/components/contact-form-page"
import { Footer } from "@/components/footer"

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
      <Header />
      <main className="pt-16 lg:pt-20">
        <ContactFormPage />
      </main>
      <Footer />
    </>
  )
}
