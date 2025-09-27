"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { useToast } from '@/components/ui/use-toast'
import { CheckCircle, Download, Star, Users, Clock, ArrowRight, Zap, Target, TrendingUp } from 'lucide-react'
import { event } from '@/lib/gtag'

export default function FreeGuidePage() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 })
  const [downloadCount, setDownloadCount] = useState(2847)
  const [showPopup, setShowPopup] = useState(false)
  const [currentDownload, setCurrentDownload] = useState({ name: "Sarah M.", location: "California" })
  const { toast } = useToast()

  // Countdown timer logic - resets daily at midnight
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const tomorrow = new Date(now)
      tomorrow.setDate(tomorrow.getDate() + 1)
      tomorrow.setHours(0, 0, 0, 0)
      
      const difference = tomorrow.getTime() - now.getTime()
      
      if (difference > 0) {
        const hours = Math.floor(difference / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)
        
        setTimeLeft({ hours, minutes, seconds })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  // Live download popup logic
  useEffect(() => {
    const showDownloadPopup = () => {
      // Show popup every 8-15 seconds
      const interval = Math.random() * 7000 + 8000 // 8-15 seconds
      
      setTimeout(() => {
        // Generate new fake user
        const names = ["Alex", "Maria", "John", "Lisa", "Chris", "Emma", "Ryan", "Sofia", "James", "Olivia"]
        const locations = ["California", "Texas", "Florida", "New York", "Illinois", "Georgia", "North Carolina", "Arizona", "Washington", "Colorado"]
        
        const newDownload = {
          name: `${names[Math.floor(Math.random() * names.length)]} ${String.fromCharCode(65 + Math.floor(Math.random() * 26))}.`,
          location: locations[Math.floor(Math.random() * locations.length)]
        }
        
        setCurrentDownload(newDownload)
        setDownloadCount(prev => prev + 1)
        setShowPopup(true)
        
        // Hide popup after 3 seconds
        setTimeout(() => {
          setShowPopup(false)
        }, 3000)
        
        showDownloadPopup() // Schedule next popup
      }, interval)
    }
    
    showDownloadPopup()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address",
        variant: "destructive"
      })
      return
    }

    setIsLoading(true)

    try {
      // Send email via Resend API
      const response = await fetch('/api/send-free-guide', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (!response.ok) {
        throw new Error('Failed to send email')
      }

      const result = await response.json()
      console.log('📧 Form submitted successfully:', result)
      setIsSubmitted(true)
      
      // Fire Meta Pixel Lead event (with retry if fbq not ready yet)
      const fireLeadEvent = () => {
        try {
          if (typeof window !== 'undefined' && (window as any).fbq) {
            (window as any).fbq('track', 'Lead')
            console.log('Facebook Pixel Lead event fired')
          } else {
            setTimeout(fireLeadEvent, 100)
          }
        } catch (err) {
          // swallow to avoid blocking UX
        }
      }
      fireLeadEvent()
      
      // Track successful form submission
      event({
        action: 'form_submit',
        category: 'engagement',
        label: 'free_guide_signup',
        value: 1
      })
      
      if (result.emailDelivered) {
        toast({
          title: "Success!",
          description: "Check your email for your free Advanced Prompt Pack!",
        })
      } else {
        toast({
          title: "Success!",
          description: "Your free Advanced Prompt Pack is ready for download!",
        })
      }
    } catch (error) {
      console.error('Email sending error:', error)
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      })
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 flex items-center justify-center p-4">
        <Card className="max-w-2xl w-full p-8 text-center">
          <div className="mb-6">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Success! 🎉
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Your Free AI Guide is ready! <br/>
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">📧 Don't miss out - check your email at <strong>{email}</strong> for exclusive premium content!</span>
            </p>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Get Your Free AI Guide:
            </h3>
            <div className="space-y-3">
              <a 
                href="/downloads/3steps.pdf" 
                download
                className="flex items-center justify-center w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <Download className="w-5 h-5 mr-2" />
                📥 Download 3 Steps Guide (Instant)
              </a>
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-4 rounded-lg border-2 border-yellow-300 dark:border-yellow-600">
                <p className="text-sm text-yellow-800 dark:text-yellow-200 text-center font-bold">
                  🚨 <strong>URGENT:</strong> Your exclusive premium content is waiting in your email!<br/>
                  <span className="text-xs">Don't let this opportunity slip away - check now!</span>
                </p>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                ✅ Instant download above<br/>
                ✅ <strong>Exclusive premium content in your email</strong> - Check now!
              </p>
            </div>
          </div>

          {/* URGENT UPSELL SECTION */}
          <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-6 rounded-xl border-2 border-red-200 dark:border-red-600 mb-6">
            <div className="text-center">
              <div className="inline-flex items-center bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 px-4 py-2 rounded-full text-sm font-bold mb-4">
                🚨 LIMITED TIME OFFER
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Ready to Scale Your Business with Advanced AI Systems?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                You just got your introduction to AI-powered side hustles. Now access the complete framework with advanced automation and workflow optimization.
              </p>
              
              {/* Social Proof Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">$2.3M+</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Total Profits</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">2,000+</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">4.9/5</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Rating</div>
                </div>
              </div>

              {/* What You Get */}
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-4">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">What You Get in the Complete AI Masterclass:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <div>✅ 50+ Advanced AI Prompts</div>
                  <div>✅ 6 Comprehensive Modules</div>
                  <div>✅ 4 Hands-On Projects</div>
                  <div>✅ 10+ Downloadable Guides</div>
                  <div>✅ Lifetime Access</div>
                  <div>✅ Certificate Included</div>
                </div>
              </div>

              {/* Price and Urgency */}
              <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white p-4 rounded-lg mb-4">
                <div className="text-sm opacity-90">Regular Price: $497</div>
                <div className="text-3xl font-bold">Today Only: $97</div>
                <div className="text-sm opacity-90">Save $400 - Limited Time!</div>
              </div>

              <Button 
                onClick={() => {
                  // Track upsell button click
                  event({
                    action: 'button_click',
                    category: 'conversion',
                    label: 'upsell_to_full_course',
                    value: 97
                  })
                  window.location.href = '/get-course'
                }}
                className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white text-lg py-4 font-bold mb-2"
              >
                🚀 Get AI Masterclass - $97
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <p className="text-xs text-gray-500 dark:text-gray-400">
                ⚡ Instant access • Lifetime access • Join 2,000+ successful students
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline"
              onClick={() => window.location.href = '/'}
            >
              Back to Home
            </Button>
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div 
        className="relative overflow-hidden"
        style={{
          backgroundImage: "url('/images/hero-background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#000000"
        }}
      >
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/30 md:bg-black/20"></div>
        
        {/* Additional Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 md:from-black/10 via-transparent to-black/30 md:to-black/20"></div>
        
        <div className="relative container mx-auto px-3 py-6 md:py-20">
          <div className="text-center max-w-5xl mx-auto">
            {/* Status Bar - Mobile Optimized */}
            <div className="inline-flex items-center bg-green-500 text-black px-3 py-2 md:px-6 md:py-3 rounded-full text-xs md:text-lg font-bold mb-3 md:mb-8">
              🚀 FREE DOWNLOAD — LIMITED ACCESS
            </div>
            
            {/* Main Headline - Mobile Optimized */}
            <h1 className="text-3xl md:text-6xl lg:text-8xl font-black text-white mb-4 md:mb-8 leading-tight px-2">
              3 Steps to Your First<br/>
              <span className="text-green-400">AI-Powered Side Hustle</span>
            </h1>
            <p className="text-sm md:text-xl text-gray-400 -mt-2 md:-mt-4 mb-4 md:mb-6 px-3">
              Use 3 prompts to launch a simple AI offer this week.
            </p>
            
            {/* Subheadline - Mobile Optimized */}
            <p className="text-lg md:text-2xl lg:text-3xl text-gray-300 mb-6 md:mb-6 max-w-4xl mx-auto leading-relaxed px-3">
              No experience needed. No face required. Just follow the system and launch.
            </p>
            
            {/* Countdown Timer - Mobile Optimized */}
            <div className="mb-4 md:mb-6">
              <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-lg font-bold shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                <Clock className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                ⏰ Only {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s left to get this FREE guide!
              </div>
            </div>
            
            
            {/* Micro-promise list (compact on mobile, boxes on desktop) */}
            <p className="md:hidden text-gray-300 text-xs px-3 mb-3">
              Quick wins: pick a niche, generate an offer, publish your first post in minutes.
            </p>
            <div className="hidden md:block max-w-xl mx-auto mb-4 md:mb-6 text-gray-300 text-base">
              <ul className="grid grid-cols-3 gap-4">
                <li className="bg-white/5 rounded-lg px-3 py-2">Pick a profitable niche with AI prompts</li>
                <li className="bg-white/5 rounded-lg px-3 py-2">Generate an offer people actually want</li>
                <li className="bg-white/5 rounded-lg px-3 py-2">Publish your first post with a proven template</li>
              </ul>
            </div>

            {/* Email Signup Form - Mobile Optimized */}
            <div className="max-w-2xl mx-auto px-3 mb-8 md:mb-20">
              <Card className="p-6 md:p-8 bg-black/80 border-2 border-green-500 backdrop-blur-sm">
                <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                  <div>
                    <Input
                      type="email"
                      placeholder="Enter your email to get instant access"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full text-lg md:text-xl py-5 md:py-6 bg-gray-800 border-gray-600 text-white placeholder-gray-400 text-center rounded-xl min-h-[56px] touch-manipulation"
                      required
                      autoComplete="email"
                      inputMode="email"
                    />
                    <p className="md:hidden text-[10px] text-gray-500 mt-2">
                      We’ll never share your email.
                    </p>
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg md:text-2xl font-black py-6 md:py-6 rounded-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 min-h-[64px] md:min-h-[72px] touch-manipulation active:scale-95"
                  >
                    {isLoading ? (
                      "Sending..."
                    ) : (
                      <>
                        📥 GET MY FREE GUIDE
                      </>
                    )}
                  </Button>
                  
                  <p className="text-gray-400 text-xs md:text-sm text-center px-2">
                    Takes 30 seconds. No spam. Unsubscribe anytime.
                  </p>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>


      {/* What You're Going To Learn Section - Mobile Optimized */}
      <div className="py-8 md:py-20 bg-black">
        <div className="container mx-auto px-3">
          <div className="text-center mb-8 md:mb-20">
            <h2 className="text-2xl md:text-5xl lg:text-6xl font-black text-white mb-3 md:mb-8 px-2">
              What You're Going To Learn
            </h2>
            <p className="text-base md:text-2xl text-gray-300 max-w-4xl mx-auto px-3">
              A Comprehensive Look at What You'll Get in Your Free AI Guide
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 md:gap-12 max-w-7xl mx-auto">
            {/* Step 1 - Mobile Optimized */}
            <div className="bg-gray-900 border-2 border-green-500 rounded-2xl p-4 md:p-10 text-center hover:border-green-400 transition-all duration-300">
              <div className="mb-4 md:mb-8">
                <div className="text-xl md:text-4xl font-black text-green-400 mb-1 md:mb-4">STEP 01</div>
                <div className="text-xs md:text-lg text-gray-400 mb-3 md:mb-6">🚀 GET STARTED</div>
              </div>
              <h3 className="text-lg md:text-3xl font-bold text-white mb-3 md:mb-6">The AI Opportunity</h3>
              <div className="text-left space-y-2 md:space-y-4 text-xs md:text-base text-gray-300">
                <p>How beginners are <strong className="text-white">taking advantage of AI</strong> to get started without showing their face or creating content.</p>
                <p>Why <strong className="text-white">"AI-Powered Side Hustles"</strong> is the best opportunity of 2025.</p>
                <p>The difference between <strong className="text-white">working harder and working smarter</strong> (and why the first group stays broke while the second makes money).</p>
              </div>
            </div>
            
            {/* Step 2 - Mobile Optimized */}
            <div className="bg-gray-900 border-2 border-green-500 rounded-2xl p-4 md:p-10 text-center hover:border-green-400 transition-all duration-300">
              <div className="mb-4 md:mb-8">
                <div className="text-xl md:text-4xl font-black text-green-400 mb-1 md:mb-4">STEP 02</div>
                <div className="text-xs md:text-lg text-gray-400 mb-3 md:mb-6">⚡ AUTOMATE</div>
              </div>
              <h3 className="text-lg md:text-3xl font-bold text-white mb-3 md:mb-6">5 Proven AI Prompts</h3>
              <div className="text-left space-y-2 md:space-y-4 text-xs md:text-base text-gray-300">
                <p>How to find <strong className="text-white">Hidden Golden Mines</strong> of proven AI prompts that actually work.</p>
                <p>How to use AI to <strong className="text-white">automate your business</strong> even if you have no previous expertise.</p>
                <p>The <strong className="text-white">untold difference</strong> between failing prompts and prompts that scale to 6 & 7 figures.</p>
              </div>
            </div>
            
            {/* Step 3 - Mobile Optimized */}
            <div className="bg-gray-900 border-2 border-green-500 rounded-2xl p-4 md:p-10 text-center hover:border-green-400 transition-all duration-300">
              <div className="mb-4 md:mb-8">
                <div className="text-xl md:text-4xl font-black text-green-400 mb-1 md:mb-4">STEP 03</div>
                <div className="text-xs md:text-lg text-gray-400 mb-3 md:mb-6">💰 SCALE</div>
              </div>
              <h3 className="text-lg md:text-3xl font-bold text-white mb-3 md:mb-6">Launch & Scale</h3>
              <div className="text-left space-y-2 md:space-y-4 text-xs md:text-base text-gray-300">
                <p>How to access an <strong className="text-white">Untapped Source of Customers</strong> and borrow other people's audience to promote your AI services.</p>
                <p>How to get sales <strong className="text-white">without creating content</strong> or showing your face.</p>
                <p>The secret to <strong className="text-white">validating your business</strong> and <strong className="text-white">scaling your revenue</strong> without taking big risks or investing in ads.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section - Mobile Optimized */}
      <div className="py-8 md:py-20 bg-gray-900">
        <div className="container mx-auto px-3">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-5xl lg:text-6xl font-black text-white mb-3 md:mb-8 px-2">
              Real Results from Real Entrepreneurs
            </h2>
            <p className="text-base md:text-2xl text-gray-300 max-w-4xl mx-auto px-3">
              See how these entrepreneurs transformed their businesses using the exact system in this guide
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-7xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-black/60 border-2 border-green-500/30 rounded-2xl p-4 md:p-6 hover:border-green-400 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                  SM
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm md:text-base">Me</h4>
                  <p className="text-gray-400 text-xs md:text-sm">Founder</p>
                </div>
              </div>
              <div className="text-yellow-400 text-lg md:text-2xl font-bold mb-2">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
                "I built an <strong className="text-white">AI trading algorithm</strong> to pick stocks for me using these exact prompts. Was able to take my portfolio from <strong className="text-green-400">$3K to $127K</strong>!"
              </p>
              {/* Money Proof Image */}
              <div className="text-center">
                <img 
                  src="/images/127k.PNG" 
                  alt="Portfolio growth from $3K to $127K" 
                  className="w-full max-w-xs mx-auto rounded-lg border-2 border-green-500/30"
                />
              </div>
              <p className="text-gray-500 text-xs mt-3 text-center">Offer: AI trading signals • Time: — • Result: $127K</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-black/60 border-2 border-green-500/30 rounded-2xl p-4 md:p-6 hover:border-green-400 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                  MR
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm md:text-base">Mike R.</h4>
                  <p className="text-gray-400 text-xs md:text-sm">Texas</p>
                </div>
              </div>
              <div className="text-yellow-400 text-lg md:text-2xl font-bold mb-2">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
                "Finally found a system that works! I was struggling to get clients, but these AI prompts helped me <strong className="text-white">sell my social media management service on Facebook</strong>. Made <strong className="text-green-400">$704</strong> in my first week using these exact prompts!"
              </p>
              {/* Money Proof Image */}
              <div className="text-center">
                <img 
                  src="/images/money3.jpg" 
                  alt="Cash App balance showing $704 from social media service sales" 
                  className="w-full max-w-xs mx-auto rounded-lg border-2 border-green-500/30"
                />
              </div>
              <p className="text-gray-500 text-xs mt-3 text-center">Offer: Social media management • Time: 1 week • Result: $704</p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-black/60 border-2 border-green-500/30 rounded-2xl p-4 md:p-6 hover:border-green-400 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                  JL
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm md:text-base">Jessica L.</h4>
                  <p className="text-gray-400 text-xs md:text-sm">Florida</p>
                </div>
              </div>
              <div className="text-yellow-400 text-lg md:text-2xl font-bold mb-2">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
                "I was skeptical at first, but this guide changed everything. Used these AI prompts to <strong className="text-white">sell client automation software to a local doctor</strong>. Made <strong className="text-green-400">$5,016</strong> in my first month using these exact prompts!"
              </p>
              {/* Money Proof Image */}
              <div className="text-center">
                <img 
                  src="/images/money4.JPG" 
                  alt="Cash Balance showing $5,016 from automation software sale" 
                  className="w-full max-w-xs mx-auto rounded-lg border-2 border-green-500/30"
                />
              </div>
              <p className="text-gray-500 text-xs mt-3 text-center">Offer: Client automation software • Time: 1 month • Result: $5,016</p>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-black/60 border-2 border-green-500/30 rounded-2xl p-4 md:p-6 hover:border-green-400 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                  DK
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm md:text-base">David K.</h4>
                  <p className="text-gray-400 text-xs md:text-sm">New York</p>
                </div>
              </div>
              <div className="text-yellow-400 text-lg md:text-2xl font-bold mb-2">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
                "Best investment I've made! These AI prompts helped me <strong className="text-white">launch a small online service selling custom AI-generated art</strong>. My PayPal balance shows <strong className="text-green-400">$1,366.70</strong> from my first few sales!"
              </p>
              {/* Money Proof Image */}
              <div className="text-center">
                <img 
                  src="/images/money2.JPG" 
                  alt="PayPal balance showing $1,366.70 from AI art sales" 
                  className="w-full max-w-xs mx-auto rounded-lg border-2 border-green-500/30"
                />
              </div>
              <p className="text-gray-500 text-xs mt-3 text-center">Offer: Custom AI-generated art • Time: first few sales • Result: $1,366.70</p>
            </div>

          </div>

          {/* Trust Badge */}
          <div className="text-center mt-8 md:mt-12">
            <div className="inline-flex items-center bg-green-500/10 border-2 border-green-500 rounded-full px-4 py-2 md:px-6 md:py-3 text-green-400 text-sm md:text-lg font-bold">
              <Star className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              ⭐ 4.9/5 Rating from 2,000+ Students
            </div>
          </div>
        </div>
      </div>

      {/* The Cost of Doing Nothing Section - Mobile Optimized */}
      <div className="py-8 md:py-20 bg-gray-900">
        <div className="container mx-auto px-3">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-xl md:text-5xl lg:text-6xl font-black text-white mb-3 md:mb-8 px-2">
              The Cost of Doing Nothing vs. Getting the Guide
            </h2>
            <p className="text-sm md:text-2xl text-gray-300 max-w-4xl mx-auto mb-3 md:mb-8 px-3">
              If you don't act, nothing changes. The problem is: most people don't know what to act upon. That's why I've created this guide.
            </p>
            <p className="text-xs md:text-xl text-gray-300 max-w-4xl mx-auto px-3">
              When you get this <strong className="text-white">Free AI Guide</strong>, you'll learn how to create a Digital Business from scratch and monetise it using AI. You'll get the blueprint to create a new income stream that doesn't depend on trading your time for money.
            </p>
          </div>
          
          {/* Urgency Message */}
          <p className="text-center text-sm md:text-lg text-gray-400 mb-6 md:mb-8 max-w-4xl mx-auto">
            Every week you wait costs you leads and momentum.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 max-w-6xl mx-auto">
            {/* With This Guide - Mobile Optimized */}
            <div className="bg-green-500/10 border-2 border-green-500 rounded-2xl p-6 md:p-10">
              <h3 className="text-xl md:text-4xl font-bold text-green-400 mb-6 md:mb-8 text-center">With This Guide</h3>
              <ul className="space-y-4 md:space-y-6 text-white">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-green-400 mr-3 md:mr-4 mt-0.5 md:mt-1 flex-shrink-0" />
                  <span className="text-sm md:text-xl"><strong>You'll have clarity</strong> on what steps to take to create your 1st AI-powered business.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-green-400 mr-3 md:mr-4 mt-0.5 md:mt-1 flex-shrink-0" />
                  <span className="text-sm md:text-xl"><strong>You'll unlock a model</strong> that allows you to sell more without having to invest more of your time.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-green-400 mr-3 md:mr-4 mt-0.5 md:mt-1 flex-shrink-0" />
                  <span className="text-sm md:text-xl"><strong>You'll stop working harder</strong> and start working smarter.</span>
                </li>
              </ul>
            </div>
            
            {/* Without This Guide - Mobile Optimized */}
            <div className="bg-red-500/10 border-2 border-red-500 rounded-2xl p-6 md:p-10">
              <h3 className="text-xl md:text-4xl font-bold text-red-400 mb-6 md:mb-8 text-center">Without This Guide</h3>
              <ul className="space-y-4 md:space-y-6 text-white">
                <li className="flex items-start">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-red-500 rounded-full mr-3 md:mr-4 mt-0.5 md:mt-1 flex-shrink-0 flex items-center justify-center">
                    <span className="text-white font-bold text-sm md:text-xl">✕</span>
                  </div>
                  <span className="text-sm md:text-xl">You'll lack the clarity on what to execute and need to figure things out through trial & error.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-red-500 rounded-full mr-3 md:mr-4 mt-0.5 md:mt-1 flex-shrink-0 flex items-center justify-center">
                    <span className="text-white font-bold text-sm md:text-xl">✕</span>
                  </div>
                  <span className="text-sm md:text-xl">You'll miss out on the best opportunity of 2025 to create an AI business as a beginner.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-red-500 rounded-full mr-3 md:mr-4 mt-0.5 md:mt-1 flex-shrink-0 flex items-center justify-center">
                    <span className="text-white font-bold text-sm md:text-xl">✕</span>
                  </div>
                  <span className="text-sm md:text-xl">You'll still need to <strong>trade your time</strong> for money.</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* CTA in middle - Mobile Optimized */}
          <div className="text-center mt-8 md:mt-16 px-3">
            <Button 
              onClick={() => document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg md:text-2xl font-black px-8 py-5 md:px-16 md:py-8 rounded-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 min-h-[64px] md:min-h-[72px] touch-manipulation active:scale-95"
            >
              📥 GET MY FREE GUIDE
            </Button>
            <p className="text-gray-400 text-xs md:text-lg mt-2 md:mt-4">*Instant Access — No Hidden Costs</p>
          </div>
        </div>
      </div>

      {/* Prize/Incentive Section - Mobile Optimized */}
      <div className="py-8 md:py-20 bg-black">
        <div className="container mx-auto px-3">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-6xl lg:text-7xl font-black text-white mb-3 md:mb-8 px-2">
              $2.3M<br/>
              <span className="text-green-400">in Results</span>
            </h2>
            <p className="text-sm md:text-2xl text-gray-300 max-w-4xl mx-auto px-3">
              These aren't just numbers on a screen. These are real entrepreneurs who started with zero experience and built profitable AI businesses using the exact system you're about to learn.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-xl md:text-4xl font-black text-green-400 mb-1 md:mb-4">60 Sec</div>
              <div className="text-xs md:text-lg text-gray-300">Access</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-4xl font-black text-green-400 mb-1 md:mb-4">2,000+</div>
              <div className="text-xs md:text-lg text-gray-300">Students</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-4xl font-black text-green-400 mb-1 md:mb-4">Zero</div>
              <div className="text-xs md:text-lg text-gray-300">Experience Needed</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-4xl font-black text-green-400 mb-1 md:mb-4">4.9/5</div>
              <div className="text-xs md:text-lg text-gray-300">Rating</div>
            </div>
          </div>
        </div>
      </div>


      {/* Footer - Mobile Optimized */}
      <div className="py-8 md:py-12 bg-black border-t border-gray-800">
        <div className="container mx-auto px-3">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8 mb-6 md:mb-8">
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">Privacy Policy</a>
              <span className="text-gray-600 hidden md:inline">|</span>
              <a href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">Terms & Conditions</a>
            </div>
            <p className="text-gray-500 text-xs md:text-sm mb-3 md:mb-4 px-2">
              This site is not a part of the Facebook website or Facebook Inc. Additionally, This site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
            </p>
            <p className="text-gray-500 text-xs md:text-sm">
              ©2025 AI Masterclass. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Floating Download Popup - Mobile Optimized */}
      {showPopup && (
        <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-xs z-50 animate-in slide-in-from-bottom-2 duration-300">
          <div className="bg-green-500/90 backdrop-blur-sm border-2 border-green-400 rounded-xl p-4 shadow-2xl">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse flex-shrink-0"></div>
              <div className="text-white text-sm md:text-base font-semibold leading-tight">
                {currentDownload.name} from {currentDownload.location} just downloaded!
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Disclaimer - Mobile Optimized */}
      <div className="py-4 md:py-6 bg-gray-900 border-t border-gray-700">
        <div className="container mx-auto px-3">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed px-2">
              <strong className="text-yellow-400">⚠️ Disclaimer:</strong> Results not guaranteed. Individual results vary. 
              <strong className="text-white"> You get what you put in.</strong> This guide is for educational purposes only. 
              No income promises. Always do your own research.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
