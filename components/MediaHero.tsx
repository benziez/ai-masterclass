'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Play, Users, Clock, Award } from 'lucide-react'
import Link from 'next/link'

export default function MediaHero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-screen flex items-center pt-20 sm:pt-24">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 sm:mb-8"
            >
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-center justify-center">
                <span className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-200 dark:border-blue-800 whitespace-nowrap">
                  <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                  Professional AI Education
                </span>
                <span className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 border border-red-200 dark:border-red-800 whitespace-nowrap">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                  Limited Time: $497 → $27
                </span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight px-2"
            >
              Master AI Tools
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                Build Your Future
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4"
            >
              Learn practical AI skills through hands-on projects. No coding required. 
              Designed for professionals, entrepreneurs, and anyone ready to leverage AI effectively.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 px-4"
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-left">
                  <div className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">2,000+</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Active Learners</div>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                  <Award className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 dark:text-green-400" />
                </div>
                <div className="text-left">
                  <div className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">4.9/5</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Student Rating</div>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="text-left">
                  <div className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">6+ Hours</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Video Content</div>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4"
            >
              <Link href="/get-course">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 w-full sm:w-auto min-h-[48px] sm:min-h-[56px]"
                >
                  <Play className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  Start Learning - $27
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 ml-2" />
                </Button>
              </Link>
              <Link href="/curriculum">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transition-all duration-200 w-full sm:w-auto min-h-[48px] sm:min-h-[56px]"
                >
                  View Curriculum
                </Button>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500 dark:text-gray-400 px-4"
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Lifetime Access</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Instant Access</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
