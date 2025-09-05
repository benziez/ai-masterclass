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
import LifestyleShowcase from '@/components/LifestyleShowcase'
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
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <NavBar />
      <MediaHero />
      
      {/* Course Overview Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Test Section - Temporary */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Test Section - Home Page Working
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            If you can see this, the home page is rendering correctly!
          </p>
        </div>
      </section>

      {/* What You Can Build Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              What You Can Build
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Create real-world projects that demonstrate your AI skills and can be added to your portfolio.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
                      <project.icon className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                            <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Each project includes step-by-step guidance, downloadable resources, and real-world applications.
            </p>
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Play className="h-5 w-5 mr-2" />
              Preview Projects
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section className="py-20 bg-blue-600 dark:bg-blue-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Get Your Free AI Starter Guide
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Download our comprehensive guide with 3 practical AI projects you can start today.
            </p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                required
              />
              <Button
                type="submit"
                disabled={isLoading}
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold"
              >
                {isLoading ? 'Sending...' : (
                  <>
                    <Mail className="h-4 w-4 mr-2" />
                    Get Guide
                  </>
                )}
              </Button>
            </form>
            
            <p className="text-sm text-blue-200 mt-4">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Course Curriculum
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A structured learning path designed to take you from AI beginner to confident practitioner.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {curriculum.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-1">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                          {module.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {module.description}
                        </p>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400 flex-shrink-0 mt-1" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Showcase */}
      <LifestyleShowcase />

      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              What Our Students Say
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Join thousands of professionals who have transformed their work with AI.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonial.role}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Everything you need to know about our AI course and learning experience.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Real Students, Real Results
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              See how our students have transformed their careers and businesses with AI skills.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {[
              {
                name: "Sarah Chen",
                role: "Marketing Manager",
                company: "TechStart Inc.",
                rating: 5,
                content: "This course completely transformed how I approach content creation. I went from spending 8 hours on blog posts to 2 hours, and the quality is even better.",
                avatar: "SC",
                results: "Saved 6+ hours per week",
                color: "blue"
              },
              {
                name: "Marcus Rodriguez",
                role: "Freelance Designer",
                company: "Self-Employed",
                rating: 5,
                content: "I was skeptical about AI at first, but this course showed me how to use it as a creative partner. I've increased my client base by 40%.",
                avatar: "MR",
                results: "40% increase in clients",
                color: "green"
              },
              {
                name: "David Kim",
                role: "Startup Founder",
                company: "InnovateLab",
                rating: 5,
                content: "As a founder, time is my most valuable asset. This course taught me how to leverage AI to scale my operations without hiring more people.",
                avatar: "DK",
                results: "Saved $15K in hiring costs",
                color: "purple"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 bg-${testimonial.color}-100 dark:bg-${testimonial.color}-900/30 rounded-full flex items-center justify-center`}>
                        <span className="font-semibold text-gray-900 dark:text-white">{testimonial.avatar}</span>
                      </div>
                      <div>
                        <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                          {testimonial.name}
                        </CardTitle>
                        <CardDescription className="text-gray-600 dark:text-gray-400">
                          {testimonial.role} at {testimonial.company}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 mb-3">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <CardDescription className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      "{testimonial.content}"
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium">
                      {testimonial.results}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Video Testimonials Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Hear From Our Students
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Watch real students share their transformation stories and results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Sarah Chen",
                role: "AI Consultant",
                duration: "2:34",
                thumbnail: "👩‍💼",
                title: "From $2K to $15K Monthly"
              },
              {
                name: "David Kim", 
                role: "Innovation Lead",
                duration: "3:12",
                thumbnail: "👨‍💼",
                title: "Corporate Promotion in 3 Months"
              },
              {
                name: "Marcus Rodriguez",
                role: "Agency Owner", 
                duration: "4:01",
                thumbnail: "🎨",
                title: "Building a 7-Figure Business"
              }
            ].map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <CardContent className="p-0">
                    <div className="relative">
                      <div className="w-full h-32 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 flex items-center justify-center">
                        <div className="text-4xl">{video.thumbnail}</div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg">
                            <Play className="h-4 w-4 text-blue-600 ml-1" />
                          </div>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                          {video.duration}
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1 text-sm">
                        {video.title}
                      </h3>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {video.name} • {video.role}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick FAQ Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Everything you need to know about getting started with AI
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "Do I need coding experience?",
                answer: "No coding required! This course is designed for complete beginners."
              },
              {
                question: "How quickly will I see results?",
                answer: "Most students see immediate results and save 5-10 hours per week within the first week."
              },
              {
                question: "What if I'm not satisfied?",
                answer: "Yes! The course works perfectly on all devices."
              },
              {
                question: "Can I access it on mobile?",
                answer: "Yes! The course works perfectly on all devices."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-left"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Master AI?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who are already using AI to transform their work and careers.
            </p>
            
            {/* Live Activity Indicator */}
            <div className="mb-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800 max-w-md mx-auto">
              <div className="flex items-center justify-center gap-3 text-blue-700 dark:text-blue-300">
                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Live Activity:</span>
                <span className="text-sm">Sarah from NYC just enrolled</span>
                <span className="text-xs opacity-75">2 min ago</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link href="/get-course">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <Play className="h-5 w-5 mr-2" />
                  Enroll Now - $27
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
              <Link href="/curriculum">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-semibold px-8 py-4 text-lg transition-all duration-200"
                >
                  Preview Course
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 dark:text-gray-400 mb-8">
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
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400 dark:text-gray-500">
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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

