import type { Metadata, Viewport } from 'next'
import { Share_Tech_Mono, Bebas_Neue } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const shareTechMono = Share_Tech_Mono({
  weight: '400',
  subsets: ["latin"],
  variable: '--font-mono'
})

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ["latin"],
  variable: '--font-display'
})

export const metadata: Metadata = {
  title: 'Hammerborne | Asterium',
  description: 'Hammerborne Game Studio - Creators of Asterium. Grand Strategy meets Tactical Industrialism in a universe where colonization is survival.',
  generator: 'v0.app',
  icons: {
    icon: '/gameicon.png',
    apple: '/gameicon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1d1e',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" style={{ backgroundColor: '#1a1d1e' }}>
      <body className={`${shareTechMono.variable} ${bebasNeue.variable} font-mono antialiased`}>
        {children}
        <div className="noise-overlay" aria-hidden="true" />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
