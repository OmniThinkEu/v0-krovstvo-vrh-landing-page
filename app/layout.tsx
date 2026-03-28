import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: 'Krovstvo Vrh | Strokovnjaki za strehe v Ljubljani',
  description: 'Zaupajte svojo streho strokovnjakom z več kot 20-letnimi izkušnjami. Montaža, obnova in vzdrževanje streh v Ljubljani in okolici. Brezplačen ogled in ponudba.',
  keywords: 'krovstvo, streha, Ljubljana, montaža strehe, obnova strehe, krovci, zamenjava kritine, izolacija strehe',
  authors: [{ name: 'Krovstvo Vrh' }],
  openGraph: {
    title: 'Krovstvo Vrh | Strokovnjaki za strehe v Ljubljani',
    description: 'Zaupajte svojo streho strokovnjakom z več kot 20-letnimi izkušnjami. Montaža, obnova in vzdrževanje streh v Ljubljani in okolici.',
    type: 'website',
    locale: 'sl_SI',
    siteName: 'Krovstvo Vrh',
  },
  robots: {
    index: true,
    follow: true,
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
