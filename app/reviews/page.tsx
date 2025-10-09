'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Star, 
  Quote, 
  Users, 
  TrendingUp, 
  Award, 
  ArrowRight,
  Play,
  CheckCircle,
  Calendar,
  DollarSign
} from 'lucide-react'
import NavBar from '@/components/NavBar'
import Link from 'next/link'

// Force dynamic rendering
export const dynamic = 'force-dynamic'

export default function ReviewsPage() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Marketing Manager",
      company: "TechStart Inc.",
      rating: 5,
      content: "This system completely transformed how I approach content creation. I went from spending 8 hours on blog posts to 2 hours, and the quality is even better. The AI tools I learned are now essential to my daily workflow.",
      avatar: "SC",
      results: "Saved 6+ hours per week",
      color: "blue"
    },
    {
      name: "Marcus Rodriguez",
      role: "Freelance Designer",
      company: "Self-Employed",
      rating: 5,
      content: "I was skeptical about AI at first, but this system showed me how to use it as a creative partner. I've increased my client base by 40% and can now offer AI-enhanced design services that set me apart from competitors.",
      avatar: "MR",
      results: "40% increase in clients",
      color: "green"
    },
    {
      name: "Emily Watson",
      role: "Business Analyst",
      company: "DataCorp",
      rating: 5,
      content: "The practical projects in this system gave me real-world skills I could immediately apply. I automated several reporting processes that used to take me hours, and my team now sees me as the AI expert.",
      avatar: "EW",
      results: "Automated 3 major processes",
      color: "purple"
    },
    {
      name: "David Kim",
      role: "Startup Founder",
      company: "InnovateLab",
      rating: 5,
      content: "As a founder, time is my most valuable asset. This system taught me how to leverage AI to scale my operations without hiring more people. The ROI was immediate - I saved thousands in potential hiring costs.",
      avatar: "DK",
      results: "Saved $15K in hiring costs",
      color: "orange"
    },
    {
      name: "Lisa Thompson",
      role: "Content Creator",
      company: "Digital Media",
      rating: 5,
      content: "I was struggling to keep up with content demands across multiple platforms. This system showed me how to create high-quality content in a fraction of the time. My engagement rates have increased by 60%.",
      avatar: "LT",
      results: "60% increase in engagement",
      color: "pink"
    },
    {
      name: "James Wilson",
      role: "Sales Director",
      company: "GrowthCo",
      rating: 5,
      content: "The AI tools I learned here have revolutionized our sales process. I can now personalize outreach at scale and my team's conversion rates have improved by 35%. This system paid for itself in the first month.",
      avatar: "JW",
      results: "35% increase in conversions",
      color: "indigo"
    }
  ]

  const stats = [
    { icon: Users, label: "Students Enrolled", value: "2,000+", color: "blue" },
    { icon: Star, label: "Average Rating", value: "4.9/5", color: "yellow" },
    { icon: TrendingUp, label: "Success Rate", value: "94%", color: "green" },
    { icon: Award, label: "Certificates Issued", value: "1,800+", color: "purple" }
  ]

  const successStories = [
    {
      title: "From $0 to $15K Monthly",
      subtitle: "Sarah's AI Freelance Journey",
      description: "Started with zero AI knowledge, now earns $15K/month as an AI consultant helping businesses automate their operations.",
      before: "Struggling freelancer making $2K/month",
      after: "AI consultant earning $15K/month",
      metrics: ["$180K annual income", "25+ clients", "6 months to success"],
      image: "👩‍💼",
      color: "green"
    },
    {
      title: "Corporate Promotion in 3 Months",
      subtitle: "David's Career Transformation",
      description: "Went from junior analyst to AI innovation lead, implementing solutions that saved his company $200K annually.",
      before: "Junior analyst, $45K salary",
      after: "AI Innovation Lead, $85K salary",
      metrics: ["$40K salary increase", "3-month timeline", "Company-wide impact"],
      image: "👨‍💼",
      color: "blue"
    },
    {
      title: "Agency Owner at 24",
      subtitle: "Marcus's Entrepreneurial Success",
      description: "Built a 7-figure AI-powered design agency from scratch, now serving Fortune 500 companies.",
      before: "Freelance designer, $3K/month",
      after: "Agency owner, $50K/month",
      metrics: ["$600K annual revenue", "15 employees", "Fortune 500 clients"],
      image: "🎨",
      color: "purple"
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
      green: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
      purple: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
      orange: "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400",
      pink: "bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400",
      indigo: "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400",
      yellow: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400"
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ))
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
                What Our Students Say
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed px-4 font-medium">
                Join thousands of professionals who have transformed their careers and businesses with AI. 
                Here's what they have to say about their experience.
              </p>
            
              {/* Stats */}
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-6">
                {stats.map((stat, index) => (
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

              <Button 
                size="lg" 
                className="relative bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 hover:from-green-600 hover:via-blue-600 hover:to-purple-600 text-white font-black px-8 sm:px-12 md:px-16 py-4 sm:py-5 md:py-6 text-lg sm:text-xl md:text-2xl shadow-[0_0_60px_rgba(34,197,94,0.5)] hover:shadow-[0_0_80px_rgba(34,197,94,0.7)] transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 w-full sm:w-auto min-h-[56px] sm:min-h-[64px] md:min-h-[72px] border-2 border-green-400/50 hover:border-green-300 backdrop-blur-sm"
              >
                <Play className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
                🚀 Join 2,000+ Students
                <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 ml-2" />
              </Button>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Testimonials Grid */}
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
              Real Results from Real Students
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-medium">
              These testimonials represent the actual experiences of our students. 
              Each one has achieved measurable results using the skills they learned in our system.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-gradient-to-br from-white/95 via-gray-50 to-white/95 dark:from-gray-900/95 dark:via-gray-800/50 dark:to-gray-900/95 border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:-translate-y-1 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 ${getColorClasses(testimonial.color)} rounded-full flex items-center justify-center font-semibold text-sm`}>
                        {testimonial.avatar}
                      </div>
                      <div className="flex">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                    <CardDescription className="text-gray-600 dark:text-gray-300 mb-4">
                      "{testimonial.content}"
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role} at {testimonial.company}</div>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-green-600 dark:text-green-400 font-medium">{testimonial.results}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
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
              Transform Your Life Like These Students
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-medium">
              Real people, real results. See how our students went from struggling to thriving with AI skills.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200 dark:border-blue-800">
                  <CardHeader>
                    <div className="text-4xl mb-4">{story.image}</div>
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                      {story.title}
                    </CardTitle>
                    <CardDescription className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">
                      {story.subtitle}
                    </CardDescription>
                    <CardDescription className="text-gray-600 dark:text-gray-300">
                      {story.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {/* Before/After */}
                    <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                      <div className="text-xs font-semibold text-red-600 dark:text-red-400 mb-1">BEFORE</div>
                      <div className="text-sm text-gray-700 dark:text-gray-300">{story.before}</div>
                    </div>
                    <div className="mb-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                      <div className="text-xs font-semibold text-green-600 dark:text-green-400 mb-1">AFTER</div>
                      <div className="text-sm text-gray-700 dark:text-gray-300">{story.after}</div>
                    </div>
                    
                    {/* Metrics */}
                    <div className="space-y-2">
                      {story.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{metric}</span>
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

      {/* Video Testimonials Preview */}
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
              Hear From Our Students
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Watch real students share their transformation stories and results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                      <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 flex items-center justify-center">
                        <div className="text-6xl">{video.thumbnail}</div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg">
                            <Play className="h-6 w-6 text-blue-600 ml-1" />
                          </div>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                          {video.duration}
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {video.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
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

      {/* Video Testimonials Preview */}
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
              Watch Student Success Stories
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Hear directly from our students about their journey and the impact this system has had on their careers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[1, 2, 3].map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 overflow-hidden">
                  <div className="relative aspect-video bg-gray-200 dark:bg-gray-700">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                        <Play className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Student Success Story #{video}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Watch how this student transformed their career with AI skills.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 font-medium">
              Join thousands of professionals who have already transformed their careers with AI. 
              Start your journey today and become the next success story.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/get-system">
                <Button 
                  size="lg" 
                  className="relative bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 hover:from-green-600 hover:via-blue-600 hover:to-purple-600 text-white font-black px-8 sm:px-12 md:px-16 py-4 sm:py-5 md:py-6 text-lg sm:text-xl md:text-2xl shadow-[0_0_60px_rgba(34,197,94,0.5)] hover:shadow-[0_0_80px_rgba(34,197,94,0.7)] transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 w-full sm:w-auto min-h-[56px] sm:min-h-[64px] md:min-h-[72px] border-2 border-green-400/50 hover:border-green-300 backdrop-blur-sm"
                >
                  <Play className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
                  🚀 Start Learning - $97
                  <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 ml-2" />
                </Button>
              </Link>
              <Link href="/curriculum">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-white/50 text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg transition-all duration-300 backdrop-blur-sm"
                >
                  View Curriculum
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300 mt-8">
              <div className="flex items-center gap-2 bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/20 rounded-xl px-4 py-2 backdrop-blur-sm">
                <CheckCircle className="h-4 w-4 text-green-400 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                <span className="font-medium">Join 2,000+ successful students</span>
              </div>
              <div className="flex items-center gap-2 bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/20 rounded-xl px-4 py-2 backdrop-blur-sm">
                <CheckCircle className="h-4 w-4 text-green-400 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                <span className="font-medium">Professional support</span>
              </div>
              <div className="flex items-center gap-2 bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/20 rounded-xl px-4 py-2 backdrop-blur-sm">
                <CheckCircle className="h-4 w-4 text-green-400 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                <span className="font-medium">Lifetime access to system</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
