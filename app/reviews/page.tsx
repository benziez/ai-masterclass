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
      content: "This course completely transformed how I approach content creation. I went from spending 8 hours on blog posts to 2 hours, and the quality is even better. The AI tools I learned are now essential to my daily workflow.",
      avatar: "SC",
      results: "Saved 6+ hours per week",
      color: "blue"
    },
    {
      name: "Marcus Rodriguez",
      role: "Freelance Designer",
      company: "Self-Employed",
      rating: 5,
      content: "I was skeptical about AI at first, but this course showed me how to use it as a creative partner. I've increased my client base by 40% and can now offer AI-enhanced design services that set me apart from competitors.",
      avatar: "MR",
      results: "40% increase in clients",
      color: "green"
    },
    {
      name: "Emily Watson",
      role: "Business Analyst",
      company: "DataCorp",
      rating: 5,
      content: "The practical projects in this course gave me real-world skills I could immediately apply. I automated several reporting processes that used to take me hours, and my team now sees me as the AI expert.",
      avatar: "EW",
      results: "Automated 3 major processes",
      color: "purple"
    },
    {
      name: "David Kim",
      role: "Startup Founder",
      company: "InnovateLab",
      rating: 5,
      content: "As a founder, time is my most valuable asset. This course taught me how to leverage AI to scale my operations without hiring more people. The ROI was immediate - I saved thousands in potential hiring costs.",
      avatar: "DK",
      results: "Saved $15K in hiring costs",
      color: "orange"
    },
    {
      name: "Lisa Thompson",
      role: "Content Creator",
      company: "Digital Media",
      rating: 5,
      content: "I was struggling to keep up with content demands across multiple platforms. This course showed me how to create high-quality content in a fraction of the time. My engagement rates have increased by 60%.",
      avatar: "LT",
      results: "60% increase in engagement",
      color: "pink"
    },
    {
      name: "James Wilson",
      role: "Sales Director",
      company: "GrowthCo",
      rating: 5,
      content: "The AI tools I learned here have revolutionized our sales process. I can now personalize outreach at scale and my team's conversion rates have improved by 35%. This course paid for itself in the first month.",
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
              What Our Students Say
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Join thousands of professionals who have transformed their careers and businesses with AI. 
              Here's what they have to say about their experience.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className={`w-16 h-16 ${getColorClasses(stat.color)} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <stat.icon className="h-8 w-8" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Play className="h-5 w-5 mr-2" />
              Join 2,000+ Students
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
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
              Real Results from Real Students
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              These testimonials represent the actual experiences of our students. 
              Each one has achieved measurable results using the skills they learned in our course.
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
                <Card className="h-full bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
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
              Transform Your Life Like These Students
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
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
              Hear directly from our students about their journey and the impact this course has had on their careers.
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
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of professionals who have already transformed their careers with AI. 
              Start your journey today and become the next success story.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/get-course">
                <Button 
                  size="lg" 
                  className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <Play className="h-5 w-5 mr-2" />
                  Start Learning - $27
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
                <span>Join 2,000+ successful students</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>Professional support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>Lifetime access to course</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
