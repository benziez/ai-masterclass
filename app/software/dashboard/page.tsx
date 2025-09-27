'use client'

import { useAuth } from '../providers/AuthProvider'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Target, 
  Users, 
  MessageSquare, 
  TrendingUp,
  ArrowRight,
  CheckCircle
} from 'lucide-react'
import Link from 'next/link'

export default function Dashboard() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/software/login')
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  const stats = [
    {
      title: 'Next Action',
      value: 'Complete Onboarding',
      description: 'Get your personalized AI business recommendations',
      icon: Target,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      title: 'Leads Saved',
      value: '0',
      description: 'Businesses in your outreach pipeline',
      icon: Users,
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      title: 'Outreach Sent',
      value: '0',
      description: 'Personalized emails and DMs sent',
      icon: MessageSquare,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    },
    {
      title: 'Conversion Rate',
      value: '0%',
      description: 'Leads that responded positively',
      icon: TrendingUp,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20'
    }
  ]

  const quickActions = [
    {
      title: 'Start Onboarding',
      description: 'Answer a few questions to get your personalized AI business recommendations',
      href: '/software/onboarding',
      icon: Target,
      primary: true
    },
    {
      title: 'Find Clients',
      description: 'Discover local businesses in your area that need AI services',
      href: '/software/clients',
      icon: Users,
      primary: false
    },
    {
      title: 'Generate Outreach',
      description: 'Create personalized cold emails and DMs for your prospects',
      href: '/software/outreach',
      icon: MessageSquare,
      primary: false
    }
  ]

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Welcome back, {user.name}! 👋
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Ready to launch your AI business? Let's get you started with your personalized action plan.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {stat.title}
                </CardTitle>
                <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={`h-4 w-4 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <Card key={index} className="card hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${action.primary ? 'bg-blue-50 dark:bg-blue-900/20' : 'bg-gray-50 dark:bg-gray-700'}`}>
                      <action.icon className={`h-5 w-5 ${action.primary ? 'text-blue-600' : 'text-gray-600 dark:text-gray-400'}`} />
                    </div>
                    <CardTitle className="text-lg">{action.title}</CardTitle>
                  </div>
                  <CardDescription>
                    {action.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href={action.href}>
                    <Button 
                      className={action.primary ? 'btn-primary w-full' : 'btn-secondary w-full'}
                    >
                      {action.primary ? 'Get Started' : 'Explore'}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Getting Started Checklist */}
        <Card className="card">
          <CardHeader>
            <CardTitle className="text-xl">Getting Started Checklist</CardTitle>
            <CardDescription>
              Follow these steps to launch your AI business successfully
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { step: 'Complete onboarding quiz', completed: false, href: '/software/onboarding' },
                { step: 'Review AI business recommendations', completed: false, href: '/software/recommendations' },
                { step: 'Choose your launch plan', completed: false, href: '/software/launch-plans' },
                { step: 'Find your first 10 prospects', completed: false, href: '/software/clients' },
                { step: 'Generate personalized outreach', completed: false, href: '/software/outreach' },
                { step: 'Track your results', completed: false, href: '/software/outreach' }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                    item.completed 
                      ? 'bg-green-500 text-white' 
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-400'
                  }`}>
                    {item.completed ? (
                      <CheckCircle className="h-3 w-3" />
                    ) : (
                      <span className="text-xs font-medium">{index + 1}</span>
                    )}
                  </div>
                  <Link 
                    href={item.href}
                    className={`flex-1 text-sm ${
                      item.completed 
                        ? 'text-green-600 dark:text-green-400' 
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  >
                    {item.step}
                  </Link>
                  {!item.completed && (
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
