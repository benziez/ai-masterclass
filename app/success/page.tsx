'use client'

import { useEffect } from 'react'

// Declare fbq function for TypeScript
declare global {
  interface Window {
    fbq: (action: string, event: string, data?: any) => void;
  }
}

export default function SuccessPage() {
  useEffect(() => {
    // Fire Purchase event after component mounts
    const firePurchase = () => {
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'Purchase', {
          value: 97,
          currency: 'USD'
        });
        console.log('Facebook Pixel Purchase event fired: $97.00 USD');
      } else {
        // Retry if fbq not ready yet
        setTimeout(firePurchase, 100);
      }
    };
    
    firePurchase();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Payment Successful 🎉
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
          Welcome to AI Masterclass!
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Check your email for course access and downloads.
        </p>
        
        <div className="space-y-4">
          <a 
            href="/curriculum" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Start Learning Now →
          </a>
          
          <div className="text-sm text-gray-500 dark:text-gray-400">
            <p>Need help? Contact us at <a href="mailto:support@aimasterclass.info" className="text-blue-600 hover:underline">support@aimasterclass.info</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}
