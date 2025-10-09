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
      title: "The AI Mindset",
      duration: "1 hour",
      lessons: 3,
      description: "Develop the foundational mindset needed to think like an AI Income Engineer and build automated systems.",
      topics: [
        "Understanding the AI Income Engineering™ philosophy",
        "Building systems vs. learning prompts",
        "The automation-first mindset for income generation"
      ],
      icon: BookOpen,
      color: "blue"
    },
    {
      number: "02", 
      title: "Building Businesses with AI",
      duration: "45 minutes",
      lessons: 2,
      description: "Learn how to identify and create profitable AI-powered business models that generate consistent revenue.",
      topics: [
        "Identifying AI business opportunities",
        "Validating AI income streams before building"
      ],
      icon: TrendingUp,
      color: "purple"
    },
    {
      number: "03",
      title: "AI for Automation & Systems",
      duration: "40 minutes", 
      lessons: 2,
      description: "Master the tools and frameworks for building automated AI systems that work 24/7.",
      topics: [
        "Essential AI automation tools and platforms",
        "Building your first automated AI workflow"
      ],
      icon: Zap,
      color: "green"
    },
    {
      number: "04",
      title: "Content & Marketing with AI",
      duration: "1 hour 15 minutes",
      lessons: 3,
      description: "Create compelling content and marketing systems that attract customers and generate leads automatically.",
      topics: [
        "AI-powered content creation systems",
        "Automated marketing and lead generation",
        "Scaling content production with AI"
      ],
      icon: FileText,
      color: "orange"
    },
    {
      number: "05",
      title: "AI Tools & Software Mastery",
      duration: "1 hour 20 minutes",
      lessons: 3,
      description: "Master the complete AI tool stack that successful AI Income Engineers use to build profitable systems.",
      topics: [
        "Essential AI tools for income generation",
        "Advanced prompting and AI optimization",
        "Building custom AI workflows"
      ],
      icon: Bot,
      color: "red"
    },
    {
      number: "06",
      title: "Scaling & Optimization",
      duration: "35 minutes",
      lessons: 2,
      description: "Learn how to scale your AI income systems and optimize them for maximum profitability.",
      topics: [
        "Scaling AI income streams",
        "Optimization strategies for maximum revenue"
      ],
      icon: Target,
      color: "indigo"
    },
    {
      number: "07",
      title: "Advanced AI Strategies",
      duration: "40 minutes",
      lessons: 2,
      description: "Discover advanced AI Income Engineering™ strategies used by top performers to generate $10K+ monthly.",
      topics: [
        "Advanced automation frameworks",
        "High-value AI income strategies"
      ],
      icon: Shield,
      color: "cyan"
    },
    {
      number: "08",
      title: "Bonus: Future-Proofing Your AI Business",
      duration: "50 minutes",
      lessons: 3,
      description: "Bonus module covering AI stock investing, future careers, and long-term AI business strategy.",
      topics: [
        "AI Stock Investor's Guide (2025 Edition)",
        "Future Careers: AI-Proof Jobs",
        "Long-term AI business strategy"
      ],
      icon: Award,
      color: "yellow"
    }
  ]

  const learningOutcomes = [
    "Build 5+ proven AI income systems generating $5K+ monthly",
    "Master complete automation frameworks that work 24/7",
    "Create automated content and marketing systems",
    "Design AI-powered business models from scratch",
    "Scale AI income streams to $10K+ monthly revenue",
    "Future-proof your career with AI Income Engineering™"
  ]

  const systemStats = [
    { icon: Clock, label: "Total Duration", value: "5+ Hours" },
    { icon: BookOpen, label: "Modules", value: "8" },
    { icon: FileText, label: "Lessons", value: "19" },
    { icon: Users, label: "Income Systems", value: "5+" },
    { icon: Award, label: "Bonus Content", value: "3 Bonus Lessons" },
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
                Course Curriculum
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed px-4 font-medium">
                A comprehensive learning path designed to take you from AI beginner to confident practitioner. 
                Each module builds upon the previous one, ensuring you develop practical skills you can use immediately.
              </p>
            
              {/* Course Stats */}
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-6">
                {systemStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center gap-3 sm:gap-4 bg-gradient-to-r from-green-500/5 to-green-600/5 border-2 border-green-500/20 rounded-2xl px-4 py-3 backdrop-blur-sm hover:border-green-400/40 transition-all duration-300"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.4)]">
                      <stat.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="text-xl sm:text-2xl font-black text-white">{stat.value}</div>
                      <div className="text-sm sm:text-base text-green-300 font-medium">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Link href="/get-system">
                <Button 
                  size="lg" 
                  className="relative bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 hover:from-green-600 hover:via-blue-600 hover:to-purple-600 text-white font-black px-8 sm:px-12 md:px-16 py-4 sm:py-5 md:py-6 text-lg sm:text-xl md:text-2xl shadow-[0_0_60px_rgba(34,197,94,0.5)] hover:shadow-[0_0_80px_rgba(34,197,94,0.7)] transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 w-full sm:w-auto min-h-[56px] sm:min-h-[64px] md:min-h-[72px] border-2 border-green-400/50 hover:border-green-300 backdrop-blur-sm"
                >
                  <Play className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
                  🚀 Enroll Now - $97
                  <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Learning Outcomes */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              What You'll Learn
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-medium">
              By the end of this system, you'll have the skills and confidence to leverage AI tools effectively in your work and projects.
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
                className="flex items-start gap-3 bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/20 rounded-xl px-4 py-3 backdrop-blur-sm hover:border-green-400/40 transition-all duration-300"
              >
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                <span className="text-gray-300 font-medium">{outcome}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
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
              Course Modules
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-medium">
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
                <Card className="h-full bg-gradient-to-br from-white/95 via-gray-50 to-white/95 dark:from-gray-900/95 dark:via-gray-800/50 dark:to-gray-900/95 border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:-translate-y-1 backdrop-blur-sm">
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
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-blue-500/5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              Hands-On Projects
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-medium">
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
              <Card className="h-full bg-gradient-to-br from-white/95 via-gray-50 to-white/95 dark:from-gray-900/95 dark:via-gray-800/50 dark:to-gray-900/95 border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:-translate-y-1 backdrop-blur-sm">
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
              <Card className="h-full bg-gradient-to-br from-white/95 via-gray-50 to-white/95 dark:from-gray-900/95 dark:via-gray-800/50 dark:to-gray-900/95 border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:-translate-y-1 backdrop-blur-sm">
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
              <Card className="h-full bg-gradient-to-br from-white/95 via-gray-50 to-white/95 dark:from-gray-900/95 dark:via-gray-800/50 dark:to-gray-900/95 border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:-translate-y-1 backdrop-blur-sm">
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
              <Card className="h-full bg-gradient-to-br from-white/95 via-gray-50 to-white/95 dark:from-gray-900/95 dark:via-gray-800/50 dark:to-gray-900/95 border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:-translate-y-1 backdrop-blur-sm">
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
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-blue-500/5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              Ready to Master AI?
            </h2>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 font-medium">
              Join thousands of professionals who are already using AI to transform their work and careers. 
              Start your AI journey today with our comprehensive curriculum.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/get-system">
                <Button 
                  size="lg" 
                  className="relative bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 hover:from-green-600 hover:via-blue-600 hover:to-purple-600 text-white font-black px-8 sm:px-12 md:px-16 py-4 sm:py-5 md:py-6 text-lg sm:text-xl md:text-2xl shadow-[0_0_60px_rgba(34,197,94,0.5)] hover:shadow-[0_0_80px_rgba(34,197,94,0.7)] transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 w-full sm:w-auto min-h-[56px] sm:min-h-[64px] md:min-h-[72px] border-2 border-green-400/50 hover:border-green-300 backdrop-blur-sm"
                >
                  <Play className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
                  🚀 Enroll Now - $97
                  <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 ml-2" />
                </Button>
              </Link>
              <Link href="#modules">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-white/50 text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg transition-all duration-300 backdrop-blur-sm"
                >
                  View Sample Lesson
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300 mt-8">
              <div className="flex items-center gap-2 bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/20 rounded-xl px-4 py-2 backdrop-blur-sm">
                <CheckCircle className="h-4 w-4 text-green-400 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                <span className="font-medium">Professional support</span>
              </div>
              <div className="flex items-center gap-2 bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/20 rounded-xl px-4 py-2 backdrop-blur-sm">
                <CheckCircle className="h-4 w-4 text-green-400 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                <span className="font-medium">Lifetime access</span>
              </div>
              <div className="flex items-center gap-2 bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/20 rounded-xl px-4 py-2 backdrop-blur-sm">
                <CheckCircle className="h-4 w-4 text-green-400 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                <span className="font-medium">Certificate included</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
