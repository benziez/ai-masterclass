'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Check, Star, Users, Zap, Shield } from 'lucide-react'
import { useToast } from '@/components/ui/use-toast'
import NavBar from '@/components/NavBar'

// Force dynamic rendering
export const dynamic = 'force-dynamic'

export default function PricingPage() {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  const handleCheckout = async (productId: string, priceId: string) => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId, priceId }),
      })

      if (response.ok) {
        toast({
          title: "Course enrollment",
          description: "You'll be redirected to complete your purchase.",
        })
      } else {
        toast({
          title: "Enrollment not available",
          description: "Course enrollment will be available soon.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const courseFeatures = [
    "6 comprehensive modules",
    "6+ hours of video content",
    "Hands-on projects and exercises",
    "Downloadable resources and templates",
    "Lifetime access to all updates",
    "Certificate of completion",
    "Mobile-friendly learning platform",
    "Community support forum"
  ]

  const communityFeatures = [
    "Everything in the course",
    "Weekly live Q&A sessions",
    "Private Discord community",
    "Monthly AI tool reviews",
    "Exclusive project templates",
    "Priority email support",
    "Early access to new content",
    "Networking opportunities"
  ]

  return (
    <main className="min-h-screen bg-gray-900">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-900 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Choose Your Learning Path
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Start with the comprehensive course, or join our community for ongoing support and networking.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Course Only */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="h-full relative bg-gray-800 border-gray-700">
                <CardHeader className="text-center pb-8">
                  <div className="flex items-center justify-center mb-4">
                    <Zap className="h-12 w-12 text-blue-400" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-white">AI Course</CardTitle>
                  <div className="mt-4">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <span className="text-sm text-gray-400 line-through">$497</span>
                      <span className="text-xs bg-red-500 text-white px-2 py-1 rounded-full">95% OFF</span>
                    </div>
                    <span className="text-4xl font-bold text-white">$27</span>
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
                    onClick={() => handleCheckout('course', 'price_course')}
                    disabled={isLoading}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3"
                  >
                    {isLoading ? 'Processing...' : 'Enroll in Course'}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Course + Community */}
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
                  <CardTitle className="text-3xl font-bold text-white">Course + Community</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-white">$19</span>
                    <span className="text-gray-400 ml-2">/month</span>
                  </div>
                  <CardDescription className="text-lg mt-2 text-gray-300">
                    For learners who want ongoing support and community interaction
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {communityFeatures.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={() => handleCheckout('community', 'price_community')}
                    disabled={isLoading}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3"
                  >
                    {isLoading ? 'Processing...' : 'Join Community'}
                  </Button>
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
                Can I upgrade from the course to the community later?
              </h3>
              <p className="text-gray-300">
                Yes! You can upgrade to the community membership at any time. The course price will be credited toward your first month.
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
                You have lifetime access to the course content and all future updates. The community membership is monthly and can be cancelled anytime.
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
