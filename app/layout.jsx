import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Vishnurat Kadagadakai — Front-End Engineer',
  description:
    'Front-end engineer specializing in scalable UI systems, interaction design, and production-grade web applications.',
  metadataBase: new URL('https://yourdomain.com'),
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-[#0b0f13]">
      <body
        className={`${inter.className} antialiased text-gray-100`}
      >
        {children}
      </body>
    </html>
  )
}
