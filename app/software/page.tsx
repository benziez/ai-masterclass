'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function SoftwarePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Masterclass: Launchpad
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            The execution tool that identifies your best income-ready AI service and hands you qualified local prospects with personalized outreach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/software/login"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
            <Link 
              href="/get-course"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-white mb-3">Path</h3>
            <p className="text-gray-300">AI recommends the best income path based on your skills, time, budget, and risk tolerance.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">📋</div>
            <h3 className="text-xl font-bold text-white mb-3">Plan</h3>
            <p className="text-gray-300">Step-by-step launch plan with assets, pricing, and offer packaging.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-white mb-3">Pipeline</h3>
            <p className="text-gray-300">Local client discovery + personalized cold emails/DMs + tracking.</p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Launch Your AI Business?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have already built successful AI-powered businesses using our proven system.
          </p>
          <Link 
            href="/software/login"
            className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-12 py-4 rounded-lg text-xl font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Start Your Journey
          </Link>
        </div>
      </div>
    </div>
  )
}
