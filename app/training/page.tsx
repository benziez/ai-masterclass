import Link from 'next/link'

export default function TrainingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-purple-800 text-white">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">Your Free Training is Unlocked 🎉</h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
          Watch the private training below. This is the fastest way to launch your AI side hustle using a simple 3-step system.
        </p>

        {/* Social Proof */}
        <div className="bg-green-900/20 border border-green-700 rounded-xl p-4 mb-6 max-w-2xl mx-auto">
          <div className="flex items-center justify-center space-x-2">
            <span className="text-green-400 text-2xl">👥</span>
            <p className="text-green-300 font-semibold">
              Join <span className="text-white font-black">2,000+ students</span> who've already built profitable AI businesses
            </p>
          </div>
        </div>

        {/* Urgency */}
        <div className="bg-red-900/20 border border-red-700 rounded-xl p-4 mb-10 max-w-2xl mx-auto">
          <div className="flex items-center justify-center space-x-2">
            <span className="text-red-400 text-2xl">⏰</span>
            <p className="text-red-300 font-semibold">
              Only <span className="text-white font-black">7 spots left</span> this month - enrollment closes soon
            </p>
          </div>
        </div>

        <div className="relative mx-auto max-w-3xl w-full aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black/40 mb-10">
          {/* Placeholder video frame */}
          <div className="absolute inset-0 grid place-items-center text-gray-400">
            <div className="text-center">
              <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-white/10 grid place-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                  <path d="M4.5 5.653c0-1.38 1.483-2.246 2.69-1.59l11.54 6.347c1.273.7 1.273 2.48 0 3.18L7.19 19.937c-1.207.656-2.69-.21-2.69-1.59V5.654z" />
                </svg>
              </div>
              <p className="text-sm">Your VSL placeholder</p>
            </div>
          </div>
        </div>

        {/* Upsell Section */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="bg-gray-800/50 backdrop-blur rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-6">
              🎯 Ready to Get the Complete System?
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              This free training showed you the basics. But to actually build a <span className="text-green-400 font-bold">$5K-$15K/month AI business</span>, you need the full AI Masterclass system that includes:
            </p>

            {/* Value Stack */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
              <div className="flex items-center text-gray-300">
                <span className="text-green-400 mr-3 text-xl">✅</span>
                <span>50+ Advanced AI Prompts</span>
              </div>
              <div className="flex items-center text-gray-300">
                <span className="text-green-400 mr-3 text-xl">✅</span>
                <span>6 Complete Modules</span>
              </div>
              <div className="flex items-center text-gray-300">
                <span className="text-green-400 mr-3 text-xl">✅</span>
                <span>Live Q&A Sessions</span>
              </div>
              <div className="flex items-center text-gray-300">
                <span className="text-green-400 mr-3 text-xl">✅</span>
                <span>Private Community</span>
              </div>
              <div className="flex items-center text-gray-300">
                <span className="text-green-400 mr-3 text-xl">✅</span>
                <span>Lifetime Access</span>
              </div>
              <div className="flex items-center text-gray-300">
                <span className="text-green-400 mr-3 text-xl">✅</span>
                <span>30-Day Money Back</span>
              </div>
            </div>

            {/* Price Section */}
            <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 rounded-xl p-6 mb-8 border border-red-700">
              <div className="text-center">
                <div className="text-sm text-gray-400 mb-2">Regular Price:</div>
                <div className="text-2xl text-gray-400 line-through mb-2">$1,497</div>
                <div className="text-sm text-red-300 mb-4">Today Only:</div>
                <div className="text-4xl sm:text-5xl font-black text-green-400 mb-2">$497</div>
                <div className="text-lg text-green-300 font-bold">Save $1,000</div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Link
                href="/get-course"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-green-500 to-blue-500 px-12 py-6 text-xl font-black shadow-lg shadow-green-500/20 transition transform hover:scale-[1.02] hover:shadow-green-500/30"
              >
                🚀 Get AI Masterclass Now - $497
              </Link>
              <p className="text-sm text-gray-400 mt-4">
                ⚡ Instant access • Lifetime access • Join 2,000+ successful students
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


