'use client'

import { useAuth } from '../providers/AuthProvider'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Target, 
  Calendar, 
  DollarSign, 
  ArrowRight,
  Star,
  Clock
} from 'lucide-react'
import Link from 'next/link'

export default function LaunchPlansPage() {
  const { user } = useAuth()

  const plans = [
    {
      id: '1',
      title: "AI Content Creation Agency",
      description: "Build a profitable AI-powered content creation agency serving local businesses.",
      duration: "30 days",
      difficulty: "medium" as const,
      earningPotential: { min: 2000, max: 15000, timeframe: "per month" },
      features: [
        "Complete business setup guide",
        "Service package templates",
        "Client acquisition strategies",
        "Pricing recommendations"
      ]
    },
    {
      id: '2',
      title: "AI Automation Consultant",
      description: "Help businesses automate workflows and processes using AI tools and custom solutions.",
      duration: "45 days",
      difficulty: "hard" as const,
      earningPotential: { min: 5000, max: 25000, timeframe: "per month" },
      features: [
        "Technical implementation guide",
        "Client assessment frameworks",
        "Automation templates",
        "Advanced pricing strategies"
      ]
    },
    {
      id: '3',
      title: "AI Social Media Manager",
      description: "Manage social media accounts using AI for content creation, scheduling, and engagement.",
      duration: "21 days",
      difficulty: "easy" as const,
      earningPotential: { min: 1000, max: 8000, timeframe: "per month" },
      features: [
        "Quick start guide",
        "Content templates",
        "Scheduling strategies",
        "Client management system"
      ]
    }
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
      case 'hard': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
    }
  }

  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Target className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Launch Plans
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Choose your AI business launch strategy
              </p>
            </div>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <Card key={plan.id} className="card hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <Badge className={getDifficultyColor(plan.difficulty)}>
                    {plan.difficulty.charAt(0).toUpperCase() + plan.difficulty.slice(1)}
                  </Badge>
                </div>
                
                <CardTitle className="text-xl mb-2">{plan.title}</CardTitle>
                <CardDescription className="text-base">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                    <Calendar className="h-4 w-4" />
                    <span>{plan.duration}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                    <DollarSign className="h-4 w-4" />
                    <span>${plan.earningPotential.min.toLocaleString()} - ${plan.earningPotential.max.toLocaleString()} {plan.earningPotential.timeframe}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">What's Included</h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                        <Star className="h-4 w-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href={`/software/launch-plan/${plan.id}`}>
                  <Button className="btn-primary w-full">
                    View Launch Plan
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="card mt-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
          <CardContent className="text-center py-12">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Launch Your AI Business?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Choose a launch plan that matches your skills and goals, then follow our step-by-step guide to build your AI business from the ground up.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/software/recommendations">
                <Button variant="outline" className="btn-secondary">
                  Get Personalized Recommendations
                </Button>
              </Link>
              <Link href="/software/clients">
                <Button className="btn-primary">
                  Start Finding Clients
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
