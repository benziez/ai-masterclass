import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import ClientExitIntentWrapper from './providers/ClientExitIntentWrapper'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://aimasterclass.info'),
  title: {
    default: 'AI Masterclass - Make $5K-$15K/Month with AI Strategies',
    template: '%s | AI Masterclass'
  },
  description: 'Learn the exact AI strategies that helped students make $2.3M+ in profits. Build profitable AI businesses with no experience required. Join 2,000+ successful students.',
  keywords: ['AI business course', 'AI side hustle', 'AI strategies', 'make money with AI', 'AI automation', 'AI entrepreneurship', 'AI business ideas', 'AI course online', 'AI training', 'artificial intelligence business'],
  authors: [{ name: 'AI Masterclass Team' }],
  creator: 'AI Masterclass',
  publisher: 'AI Masterclass',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'AI Masterclass - Make $5K-$15K/Month with AI Strategies',
    description: 'Learn the exact AI strategies that helped students make $2.3M+ in profits. Build profitable AI businesses with no experience required.',
    url: 'https://aimasterclass.info',
    siteName: 'AI Masterclass',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AI Masterclass - Make Money with AI Strategies',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Masterclass - Make $5K-$15K/Month with AI Strategies',
    description: 'Learn the exact AI strategies that helped students make $2.3M+ in profits. Build profitable AI businesses with no experience required.',
    images: ['/og-image.png'],
    creator: '@aimasterclass',
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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Facebook Pixel will be loaded on specific pages */}
      </head>
      <body className={`${inter.className} antialiased`}>
        <GoogleAnalytics />
        <ClientExitIntentWrapper>
          {children}
        </ClientExitIntentWrapper>
        <Toaster />
      </body>
    </html>
  )
}
