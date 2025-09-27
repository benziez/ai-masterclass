'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '../../providers/AuthProvider'
import { useParams } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Target, 
  Calendar, 
  DollarSign, 
  CheckCircle, 
  Clock, 
  Download,
  ArrowLeft,
  Star
} from 'lucide-react'
import Link from 'next/link'

interface LaunchPlan {
  title: string
  description: string
  duration: string
  difficulty: 'easy' | 'medium' | 'hard'
  earningPotential: {
    min: number
    max: number
    timeframe: string
  }
  phases: {
    title: string
    duration: string
    tasks: string[]
    deliverables: string[]
  }[]
  pricing: {
    starter: number
    premium: number
    enterprise: number
  }
  tools: string[]
  templates: string[]
}

export default function LaunchPlanPage() {
  const { user } = useAuth()
  const params = useParams()
  const planId = params.id as string
  
  const [plan, setPlan] = useState<LaunchPlan | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // For MVP, generate a mock launch plan based on the plan ID
    // In production, this would fetch from the database
    const mockPlan = generateMockLaunchPlan(planId)
    setPlan(mockPlan)
    setLoading(false)
  }, [planId])

  const generateMockLaunchPlan = (id: string): LaunchPlan => {
    const plans = {
      '1': {
        title: "AI Content Creation Agency",
        description: "Build a profitable AI-powered content creation agency serving local businesses.",
        duration: "30 days",
        difficulty: "medium" as const,
        earningPotential: { min: 2000, max: 15000, timeframe: "per month" },
        phases: [
          {
            title: "Foundation & Setup",
            duration: "Week 1",
            tasks: [
              "Set up business entity and banking",
              "Create professional website and portfolio",
              "Define service packages and pricing",
              "Set up project management tools"
            ],
            deliverables: [
              "Business registration documents",
              "Professional website",
              "Service packages document",
              "Project management system"
            ]
          },
          {
            title: "Content & Marketing",
            duration: "Week 2",
            tasks: [
              "Create sample content pieces",
              "Develop marketing materials",
              "Set up social media presence",
              "Create case studies and testimonials"
            ],
            deliverables: [
              "Content portfolio",
              "Marketing materials",
              "Social media accounts",
              "Case study templates"
            ]
          },
          {
            title: "Client Acquisition",
            duration: "Week 3",
            tasks: [
              "Identify target businesses",
              "Create outreach campaigns",
              "Schedule discovery calls",
              "Pitch services to prospects"
            ],
            deliverables: [
              "Target business list",
              "Outreach templates",
              "Discovery call script",
              "Pitch presentation"
            ]
          },
          {
            title: "Launch & Scale",
            duration: "Week 4",
            tasks: [
              "Onboard first clients",
              "Deliver initial projects",
              "Collect testimonials",
              "Plan scaling strategy"
            ],
            deliverables: [
              "Client onboarding process",
              "Project delivery system",
              "Testimonial collection",
              "Scaling roadmap"
            ]
          }
        ],
        pricing: {
          starter: 500,
          premium: 1500,
          enterprise: 5000
        },
        tools: ["ChatGPT Plus", "Claude", "Canva Pro", "Grammarly", "Buffer"],
        templates: [
          "Content brief template",
          "Client onboarding checklist",
          "Project proposal template",
          "Invoice template"
        ]
      }
    }

    return plans[id as keyof typeof plans] || plans['1']
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
      case 'hard': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
    }
  }

  if (loading) {
    return (
      <div className="p-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </div>
    )
  }

  if (!plan) {
    return (
      <div className="p-8">
        <div className="max-w-6xl mx-auto">
          <Card className="card">
            <CardContent className="text-center py-12">
              <Target className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Launch plan not found
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                The launch plan you're looking for doesn't exist.
              </p>
              <Link href="/software/app/recommendations">
                <Button className="btn-primary">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Recommendations
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <Link href="/software/recommendations">
              <Button variant="outline" size="sm" className="btn-secondary">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
            </Link>
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Target className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Launch Plan
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Your step-by-step guide to launching your AI business
              </p>
            </div>
          </div>
        </div>

        {/* Plan Overview */}
        <Card className="card mb-8">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-2xl mb-2">{plan.title}</CardTitle>
                <CardDescription className="text-lg mb-4">
                  {plan.description}
                </CardDescription>
                <div className="flex items-center space-x-4">
                  <Badge className={getDifficultyColor(plan.difficulty)}>
                    {plan.difficulty.charAt(0).toUpperCase() + plan.difficulty.slice(1)} Difficulty
                  </Badge>
                  <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                    <Calendar className="h-4 w-4" />
                    <span>{plan.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                    <DollarSign className="h-4 w-4" />
                    <span>${plan.earningPotential.min.toLocaleString()} - ${plan.earningPotential.max.toLocaleString()} {plan.earningPotential.timeframe}</span>
                  </div>
                </div>
              </div>
              <Button className="btn-primary">
                <Download className="h-4 w-4 mr-2" />
                Export PDF
              </Button>
            </div>
          </CardHeader>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Launch Phases */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Launch Phases</h2>
            
            {plan.phases.map((phase, index) => (
              <Card key={index} className="card">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <div>
                      <CardTitle className="text-xl">{phase.title}</CardTitle>
                      <CardDescription>{phase.duration}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Tasks
                      </h4>
                      <ul className="space-y-2">
                        {phase.tasks.map((task, taskIndex) => (
                          <li key={taskIndex} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 mr-2" />
                        Deliverables
                      </h4>
                      <ul className="space-y-2">
                        {phase.deliverables.map((deliverable, deliverableIndex) => (
                          <li key={deliverableIndex} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Pricing Tiers */}
            <Card className="card">
              <CardHeader>
                <CardTitle>Pricing Tiers</CardTitle>
                <CardDescription>Recommended pricing for your services</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Starter Package</h4>
                  <p className="text-2xl font-bold text-blue-600">${plan.pricing.starter}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Basic content package</p>
                </div>
                <div className="border rounded-lg p-4 border-blue-200 dark:border-blue-800">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Premium Package</h4>
                  <p className="text-2xl font-bold text-blue-600">${plan.pricing.premium}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Comprehensive content strategy</p>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Enterprise Package</h4>
                  <p className="text-2xl font-bold text-blue-600">${plan.pricing.enterprise}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Full-service content management</p>
                </div>
              </CardContent>
            </Card>

            {/* Required Tools */}
            <Card className="card">
              <CardHeader>
                <CardTitle>Required Tools</CardTitle>
                <CardDescription>Essential tools for this business</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {plan.tools.map((tool, index) => (
                    <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {tool}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Templates */}
            <Card className="card">
              <CardHeader>
                <CardTitle>Templates Included</CardTitle>
                <CardDescription>Ready-to-use templates</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {plan.templates.map((template, index) => (
                    <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-2" />
                      {template}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Actions */}
            <div className="space-y-3">
              <Link href="/software/clients">
                <Button className="btn-primary w-full">
                  Find Your First Clients
                </Button>
              </Link>
              <Button variant="outline" className="btn-secondary w-full">
                <Download className="h-4 w-4 mr-2" />
                Download Full Plan
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
