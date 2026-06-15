"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const navLinks = [
  { label: "Storitve", href: "/storitve", anchor: null },
  { label: "Projekti", href: "/projekti", anchor: null },
  { label: "Pogosta vprašanja", href: "/faq", anchor: null },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const isHomePage = pathname === "/"

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Always show at the absolute top of the page
      if (currentScrollY <= 10) {
        setIsVisible(true)
        setIsScrolled(false)
        lastScrollY = currentScrollY
        return
      }

      // Hide when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setIsScrolled(currentScrollY > 20)
      lastScrollY = currentScrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof navLinks[0]) => {
    e.preventDefault()
    setIsOpen(false)

    // If it's the contact link, navigate directly
    if (link.anchor === null) {
      router.push(link.href)
      return
    }

    // If we're on the home page, scroll to the section
    if (isHomePage) {
      const element = document.getElementById(link.anchor)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      // If we're on another page, navigate to home page with the anchor
      router.push(`/#${link.anchor}`)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-border shadow-sm transition-all duration-300 ${
        isScrolled ? "h-14" : "h-16 lg:h-20"
      } ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-full items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            onClick={(e) => {
              if (isHomePage) {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
            }}
            className="flex items-center gap-2"
          >
            <span className="text-xl font-bold tracking-tight text-primary lg:text-2xl">
              Krovstvo Vrh
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.anchor ? `/#${link.anchor}` : link.href}
                onClick={(e) => handleNavClick(e, link)}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button
              asChild
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link href="/kontakt">
                Brezplačna ponudba
              </Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" aria-label="Odpri meni">
                <Menu className="size-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] px-6">
              <SheetHeader className="px-0">
                <SheetTitle className="text-left text-xl font-bold text-primary">
                  Krovstvo Vrh
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.anchor ? `/#${link.anchor}` : link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    className="rounded-lg px-4 py-3 text-lg font-medium text-foreground transition-colors hover:bg-muted hover:text-primary text-center"
                  >
                    {link.label}
                  </a>
                ))}
                <Button
                  asChild
                  className="mt-6 w-full bg-accent text-accent-foreground hover:bg-accent/90 py-6 text-base font-bold"
                >
                  <Link href="/kontakt" onClick={() => setIsOpen(false)}>
                    Brezplačna ponudba
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
