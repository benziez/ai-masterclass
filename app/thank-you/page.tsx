import Link from 'next/link'

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-blue-900 text-white">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">You’re In! 🎉</h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Your free guide is on the way to your inbox. Watch this short video below to see how to launch your AI income stream even faster.
        </p>

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

        <div className="flex items-center justify-center">
          <Link
            href="/get-course"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-green-500 to-blue-500 px-8 py-4 text-lg font-bold shadow-lg shadow-green-500/20 transition transform hover:scale-[1.02]"
          >
            Enroll in AI Masterclass Now
          </Link>
        </div>

        <p className="text-xs text-gray-400 mt-4">Limited time bonuses available.</p>
      </section>
    </main>
  )
}



