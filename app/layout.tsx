import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: {
    default: 'Krovstvo Vrh | Strokovnjaki za strehe v Ljubljani',
    template: '%s | Krovstvo Vrh'
  },
  description: 'Profesionalno krovstvo z 20-letno tradicijo. Specializirani za montažo, obnovo in vzdrževanje streh v Ljubljani z okolico. Brezplačen ogled in strokovna ponudba.',
  keywords: ['krovstvo', 'streha', 'Ljubljana', 'montaža strehe', 'obnova strehe', 'krovci', 'zamenjava kritine', 'izolacija strehe', 'stavbno kleparstvo', 'vzdrževanje streh'],
  authors: [{ name: 'Krovstvo Vrh' }],
  creator: 'Krovstvo Vrh',
  publisher: 'Krovstvo Vrh',
  openGraph: {
    title: 'Krovstvo Vrh | Strokovnjaki za strehe v Ljubljani',
    description: 'Zaupajte svojo streho strokovnjakom z več kot 20-letnimi izkušnjami. Montaža, obnova in vzdrževanje streh v Ljubljani in okolici.',
    url: 'https://krovstvo-vrh.si',
    siteName: 'Krovstvo Vrh',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Krovstvo Vrh - Strokovno krovstvo in kleparstvo',
      },
    ],
    locale: 'sl_SI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Krovstvo Vrh | Strokovnjaki za strehe v Ljubljani',
    description: 'Več kot 20 let izkušenj pri montaži in obnovi streh. Zagotovite si varno streho nad glavo.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1E3A5F',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sl" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
