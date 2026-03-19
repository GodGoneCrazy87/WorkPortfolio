import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  keywords: [
  'Product Engineer',
  'Full Stack Developer',
  'Next.js Developer',
  'React Developer',
  'Node.js',
  'MongoDB',
  'Frontend Engineer',
],
  title: {
    default: 'Vishnurat Kadagadakai — Product Engineer',
    template: '%s · Vishnurat Kadagadakai',
  },

  description:
    'Product engineer building production-grade systems, scalable interfaces, and full-stack applications using Next.js, Node.js, and MongoDB.',

  metadataBase: new URL('https://vishnurat-kadagadakai.vercel.app'),

  /* ---------- ICONS ---------- */

  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  /* ---------- OPEN GRAPH ---------- */

  openGraph: {
    title: 'Vishnurat Kadagadakai — Product Engineer',
    description:
      'Built systems used by 5000+ users. Building VAYU — a gamified productivity and identity platform.',

    url: 'https://vishnurat-kadagadakai.vercel.app',
    siteName: 'Vishnurat Portfolio',

    images: ['/og-image.png'],

    locale: 'en_US',
    type: 'website',
  },

  /* ---------- TWITTER ---------- */

  twitter: {
    card: 'summary_large_image',
    title: 'Vishnurat Kadagadakai — Product Engineer',
    description:
      'Full-stack product engineer building scalable systems and real-world applications.',

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
