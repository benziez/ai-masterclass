'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import StickyMobileCTA from '@/components/StickyMobileCTA'
import { 
  Users, 
  Star, 
  Shield, 
  Timer, 
  ArrowRight, 
  CheckCircle,
  Play,
  TrendingUp,
  Zap,
  Target,
  Check,
  Mail,
  Phone,
  MapPin
} from 'lucide-react'

export const dynamic = 'force-dynamic'

export default function GetCoursePage() {
  // State for progress bar and countdown
  const [spotsLeft, setSpotsLeft] = useState(7)
  const [timeLeft, setTimeLeft] = useState(3600) // 1 hour in seconds

  // Toast notification
  const { toast } = useToast()

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          return 3600 // Reset to 1 hour
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Format time for display
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const handleCheckout = () => {
    // Direct link to your live Stripe payment page
    window.location.href = 'https://buy.stripe.com/4gMeVc9xcdv964h7tt5gc03'
  }

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Former Teacher",
      income: "$8,400/month",
      videoId: "1115366447",
      text: "I went from spending 8 hours writing a blog post to creating the same quality content in just 2 hours using AI. Now I'm making $8,400/month as a content creator."
    },
    {
      name: "Marcus",
      role: "Agency Owner",
      income: "$50,000+/month",
      text: "I went from freelancing at $3,000/month to running an agency with 15 employees making over $50K/month. This training was the game-changer."
    },
    {
      name: "David",
      role: "Startup Analyst",
      income: "$85,000/year",
      text: "I was a junior analyst making $45K/year. Within 3 months of this training, I got promoted to AI Innovation Lead with an $85K salary."
    }
  ]

  const successStories = [
    {
      name: "David Kim",
      before: "$3,200/month",
      after: "$9,600/month",
      timeframe: "4 months"
    },
    {
      name: "Lisa Thompson",
      before: "$2,800/month",
      after: "$7,200/month",
      timeframe: "3 months"
    },
    {
      name: "James Wilson",
      before: "$4,100/month",
      after: "$11,800/month",
      timeframe: "5 months"
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Schema Markup for Course */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "AI Masterclass - AI Business Strategies Course",
            "description": "Learn the exact AI strategies that helped students make $2.3M+ in profits. Build profitable AI businesses with no experience required.",
            "provider": {
              "@type": "Organization",
              "name": "AI Masterclass",
              "url": "https://aimasterclass.info"
            },
            "offers": {
              "@type": "Offer",
              "price": "97",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "url": "https://aimasterclass.info/get-course"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "2000"
            },
            "courseMode": "online",
            "educationalLevel": "beginner",
            "inLanguage": "en"
          })
        }}
      />
      <StickyMobileCTA priceMain="$97" priceStrike="$497" />
      {/* Enhanced Sticky Header */}
      <header className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-3 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                AI Masterclass
              </div>
              <div className="hidden md:flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <Users className="h-4 w-4" />
                  <span>2,000+ students</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span>4.9/5 rating</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <Shield className="h-4 w-4" />
                  <span>Professional support</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 text-sm text-red-600 dark:text-red-400 font-medium">
                <Timer className="h-4 w-4" />
                <span>Only {spotsLeft} spots left</span>
              </div>
              <Button 
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                onClick={handleCheckout}
              >
                Get Training - <span className="line-through text-gray-400">$497</span> <span className="text-green-500 font-bold ml-2">$97</span>
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-3 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-12 px-2">
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              How My Students Are Making <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">$5K-$15K/Month</span> With <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">AI Strategies</span>...
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto px-2">
              And how YOU can do the same, with no experience or "tech skills"...
            </p>
          </div>

          {/* Hero Video Section */}
          <div className="relative w-full max-w-4xl mx-auto px-2">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://player.vimeo.com/video/1116871557?title=0&byline=0&portrait=0&badge=0&autopause=0&muted=0&autoplay=0&playsinline=1"
                className="w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Content Below Video */}
          <div className="text-center max-w-4xl mx-auto px-2">
            {/* Progress Bar - Replaces Limited Time Offer */}
            <div className="inline-flex flex-col items-center gap-2 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border border-red-200 dark:border-red-800 rounded-xl px-3 py-3 mb-6 mt-8 max-w-full">
              <div className="flex items-center gap-2 text-red-600 dark:text-red-400 font-medium">
                <span className="text-base">🔥</span>
                <span className="text-base">Only {spotsLeft} spots left at <span className="line-through text-gray-400">$497</span> <span className="text-green-500 font-bold ml-2">$97</span></span>
              </div>
              
              {/* Progress Bar */}
              <div className="w-48 h-2 bg-red-200 dark:bg-red-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-red-500 to-orange-500 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${((50 - spotsLeft) / 50) * 100}%` }}
                />
              </div>
              
              <div className="text-xs text-red-600 dark:text-red-400 font-medium">
                {50 - spotsLeft} of 50 spots taken
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 px-2">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg font-semibold px-6 sm:px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:scale-105 w-full sm:w-auto"
                onClick={handleCheckout}
              >
                Get Training Now - <span className="line-through text-white/80">$497</span> <span className="text-white font-bold ml-2">$97</span>
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <div className="text-center">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  ⚡ Instant access • 🔒 Secure payment
                </div>
                <div className="text-xs text-gray-400 dark:text-gray-500">
                  Only {spotsLeft} spots remaining
                </div>
              </div>
            </div>

            {/* Value Anchoring */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8 mx-4">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
                  💡 Think About It This Way...
                </h3>
                <p className="text-blue-800 dark:text-blue-200 mb-4">
                  <strong>Here's the truth:</strong> Most people waste 10+ hours per week on tasks that AI can do in minutes. This training shows you exactly how to reclaim that time and turn it into your <strong>first $5,000-$15,000</strong> in additional income. At $97, you're paying less than what most people spend on coffee in a month.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                  <div className="bg-white dark:bg-gray-800 p-3 rounded border">
                    <div className="font-semibold text-gray-900 dark:text-white">1:1 AI Training</div>
                    <div className="text-gray-600 dark:text-gray-400">$1,000+</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded border">
                    <div className="font-semibold text-gray-900 dark:text-white">Coding Bootcamp</div>
                    <div className="text-gray-600 dark:text-gray-400">$5,000+</div>
                  </div>
                  <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded border border-green-300 dark:border-green-700">
                    <div className="font-semibold text-green-900 dark:text-green-100">This Course</div>
                    <div className="text-green-700 dark:text-green-300 font-bold">$97</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600 dark:text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>2,000+ students enrolled</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span>4.9/5 average rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>Professional support included</span>
              </div>
            </div>

            {/* Video Benefits */}
            <div className="text-center">
              <p className="text-xl text-gray-800 dark:text-gray-200 mb-4 font-medium">
                🚀 Imagine waking up tomorrow knowing you have the exact blueprint that's already helped thousands of people make their <span className="text-green-600 dark:text-green-400 font-bold">first $5,000-$15,000</span> with AI
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 dark:text-gray-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="font-medium">Zero technical experience needed</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="font-medium">Start earning within 30 days</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="font-medium">Work from anywhere in the world</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Profit Screenshots Collage - Replaces Testimonials */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-3 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Real Profit Screenshots
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                See the actual results our students are getting with AI strategies. These are real profit screenshots from real people.
              </p>
            </div>

            {/* Money Proof Testimonials - Same as Training Page */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Testimonial 1 - Mike R. */}
              <div className="bg-black/60 border-2 border-green-500/30 rounded-2xl p-6 hover:border-green-400 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                    MR
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base">Mike R.</h4>
                    <p className="text-gray-400 text-sm">Texas</p>
                  </div>
                </div>
                <div className="text-yellow-400 text-2xl font-bold mb-3">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
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

              {/* Testimonial 2 - Jessica L. */}
              <div className="bg-black/60 border-2 border-green-500/30 rounded-2xl p-6 hover:border-green-400 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                    JL
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base">Jessica L.</h4>
                    <p className="text-gray-400 text-sm">Florida</p>
                  </div>
                </div>
                <div className="text-yellow-400 text-2xl font-bold mb-3">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
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
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-10">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                These are just a few examples. Join thousands who are already earning with AI.
              </p>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-200"
                onClick={handleCheckout}
              >
                Start Earning Now - <span className="line-through text-white/80">$497</span> <span className="text-white font-bold ml-2">$97</span>
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </div>
        </section>

      {/* Lifestyle Section - What You'll Achieve */}
      <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20">
        <div className="container mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Live the AI Masterclass Lifestyle
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              See what your life could look like after implementing these AI strategies. Work from anywhere, earn more, and enjoy true financial freedom.
            </p>
          </div>

          {/* Lifestyle Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Work from Anywhere */}
          <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="aspect-video overflow-hidden relative">
              <img
                src="/images/lifestyle/boat.jpeg"
                loading="lazy"
                decoding="async"
                alt="Working from a beautiful beach in the Bahamas"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* AI MASTERCLASS Watermark */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-3xl font-bold text-white/25 select-none transform -rotate-12 tracking-wider">
                  AI MASTERCLASS
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Work From Anywhere</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Writing this week's module while watching the sun set by the marina in Montenegro. The best part of building online systems is that work blends right into travel.
              </p>
            </div>
          </div>

          {/* Luxury Lifestyle */}
          <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="aspect-video overflow-hidden relative">
              <img
                src="/images/lifestyle/gwagon.jpg"
                loading="lazy"
                decoding="async"
                alt="Luxury G-Wagon representing financial success"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* AI MASTERCLASS Watermark */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-3xl font-bold text-white/25 select-none transform -rotate-12 tracking-wider">
                  AI MASTERCLASS
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Luxury & Success</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Simple tools, smart systems, and suddenly your lifestyle upgrades without you even noticing. Freedom feels better than any car, but hey — the car's not bad either.
              </p>
            </div>
          </div>

          {/* Time Freedom */}
          <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="aspect-video overflow-hidden relative">
              <img
                src="/images/lifestyle/limo.jpeg"
                loading="lazy"
                decoding="async"
                alt="Luxury limo representing time freedom and success"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* AI MASTERCLASS Watermark */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-3xl font-bold text-white/25 select-none transform -rotate-12 tracking-wider">
                  AI MASTERCLASS
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Time Freedom</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Most people are stuck in traffic at 2pm. I was mapping out my next launch in the backseat. That's what digital leverage buys you — time.
              </p>
            </div>
          </div>

          {/* Financial Freedom */}
          <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="aspect-video overflow-hidden relative">
              <img
                src="/images/lifestyle/businessclass.jpeg"
                loading="lazy"
                decoding="async"
                alt="Business class travel representing financial freedom"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* AI MASTERCLASS Watermark */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-3xl font-bold text-white/25 select-none transform -rotate-12 tracking-wider">
                  AI MASTERCLASS
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Financial Freedom</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Flying to Dubai and still getting work done mid-air. Building income streams online means your office follows wherever you go — even at 35,000 feet.
              </p>
            </div>
          </div>

          {/* Travel & Adventure */}
          <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="aspect-video overflow-hidden relative">
              <img
                src="/images/lifestyle/kotor.jpeg"
                loading="lazy"
                decoding="async"
                alt="Beautiful travel destination in Kotor, Montenegro"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* AI MASTERCLASS Watermark */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-3xl font-bold text-white/25 select-none transform -rotate-12 tracking-wider">
                  AI MASTERCLASS
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Travel & Adventure</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Turned this hotel balcony into my desk for the week. Business doesn't have to lock you in one place — the laptop makes anywhere home base.
              </p>
            </div>
          </div>

          {/* Success & Recognition */}
          <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="aspect-video overflow-hidden relative">
              <img
                src="/images/lifestyle/suite.jpeg"
                loading="lazy"
                decoding="async"
                alt="Premium business class experience representing success and recognition"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* AI MASTERCLASS Watermark */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-3xl font-bold text-white/25 select-none transform -rotate-12 tracking-wider">
                  AI MASTERCLASS
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Success & Recognition</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Waking up here hit different knowing it came from digital systems I built myself. Success feels better when you designed it on your own terms.
              </p>
            </div>
          </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to Transform Your Lifestyle?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Join thousands who've already achieved financial freedom and lifestyle flexibility using these exact AI strategies.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-200"
                onClick={handleCheckout}
              >
                Start Your Transformation - <span className="line-through text-white/80">$497</span> <span className="text-white font-bold ml-2">$97</span>
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                ⚡ Instant access • 🔒 Secure payment • 📱 Mobile optimized
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost of Doing Nothing vs Getting Inside the AI System */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="container mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              THE COST OF DOING NOTHING VS. GETTING INSIDE THE <span className="text-blue-400">$5K-$15K/MO AI SYSTEM</span>
            </h2>
          </div>

          {/* Comparison Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* AI MASTERCLASS Column */}
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-800/20 border border-blue-500/30 rounded-xl p-8 relative overflow-hidden">
              <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">AI</span>
              </div>
              <div className="ml-16 mb-6">
                <h3 className="text-2xl font-bold text-blue-400 mb-2">AI MASTERCLASS</h3>
                <p className="text-blue-200">The proven system that works</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-white font-medium">PROVEN SYSTEM THAT SCALED TO $100K+</span>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-white font-medium">LAUNCH & SCALE USING YOUR EXISTING SKILLSET</span>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-white font-medium">NO AUDIENCE, NO COMPLEX TECH NEEDED</span>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-white font-medium">DONE-FOR-YOU FUNNELS & BATTLE-TESTED AI PROMPTS</span>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-white font-medium">REAL STUDENT WINS: $100-$500 QUICK WINS</span>
                </div>
              </div>
            </div>

            {/* OTHERS Column */}
            <div className="bg-gradient-to-br from-red-600/20 to-red-800/20 border border-red-500/30 rounded-xl p-8 relative overflow-hidden">
              <div className="absolute top-4 left-4 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">?</span>
              </div>
              <div className="ml-16 mb-6">
                <h3 className="text-2xl font-bold text-red-400 mb-2">OTHERS</h3>
                <p className="text-red-200">The path that leads nowhere</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <span className="text-white text-sm">✗</span>
                  </div>
                  <span className="text-white font-medium">WASTING MONTHS WATCHING FREE YOUTUBE VIDEOS</span>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <span className="text-white text-sm">✗</span>
                  </div>
                  <span className="text-white font-medium">COPYING PROMPTS THAT DON'T MATCH YOUR STRENGTHS</span>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <span className="text-white text-sm">✗</span>
                  </div>
                  <span className="text-white font-medium">POSTING CONTENT HOPING SOMEONE BUYS</span>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <span className="text-white text-sm">✗</span>
                  </div>
                  <span className="text-white font-medium">NO FEEDBACK, NO ACCOUNTABILITY</span>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <span className="text-white text-sm">✗</span>
                  </div>
                  <span className="text-white font-medium">BURNOUT, CONFUSION, AND $0 IN RETURN</span>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <span className="text-white text-sm">✗</span>
                  </div>
                  <span className="text-white font-medium">STILL STUCK WHILE OTHERS PASS YOU</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold text-xl px-12 py-4 shadow-2xl hover:shadow-3xl transition-all duration-200 transform hover:scale-105"
              onClick={handleCheckout}
            >
              GET INSIDE THE SYSTEM NOW
              <ArrowRight className="h-6 w-6 ml-3" />
            </Button>
            <p className="text-blue-200 mt-4 text-sm">
              Secure your strategy before spots run out
            </p>
          </div>
        </div>
      </section>

      {/* Course Curriculum Arsenal - What You'll Actually Learn */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="container mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              🎮 Your Course Curriculum Arsenal
            </h2>
            <p className="text-lg text-blue-200 max-w-3xl mx-auto">
              Here's exactly what you'll unlock in this training - the same modules that helped students build $100K+ trading accounts and $5K-$15K monthly income streams.
            </p>
          </div>

          {/* Curriculum Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            
            {/* Module 1: AI Prompt Engineering */}
            <div className="group relative bg-gradient-to-br from-green-600/20 to-emerald-800/20 border border-green-500/30 rounded-xl p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <div className="mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Module 1: AI Strategy Engineering</h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-green-400 font-semibold">Difficulty:</span>
                  <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-green-400 rounded-full"></div>
                    ))}
                    <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                  </div>
                </div>
              </div>
              <p className="text-blue-200 text-sm mb-4">
                Master the exact strategy techniques that generated my $100K+ trading algorithm. Learn to craft strategies that get specific, profitable results every time.
              </p>
              <div className="bg-green-500/20 rounded-lg p-3">
                <div className="text-green-300 text-xs font-semibold mb-1">STUDENT RESULT:</div>
                <div className="text-white text-sm">$500-$2K/month from AI-generated content</div>
              </div>
            </div>

            {/* Module 2: Trading Algorithm Blueprint */}
            <div className="group relative bg-gradient-to-br from-purple-600/20 to-pink-800/20 border border-purple-500/30 rounded-xl p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <div className="mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-3xl">📈</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Module 2: Trading Algorithm Blueprint</h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-purple-400 font-semibold">Difficulty:</span>
                  <div className="flex gap-1">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    ))}
                    <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                  </div>
                </div>
              </div>
              <p className="text-blue-200 text-sm mb-4">
                The exact system I used to build my $100K+ trading account. Step-by-step blueprint for creating AI-powered trading algorithms that run 24/7.
              </p>
              <div className="bg-purple-500/20 rounded-lg p-3">
                <div className="text-purple-300 text-xs font-semibold mb-1">STUDENT RESULT:</div>
                <div className="text-white text-sm">$5K-$15K/month passive trading income</div>
              </div>
            </div>

            {/* Module 3: Content Automation Funnels */}
            <div className="group relative bg-gradient-to-br from-blue-600/20 to-cyan-800/20 border border-blue-500/30 rounded-xl p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">3</span>
              </div>
              <div className="mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-3xl">⚙️</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Module 3: Content Automation Funnels</h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-blue-400 font-semibold">Difficulty:</span>
                  <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    ))}
                    <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                  </div>
                </div>
              </div>
              <p className="text-blue-200 text-sm mb-4">
                Done-for-you funnel templates that convert visitors into paying customers. Set up automated systems that generate leads and sales while you sleep.
              </p>
              <div className="bg-blue-500/20 rounded-lg p-3">
                <div className="text-blue-300 text-xs font-semibold mb-1">STUDENT RESULT:</div>
                <div className="text-white text-sm">$800-$2.5K/month from automated funnels</div>
              </div>
            </div>

            {/* Module 4: Market Research AI */}
            <div className="group relative bg-gradient-to-br from-orange-600/20 to-red-800/20 border border-orange-500/30 rounded-xl p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">4</span>
              </div>
              <div className="mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-3xl">🔍</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Module 4: Market Research AI</h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-orange-400 font-semibold">Difficulty:</span>
                  <div className="flex gap-1">
                    {[...Array(2)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    ))}
                    <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                  </div>
                </div>
              </div>
              <p className="text-blue-200 text-sm mb-4">
                Find profitable niches and opportunities in minutes, not months. Use AI to analyze markets, competitors, and trends to identify the best opportunities.
              </p>
              <div className="bg-orange-500/20 rounded-lg p-3">
                <div className="text-orange-300 text-xs font-semibold mb-1">STUDENT RESULT:</div>
                <div className="text-white text-sm">$600-$1.8K/month from market research services</div>
              </div>
            </div>

            {/* Module 5: Client Acquisition System */}
            <div className="group relative bg-gradient-to-br from-teal-600/20 to-green-800/20 border border-teal-500/30 rounded-xl p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-teal-400 to-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">5</span>
              </div>
              <div className="mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Module 5: Client Acquisition System</h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-teal-400 font-semibold">Difficulty:</span>
                  <div className="flex gap-1">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-teal-400 rounded-full"></div>
                    ))}
                    <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                  </div>
                </div>
              </div>
              <p className="text-blue-200 text-sm mb-4">
                Get paying customers using AI-powered outreach and lead generation. The exact system that helped students land their first $5K+ clients.
              </p>
              <div className="bg-teal-500/20 rounded-lg p-3">
                <div className="text-teal-300 text-xs font-semibold mb-1">STUDENT RESULT:</div>
                <div className="text-white text-sm">$5K-$15K/month from client acquisition</div>
              </div>
            </div>

            {/* Module 6: Scaling & Automation */}
            <div className="group relative bg-gradient-to-br from-indigo-600/20 to-purple-800/20 border border-indigo-500/30 rounded-xl p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">6</span>
              </div>
              <div className="mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Module 6: Scaling & Automation</h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-indigo-400 font-semibold">Difficulty:</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-blue-200 text-sm mb-4">
                Turn your $500 quick wins into $15K+ monthly income streams. Advanced automation strategies that let you scale without working more hours.
              </p>
              <div className="bg-indigo-500/20 rounded-lg p-3">
                <div className="text-indigo-300 text-xs font-semibold mb-1">STUDENT RESULT:</div>
                <div className="text-white text-sm">$10K-$25K/month from scaled systems</div>
              </div>
            </div>
          </div>

          {/* Course Stats */}
          <div className="mt-12 bg-gradient-to-r from-gray-800/50 to-blue-900/50 rounded-2xl p-8 border border-gray-700/50">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-white mb-2">6</div>
                <div className="text-blue-300 text-sm">Core Modules</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">$2.3M+</div>
                <div className="text-blue-300 text-sm">Student Results</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">$5K-$15K+</div>
                <div className="text-blue-300 text-sm">Starting Monthly Income</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">30 Days</div>
                <div className="text-blue-300 text-sm">To First Results</div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl shadow-xl p-8 border border-blue-500/30 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                🎮 Ready to Unlock These Modules?
              </h3>
              <p className="text-blue-200 mb-6">
                This is the exact curriculum that helped students build $100K+ trading accounts and $5K-$15K monthly income streams. Your transformation starts with Module 1.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                onClick={handleCheckout}
              >
                Start Module 1 Now - <span className="line-through text-white/80">$497</span> <span className="text-white font-bold ml-2">$97</span>
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <p className="text-sm text-blue-300 mt-4">
                ⚡ Instant access • 🔒 Secure payment • 📱 Mobile optimized
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Added from Home Page */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Everything you need to know about our AI training and learning experience.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                question: "Do I need any technical background to take this course?",
                answer: "No technical background required! This training is designed for complete beginners. We'll teach you everything from the ground up, including how to use AI tools without any coding knowledge."
              },
              {
                question: "How long will it take to see results?",
                answer: "Most students start seeing results within weeks of implementing our strategies. Some have even started earning money in their first week by applying the AI automation techniques we teach."
              },
              {
                question: "What if I'm not satisfied with the course?",
                answer: "We're confident you'll love the course, but if you have any concerns, please reach out to our support team. We're here to help ensure you get the most value from your investment."
              },
              {
                question: "How long do I have access to the course?",
                answer: "You get lifetime access to the course content, including all future updates and new modules we add. You can learn at your own pace and revisit the material anytime."
              },
              {
                question: "What kind of support do you provide?",
                answer: "We provide professional support through our dedicated student community, email support, and live Q&A sessions. You're never alone in your learning journey."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Benefits Section */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose Our AI Training?
            </h3>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 dark:text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>Professional support</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>Lifetime access</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>Certificate included</span>
              </div>
            </div>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>Payment Protected</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4" />
                <span>Instant Access</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Breakdown Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              What You're Actually Getting (Total Value: $2,500+)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg border">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">📚 Complete AI Training</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">AI Strategy Guide (PDF)</p>
                <p className="text-gray-600 dark:text-gray-300 mb-2">Advanced Strategy Pack (PDF)</p>
                <p className="text-gray-600 dark:text-gray-300 mb-2">AI Automation Blueprints (PDF)</p>
                <p className="text-gray-600 dark:text-gray-300 mb-2">Bonuses Bundle (PDF)</p>
                <div className="text-right">
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">$1,200</span>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg border">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">🎯 Real Profit Strategies</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">Proven $2.3M+ profit methods</p>
                <p className="text-gray-600 dark:text-gray-300 mb-2">Industry-specific templates</p>
                <p className="text-gray-600 dark:text-gray-300 mb-2">Step-by-step implementation</p>
                <div className="text-right">
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">$800</span>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg border">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">🛠️ Tools & Resources</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">Custom strategy libraries</p>
                <p className="text-gray-600 dark:text-gray-300 mb-2">Automation workflows</p>
                <p className="text-gray-600 dark:text-gray-300 mb-2">Lifetime access & updates</p>
                <div className="text-right">
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">$500</span>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg border">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">💬 Professional Support</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">24/7 community access</p>
                <p className="text-gray-600 dark:text-gray-300 mb-2">Expert guidance & feedback</p>
                <p className="text-gray-600 dark:text-gray-300 mb-2">Success tracking tools</p>
                <div className="text-right">
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">$300</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white p-6 rounded-lg">
              <div className="text-2xl font-bold mb-2">Total Value: $2,500+</div>
              <div className="text-lg">Your Price Today: <span className="line-through">$497</span> <span className="font-bold text-2xl">$97</span></div>
              <div className="text-sm opacity-90 mt-2">That's 96% OFF - Less than the cost of a nice dinner!</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Income?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of professionals who've already made their first $5,000-$15,000 with AI. 
            Your success story starts now.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              onClick={handleCheckout}
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-8 py-4 text-lg transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              Get Training Now - <span className="line-through text-gray-600">$497</span> <span className="text-blue-600 font-extrabold ml-2">$97</span>
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>

          <div className="text-sm text-blue-200">
            <p>✓ Instant Access</p>
            <p>✓ Lifetime Updates</p>
          </div>
        </div>
      </section>
    </div>
  )
}
