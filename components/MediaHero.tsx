'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Play, Users, Clock, Award, DollarSign, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function MediaHero() {
  const [timeLeft, setTimeLeft] = useState({ hours: 47, minutes: 23, seconds: 15 })

  // Countdown timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen bg-black overflow-x-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-green-500/20 to-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
        <div className="min-h-screen flex items-center pt-16 sm:pt-20 md:pt-24">
          <div className="max-w-5xl mx-auto text-center">

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 sm:mb-8 leading-tight px-2 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            >
              Learn
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 drop-shadow-[0_0_40px_rgba(59,130,246,0.5)]">
                AI Income Engineering™
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed px-4 font-medium"
            >
              The system for designing automated income with AI — used by modern creators, freelancers, and entrepreneurs to <span className="text-blue-400 font-bold">earn while they sleep</span>
            </motion.p>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-8 sm:mb-12"
            >
              <div className="inline-flex items-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-2 border-blue-500/30 rounded-2xl px-6 py-4 mb-6 backdrop-blur-sm shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-4 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                <span className="text-base font-semibold text-blue-300">
                  <strong className="text-white">Sarah from Texas</strong> built her first AI income system in 3 days • <strong className="text-white">Mike</strong> now earns $5,016/month while he sleeps
                </span>
              </div>
            </motion.div>

            {/* AI Income Engineer Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 px-4"
            >
              <div className="flex items-center gap-3 sm:gap-4 bg-gradient-to-r from-blue-500/5 to-blue-600/5 border-2 border-blue-500/20 rounded-2xl px-4 py-3 backdrop-blur-sm hover:border-blue-400/40 transition-all duration-300">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                  <Users className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xl sm:text-2xl font-black text-white">2,000+</div>
                  <div className="text-sm sm:text-base text-blue-300 font-medium">AI Income Engineers</div>
                </div>
              </div>
              <div className="flex items-center gap-3 sm:gap-4 bg-gradient-to-r from-green-500/5 to-green-600/5 border-2 border-green-500/20 rounded-2xl px-4 py-3 backdrop-blur-sm hover:border-green-400/40 transition-all duration-300">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.4)]">
                  <DollarSign className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xl sm:text-2xl font-black text-white">$2.3M+</div>
                  <div className="text-sm sm:text-base text-green-300 font-medium">Automated Income</div>
                </div>
              </div>
              <div className="flex items-center gap-3 sm:gap-4 bg-gradient-to-r from-purple-500/5 to-purple-600/5 border-2 border-purple-500/20 rounded-2xl px-4 py-3 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-300">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(147,51,234,0.4)]">
                  <TrendingUp className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xl sm:text-2xl font-black text-white">24/7</div>
                  <div className="text-sm sm:text-base text-purple-300 font-medium">Income Systems</div>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4"
            >
              <Link href="/training">
                <Button 
                  size="lg" 
                  className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 hover:from-blue-600 hover:via-purple-600 hover:to-cyan-600 text-white font-black px-8 sm:px-12 md:px-16 py-4 sm:py-5 md:py-6 text-lg sm:text-xl md:text-2xl shadow-[0_0_60px_rgba(59,130,246,0.5)] hover:shadow-[0_0_80px_rgba(59,130,246,0.7)] transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 w-full sm:w-auto min-h-[56px] sm:min-h-[64px] md:min-h-[72px] border-2 border-blue-400/50 hover:border-blue-300 backdrop-blur-sm"
                >
                  <Play className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
                  🚀 Join the Revolution - $27
                  <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 ml-2" />
                </Button>
              </Link>
              <Link href="/opt-in">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-gray-500/50 text-gray-300 hover:bg-gray-800/50 hover:border-gray-400 font-bold px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-base sm:text-lg md:text-xl transition-all duration-300 w-full sm:w-auto min-h-[48px] sm:min-h-[56px] backdrop-blur-sm hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                >
                  Get Free Guide First
                </Button>
              </Link>
            </motion.div>

            {/* Catchphrase */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-8 sm:mb-12"
            >
              <p className="text-lg sm:text-xl text-blue-400 font-bold">
                Don't learn prompts. Learn systems that earn.
              </p>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500 dark:text-gray-400 px-4"
            >
              <div className="flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-xl px-4 py-2 backdrop-blur-sm">
                <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                <span className="text-blue-300 font-medium">Become an AI Income Engineer</span>
              </div>
              <div className="flex items-center gap-3 bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/20 rounded-xl px-4 py-2 backdrop-blur-sm">
                <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                <span className="text-green-300 font-medium">Lifetime Access</span>
              </div>
              <div className="flex items-center gap-3 bg-gradient-to-r from-purple-500/10 to-purple-600/10 border border-purple-500/20 rounded-xl px-4 py-2 backdrop-blur-sm">
                <div className="w-4 h-4 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full shadow-[0_0_10px_rgba(147,51,234,0.5)]"></div>
                <span className="text-purple-300 font-medium">No Experience Needed</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
