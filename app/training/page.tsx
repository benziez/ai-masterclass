'use client'

import Link from 'next/link'
import Script from 'next/script'
import { useState } from 'react'

export default function TrainingPage() {
  const [isLoading, setIsLoading] = useState(false)

  const startTrial = async () => {
    setIsLoading(true)
    try {
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url // redirect to Stripe Checkout
      } else {
        console.error('No checkout URL received')
      }
    } catch (error) {
      console.error('Checkout error:', error)
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <>
      <Script
        id="facebook-lead"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            // Wait for fbq to be available
            function trackLead() {
              if (typeof window !== 'undefined' && window.fbq) {
                window.fbq('track', 'Lead');
                console.log('Lead event fired!');
              } else {
                // Retry after a short delay
                setTimeout(trackLead, 100);
              }
            }
            trackLead();
          `,
        }}
      />
      <main className="min-h-screen bg-black text-white">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 text-center">
        {/* Top Text */}
        <div className="mb-2">
          <p className="text-cyan-400 text-xs sm:text-sm font-bold tracking-wide">
            💰💸 FOR ANYONE LOOKING TO <span className="text-cyan-300">MAKE EXTRA INCOME</span>
          </p>
        </div>
        
        <div className="mb-8">
          <p className="text-cyan-400 text-xs sm:text-sm font-bold tracking-wide">
            USING AI IN A FEW HOURS PER WEEK
          </p>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-5 leading-[1.1] max-w-5xl mx-auto tracking-tight">
          HOW STUDENTS ARE BUILDING $5K-$15K/MONTH AI BUSINESSES WITHOUT CODING OR EXPERIENCE
        </h1>

        <p className="text-xl sm:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto font-medium">
          The Complete System That Helped 2,000+ People Launch Profitable AI Side Hustles
        </p>

        <div className="relative mx-auto max-w-4xl w-full aspect-video rounded-3xl overflow-hidden border-2 border-gray-800 bg-black mb-6 shadow-2xl shadow-cyan-500/10">
          <iframe
            src="https://player.vimeo.com/video/1124655262?controls=1&title=0&byline=0&portrait=0&responsive=1"
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            allow="fullscreen; picture-in-picture"
            allowFullScreen
            title="AI Masterclass Training Video"
          />
        </div>

        {/* CTA Badge */}
        <div className="inline-flex items-center gap-2 bg-cyan-500 text-black px-8 py-4 rounded-full text-lg font-black mb-16 shadow-lg shadow-cyan-500/30 hover:bg-cyan-400 transition-all">
          ✅ Hit Play on The Video Above
        </div>

        {/* Value Proposition */}
        <div className="max-w-4xl mx-auto mb-20 text-left bg-gray-900/50 border border-gray-800 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-10 text-center leading-tight">
            WHAT IS <span className="text-cyan-400">AI MASTERCLASS</span>?
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-200 mb-6 leading-relaxed">
            AI Masterclass is the complete system I built after making my first <span className="text-green-400 font-bold">$100K+</span> using AI strategies. This is everything I wish someone had shown me when I was just getting started.
          </p>

          <p className="text-lg sm:text-xl text-gray-200 mb-6 leading-relaxed">
            Instead of spending months trying to figure out what actually works, you get the exact blueprint that's already helped <span className="text-green-400 font-bold">2,000+</span> students build profitable AI side hustles - no coding, no tech background, no expensive tools required.
          </p>

          <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
            The reality is simple: businesses need help with AI right now. They need automation, content creation, lead generation, and they're willing to pay for it. The problem? Most people have no idea where to start or what to actually offer.
          </p>

          <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
            That's where AI Masterclass comes in. You'll learn the exact AI tools, prompts, and strategies that students are using to land <span className="text-green-400 font-bold">$500-$5,000/month</span> clients. No fluff, no theory - just proven systems that work in <span className="text-green-400 font-bold">2025</span>.
          </p>

          <p className="text-lg sm:text-xl text-gray-200 mb-0 leading-relaxed">
            My students like Marcus made <span className="text-green-400 font-bold">$1,366</span> in his first week using the outreach templates. Jordan earned <span className="text-green-400 font-bold">$704</span> with AI art. And I personally built my trading account to over <span className="text-green-400 font-bold">$100,000</span> using the strategies inside. This stuff actually works when you follow the system.
          </p>
        </div>

        {/* Upsell Section */}
        <div className="max-w-5xl mx-auto mb-10">
          <div className="bg-gray-900 border-2 border-gray-800 rounded-2xl p-8 md:p-12 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-6">
              🎯 Ready to Get the Complete System?
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              This free training showed you the basics. But to actually build a <span className="text-green-400 font-bold">$5K-$15K/month AI business</span>, you need the full AI Masterclass system that includes:
            </p>

            {/* Value Stack */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10 max-w-4xl mx-auto">
              <div className="bg-gray-900/80 rounded-2xl p-7 border-2 border-cyan-500/30 hover:border-cyan-500/60 transition-all hover:shadow-lg hover:shadow-cyan-500/20">
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-500 rounded-full p-3 flex-shrink-0">
                    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-2">50+ Copy-Paste AI Prompts</h3>
                    <p className="text-gray-400 text-base leading-relaxed">The exact prompts that helped Marcus make $1,366 in his first week and Jordan earn $704 selling AI art</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900/80 rounded-2xl p-7 border-2 border-cyan-500/30 hover:border-cyan-500/60 transition-all hover:shadow-lg hover:shadow-cyan-500/20">
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-500 rounded-full p-3 flex-shrink-0">
                    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-2">6 Complete Business Modules</h3>
                    <p className="text-gray-400 text-base leading-relaxed">From picking your niche to landing your first $5K month - everything you need to build a profitable AI business</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900/80 rounded-2xl p-7 border-2 border-cyan-500/30 hover:border-cyan-500/60 transition-all hover:shadow-lg hover:shadow-cyan-500/20">
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-500 rounded-full p-3 flex-shrink-0">
                    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-2">Lifetime Access + Updates</h3>
                    <p className="text-gray-400 text-base leading-relaxed">Get all future AI tools, prompts, and strategies we add - no monthly fees, no expiration date</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900/80 rounded-2xl p-7 border-2 border-cyan-500/30 hover:border-cyan-500/60 transition-all hover:shadow-lg hover:shadow-cyan-500/20">
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-500 rounded-full p-3 flex-shrink-0">
                    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-2">30-Day Money-Back Guarantee</h3>
                    <p className="text-gray-400 text-base leading-relaxed">Try everything risk-free. If you don't make money in 30 days, we'll refund every penny - no questions asked</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Price Section */}
            <div className="relative bg-gray-900/50 rounded-2xl p-8 mb-10 border-2 border-cyan-500/30 shadow-2xl overflow-hidden">
              {/* Animated background elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl"></div>
              
              <div className="relative text-center">
                {/* Urgency Header */}
                <div className="inline-flex items-center bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-bold mb-4 border border-cyan-500/40">
                  🔥 LIMITED TIME OFFER
                </div>
                
                {/* Price Comparison */}
                <div className="mb-6">
                  <div className="text-sm text-gray-400 mb-1">What others charge for this:</div>
                  <div className="text-2xl text-gray-500 line-through mb-2">$1,497</div>
                  <div className="text-sm text-cyan-400 font-semibold">Your price today:</div>
                </div>
                
                {/* Main Price */}
                <div className="relative mb-4">
                  <div className="text-6xl sm:text-7xl font-black text-cyan-400 mb-2 drop-shadow-lg">
                    $27
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-gray-300 mb-1">
                    One-Time Payment
                  </div>
                  <div className="absolute -top-2 -right-2 bg-cyan-500 text-black text-xs font-bold px-2 py-1 rounded-full transform rotate-12">
                    SAVE 87%
                  </div>
                </div>
                
                {/* Value Breakdown */}
                <div className="bg-cyan-900/20 rounded-xl p-4 mb-4 border border-cyan-500/40">
                  <div className="text-cyan-300 font-bold text-lg mb-1">You Save $1,470 Today!</div>
                  <div className="text-sm text-gray-300">That's like getting paid $1,470 to start your AI business</div>
                </div>
                
                {/* Value Reminder */}
                <div className="text-sm text-gray-300">
                  <span className="text-cyan-400 font-semibold">Less than $1 per day</span> to build a $5K-$15K/month business
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <button
                onClick={startTrial}
                disabled={isLoading}
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-12 py-6 text-xl font-black shadow-lg shadow-cyan-500/30 transition transform hover:scale-[1.02] hover:shadow-cyan-500/40 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? '🔄 Processing...' : '🚀 Get AI Masterclass Now - $27'}
              </button>
              
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
            </div>
          </div>
        </div>

        {/* Bonus Section */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="bg-gray-900/50 rounded-2xl p-6 border-2 border-cyan-500/30 shadow-2xl">
            <div className="text-center mb-6">
              <div className="inline-flex items-center bg-cyan-500 text-black px-4 py-2 rounded-full text-sm font-black mb-3">
                🎁 BONUS PACK
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white mb-3">
                AI MASTERCLASS BONUS LESSONS
              </h3>
              <p className="text-sm text-gray-300 mb-4">
                Get these exclusive bonus modules when you join today:
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="bg-gray-800/50 rounded-xl p-4 border border-cyan-500/20">
                <div className="flex items-start gap-3">
                  <div className="bg-cyan-500 rounded-full p-2 flex-shrink-0">
                    <span className="text-lg">📈</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base mb-1">The AI Stock Investor's Guide (2025 Edition)</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">Learn how to use AI to identify winning stocks and build a profitable investment portfolio</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800/50 rounded-xl p-4 border border-cyan-500/20">
                <div className="flex items-start gap-3">
                  <div className="bg-cyan-500 rounded-full p-2 flex-shrink-0">
                    <span className="text-lg">🛡</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base mb-1">Future Careers: AI-Proof Jobs of the Next 10 Years</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">Discover which careers will thrive in the AI era and how to position yourself for long-term success</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-4">
              <p className="text-cyan-400 font-bold text-sm">
                💰 Total Bonus Value: $497 - Yours FREE Today!
              </p>
            </div>
          </div>
        </div>

        {/* Social Proof Section */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            HERE'S PROOF THIS ACTUALLY WORKS FOR REGULAR PEOPLE:
          </h2>
          
          <p className="text-xl text-gray-300 mb-6 italic">
            I know what you're thinking - <span className="text-gray-400">"This sounds too good to be true."</span>
          </p>
          
          <p className="text-2xl font-bold text-white mb-6">
            I get it.
          </p>
          
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            That's why 97% of people who land on this page don't end up starting a business; <span className="font-bold underline">EVER.</span>
          </p>
          
          <p className="text-lg text-gray-400 italic mb-6">
            Because everything sounds too good to be true.
          </p>
          
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            I thought the same thing until I started seeing the results.
          </p>
          
          <p className="text-lg text-gray-300 mb-10 leading-relaxed">
            And I have even MORE conviction now after helping dozens of people replicate my success.
          </p>
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

        {/* Guarantee Section */}
        <div className="max-w-4xl mx-auto text-center py-16">
          {/* Professional Badge */}
          <div className="inline-flex items-center gap-3 bg-cyan-500/20 text-cyan-400 px-8 py-4 rounded-full text-lg font-bold mb-8 border border-cyan-500/40 shadow-lg">
            <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
            </div>
            <span>100% SUCCESS COMMITMENT</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8 leading-tight">
            YOUR SUCCESS IS MY PRIORITY
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            I know you might be thinking, "This sounds great, but what if it doesn't work for me?"
          </p>
          
          <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto font-semibold">
            Here's the thing - I'm committed to making sure you succeed with AI Masterclass.
          </p>
          
          <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            If you're not seeing results or have any questions, just reach out to us. I'll personally work with you to make sure you get the value you're looking for.
          </p>
          
          <p className="text-lg text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            Whether it's extra support, custom guidance, or anything else - I'll do whatever it takes to help you succeed.
          </p>

          <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            That's how confident I am that this system works when you actually implement it.
          </p>
          
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            I've seen this system work for hundreds of people from all different backgrounds. Corporate employees, stay-at-home parents, recent graduates, people who've never made money online before.
          </p>
          
          <p className="text-2xl font-bold text-white mt-8">
            The only question is: are you ready to be next?
          </p>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mt-20 mb-16">
          <h2 className="text-4xl sm:text-5xl font-black mb-12 text-center">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          
          <div className="space-y-4">
            {/* FAQ 1 */}
            <div className="bg-gray-900/80 border-2 border-cyan-500/30 rounded-2xl p-6 hover:border-cyan-500/60 transition-all">
              <h3 className="text-xl font-bold text-white mb-3">Do I need any technical background to take this course?</h3>
              <p className="text-gray-400 leading-relaxed">No technical background required! This training is designed for complete beginners. We'll teach you everything from the ground up, including how to use AI tools without any coding knowledge.</p>
            </div>
            
            {/* FAQ 2 */}
            <div className="bg-gray-900/80 border-2 border-cyan-500/30 rounded-2xl p-6 hover:border-cyan-500/60 transition-all">
              <h3 className="text-xl font-bold text-white mb-3">How long will it take to see results?</h3>
              <p className="text-gray-400 leading-relaxed">Most students start seeing results within weeks of implementing our strategies. Some have even started earning money in their first week by applying the AI automation techniques we teach.</p>
            </div>
            
            {/* FAQ 3 */}
            <div className="bg-gray-900/80 border-2 border-cyan-500/30 rounded-2xl p-6 hover:border-cyan-500/60 transition-all">
              <h3 className="text-xl font-bold text-white mb-3">What if I'm not satisfied with the course?</h3>
              <p className="text-gray-400 leading-relaxed">We're confident you'll love the course, but if you have any concerns, please reach out to our support team. We're here to help ensure you get the most value from your investment.</p>
            </div>
            
            {/* FAQ 4 */}
            <div className="bg-gray-900/80 border-2 border-cyan-500/30 rounded-2xl p-6 hover:border-cyan-500/60 transition-all">
              <h3 className="text-xl font-bold text-white mb-3">How long do I have access to the course?</h3>
              <p className="text-gray-400 leading-relaxed">You get lifetime access to the course content, including all future updates and new modules we add. You can learn at your own pace and revisit the material anytime.</p>
            </div>
            
            {/* FAQ 5 */}
            <div className="bg-gray-900/80 border-2 border-cyan-500/30 rounded-2xl p-6 hover:border-cyan-500/60 transition-all">
              <h3 className="text-xl font-bold text-white mb-3">What kind of support do you provide?</h3>
              <p className="text-gray-400 leading-relaxed">We provide professional support through our dedicated student community, email support, and detailed course materials. You're never alone in your learning journey.</p>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-400 mt-4 text-center">
          ⚡ Instant access • Lifetime access • Join 2,000+ successful students
        </p>
      </section>
      </main>
    </>
  )
}




