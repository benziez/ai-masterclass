'use client'

import { useEffect } from 'react'

// Declare fbq function for TypeScript
declare global {
  interface Window {
    fbq: (action: string, event: string, data?: any) => void;
  }
}

export default function FacebookPixel() {
  useEffect(() => {
    // Load Facebook pixel script
    const loadFacebookPixel = () => {
      if (typeof window === 'undefined') return

      // Check if already loaded
      if (window.fbq) {
        console.log('Facebook Pixel already loaded')
        return
      }

      // Create and load the script
      const script = document.createElement('script')
      script.innerHTML = `
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
        console.log('Facebook Pixel loaded and initialized');
      `
      document.head.appendChild(script)

      // Add noscript fallback
      const noscript = document.createElement('noscript')
      noscript.innerHTML = `
        <img height="1" width="1" style="display:none"
        src="https://www.facebook.com/tr?id=2455252148193058&ev=PageView&noscript=1" />
      `
      document.head.appendChild(noscript)
    }

    // Load pixel after a short delay
    setTimeout(loadFacebookPixel, 100)
  }, [])

  return null
}