import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, ArrowRight, Zap, Target, Users, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Masterclass: Launchpad - Your AI Business Execution Tool',
  description: 'After completing AI Masterclass, Launchpad identifies your best income-ready AI service and hands you qualified local prospects with personalized outreach.',
}

export default function SoftwarePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Masterclass: <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Launchpad</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Your AI Business Execution Tool
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              After completing AI Masterclass, Launchpad identifies your best income-ready AI service and hands you qualified local prospects with personalized outreach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/software/login">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg">
                  Launch Your AI Business
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Three Core Pillars</h2>
            <p className="text-xl text-gray-300">Everything you need to launch and scale your AI business</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl">Path</CardTitle>
                <CardDescription className="text-gray-300">
                  What to sell
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  AI recommends the best income path based on your skills, time, budget, and risk tolerance.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl">Plan</CardTitle>
                <CardDescription className="text-gray-300">
                  How to launch
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Step-by-step launch plan with assets, pricing, and offer packaging tailored to your chosen path.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl">Pipeline</CardTitle>
                <CardDescription className="text-gray-300">
                  Who to sell to
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Local client discovery + personalized cold emails/DMs + tracking for maximum conversion.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Complete AI Business Toolkit</h2>
            <p className="text-xl text-gray-300">Everything you need to go from idea to income</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <TrendingUp className="h-6 w-6" />,
                title: "Smart Recommendations",
                description: "AI analyzes your profile to recommend the top 3 income paths with difficulty, ramp time, and earning potential."
              },
              {
                icon: <Target className="h-6 w-6" />,
                title: "Launch Plans",
                description: "14/30-day launch plans with deliverables, pricing, and offer packaging for your chosen path."
              },
              {
                icon: <Users className="h-6 w-6" />,
                title: "Local Client Finder",
                description: "Discover qualified prospects in your area across different industries and business types."
              },
              {
                icon: <Zap className="h-6 w-6" />,
                title: "Outreach Generator",
                description: "1-click personalized cold emails and DMs for each business with tone and style options."
              },
              {
                icon: <CheckCircle className="h-6 w-6" />,
                title: "CRM Tracking",
                description: "Track leads, status updates, notes, and export your outreach scripts to PDF."
              },
              {
                icon: <ArrowRight className="h-6 w-6" />,
                title: "Account & Billing",
                description: "Free vs Pro plan gating with usage tracking and feature access control."
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Launch Your AI Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who've already built profitable AI businesses with our proven system.
          </p>
          <Link href="/software/login">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}