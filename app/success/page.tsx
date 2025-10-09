'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { CheckCircle, Copy, ArrowRight } from 'lucide-react'

// Declare fbq function for TypeScript
declare global {
  interface Window {
    fbq: (action: string, event: string, data?: any) => void;
  }
}

const ACCESS_CODE = 'AIMASTERCLASS2025'

export default function SuccessPage() {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    // Fire Purchase event after component mounts
    const firePurchase = () => {
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'Purchase', {
          value: 27,
          currency: 'USD'
        });
        console.log('Facebook Pixel Purchase event fired: $27.00 USD');
      } else {
        // Retry if fbq not ready yet
        setTimeout(firePurchase, 100);
      }
    };
    
    firePurchase();
  }, []);

  const copyCode = () => {
    navigator.clipboard.writeText(ACCESS_CODE)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <main className="min-h-screen bg-black overflow-x-hidden relative pt-20 sm:pt-24">
      {/* Animated background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-green-900/20 opacity-50"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-700/10 via-transparent to-transparent"></div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900/95 via-gray-800/50 to-gray-900/95 border-2 border-green-500/30 rounded-2xl p-8 sm:p-12 backdrop-blur-sm shadow-[0_0_30px_rgba(34,197,94,0.3)] text-center">
            {/* Success Icon */}
            <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(34,197,94,0.5)]">
              <CheckCircle className="h-14 w-14 text-white" />
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
              🎉 Welcome to AI Masterclass!
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Your payment was successful. Let's get you started!
            </p>

            {/* Access Code Box */}
            <div className="bg-black/50 border-2 border-cyan-500/30 rounded-xl p-6 mb-8">
              <h2 className="text-lg font-semibold text-cyan-400 mb-3">
                Your Course Access Code:
              </h2>
              <div className="flex items-center justify-center gap-4 mb-4">
                <code className="text-3xl font-black text-white bg-gray-900/80 px-6 py-3 rounded-lg border border-cyan-500/20">
                  {ACCESS_CODE}
                </code>
                <button
                  onClick={copyCode}
                  className="p-3 bg-cyan-500/20 border border-cyan-500/30 rounded-lg hover:bg-cyan-500/30 transition-all"
                  title="Copy code"
                >
                  <Copy className="h-5 w-5 text-cyan-400" />
                </button>
              </div>
              {copied && (
                <p className="text-green-400 text-sm">✓ Copied to clipboard!</p>
              )}
              <p className="text-gray-400 text-sm mt-2">
                Save this code! You'll need it to access the system.
              </p>
            </div>

            {/* What's Next */}
            <div className="bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-green-500/20 rounded-xl p-6 mb-8 text-left">
              <h3 className="text-xl font-bold text-white mb-4 text-center">
                What's Next?
              </h3>
              <ol className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-cyan-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  <span>Click the button below to access the system</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-cyan-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  <span>Enter your access code: <strong className="text-cyan-400">{ACCESS_CODE}</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-cyan-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  <span>Start with Module 1 and work your way through</span>
                </li>
              </ol>
            </div>

            {/* CTA Button */}
            <Link
              href="/system"
              className="inline-flex items-center justify-center bg-gradient-to-r from-green-500 via-cyan-500 to-blue-500 hover:from-green-600 hover:via-cyan-600 hover:to-blue-600 text-white font-black px-8 py-4 text-lg rounded-xl shadow-[0_0_30px_rgba(34,197,94,0.4)] hover:shadow-[0_0_40px_rgba(34,197,94,0.6)] transition-all duration-300 transform hover:scale-105"
            >
              🚀 Access Your Course Now
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>

            {/* Support */}
            <div className="mt-8 pt-8 border-t border-gray-700">
              <p className="text-sm text-gray-400">
                Need help? Email us at{' '}
                <a 
                  href="mailto:support@aimasterclass.info" 
                  className="text-cyan-400 hover:text-cyan-300 font-semibold"
                >
                  support@aimasterclass.info
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
