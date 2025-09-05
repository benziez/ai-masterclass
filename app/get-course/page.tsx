'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
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
    toast({
      title: "Checkout not yet connected",
      description: "This is a demo. In production, this would connect to Stripe.",
      variant: "destructive",
    })
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
      {/* Enhanced Sticky Header */}
      <header className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
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
                Get Training - $27
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-12">
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Master AI & Earn
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {" "}$3,000-$18,000
              </span>
              <br />
              <span className="text-2xl sm:text-3xl lg:text-4xl text-gray-600 dark:text-gray-300">
                Per Month
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Former Tech Consultant Reveals: The AI Skills That Built My 7-Figure Business (No Coding Required)
            </p>
          </div>

          {/* Hero Video Section */}
          <div className="relative w-full max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://player.vimeo.com/video/1115302151?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                className="w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Content Below Video */}
          <div className="text-center max-w-4xl mx-auto">
            {/* Progress Bar - Replaces Limited Time Offer */}
            <div className="inline-flex flex-col items-center gap-2 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border border-red-200 dark:border-red-800 rounded-xl px-4 py-3 mb-6 mt-8">
              <div className="flex items-center gap-2 text-red-600 dark:text-red-400 font-medium">
                <span className="text-base">🔥</span>
                <span className="text-base">Only {spotsLeft} spots left at $27</span>
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg font-semibold px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:scale-105"
                onClick={handleCheckout}
              >
                Get Training Now - $27
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
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                This training shows you the exact AI tools and strategies that are working right now
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>No technical skills required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Proven strategies</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Profit Screenshots Collage - Replaces Testimonials */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Real Profit Screenshots
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                See the actual results our students are getting with AI strategies. These are real profit screenshots from real people.
              </p>
            </div>

            {/* Profit Screenshots Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Screenshot 1 - $100,000+ */}
              <div className="group relative overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 p-4 hover:shadow-xl transition-all duration-300">
                <div className="rounded-lg overflow-hidden mb-3 relative">
                  <img 
                    src="/images/127k.PNG" 
                    alt="Profit screenshot showing David's AI trading success"
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
                  <p className="text-xs text-gray-500 dark:text-gray-400">David</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 italic">
                    "David was just another student with a $3,000 account until he built his own AI trading algorithm. Using the tools and strategies he learned in the AI course, he applied them to options trading and grew his portfolio to over $100,000."
                  </p>
                </div>
              </div>


              {/* Screenshot 3 - $1,366 */}
              <div className="group relative overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 p-4 hover:shadow-xl transition-all duration-300">
                <div className="rounded-lg overflow-hidden mb-3">
                  <img 
                    src="/images/money2.JPG" 
                    alt="Profit screenshot showing Marcus's agency success"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Agency Success</h3>
                  <p className="text-green-600 dark:text-green-400 font-bold text-lg">$1,366</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Marcus</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 italic">
                    "Marcus had been learning how to run his agency for months but struggled to land his first paying client. After completing the AI course, he used the outreach and automation techniques to book meetings more consistently. Within a few weeks, he closed his very first client for $1,366 — proof that his agency finally had momentum."
                  </p>
                </div>
              </div>

              {/* Screenshot 4 - $704 */}
              <div className="group relative overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 p-4 hover:shadow-xl transition-all duration-300">
                <div className="rounded-lg overflow-hidden mb-3">
                  <img 
                    src="/images/money3.jpg" 
                    alt="Profit screenshot showing Jordan's content creation success"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Content Creator Success</h3>
                  <p className="text-green-600 dark:text-green-400 font-bold text-lg">$704</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Jordan</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 italic">
                    "Jordan always wanted to start a side hustle online but didn't know where to begin. After going through the AI course, he learned how to use automation tools to create short-form content and manage multiple platforms at once. By growing his pages and selling ads, Jordan made $704 in his very first month — his first real income from content creation — and it gave him the confidence to keep scaling."
                  </p>
                </div>
              </div>

              {/* Screenshot 5 - $5,016 */}
              <div className="group relative overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 p-4 hover:shadow-xl transition-all duration-300">
                <div className="rounded-lg overflow-hidden mb-3">
                  <img 
                    src="/images/money4.JPG" 
                    alt="Profit screenshot showing Eric's side hustle success"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Side Hustle Success</h3>
                  <p className="text-green-600 dark:text-green-400 font-bold text-lg">$5,016</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Eric</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 italic">
                    "Eric was looking for a simple way to earn extra income outside of his 9–5. After taking the AI course, he started using automation to flip local services and manage gig work smarter — from lead generation to payment tracking. By streamlining everything through Cash App, Eric pulled in $5,016, showing how quickly AI can turn a side hustle into steady cash flow."
                  </p>
                </div>
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
                Start Earning Now - $27
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </div>
        </section>

      {/* AI Success Roadmap - Replaces Unrealistic Calculator */}
      <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Your AI Success Roadmap
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              See the realistic journey from beginner to AI success. This is exactly how our students have transformed their income.
            </p>
          </div>

          {/* Roadmap Steps */}
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Connection Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-200 to-purple-200 dark:from-blue-700 dark:to-purple-700 h-full hidden lg:block"></div>
              
              {/* Step 1: Foundation */}
              <div className="relative flex flex-col lg:flex-row items-center gap-8 mb-16">
                <div className="lg:w-1/2 lg:pr-8 text-right">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Week 1-2: Foundation & Mindset</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Learn the core AI principles, set up your tools, and develop the right mindset for success. Most students start seeing small wins within the first 2 weeks.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      <span>Average time: 1-2 weeks</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    1
                  </div>
                </div>
                
                <div className="lg:w-1/2 lg:pl-8 text-left">
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-800">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Early Wins:</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      <li>• First AI tool setup complete</li>
                      <li>• Understanding of AI capabilities</li>
                      <li>• Clear action plan for your niche</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 2: Implementation */}
              <div className="relative flex flex-col lg:flex-row items-center gap-8 mb-16">
                <div className="lg:w-1/2 lg:pr-8 text-right order-2 lg:order-1">
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-6 border border-green-200 dark:border-green-800">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Milestones:</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      <li>• First automated process working</li>
                      <li>• Time savings of 3-5 hours/week</li>
                      <li>• Initial client or project secured</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex-shrink-0 order-1 lg:order-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    2
                  </div>
                </div>
                
                <div className="lg:w-1/2 lg:pl-8 text-left order-3">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full mb-4">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Week 3-8: Implementation & First Results</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Start implementing AI strategies in your chosen field. Most students see their first $500-$1,000 within 6-8 weeks of consistent application.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      <span>Average time: 4-6 weeks</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3: Scaling */}
              <div className="relative flex flex-col lg:flex-row items-center gap-8 mb-16">
                <div className="lg:w-1/2 lg:pr-8 text-right">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-4">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Month 3-6: Scaling & Optimization</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Refine your processes, expand to new opportunities, and start seeing consistent income growth. Many students reach $2,000-$5,000 monthly by month 6.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      <span>Average time: 2-4 months</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    3
                  </div>
                </div>
                
                <div className="lg:w-1/2 lg:pl-8 text-left">
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6 border border-purple-200 dark:border-purple-800">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Scaling Results:</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      <li>• Consistent $2K-$5K monthly income</li>
                      <li>• Multiple income streams established</li>
                      <li>• Systems running on autopilot</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 4: Mastery */}
              <div className="relative flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/2 lg:pr-8 text-right order-2 lg:order-1">
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl p-6 border border-orange-200 dark:border-orange-800">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Mastery Level:</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      <li>• $5K-$15K+ monthly income</li>
                      <li>• Business running independently</li>
                      <li>• Teaching others your methods</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex-shrink-0 order-1 lg:order-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    4
                  </div>
                </div>
                
                <div className="lg:w-1/2 lg:pl-8 text-left order-3">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full mb-4">
                      <span className="text-2xl">👑</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Month 6+: Mastery & Freedom</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      You've mastered the AI strategies and built a sustainable business. Many students reach $5,000-$15,000+ monthly and achieve true financial freedom.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                      <span>Ongoing journey</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-12">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Ready to Start Your AI Journey?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Join thousands who've already transformed their income using these exact strategies. Your success story starts today.
                </p>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-200"
                  onClick={handleCheckout}
                >
                  Start Your Journey - $27
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                  ⚡ Instant access • 🔒 Secure payment • 📱 Mobile optimized
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Added from Home Page */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Income?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of professionals who've already mastered AI and are earning $3,000-$18,000 per month. 
            Your future starts now.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              onClick={handleCheckout}
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-8 py-4 text-lg transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              Get Training Now - $27
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
