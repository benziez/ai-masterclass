import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import ClientExitIntentWrapper from './providers/ClientExitIntentWrapper'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import Script from 'next/script'

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
        {/* Facebook Pixel will be loaded by Script component */}
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Facebook Pixel */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '2455252148193058');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=2455252148193058&ev=PageView&noscript=1"
          />
        </noscript>
        <GoogleAnalytics />
        <ClientExitIntentWrapper>
          {children}
        </ClientExitIntentWrapper>
        <Toaster />
      </body>
    </html>
  )
}
