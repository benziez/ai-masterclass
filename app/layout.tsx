import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://aimasterclass.info'),
  title: {
    default: 'AI Masterclass - Learn AI Tools & Technologies',
    template: '%s | AI Masterclass'
  },
  description: 'Master AI tools and technologies with our comprehensive course. Learn ChatGPT, Midjourney, and more to boost your productivity and career.',
  keywords: ['AI course', 'ChatGPT', 'Midjourney', 'AI tools', 'artificial intelligence', 'AI training'],
  authors: [{ name: 'AI Masterclass Team' }],
  creator: 'AI Masterclass',
  publisher: 'AI Masterclass',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'AI Masterclass - Learn AI Tools & Technologies',
    description: 'Master AI tools and technologies with our comprehensive course. Learn ChatGPT, Midjourney, and more to boost your productivity and career.',
    url: 'https://aimasterclass.info',
    siteName: 'AI Masterclass',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AI Masterclass Course',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Masterclass - Learn AI Tools & Technologies',
    description: 'Master AI tools and technologies with our comprehensive course. Learn ChatGPT, Midjourney, and more to boost your productivity and career.',
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
