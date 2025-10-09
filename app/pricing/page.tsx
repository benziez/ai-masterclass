'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Check, Star, Users, Zap, Shield } from 'lucide-react'
import { useToast } from '@/components/ui/use-toast'
import NavBar from '@/components/NavBar'
// Removed Stripe import - using direct payment links

// Force dynamic rendering
export const dynamic = 'force-dynamic'

export default function PricingPage() {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  const handleCheckout = () => {
    // Direct link to your live Stripe payment page
    window.location.href = 'https://buy.stripe.com/4gMeVc9xcdv964h7tt5gc03'
  }

  const courseFeatures = [
    "6 comprehensive modules",
    "6+ hours of comprehensive content",
    "Hands-on projects and exercises",
    "Downloadable resources and templates",
    "Lifetime access to all updates",
    "Certificate of completion",
    "Mobile-friendly learning platform",
    "Community support forum"
  ]

  const consultationFeatures = [
    "Everything in the course",
    "60-minute 1-on-1 strategy call with AI expert",
    "Custom AI workflow designed for YOUR business",
    "30-day email support (24-hour response time)",
    "Detailed implementation roadmap and timeline",
    "Priority response time for all inquiries",
    "Follow-up optimization session (30 minutes)",
    "Custom prompts and templates for your industry",
    "Business-specific AI tool recommendations",
    "ROI projections and success metrics",
    "Competitive analysis and market positioning",
    "Risk assessment and mitigation strategies"
  ]

  const doneForYouFeatures = [
    "Everything in the course",
    "Complete AI business system setup",
    "Custom workflows and automation for YOUR industry",
    "30-day hands-on management and optimization",
    "Team training and onboarding (up to 3 team members)",
    "Monthly performance reports with ROI analysis",
    "Priority support and consultation (24-hour response)",
    "Custom AI tools and integrations built specifically for you",
    "Business process audit and optimization",
    "Custom prompt library (50+ industry-specific prompts)",
    "Implementation timeline and project management",
    "30-day follow-up optimization session",
    "Lifetime access to all future AI tools and updates"
  ]

  return (
    <main className="min-h-screen bg-black overflow-x-hidden relative pt-20 sm:pt-24">
      {/* Animated background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-green-900/20 opacity-50"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-700/10 via-transparent to-transparent"></div>
      <div className="relative z-10">
        <NavBar />
        
        {/* Hero Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 sm:mb-8 leading-tight px-2 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                Choose Your Learning Path
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed px-4 font-medium">
                Choose your path: Learn yourself, get personalized guidance, or have us build it for you.
              </p>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Pricing Cards */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-blue-500/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Course Only */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="h-full relative bg-gradient-to-br from-gray-800/95 via-gray-700/50 to-gray-800/95 border-gray-600 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:-translate-y-1 backdrop-blur-sm">
                <CardHeader className="text-center pb-8">
                  <div className="flex items-center justify-center mb-4">
                    <Zap className="h-12 w-12 text-blue-400" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-white">AI Course</CardTitle>
                  <div className="mt-4">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <span className="text-sm text-gray-400 line-through">$497</span>
                      <span className="text-xs bg-red-500 text-white px-2 py-1 rounded-full">80% OFF</span>
                    </div>
                    <span className="text-4xl font-bold text-white">$97</span>
                    <span className="text-gray-400 ml-2">one-time</span>
                  </div>
                  <CardDescription className="text-lg mt-2 text-gray-300">
                    Perfect for self-paced learners who want comprehensive AI education
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {courseFeatures.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={handleCheckout}
                    className="w-full relative bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 hover:from-green-600 hover:via-blue-600 hover:to-purple-600 text-white font-black py-4 text-lg shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:shadow-[0_0_40px_rgba(34,197,94,0.5)] transition-all duration-500 transform hover:scale-105 border-2 border-green-400/50 hover:border-green-300 backdrop-blur-sm"
                  >
                    🚀 Enroll in Course
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* VIP Consultation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="h-full relative border-2 border-blue-600 bg-gray-800">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <CardHeader className="text-center pb-8 pt-8">
                  <div className="flex items-center justify-center mb-4">
                    <Users className="h-12 w-12 text-blue-400" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-white">VIP Consultation</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-white">$500</span>
                    <span className="text-gray-400 ml-2">one-time</span>
                  </div>
                  <CardDescription className="text-lg mt-2 text-gray-300">
                    Get personalized guidance and custom AI workflow setup
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {consultationFeatures.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={handleCheckout}
                    className="w-full relative bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 hover:from-purple-600 hover:via-blue-600 hover:to-green-600 text-white font-black py-4 text-lg shadow-[0_0_30px_rgba(147,51,234,0.3)] hover:shadow-[0_0_40px_rgba(147,51,234,0.5)] transition-all duration-500 transform hover:scale-105 border-2 border-purple-400/50 hover:border-purple-300 backdrop-blur-sm"
                  >
                    🚀 Book Consultation
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Done-For-You */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Card className="h-full relative bg-gradient-to-br from-gray-800/95 via-gray-700/50 to-gray-800/95 border-gray-600 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:-translate-y-1 backdrop-blur-sm">
                <CardHeader className="text-center pb-8">
                  <div className="flex items-center justify-center mb-4">
                    <Zap className="h-12 w-12 text-purple-400" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-white">Done-For-You</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-white">$1,497</span>
                    <span className="text-gray-400 ml-2">one-time</span>
                  </div>
                  <CardDescription className="text-lg mt-2 text-gray-300">
                    We build your complete AI business system for you
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {doneForYouFeatures.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={() => window.open('mailto:hello@aimasterclass.info?subject=Book Strategy Call - Done-For-You Package', '_blank')}
                    className="w-full relative bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-black py-4 text-lg shadow-[0_0_30px_rgba(249,115,22,0.3)] hover:shadow-[0_0_40px_rgba(249,115,22,0.5)] transition-all duration-500 transform hover:scale-105 border-2 border-orange-400/50 hover:border-orange-300 backdrop-blur-sm"
                  >
                    🚀 Book Strategy Call
                  </Button>
                  <p className="text-xs text-gray-500 text-center mt-2">
                    Schedule a free 15-minute consultation to discuss your needs
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Support Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="flex items-center justify-center mb-4">
              <Shield className="h-8 w-8 text-green-500 mr-3" />
              <h3 className="text-2xl font-bold text-white">Professional Support</h3>
            </div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We provide comprehensive support and resources to ensure your success. Our team is here to help you get the most out of the course.
            </p>
          </motion.div>

          {/* Educational Notice */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <p className="text-sm text-gray-500">
              Educational content only. Individual results may vary based on effort and application.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
          </motion.div>
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="border border-gray-700 rounded-lg p-6 bg-gray-900"
            >
              <h3 className="text-lg font-semibold text-white mb-3">
                Can I upgrade from the course to consultation or done-for-you later?
              </h3>
              <p className="text-gray-300">
                Yes! You can upgrade to any higher tier at any time. The course price will be credited toward your consultation or done-for-you package.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="border border-gray-700 rounded-lg p-6 bg-gray-900"
            >
              <h3 className="text-lg font-semibold text-white mb-3">
                How long do I have access to the course?
              </h3>
              <p className="text-gray-300">
                You have lifetime access to the course content and all future updates. Consultations and done-for-you services are one-time purchases with ongoing support.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="border border-gray-700 rounded-lg p-6 bg-gray-900"
            >
              <h3 className="text-lg font-semibold text-white mb-3">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-300">
                We accept all major credit cards, PayPal, and Apple Pay. All payments are processed securely through Stripe.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
