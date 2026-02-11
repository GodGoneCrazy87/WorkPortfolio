import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: {
    default: 'Vishnurat Kadagadakai — Front-End Engineer',
    template: '%s · Vishnurat Kadagadakai',
  },

  description:
    'Front-end engineer building production-grade UI systems, scalable interfaces, and high-performance web applications with React and Next.js.',

  metadataBase: new URL('https://vishnurat-kadagadakai.vercel.app'),

  /* ---------- ICONS ---------- */

  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  /* ---------- OPEN GRAPH ---------- */

  openGraph: {
    title: 'Vishnurat Kadagadakai — Front-End Engineer',
    description:
      'Production-focused front-end engineer specializing in scalable UI systems and interaction design.',

    url: 'https://vishnurat-kadagadakai.vercel.app',
    siteName: 'Vishnurat Portfolio',

    images: ['/og-image.png'],

    locale: 'en_US',
    type: 'website',
  },

  /* ---------- TWITTER ---------- */

  twitter: {
    card: 'summary_large_image',
    title: 'Vishnurat Kadagadakai — Front-End Engineer',
    description:
      'Production-focused front-end engineer building scalable UI systems.',

    images: ['/og-image.png'],
  },

  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-[#0b0f13]">
      <body className={`${inter.className} antialiased text-gray-100`}>
        {children}
      </body>
    </html>
  )
}
