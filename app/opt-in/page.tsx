"use client"

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function OptInPage() {
  const router = useRouter()
  const [firstName, setFirstName] = useState("")
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    if (!email) {
      setError('Please enter your email')
      return
    }
    setLoading(true)
    
    // Fire Facebook Lead event
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Lead')
      console.log('Lead event fired on opt-in!')
    }
    
    try {
      await fetch('/api/send-free-guide/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, firstName }),
      })
      router.push('/training')
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-blue-500/20 text-blue-400 py-3 px-4 border-b border-blue-500/30">
        <div className="max-w-4xl mx-auto flex items-center justify-center">
          <span className="text-sm font-medium">🚀 Private Training For AI Income Engineers:</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Main Headline */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            How My AI Income Engineers Are Building<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">$5,000-$15,000/Mo</span><br/>
            Automated<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">Income Systems...</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            And how YOU can engineer the same, with no<br/>
            experience or "tech skills"...
          </p>
        </div>

        {/* Locked Video Preview */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="relative bg-gray-900 rounded-2xl overflow-hidden border-2 border-cyan-500/30">
            {/* Video Thumbnail/Preview */}
            <div className="aspect-video bg-gradient-to-br from-gray-900 to-black relative">
              {/* Locked Overlay */}
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-cyan-500 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg shadow-cyan-500/50">
                    <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Training Video Locked</h3>
                  <p className="text-gray-300 mb-4">Enter your email below to unlock this exclusive training</p>
                </div>
              </div>
              
              {/* Video Preview Elements */}
              <div className="absolute top-4 left-4">
                <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold border border-blue-400">
                  🔒 PRIVATE TRAINING
                </div>
              </div>
              
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black/80 rounded-lg p-3">
                  <h4 className="text-white font-semibold mb-1">3 Steps to Your First AI Income Engineering™ System</h4>
                  <p className="text-gray-300 text-sm">Learn the exact system that helped AI Income Engineers make $2.3M+ in automated profits</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Signup Form */}
        <div id="signup-form" className="max-w-md mx-auto mb-8">
          <form onSubmit={handleSubmit} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="space-y-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-1">First Name</label>
                <input
                  id="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Enter your first name"
                  className="w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {error && <p className="text-sm text-red-400">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold text-lg py-4 px-6 rounded-lg transition-all duration-200 shadow-lg shadow-blue-500/30 hover:shadow-xl disabled:opacity-60"
              >
                {loading ? 'Unlocking Training...' : '🚀 Get My Free AI Income Engineering™ Training'}
              </button>

              <p className="text-xs text-gray-400 text-center">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </div>
          </form>
        </div>

        {/* Who It's For */}
        <div className="text-center mb-8">
          <p className="text-lg text-gray-300 font-medium">
            Perfect for students, freelancers, and creators who want to engineer their first automated AI income system this month.
          </p>
        </div>

        {/* What You'll Learn */}
        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-3xl sm:text-4xl font-black text-white text-center mb-10">🔥 What You'll Discover Inside:</h3>
          <div className="space-y-5">
            <div className="bg-gray-900/80 rounded-2xl p-7 border-2 border-blue-500/30 hover:border-blue-500/60 transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 rounded-full p-3 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl mb-2">The 3 AI Income Engineering™ Systems That Print Money in 2025</h4>
                  <p className="text-gray-400 leading-relaxed">Automated social media management, AI art sales systems, and content creation automation - the exact systems our AI Income Engineers used to make $2.3M+ in automated profits</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900/80 rounded-2xl p-7 border-2 border-blue-500/30 hover:border-blue-500/60 transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 rounded-full p-3 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl mb-2">50+ AI Income Engineering™ System Templates That Close Deals</h4>
                  <p className="text-gray-400 leading-relaxed">The exact system templates that helped Marcus engineer $1,366 in his first week and Jordan build a $704/month AI art income stream - no guessing, just automated results</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900/80 rounded-2xl p-7 border-2 border-blue-500/30 hover:border-blue-500/60 transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 rounded-full p-3 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl mb-2">The "No Audience" Automated Client Acquisition System</h4>
                  <p className="text-gray-400 leading-relaxed">How to engineer automated client acquisition without social media followers, email lists, or expensive ads - just AI Income Engineering™ + the right system design</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <div className="inline-flex items-center bg-blue-500/20 text-blue-400 px-6 py-3 rounded-full font-bold border border-blue-500/40">
                <span className="mr-2">💰</span>
                <span>Average AI Income Engineer makes $3,200 in their first month</span>
              </div>
            </div>
          </div>
        </div>

        {/* Real Results Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">REAL RESULTS FROM OUR AI INCOME ENGINEERS</h2>
          <p className="text-gray-400">See how others are already engineering automated income with AI</p>
        </div>

        {/* Money Proof Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 max-w-6xl mx-auto">
          {/* Testimonial 1 - AI Trading Algorithm */}
          <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden shadow-lg">
            <div className="relative">
              <img
                src="/images/127k.PNG"
                alt="Portfolio growth from $3K to $127K"
                className="w-full h-auto object-cover"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
              <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
                <div className="text-white/30 font-extrabold tracking-widest text-2xl sm:text-3xl transform -rotate-12">
                  AI MASTERCLASS
                </div>
              </div>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-300 leading-relaxed">
                "I engineered an <strong className="text-white">automated AI trading system</strong> to pick stocks for me using these exact AI Income Engineering™ templates. Was able to take my portfolio from <strong className="text-green-400">$3K to $127K</strong>!"
              </p>
              <p className="text-gray-500 text-xs mt-3 text-center">System: AI trading automation • Time: — • Result: $127K</p>
            </div>
          </div>

          {/* Testimonial 2 - Social Media Management */}
          <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden shadow-lg">
            <div className="relative">
              <img
                src="/images/money3.jpg"
                alt="Cash App balance showing $704 from social media service sales"
                className="w-full h-auto object-cover"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
              <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
                <div className="text-white/30 font-extrabold tracking-widest text-2xl sm:text-3xl transform -rotate-12">
                  AI MASTERCLASS
                </div>
              </div>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-300 leading-relaxed">
                "Finally found a system that works! I was struggling to get clients, but these AI Income Engineering™ templates helped me <strong className="text-white">build an automated social media management system</strong>. Made <strong className="text-green-400">$704</strong> in my first week using these exact system templates!"
              </p>
              <p className="text-gray-500 text-xs mt-3 text-center">System: Automated social media management • Time: 1 week • Result: $704</p>
            </div>
          </div>

          {/* Testimonial 3 - AI Art Sales */}
          <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden shadow-lg">
            <div className="relative">
              <img
                src="/images/money2.JPG"
                alt="PayPal balance showing $1,366.70 from AI art sales"
                className="w-full h-auto object-cover"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
              <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
                <div className="text-white/30 font-extrabold tracking-widest text-2xl sm:text-3xl transform -rotate-12">
                  AI MASTERCLASS
                </div>
              </div>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-300 leading-relaxed">
                "Best investment I've made! These AI Income Engineering™ templates helped me <strong className="text-white">engineer an automated AI art sales system</strong>. My PayPal balance shows <strong className="text-green-400">$1,366.70</strong> from my first few automated sales!"
              </p>
              <p className="text-gray-500 text-xs mt-3 text-center">System: Automated AI art sales • Time: first few sales • Result: $1,366.70</p>
            </div>
          </div>
        </div>

        {/* Urgency/Scarcity */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-semibold border border-blue-500/40">
            ⏰ Limited Time: Only 7 spots left this month
          </div>
        </div>
      </div>

      {/* Footer Disclaimer */}
      <div className="bg-gray-800 py-4 px-4 mt-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs text-gray-400 text-center">
            NOT A FACEBOOK website or Facebook Inc. Additionally, This site is NOT endorsed by Facebook in any way. 
            FACEBOOK is a trademark of FACEBOOK, Inc. Results may vary. Individual results are not typical.
          </p>
        </div>
      </div>
      </main>
  )
}


