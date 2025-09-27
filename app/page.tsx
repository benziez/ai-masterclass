'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'
import { 
  BookOpen, 
  Zap, 
  TrendingUp, 
  Shield, 
  Users, 
  Award,
  ChevronRight,
  Play,
  Star,
  Check,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Code,
  FileText,
  Bot,
  Palette
} from 'lucide-react'
import NavBar from '@/components/NavBar'
import MediaHero from '@/components/MediaHero'
import Link from 'next/link'

// Force dynamic rendering
export const dynamic = 'force-dynamic'

export default function HomePage() {
  const { toast } = useToast()
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        toast({
          title: "Success!",
          description: "You've been subscribed to our newsletter.",
        })
        setEmail('')
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
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

  const features = [
    {
      icon: BookOpen,
      title: "Comprehensive AI Fundamentals",
      description: "Learn the basics of AI, machine learning, and how these technologies work in practice."
    },
    {
      icon: Zap,
      title: "Practical Tool Mastery",
      description: "Master ChatGPT, Claude, and other AI tools through hands-on exercises and real projects."
    },
    {
      icon: TrendingUp,
      title: "Workflow Optimization",
      description: "Discover how to integrate AI into your daily work to save time and improve productivity."
    },
    {
      icon: Shield,
      title: "Ethical AI Usage",
      description: "Learn best practices for using AI responsibly and avoiding common pitfalls."
    },
    {
      icon: Users,
      title: "Collaborative Learning",
      description: "Join a community of learners and share insights, tips, and project ideas."
    },
    {
      icon: Award,
      title: "Portfolio Projects",
      description: "Build real projects using AI tools that you can showcase in your portfolio."
    }
  ]

  const curriculum = [
    {
      title: "AI Fundamentals",
      description: "Understanding AI basics, machine learning concepts, and current AI landscape."
    },
    {
      title: "AI Tools & Platforms",
      description: "Mastering ChatGPT, Claude, and other essential AI tools for daily use."
    },
    {
      title: "AI in Business",
      description: "Applying AI to business processes, content creation, and workflow automation."
    },
    {
      title: "AI Project Development",
      description: "Building practical AI projects and integrating AI into existing workflows."
    },
    {
      title: "AI Ethics & Best Practices",
      description: "Understanding AI limitations, ethical considerations, and responsible usage."
    },
    {
      title: "Future of AI",
      description: "Exploring emerging AI trends and preparing for the future of work."
    }
  ]

  const projects = [
    {
      icon: FileText,
      title: "AI-Powered Content Studio",
      description: "Create a professional content creation system that generates viral social media posts, engaging blog articles, and compelling marketing copy.",
      features: ["Viral content generation", "SEO-optimized articles", "Brand voice cloning", "Multi-platform publishing"]
    },
    {
      icon: Bot,
      title: "Intelligent Business Assistant",
      description: "Build a sophisticated AI assistant that handles customer support, sales inquiries, and business operations 24/7.",
      features: ["Natural conversations", "Lead qualification", "Instant problem resolution", "CRM integration"]
    },
    {
      icon: Palette,
      title: "AI Creative Suite",
      description: "Develop a complete design system that generates stunning graphics, logos, and visual assets for any brand.",
      features: ["Professional branding", "Custom illustrations", "Style consistency", "Instant mockups"]
    },
    {
      icon: Code,
      title: "Smart Business Automation Platform",
      description: "Create intelligent workflows that automate complex business processes and scale your operations effortlessly.",
      features: ["Process automation", "Data analytics", "Smart reporting", "API integrations"]
    }
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Marketing Manager",
      content: "This course completely changed how I approach content creation. The AI tools I learned have saved me hours every week.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Freelance Designer",
      content: "The practical projects were exactly what I needed. I now use AI tools in my design workflow and my clients love the results.",
      rating: 5
    },
    {
      name: "Emily Watson",
      role: "Small Business Owner",
      content: "As someone with no technical background, I was worried about learning AI. This course made it accessible and practical.",
      rating: 5
    }
  ]

  const faqs = [
    {
      question: "Do I need any technical background?",
      answer: "No technical background is required. The course is designed for beginners and covers everything from the basics up."
    },
    {
      question: "How long does it take to complete?",
      answer: "The course is self-paced, but most students complete it in 2-4 weeks, spending 1-2 hours per day."
    },
    {
      question: "What AI tools will I learn?",
      answer: "You'll learn ChatGPT, Claude, and other popular AI tools, plus how to integrate them into your workflow."
    },
    {
      question: "Can I access it on mobile?",
      answer: "Yes! The course works perfectly on all devices."
    }
  ]

  return (
    <main className="min-h-screen bg-gray-900 overflow-x-hidden">
      <NavBar />
      <MediaHero />
      
      {/* Money Proof Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center mb-6 sm:mb-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mb-3 sm:mb-0 sm:mr-4">
                <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white text-center sm:text-left">
                Real Results from Real Entrepreneurs
              </h2>
            </div>
            <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              See how these entrepreneurs transformed their businesses using the exact system you're about to learn
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {/* Testimonial 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="h-full bg-black/60 border-2 border-green-500/30 rounded-2xl p-4 sm:p-6 hover:border-green-400 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                    SM
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base">Me</h4>
                    <p className="text-gray-400 text-sm">Founder</p>
                  </div>
                </div>
                <div className="text-yellow-400 text-lg font-bold mb-2">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  "I built an <strong className="text-white">AI trading algorithm</strong> to pick stocks for me using these exact prompts. Was able to take my portfolio from <strong className="text-green-400">$3K to $127K</strong>!"
                </p>
                <div className="text-center relative">
                  <img 
                    src="/images/127k.PNG" 
                    alt="Portfolio growth from $3K to $127K" 
                    className="w-full max-w-xs mx-auto rounded-lg border-2 border-green-500/30"
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/20 text-white text-lg font-bold tracking-wider transform -rotate-12 select-none pointer-events-none">
                      AI MASTERCLASS
                    </div>
                  </div>
                </div>
                <p className="text-gray-500 text-xs mt-3 text-center">Offer: AI trading signals • Result: $127K</p>
              </div>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="h-full bg-black/60 border-2 border-green-500/30 rounded-2xl p-4 sm:p-6 hover:border-green-400 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                    MR
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base">Mike R.</h4>
                    <p className="text-gray-400 text-sm">Texas</p>
                  </div>
                </div>
                <div className="text-yellow-400 text-lg font-bold mb-2">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  "Finally found a system that works! I was struggling to get clients, but these AI prompts helped me <strong className="text-white">sell my social media management service on Facebook</strong>. Made <strong className="text-green-400">$704</strong> in my first week using these exact prompts!"
                </p>
                <div className="text-center relative">
                  <img 
                    src="/images/money3.jpg" 
                    alt="Cash App balance showing $704 from social media service sales" 
                    className="w-full max-w-xs mx-auto rounded-lg border-2 border-green-500/30"
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/20 text-white text-lg font-bold tracking-wider transform -rotate-12 select-none pointer-events-none">
                      AI MASTERCLASS
                    </div>
                  </div>
                </div>
                <p className="text-gray-500 text-xs mt-3 text-center">Offer: Social media management • Time: 1 week • Result: $704</p>
              </div>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="h-full bg-black/60 border-2 border-green-500/30 rounded-2xl p-4 sm:p-6 hover:border-green-400 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                    JL
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base">Jessica L.</h4>
                    <p className="text-gray-400 text-sm">Florida</p>
                  </div>
                </div>
                <div className="text-yellow-400 text-lg font-bold mb-2">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  "I was skeptical at first, but this guide changed everything. Used these AI prompts to <strong className="text-white">sell client automation software to a local doctor</strong>. Made <strong className="text-green-400">$5,016</strong> in my first month using these exact prompts!"
                </p>
                <div className="text-center relative">
                  <img 
                    src="/images/money4.JPG" 
                    alt="Cash Balance showing $5,016 from automation software sale" 
                    className="w-full max-w-xs mx-auto rounded-lg border-2 border-green-500/30"
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/20 text-white text-lg font-bold tracking-wider transform -rotate-12 select-none pointer-events-none">
                      AI MASTERCLASS
                    </div>
                  </div>
                </div>
                <p className="text-gray-500 text-xs mt-3 text-center">Offer: Client automation software • Time: 1 month • Result: $5,016</p>
              </div>
            </motion.div>
          </div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="inline-flex items-center bg-green-500/10 border-2 border-green-500 rounded-full px-6 py-3 text-green-400 text-lg font-bold">
              <Star className="w-5 h-5 mr-2" />
              ⭐ 4.9/5 Rating from 2,000+ Students
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Course Overview Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              What You'll Learn
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our comprehensive curriculum covers everything you need to master AI tools and integrate them into your professional life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Lead Magnet Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border-2 border-green-500 rounded-2xl p-6 sm:p-8 md:p-12 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-32 h-32 bg-green-400 rounded-full -translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-blue-400 rounded-full translate-x-12 translate-y-12"></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row items-center justify-center mb-6 sm:mb-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mb-3 sm:mb-0 sm:mr-4">
                    <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white text-center sm:text-left">
                    Get Your Free 3-Step AI Side Hustle Preview
                  </h2>
                </div>
                <p className="text-xl text-green-400 mb-4 font-bold">
                  <strong>Sample from $497 Course</strong> - See how students made $2.3M+ with AI
                </p>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Get a taste of the full system. Limited to first 100 downloads this month.
                </p>
              </div>
              
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-lg mx-auto mb-6 relative z-10">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 text-base sm:text-lg py-3 sm:py-4 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-300"
                  required
                />
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    <>
                      <Mail className="h-5 w-5 mr-2" />
                      Get Free Preview
                    </>
                  )}
                </Button>
              </form>
              
              <p className="text-sm text-gray-400 relative z-10">
                No spam, unsubscribe anytime. We respect your privacy.
              </p>
            </div>
          </motion.div>
        </div>
      </section>




      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Everything you need to know about our AI course and learning experience.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black/60 border-2 border-green-500/30 hover:border-green-400 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-white">
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Final CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center mb-6 sm:mb-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mb-3 sm:mb-0 sm:mr-4">
                <Bot className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white text-center sm:text-left">
                Ready to Build Your AI Business?
              </h2>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join 2,000+ students who are already using this system to make money with AI.
            </p>
            
            {/* Scarcity Indicator */}
            <div className="mb-8 p-4 bg-red-500/10 border border-red-500 rounded-lg max-w-md mx-auto">
              <div className="flex items-center justify-center gap-3 text-red-400">
                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Only 47 spots left this month</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8">
              <Link href="/get-course" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold px-8 sm:px-12 py-4 sm:py-5 text-lg sm:text-xl shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                >
                  <Play className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
                  🚀 Get AI Masterclass - $97
                  <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 ml-2" />
                </Button>
              </Link>
              <Link href="/free-guide" className="w-full sm:w-auto">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-gray-600 text-gray-300 hover:bg-gray-800 font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transition-all duration-200 w-full sm:w-auto"
                >
                  Get Free Guide First
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>30-Day Money Back</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>Lifetime Access</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>No Experience Needed</span>
              </div>
            </div>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
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
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">AI Education Platform</h3>
              <p className="text-gray-400 mb-6 max-w-md">
                Empowering professionals with practical AI skills through comprehensive education and hands-on learning.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                  <MapPin className="h-5 w-5" />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Course Catalog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Student Success</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 AI Education Platform. All rights reserved.
              </p>
              <p className="text-gray-400 text-sm mt-4 md:mt-0">
                Educational content only. Individual results may vary based on effort and application.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

