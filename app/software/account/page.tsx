'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '../providers/AuthProvider'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { 
  User, 
  Mail, 
  CreditCard, 
  Settings, 
  Crown,
  CheckCircle,
  XCircle,
  ArrowRight
} from 'lucide-react'

export default function AccountPage() {
  const { user } = useAuth()
  const [loading, setLoading] = useState(false)

  const features = {
    free: [
      '3 AI business recommendations',
      'Basic client finder (50 businesses)',
      '5 outreach messages per month',
      'Basic CRM tracking'
    ],
    pro: [
      'Unlimited AI recommendations',
      'Full client database (1000+ businesses)',
      'Unlimited outreach messages',
      'Advanced CRM with analytics',
      'PDF export functionality',
      'Priority support',
      'Custom AI prompts',
      'Advanced filtering options'
    ]
  }

  const handleUpgrade = async () => {
    setLoading(true)
    // In a real app, this would integrate with Stripe
    setTimeout(() => {
      setLoading(false)
      alert('Upgrade functionality would be implemented with Stripe integration')
    }, 1000)
  }

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <User className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Account Settings
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Manage your account and subscription
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Information */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  Profile Information
                </CardTitle>
                <CardDescription>
                  Update your personal information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Full Name
                  </label>
                  <Input
                    value={user?.name || ''}
                    className="input"
                    disabled
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email Address
                  </label>
                  <Input
                    value={user?.email || ''}
                    className="input"
                    disabled
                  />
                </div>

                <Button variant="outline" className="btn-secondary">
                  Update Profile
                </Button>
              </CardContent>
            </Card>

            <Card className="card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="h-5 w-5 mr-2" />
                  Preferences
                </CardTitle>
                <CardDescription>
                  Customize your experience
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Default Outreach Tone
                  </label>
                  <select className="input">
                    <option value="professional">Professional</option>
                    <option value="friendly">Friendly</option>
                    <option value="casual">Casual</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Preferred Outreach Type
                  </label>
                  <select className="input">
                    <option value="email">Email</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="instagram">Instagram</option>
                    <option value="facebook">Facebook</option>
                  </select>
                </div>

                <Button variant="outline" className="btn-secondary">
                  Save Preferences
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Subscription */}
          <div className="space-y-6">
            <Card className="card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="h-5 w-5 mr-2" />
                  Current Plan
                </CardTitle>
                <CardDescription>
                  Your subscription details
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    {user?.plan === 'pro' ? (
                      <Crown className="h-8 w-8 text-white" />
                    ) : (
                      <User className="h-8 w-8 text-white" />
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {user?.plan === 'pro' ? 'Pro Plan' : 'Free Plan'}
                  </h3>
                  
                  <Badge className={`mb-4 ${
                    user?.plan === 'pro' 
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white' 
                      : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                  }`}>
                    {user?.plan === 'pro' ? 'Active' : 'Free Tier'}
                  </Badge>

                  {user?.plan === 'free' && (
                    <div className="space-y-4">
                      <p className="text-gray-600 dark:text-gray-400">
                        Upgrade to Pro for unlimited access to all features
                      </p>
                      <Button
                        onClick={handleUpgrade}
                        disabled={loading}
                        className="btn-primary w-full"
                      >
                        {loading ? 'Processing...' : 'Upgrade to Pro'}
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  )}

                  {user?.plan === 'pro' && (
                    <div className="space-y-4">
                      <p className="text-green-600 dark:text-green-400 font-medium">
                        You have access to all Pro features!
                      </p>
                      <Button variant="outline" className="btn-secondary w-full">
                        Manage Subscription
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card className="card">
              <CardHeader>
                <CardTitle>Plan Comparison</CardTitle>
                <CardDescription>
                  Compare features between plans
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Free Plan</h4>
                    <ul className="space-y-1">
                      {features.free.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Pro Plan</h4>
                    <ul className="space-y-1">
                      {features.pro.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card">
              <CardHeader>
                <CardTitle>Usage Statistics</CardTitle>
                <CardDescription>
                  Your current usage this month
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Recommendations Generated</span>
                    <span className="font-semibold text-gray-900 dark:text-white">3 / {user?.plan === 'pro' ? '∞' : '3'}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Outreach Messages</span>
                    <span className="font-semibold text-gray-900 dark:text-white">2 / {user?.plan === 'pro' ? '∞' : '5'}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Businesses Searched</span>
                    <span className="font-semibold text-gray-900 dark:text-white">12 / {user?.plan === 'pro' ? '∞' : '50'}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
