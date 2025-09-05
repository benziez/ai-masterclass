'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  BookOpen, 
  Play, 
  Clock, 
  Users, 
  Award, 
  CheckCircle, 
  ArrowRight,
  Target,
  Zap,
  Shield,
  TrendingUp,
  Code,
  Palette,
  Bot,
  FileText,
  Star
} from 'lucide-react'
import NavBar from '@/components/NavBar'
import Link from 'next/link'

// Force dynamic rendering
export const dynamic = 'force-dynamic'

export default function CurriculumPage() {
  const modules = [
    {
      number: "01",
      title: "AI Fundamentals & Landscape",
      duration: "45 minutes",
      lessons: 3,
      description: "Understand the basics of AI, machine learning, and the current state of AI technology.",
      topics: [
        "What is AI and how it works",
        "Current AI landscape and trends",
        "AI vs human intelligence",
        "Ethical considerations in AI"
      ],
      icon: BookOpen,
      color: "blue"
    },
    {
      number: "02", 
      title: "Mastering AI Tools & Platforms",
      duration: "1 hour 15 minutes",
      lessons: 4,
      description: "Learn to use ChatGPT, Claude, and other essential AI tools effectively.",
      topics: [
        "ChatGPT advanced prompting",
        "Claude for complex tasks",
        "AI tool comparison and selection",
        "Best practices and workflows"
      ],
      icon: Zap,
      color: "purple"
    },
    {
      number: "03",
      title: "AI in Business Applications",
      duration: "1 hour 30 minutes", 
      lessons: 5,
      description: "Apply AI to real business processes, content creation, and workflow automation.",
      topics: [
        "Content creation and marketing",
        "Customer service automation",
        "Data analysis and insights",
        "Process optimization",
        "ROI measurement"
      ],
      icon: TrendingUp,
      color: "green"
    },
    {
      number: "04",
      title: "Building AI Projects",
      duration: "2 hours",
      lessons: 6,
      description: "Create practical AI projects and integrate AI into existing workflows.",
      topics: [
        "Project planning and scoping",
        "AI integration strategies",
        "Testing and iteration",
        "Deployment and maintenance",
        "Performance optimization",
        "Real-world case studies"
      ],
      icon: Code,
      color: "orange"
    },
    {
      number: "05",
      title: "AI Ethics & Best Practices",
      duration: "45 minutes",
      lessons: 3,
      description: "Learn responsible AI usage, limitations, and how to avoid common pitfalls.",
      topics: [
        "AI bias and fairness",
        "Privacy and data protection",
        "Transparency and explainability",
        "Risk management strategies"
      ],
      icon: Shield,
      color: "red"
    },
    {
      number: "06",
      title: "Future of AI & Career Growth",
      duration: "30 minutes",
      lessons: 2,
      description: "Stay ahead of AI trends and prepare for the future of work.",
      topics: [
        "Emerging AI technologies",
        "Career opportunities in AI",
        "Continuous learning strategies",
        "Building your AI portfolio"
      ],
      icon: Target,
      color: "indigo"
    }
  ]

  const learningOutcomes = [
    "Master ChatGPT, Claude, and other AI tools",
    "Build 4 professional AI projects for your portfolio",
    "Automate business processes and workflows",
    "Create compelling content with AI assistance",
    "Understand AI ethics and responsible usage",
    "Stay ahead of AI trends and developments"
  ]

  const courseStats = [
    { icon: Clock, label: "Total Duration", value: "6+ Hours" },
    { icon: BookOpen, label: "Modules", value: "6" },
    { icon: Play, label: "Video Lessons", value: "23" },
    { icon: Users, label: "Projects", value: "4" },
    { icon: Award, label: "Certificate", value: "Included" },
    { icon: Star, label: "Lifetime Access", value: "Yes" }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
      purple: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
      green: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
      orange: "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400",
      red: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
      indigo: "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400"
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Course Curriculum
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              A comprehensive learning path designed to take you from AI beginner to confident practitioner. 
              Each module builds upon the previous one, ensuring you develop practical skills you can use immediately.
            </p>
            
            {/* Course Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
              {courseStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <stat.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="text-lg font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <Link href="/get-course">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <Play className="h-5 w-5 mr-2" />
                Enroll Now - $97
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Learning Outcomes */}
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
              What You'll Learn
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              By the end of this course, you'll have the skills and confidence to leverage AI tools effectively in your work and projects.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {learningOutcomes.map((outcome, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300">{outcome}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Course Modules
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Each module is carefully designed to build your AI skills progressively, with hands-on projects and real-world applications.
            </p>
          </motion.div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {modules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start gap-6">
                      <div className={`w-16 h-16 ${getColorClasses(module.color)} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <module.icon className="h-8 w-8" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <span className="text-2xl font-bold text-gray-400">{module.number}</span>
                          <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                            {module.title}
                          </CardTitle>
                        </div>
                        <CardDescription className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                          {module.description}
                        </CardDescription>
                        <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>{module.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Play className="h-4 w-4" />
                            <span>{module.lessons} lessons</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {module.topics.map((topic, topicIndex) => (
                        <div key={topicIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700 dark:text-gray-300">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Preview */}
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
              Hands-On Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Apply your learning through real-world projects that you can add to your portfolio and showcase to potential employers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                    AI Content Studio
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    Build a professional content creation system that generates viral social media posts and engaging blog articles.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                    <Bot className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                    Business Assistant
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    Create an intelligent AI assistant that handles customer support and business operations 24/7.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                    <Palette className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                    AI Creative Suite
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    Develop a complete design system that generates stunning graphics and visual assets for any brand.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-4">
                    <Code className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                    Automation Platform
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    Build intelligent workflows that automate complex business processes and scale your operations.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          </div>
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
              Ready to Master AI?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of professionals who are already using AI to transform their work and careers. 
              Start your AI journey today with our comprehensive curriculum.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                             <Link href="/get-course">
                               <Button 
                                 size="lg" 
                                 className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-200"
                               >
                                 <Play className="h-5 w-5 mr-2" />
                                 Enroll Now - $97
                                 <ArrowRight className="h-4 w-4 ml-2" />
                               </Button>
                             </Link>
              <Link href="#modules">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 text-lg transition-all duration-200"
                >
                  View Sample Lesson
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
