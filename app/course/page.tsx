'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Lock, CheckCircle, BookOpen, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const ACCESS_CODE = 'AIMASTERCLASS2025'

const modules = [
  {
    id: 1,
    title: 'The AI Mindset',
    description: 'Master the mindset that separates winners from everyone else',
    lessons: 3,
    duration: '1 hour',
    locked: false
  },
  {
    id: 2,
    title: 'Building Businesses with AI',
    description: 'Discover the 5 proven business models making people serious money',
    lessons: 2,
    duration: '45 min',
    locked: false
  },
  {
    id: 3,
    title: 'AI for Automation & Systems',
    description: 'Build systems that work 24/7 while you sleep',
    lessons: 2,
    duration: '40 min',
    locked: false
  },
  {
    id: 4,
    title: 'Content & Marketing with AI',
    description: 'Create faceless content and marketing that converts',
    lessons: 3,
    duration: '1 hour',
    locked: false
  },
  {
    id: 5,
    title: 'AI Tools Mastery',
    description: 'Build your core stack and master the essential tools',
    lessons: 2,
    duration: '40 min',
    locked: false
  },
  {
    id: 6,
    title: 'Becoming Irreplaceable with AI',
    description: 'Position yourself as the AI expert in your field',
    lessons: 2,
    duration: '38 min',
    locked: false
  },
  {
    id: 7,
    title: 'Scaling & Monetization',
    description: 'Turn your AI skills into $5K-$15K/month income',
    lessons: 2,
    duration: '47 min',
    locked: false
  },
  {
    id: 8,
    title: 'Future-Proofing & Resources',
    description: 'Stay ahead with the 30-day roadmap and complete resource library',
    lessons: 2,
    duration: '40 min',
    locked: false
  }
]

