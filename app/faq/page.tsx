'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  ChevronDown, 
  ChevronUp,
  HelpCircle,
  BookOpen,
  Clock,
  Users,
  Award,
  ArrowRight,
  Play,
  CheckCircle,
  Star
} from 'lucide-react'
import NavBar from '@/components/NavBar'
import { useState } from 'react'
import Link from 'next/link'

// Force dynamic rendering
export const dynamic = 'force-dynamic'

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const faqs = [
    {
      question: "Do I need any coding experience to take this system?",
      answer: "No coding experience required! This system is designed for complete beginners. We focus on using AI tools through user-friendly interfaces and platforms that don't require programming knowledge. You'll learn to leverage AI effectively without writing a single line of code.",
      category: "Prerequisites"
    },
    {
      question: "How long does it take to complete the system?",
      answer: "The system contains 6+ hours of video content, but you can work at your own pace. Most students complete it in 2-4 weeks, spending 30-60 minutes per day. You have lifetime access, so you can take as much time as you need and revisit the content anytime.",
      category: "Course Duration"
    },
    {
      question: "What AI tools will I learn to use?",
      answer: "You'll master ChatGPT, Claude, and other essential AI platforms. We cover content creation tools, design assistants, automation platforms, and business applications. The system focuses on practical, real-world tools that you can use immediately in your work or business.",
      category: "Course Content"
    },
    {
      question: "Will I get a certificate upon completion?",
      answer: "Yes! You'll receive a professional certificate upon completing the system. This certificate demonstrates your AI proficiency and can be added to your resume, LinkedIn profile, or portfolio to showcase your new skills to employers or clients.",
      category: "Certification"
    },
    {
      question: "How quickly will I see results from what I learn?",
      answer: "Many students see immediate results! You can start applying AI tools to your work from the very first module. Some students save 5-10 hours per week within the first week of taking the system. The practical projects ensure you're building real skills, not just theoretical knowledge.",
      category: "Results"
    },
    {
      question: "What if I'm not satisfied with the system?",
      answer: "We provide comprehensive support and resources to ensure your success. If you have any issues, our team is here to help you get the most out of the system.",
      category: "Support"
    },
    {
      question: "Can I access the system on mobile devices?",
      answer: "Absolutely! The system is fully responsive and works perfectly on smartphones, tablets, and desktop computers. You can learn on-the-go and access your content from any device with an internet connection.",
      category: "Accessibility"
    },
    {
      question: "Will AI replace my job?",
      answer: "AI won't replace your job, but people who use AI effectively will have a significant advantage. This system teaches you how to use AI as a powerful tool to enhance your productivity, creativity, and value in the workplace. You'll learn to work smarter, not harder.",
      category: "Career Impact"
    },
    {
      question: "What kind of support do you provide?",
      answer: "We provide comprehensive support through our community forum, email support, and detailed system materials. You'll also have access to our student community where you can ask questions, share experiences, and connect with other learners.",
      category: "Support"
    },
    {
      question: "Is the system content updated regularly?",
      answer: "Yes! AI technology evolves rapidly, so we update our system content regularly to ensure you're learning the latest tools and best practices. As a student, you get lifetime access to all updates at no additional cost.",
      category: "Updates"
    },
    {
      question: "Can I use these skills for freelance work?",
      answer: "Absolutely! Many of our students use their AI skills to start freelance careers or enhance their existing services. You'll learn how to offer AI-enhanced services to clients, automate your workflows, and increase your earning potential significantly.",
      category: "Freelancing"
    },
    {
      question: "What makes this system different from free YouTube tutorials?",
      answer: "While free tutorials are great, this system provides structured learning, hands-on projects, professional certification, community support, and proven strategies that actually work. You'll save countless hours of trial-and-error and get results much faster than learning on your own.",
      category: "Value"
    }
  ]

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }


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
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 sm:mb-8 leading-tight px-2 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                Frequently Asked Questions
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed px-4 font-medium">
                Everything you need to know about our AI system, learning process, and how to get started. 
                Can't find what you're looking for? Contact us and we'll help you out.
              </p>
            
              <Button 
                size="lg" 
                className="relative bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 hover:from-green-600 hover:via-blue-600 hover:to-purple-600 text-white font-black px-8 sm:px-12 md:px-16 py-4 sm:py-5 md:py-6 text-lg sm:text-xl md:text-2xl shadow-[0_0_60px_rgba(34,197,94,0.5)] hover:shadow-[0_0_80px_rgba(34,197,94,0.7)] transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 w-full sm:w-auto min-h-[56px] sm:min-h-[64px] md:min-h-[72px] border-2 border-green-400/50 hover:border-green-300 backdrop-blur-sm"
              >
                <Play className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
                🚀 Start Learning - $97
                <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 ml-2" />
              </Button>
            </motion.div>
          </div>
        </section>
      </div>



      {/* FAQ Items */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-blue-500/5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              Common Questions
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-medium">
              Here are the most frequently asked questions from our students.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-white/95 via-gray-50 to-white/95 dark:from-gray-900/95 dark:via-gray-800/50 dark:to-gray-900/95 border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:-translate-y-1 backdrop-blur-sm">
                  <CardHeader 
                    className="cursor-pointer"
                    onClick={() => toggleItem(index)}
                  >
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                        {faq.question}
                      </CardTitle>
                      <div className="flex-shrink-0">
                        {openItems.includes(index) ? (
                          <ChevronUp className="h-5 w-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-500" />
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium">
                        {faq.category}
                      </span>
                    </div>
                  </CardHeader>
                  {openItems.includes(index) && (
                    <CardContent className="pt-0">
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </CardContent>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Still Have Questions?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Can't find the answer you're looking for? Our support team is here to help. 
              We typically respond within 24 hours.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/get-system">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <Play className="h-5 w-5 mr-2" />
                  Start Learning - $97
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-semibold px-8 py-4 text-lg transition-all duration-200"
              >
                Contact Support
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 dark:text-gray-400 mt-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>24-hour response time</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>Expert support team</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>Community forum access</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 dark:bg-blue-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of students who have already transformed their careers with AI. 
              Start your learning journey today with our comprehensive system.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/get-system">
                <Button 
                  size="lg" 
                  className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <Play className="h-5 w-5 mr-2" />
                  Enroll Now - $97
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
              <Link href="/curriculum">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 text-lg transition-all duration-200"
                >
                  View Curriculum
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-200 mt-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>Professional support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>Lifetime access</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>Certificate included</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
