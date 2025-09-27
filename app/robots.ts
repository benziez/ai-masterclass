import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/thank-you', '/success'],
    },
    sitemap: 'https://aimasterclass.info/sitemap.xml',
  }
}