export default function SystemPage() {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [code, setCode] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user already unlocked (stored in localStorage)
    const unlocked = localStorage.getItem('system_unlocked')
    if (unlocked === 'true') {
      setIsUnlocked(true)
    }
    setIsLoading(false)
  }, [])

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault()
    if (code.toUpperCase() === ACCESS_CODE) {
      setIsUnlocked(true)
      localStorage.setItem('system_unlocked', 'true')
      setError('')
    } else {
      setError('Invalid access code. Please check your purchase confirmation email.')
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    )
  }

  // Locked state - show access code form
  if (!isUnlocked) {
    return (
      <main className="min-h-screen bg-black overflow-x-hidden relative pt-20 sm:pt-24">
        {/* Animated background gradient */}
        <div className="fixed inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-green-900/20 opacity-50"></div>
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-700/10 via-transparent to-transparent"></div>

        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-md mx-auto">
            <div className="bg-gradient-to-br from-gray-900/95 via-gray-800/50 to-gray-900/95 border-2 border-cyan-500/30 rounded-2xl p-8 backdrop-blur-sm shadow-[0_0_30px_rgba(6,182,212,0.3)]">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                  <Lock className="h-10 w-10 text-white" />
                </div>
                <h1 className="text-3xl font-black text-white mb-2">
                  Welcome to AI Masterclass
                </h1>
                <p className="text-gray-300">
                  Enter your access code to unlock the system
                </p>
              </div>

              <form onSubmit={handleUnlock} className="space-y-4">
                <div>
                  <label htmlFor="code" className="block text-sm font-medium text-gray-300 mb-2">
                    Access Code
                  </label>
                  <input
                    type="text"
                    id="code"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Enter your access code"
                    className="w-full px-4 py-3 bg-black/50 border-2 border-cyan-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-all"
                  />
                </div>

                {error && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-3 text-red-400 text-sm">
                    {error}
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 text-lg shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all"
                >
                  Unlock System
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-700">
                <p className="text-sm text-gray-400 text-center">
                  Don't have access yet?{' '}
                  <Link href="/training" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                    Get the system →
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }

  // Unlocked state - show system modules with premium design
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-x-hidden relative">
      {/* Premium animated background */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-600/20 via-purple-600/10 to-transparent"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-cyan-600/20 via-blue-600/10 to-transparent"></div>
      <div className="fixed inset-0 bg-gradient-to-r from-purple-900/5 via-blue-900/5 to-cyan-900/5"></div>

      <div className="relative z-10 flex flex-col lg:flex-row h-screen">
        {/* Mobile Header - Only visible on mobile */}
        <div className="lg:hidden bg-black/40 backdrop-blur-xl border-b border-white/10 shadow-2xl p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-black text-lg">AI</span>
              </div>
              <div>
                <h1 className="text-lg font-black text-white">AI Masterclass</h1>
                <p className="text-blue-300 text-xs font-medium">Premium System</p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl px-3 py-1">
              <span className="text-green-400 font-semibold text-xs">Access Granted</span>
            </div>
          </div>
        </div>

        {/* Premium Sidebar - Hidden on mobile, shown on desktop */}
        <div className="hidden lg:flex lg:flex-col w-96 bg-black/40 backdrop-blur-xl border-r border-white/10 shadow-2xl">
          <div className="p-8 border-b border-white/10 flex-shrink-0">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-black text-xl">AI</span>
              </div>
              <div>
                <h1 className="text-2xl font-black text-white">Masterclass</h1>
                <p className="text-blue-300 text-sm font-medium">Premium System</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-4 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-green-400 font-bold text-sm">Access Granted</p>
                  <p className="text-green-300/80 text-xs">Full system unlocked</p>
                </div>
              </div>
            </div>
          </div>
          
          <nav className="flex-1 overflow-y-auto p-6">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              System Modules
            </h3>
            <div className="space-y-3">
              {modules.map((module, index) => (
                <Link 
                  key={module.id}
                  href={`/system/module-${module.id}`} 
                  className="group block relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-[1.02]">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25 transition-all">
                        <span className="text-white font-black text-lg">{module.id}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-white font-bold text-base mb-2 group-hover:text-blue-300 transition-colors">
                          {module.title}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed mb-3 line-clamp-2">
                          {module.description}
                        </p>
                        <div className="flex items-center gap-4 text-xs">
                          <div className="flex items-center gap-1 text-blue-400">
                            <BookOpen className="h-3 w-3" />
                            <span>{module.lessons} lessons</span>
                          </div>
                          <div className="flex items-center gap-1 text-purple-400">
                            <span>⏱️</span>
                            <span>{module.duration}</span>
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </nav>
        </div>

        {/* Premium Main Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-12">
            {/* Mobile System Modules - Only visible on mobile */}
            <div className="lg:hidden mb-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                System Modules
              </h2>
              <div className="space-y-4">
                {modules.map((module) => (
                  <Link 
                    key={module.id}
                    href={`/system/module-${module.id}`} 
                    className="group block relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-[1.02]">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25 transition-all">
                          <span className="text-white font-black text-lg">{module.id}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-white font-bold text-base mb-2 group-hover:text-blue-300 transition-colors">
                            {module.title}
                          </h3>
                          <p className="text-gray-300 text-sm leading-relaxed mb-3 line-clamp-2">
                            {module.description}
                          </p>
                          <div className="flex items-center gap-4 text-xs">
                            <div className="flex items-center gap-1 text-blue-400">
                              <BookOpen className="h-3 w-3" />
                              <span>{module.lessons} lessons</span>
                            </div>
                            <div className="flex items-center gap-1 text-purple-400">
                              <span>⏱️</span>
                              <span>{module.duration}</span>
                            </div>
                          </div>
                        </div>
                        <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Hero Section */}
            <div className="text-center mb-8 lg:mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 lg:mb-8 backdrop-blur-sm">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-blue-300 font-semibold text-xs sm:text-sm">Premium AI Education</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-4 lg:mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  AI Income
                </span>
                <br />
                <span className="text-white">Engineering™</span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium mb-8 lg:mb-12 px-4">
                The system for designing automated income with AI — used by modern creators, freelancers, and entrepreneurs to <span className="text-blue-400 font-bold">earn while they sleep</span>
              </p>

              <div className="flex flex-col items-center justify-center gap-4 mb-8 lg:mb-16 px-4">
                <Link 
                  href="/system/module-1"
                  className="group relative inline-flex items-center bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 hover:from-blue-600 hover:via-purple-600 hover:to-cyan-600 text-white font-black px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-75 transition-opacity"></div>
                  <span className="relative flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                    🚀 Join the Revolution
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                
                <div className="text-center">
                  <p className="text-gray-400 text-xs sm:text-sm mb-2">
                    <span className="text-blue-400 font-semibold">Don't learn prompts. Learn systems that earn.</span>
                  </p>
                  <div className="flex items-center justify-center gap-2 text-gray-400 text-xs sm:text-sm">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400" />
                    <span>Become an AI Income Engineer</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 lg:mb-16">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl lg:rounded-2xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-white text-lg sm:text-xl lg:text-2xl">🧠</span>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 lg:mb-3">8 Modules</h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">Complete AI Income Engineering™ curriculum covering mindset, systems, automation, and monetization frameworks.</p>
              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl lg:rounded-2xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-white text-lg sm:text-xl lg:text-2xl">⚡</span>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 lg:mb-3">19 Lessons</h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">Step-by-step AI Income Engineering™ tutorials with actionable systems you can implement immediately.</p>
              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 hover:bg-white/10 transition-all duration-300 group sm:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl lg:rounded-2xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-white text-lg sm:text-xl lg:text-2xl">💰</span>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 lg:mb-3">$5K-$15K/Month</h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">Proven automated income systems and AI Income Engineering™ strategies to generate serious monthly revenue.</p>
              </div>
            </div>

            {/* Premium Feature Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 lg:mb-16">
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-blue-500/20 rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 hover:border-blue-500/40 transition-all duration-300">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 lg:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <span className="text-white text-lg sm:text-xl">🎯</span>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">What You'll Master</h3>
                </div>
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm sm:text-base">5 proven AI Income Engineering™ systems generating $5K+ monthly</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm sm:text-base">Complete automation frameworks that work 24/7</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm sm:text-base">Master the AI Income Engineering™ tools stack</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm sm:text-base">30-day roadmap to engineer your first automated income system</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-purple-500/20 rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 hover:border-purple-500/40 transition-all duration-300">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 lg:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <span className="text-white text-lg sm:text-xl">📚</span>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">System Structure</h3>
                </div>
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex items-center gap-3">
                    <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm sm:text-base">8 comprehensive modules with deep-dive content</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm sm:text-base">19 detailed lessons with real-world examples</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm sm:text-base">5+ hours of premium content and strategies</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm sm:text-base">Lifetime access with future updates included</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 backdrop-blur-xl border border-white/10 rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 lg:mb-4">
                  Ready to Become an AI Income Engineer?
                </h2>
                <p className="text-lg sm:text-xl text-gray-300 mb-6 lg:mb-8 max-w-2xl mx-auto px-4">
                  Join thousands of AI Income Engineers who've already designed automated income systems. Start with Module 1 and begin your journey to $5K-$15K monthly automated revenue.
                </p>
                <Link 
                  href="/system/module-1"
                  className="inline-flex items-center bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 hover:from-blue-600 hover:via-purple-600 hover:to-cyan-600 text-white font-black px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6 rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 text-base sm:text-lg"
                >
                  🚀 Join the Revolution
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 ml-2 sm:ml-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

