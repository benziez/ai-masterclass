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
    <main className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-blue-600 text-white py-3 px-4">
        <div className="max-w-4xl mx-auto flex items-center justify-center">
          <span className="text-sm font-medium">🔔 Private Training For AI Entrepreneurs:</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Sub-header */}
        <div className="text-center mb-6">
          <p className="text-lg text-gray-300 font-medium">24 Year Old Entrepreneur Reveals:</p>
        </div>

        {/* Main Headline */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            How My Students Are Making<br/>
            <span className="text-blue-400">$5,000-$15,000/Mo</span><br/>
            With<br/>
            <span className="text-green-400">AI Side Hustles...</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            And how YOU can do the same, with no<br/>
            experience or "tech skills"...
          </p>
        </div>

        {/* Locked Video Preview */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="relative bg-gray-800 rounded-2xl overflow-hidden border border-gray-700">
            {/* Video Thumbnail/Preview */}
            <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 relative">
              {/* Locked Overlay */}
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Training Video Locked</h3>
                  <p className="text-gray-300 mb-4">Enter your email below to unlock this exclusive training</p>
                </div>
              </div>
              
              {/* Video Preview Elements */}
              <div className="absolute top-4 left-4">
                <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  🔒 PRIVATE TRAINING
                </div>
              </div>
              
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black/80 rounded-lg p-3">
                  <h4 className="text-white font-semibold mb-1">3 Steps to Your First AI-Powered Side Hustle</h4>
                  <p className="text-gray-300 text-sm">Learn the exact system that helped students make $2.3M+ in profits</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Who It's For */}
        <div className="text-center mb-6">
          <p className="text-lg text-gray-300 font-medium">
            Perfect for students, freelancers, and creators who want to build their first AI-powered income stream this month.
          </p>
        </div>

        {/* CTA Button */}
        <div className="text-center mb-8">
          <button
            onClick={() => {
              // Scroll to form
              document.getElementById('signup-form')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="w-full max-w-md bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg"
          >
            Unlock Free Training Video! &gt;&gt;
          </button>
          <p className="text-sm text-gray-500 mt-2">Don't worry, it's free.</p>
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
                className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold text-lg py-4 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-60"
              >
                {loading ? 'Unlocking Training...' : '🚀 Get My Free AI Training'}
              </button>

              <p className="text-xs text-gray-400 text-center">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </div>
          </form>
        </div>

        {/* What You'll Learn */}
        <div className="max-w-2xl mx-auto mb-8">
          <h3 className="text-xl font-bold text-white text-center mb-4">What You'll Learn:</h3>
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <span>The easiest AI side hustles to start right now</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <span>How to use ChatGPT + simple tools to deliver real client work</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <span>The fastest path to $5K/month — even with zero followers</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Real Results Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">REAL RESULTS FROM OUR STUDENTS</h2>
          <p className="text-gray-400">See how others are already making money with AI</p>
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
                "I built an <strong className="text-white">AI trading algorithm</strong> to pick stocks for me using these exact prompts. Was able to take my portfolio from <strong className="text-green-400">$3K to $127K</strong>!"
              </p>
              <p className="text-gray-500 text-xs mt-3 text-center">Offer: AI trading signals • Time: — • Result: $127K</p>
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
                "Finally found a system that works! I was struggling to get clients, but these AI prompts helped me <strong className="text-white">sell my social media management service on Facebook</strong>. Made <strong className="text-green-400">$704</strong> in my first week using these exact prompts!"
              </p>
              <p className="text-gray-500 text-xs mt-3 text-center">Offer: Social media management • Time: 1 week • Result: $704</p>
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
                "Best investment I've made! These AI prompts helped me <strong className="text-white">launch a small online service selling custom AI-generated art</strong>. My PayPal balance shows <strong className="text-green-400">$1,366.70</strong> from my first few sales!"
              </p>
              <p className="text-gray-500 text-xs mt-3 text-center">Offer: Custom AI-generated art • Time: first few sales • Result: $1,366.70</p>
            </div>
          </div>
        </div>

        {/* Urgency/Scarcity */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center bg-red-900/30 text-red-300 px-4 py-2 rounded-full text-sm font-semibold border border-red-700">
            ⏰ Limited Time: Only 47 spots left this month
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


