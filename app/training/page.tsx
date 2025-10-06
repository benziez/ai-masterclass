'use client'

import Link from 'next/link'
import Head from 'next/head'

export default function TrainingPage() {
  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined' && window.fbq) {
                window.fbq('track', 'Lead');
              }
            `,
          }}
        />
      </Head>
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
          <iframe
            src="https://player.vimeo.com/video/1124655262?controls=1&title=0&byline=0&portrait=0&responsive=1"
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            allow="fullscreen; picture-in-picture"
            allowFullScreen
            title="AI Masterclass Training Video"
          />
        </div>

        {/* Upsell Section */}
        <div className="max-w-5xl mx-auto mb-10">
          <div className="bg-gray-800/50 backdrop-blur rounded-2xl p-8 md:p-12 border border-gray-700 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-6">
              🎯 Ready to Get the Complete System?
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              This free training showed you the basics. But to actually build a <span className="text-green-400 font-bold">$5K-$15K/month AI business</span>, you need the full AI Masterclass system that includes:
            </p>

            {/* Value Stack */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-4xl mx-auto">
              <div className="bg-gray-700/30 rounded-xl p-6 border border-gray-600 hover:border-green-500 transition-colors">
                <div className="flex items-start">
                  <div className="bg-green-500 rounded-full p-2 mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">50+ Copy-Paste AI Prompts</h3>
                    <p className="text-gray-300 text-sm">The exact prompts that helped Marcus make $1,366 in his first week and Jordan earn $704 selling AI art</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-700/30 rounded-xl p-6 border border-gray-600 hover:border-blue-500 transition-colors">
                <div className="flex items-start">
                  <div className="bg-blue-500 rounded-full p-2 mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">6 Complete Business Modules</h3>
                    <p className="text-gray-300 text-sm">From picking your niche to landing your first $5K month - everything you need to build a profitable AI business</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-700/30 rounded-xl p-6 border border-gray-600 hover:border-purple-500 transition-colors">
                <div className="flex items-start">
                  <div className="bg-purple-500 rounded-full p-2 mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">Lifetime Access + Updates</h3>
                    <p className="text-gray-300 text-sm">Get all future AI tools, prompts, and strategies we add - no monthly fees, no expiration date</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-700/30 rounded-xl p-6 border border-gray-600 hover:border-orange-500 transition-colors">
                <div className="flex items-start">
                  <div className="bg-orange-500 rounded-full p-2 mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">30-Day Money-Back Guarantee</h3>
                    <p className="text-gray-300 text-sm">Try everything risk-free. If you don't make money in 30 days, we'll refund every penny - no questions asked</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Price Section */}
            <div className="relative bg-gradient-to-br from-red-900/40 via-orange-900/30 to-yellow-900/20 rounded-2xl p-8 mb-10 border-2 border-red-500 shadow-2xl overflow-hidden">
              {/* Animated background elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-500/20 rounded-full blur-2xl"></div>
              
              <div className="relative text-center">
                {/* Urgency Header */}
                <div className="inline-flex items-center bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 animate-pulse">
                  🔥 LIMITED TIME OFFER
                </div>
                
                {/* Price Comparison */}
                <div className="mb-6">
                  <div className="text-sm text-gray-300 mb-1">What others charge for this:</div>
                  <div className="text-2xl text-gray-400 line-through mb-2">$1,497</div>
                  <div className="text-sm text-red-300 font-semibold">Your price today:</div>
                </div>
                
                {/* Main Price */}
                <div className="relative mb-4">
                  <div className="text-6xl sm:text-7xl font-black text-green-400 mb-2 drop-shadow-lg">
                    $197
                  </div>
                  <div className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full transform rotate-12">
                    SAVE 87%
                  </div>
                </div>
                
                {/* Savings Breakdown */}
                <div className="bg-green-900/30 rounded-xl p-4 mb-4 border border-green-500">
                  <div className="text-green-300 font-bold text-lg mb-1">You Save $1,300 Today!</div>
                  <div className="text-sm text-gray-300">That's like getting paid $1,300 to start your AI business</div>
                </div>
                
                {/* Value Reminder */}
                <div className="text-sm text-gray-300">
                  <span className="text-yellow-400 font-semibold">Less than $1 per day</span> to build a $5K-$15K/month business
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Link
                href="https://buy.stripe.com/aFa00i38OgHl50d7tt5gc04"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-green-500 to-blue-500 px-12 py-6 text-xl font-black shadow-lg shadow-green-500/20 transition transform hover:scale-[1.02] hover:shadow-green-500/30"
              >
                🚀 Get AI Masterclass Now - $197
              </Link>
              
              {/* Security Badges */}
              <div className="flex flex-wrap items-center justify-center gap-4 mt-6 mb-8">
                <div className="flex items-center text-gray-400 text-sm bg-gray-800/50 px-4 py-2 rounded-lg">
                  <span className="mr-2">🔒</span>
                  <span>Stripe Secure Checkout</span>
                </div>
                <div className="flex items-center text-gray-400 text-sm bg-gray-800/50 px-4 py-2 rounded-lg">
                  <span className="mr-2">🛡️</span>
                  <span>SSL Encrypted</span>
                </div>
                <div className="flex items-center text-gray-400 text-sm bg-gray-800/50 px-4 py-2 rounded-lg">
                  <span className="mr-2">💳</span>
                  <span>All Cards Accepted</span>
                </div>
              </div>


              {/* Student Testimonials - With Money Screenshots */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 max-w-6xl mx-auto">
                {/* Screenshot 1 - $100,000+ */}
                <div className="group relative overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 p-4 hover:shadow-xl transition-all duration-300">
                  <div className="rounded-lg overflow-hidden mb-3 relative">
                    <img 
                      src="/images/127k.PNG" 
                      loading="lazy"
                      decoding="async"
                      alt="Profit screenshot showing my AI trading success"
                      className="w-full h-auto object-contain"
                    />
                    {/* Best Student Badge */}
                    <div className="absolute top-2 right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                      🏆 Our Best Student
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">AI Trading Success</h3>
                    <p className="text-green-600 dark:text-green-400 font-bold text-lg">$100,000+</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Me</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 italic">
                      "I built my own automated trading system using the AI strategies revealed in this course. What started as a $3,000 account has grown to over $100,000 through consistent AI-powered trades."
                    </p>
                  </div>
                </div>

                {/* Screenshot 2 - $1,366 */}
                <div className="group relative overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 p-4 hover:shadow-xl transition-all duration-300">
                  <div className="rounded-lg overflow-hidden mb-3">
                    <img 
                      src="/images/money2.JPG" 
                      loading="lazy"
                      decoding="async"
                      alt="Profit screenshot showing Marcus's agency success"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Agency Success</h3>
                    <p className="text-green-600 dark:text-green-400 font-bold text-lg">$1,366</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Marcus</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 italic">
                      "Marcus had been learning how to run his agency for months but struggled to land his first paying client. After completing the AI course, he used the outreach and automation techniques to book meetings more consistently."
                    </p>
                  </div>
                </div>

                {/* Screenshot 3 - $704 */}
                <div className="group relative overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 p-4 hover:shadow-xl transition-all duration-300">
                  <div className="rounded-lg overflow-hidden mb-3">
                    <img 
                      src="/images/money3.jpg" 
                      loading="lazy"
                      decoding="async"
                      alt="Profit screenshot showing Jordan's content creation success"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Content Creator Success</h3>
                    <p className="text-green-600 dark:text-green-400 font-bold text-lg">$704</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Jordan</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 italic">
                      "Jordan always wanted to start a side hustle online but didn't know where to begin. After going through the AI course, he learned how to use automation tools to create short-form content."
                    </p>
                  </div>
                </div>

                {/* Screenshot 4 - $5,016 */}
                <div className="group relative overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 p-4 hover:shadow-xl transition-all duration-300">
                  <div className="rounded-lg overflow-hidden mb-3">
                    <img 
                      src="/images/money4.JPG" 
                      loading="lazy"
                      decoding="async"
                      alt="Profit screenshot showing Eric's side hustle success"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Side Hustle Success</h3>
                    <p className="text-green-600 dark:text-green-400 font-bold text-lg">$5,016</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Eric</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 italic">
                      "Eric was looking for a simple way to earn extra income outside of his 9–5. After taking the AI course, he started using automation to flip local services and manage gig work smarter."
                    </p>
                  </div>
                </div>
              </div>

              {/* Re-stated Guarantee */}
              <div className="bg-green-900/20 border border-green-700 rounded-xl p-4 max-w-2xl mx-auto">
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-green-400 text-xl">🛡️</span>
                  <p className="text-green-300 font-semibold text-sm">
                    <span className="text-white font-bold">30-Day Money Back Guarantee</span> - If you don't see results, we'll refund every penny
                  </p>
                </div>
              </div>

              <p className="text-sm text-gray-400 mt-4">
                ⚡ Instant access • Lifetime access • Join 2,000+ successful students
              </p>
            </div>
          </div>
        </div>
      </section>
      </main>
    </>
  )
}




