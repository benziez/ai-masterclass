'use client'

import { useState } from 'react'
import { useAuth } from '../providers/AuthProvider'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import { ArrowLeft, ArrowRight, Target } from 'lucide-react'

const skills = [
  { id: 'writing', label: 'Writing & Content Creation' },
  { id: 'design', label: 'Design & Visual Content' },
  { id: 'video', label: 'Video Production & Editing' },
  { id: 'automation', label: 'Process Automation' },
  { id: 'sales', label: 'Sales & Business Development' },
  { id: 'marketing', label: 'Digital Marketing' },
  { id: 'coding', label: 'Programming & Development' },
  { id: 'data_analysis', label: 'Data Analysis & Insights' },
  { id: 'customer_service', label: 'Customer Service & Support' },
  { id: 'project_management', label: 'Project Management' }
]

const industries = [
  { id: 'healthcare', label: 'Healthcare & Medical' },
  { id: 'finance', label: 'Finance & Banking' },
  { id: 'ecommerce', label: 'E-commerce & Retail' },
  { id: 'real_estate', label: 'Real Estate' },
  { id: 'education', label: 'Education & Training' },
  { id: 'technology', label: 'Technology & Software' },
  { id: 'consulting', label: 'Consulting & Professional Services' },
  { id: 'retail', label: 'Retail & Consumer Goods' },
  { id: 'manufacturing', label: 'Manufacturing & Industrial' },
  { id: 'services', label: 'General Services' }
]

export default function OnboardingPage() {
  const { user } = useAuth()
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [loading, setLoading] = useState(false)
  
  const [formData, setFormData] = useState({
    skills: [] as string[],
    experienceLevel: '',
    hoursPerWeek: 0,
    monthlyBudget: 0,
    riskTolerance: '',
    preferredWorkType: '',
    industriesOfInterest: [] as string[],
    mainGoal: '',
    location: {
      city: '',
      state: ''
    }
  })

  const steps = [
    { title: 'Skills & Experience', description: 'Tell us about your background' },
    { title: 'Time & Budget', description: 'How much can you invest?' },
    { title: 'Preferences', description: 'What works best for you?' },
    { title: 'Goals & Location', description: 'Where do you want to go?' }
  ]

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      handleSubmit()
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/onboarding/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        router.push('/software/recommendations')
      } else {
        console.error('Failed to save onboarding data')
      }
    } catch (error) {
      console.error('Error saving onboarding data:', error)
    } finally {
      setLoading(false)
    }
  }

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const updateLocation = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      location: {
        ...prev.location,
        [field]: value
      }
    }))
  }

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">What are your strongest skills?</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Select all that apply</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {skills.map((skill) => (
                  <div key={skill.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={skill.id}
                      checked={formData.skills.includes(skill.id)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          updateFormData('skills', [...formData.skills, skill.id])
                        } else {
                          updateFormData('skills', formData.skills.filter(s => s !== skill.id))
                        }
                      }}
                    />
                    <Label htmlFor={skill.id} className="text-sm">
                      {skill.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">What's your experience level with AI tools?</h3>
              <RadioGroup
                value={formData.experienceLevel}
                onValueChange={(value) => updateFormData('experienceLevel', value)}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="beginner" id="beginner" />
                  <Label htmlFor="beginner">Beginner - Just getting started</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="intermediate" id="intermediate" />
                  <Label htmlFor="intermediate">Intermediate - Some experience</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="advanced" id="advanced" />
                  <Label htmlFor="advanced">Advanced - Very comfortable</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        )

      case 1:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">How many hours per week can you dedicate?</h3>
              <RadioGroup
                value={formData.hoursPerWeek.toString()}
                onValueChange={(value) => updateFormData('hoursPerWeek', parseInt(value))}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="5" id="5" />
                  <Label htmlFor="5">5-10 hours (Side hustle)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="15" id="15" />
                  <Label htmlFor="15">15-20 hours (Part-time)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="30" id="30" />
                  <Label htmlFor="30">30-40 hours (Full-time)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="50" id="50" />
                  <Label htmlFor="50">50+ hours (All-in)</Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">What's your monthly budget for tools and marketing?</h3>
              <RadioGroup
                value={formData.monthlyBudget.toString()}
                onValueChange={(value) => updateFormData('monthlyBudget', parseInt(value))}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="0" id="budget-0" />
                  <Label htmlFor="budget-0">$0-100 (Bootstrap mode)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="250" id="budget-250" />
                  <Label htmlFor="budget-250">$100-500 (Moderate investment)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="750" id="budget-750" />
                  <Label htmlFor="budget-750">$500-1000 (Serious investment)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="1500" id="budget-1500" />
                  <Label htmlFor="budget-1500">$1000+ (Full investment)</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">What's your risk tolerance?</h3>
              <RadioGroup
                value={formData.riskTolerance}
                onValueChange={(value) => updateFormData('riskTolerance', value)}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="low" id="low-risk" />
                  <Label htmlFor="low-risk">Low - Prefer proven, stable methods</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="medium" id="medium-risk" />
                  <Label htmlFor="medium-risk">Medium - Some risk for better returns</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="high" id="high-risk" />
                  <Label htmlFor="high-risk">High - Willing to try new approaches</Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">What type of work do you prefer?</h3>
              <RadioGroup
                value={formData.preferredWorkType}
                onValueChange={(value) => updateFormData('preferredWorkType', value)}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="remote" id="remote" />
                  <Label htmlFor="remote">Remote - Work from anywhere</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="local" id="local" />
                  <Label htmlFor="local">Local - Meet clients in person</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="hybrid" id="hybrid" />
                  <Label htmlFor="hybrid">Hybrid - Mix of remote and local</Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Which industries interest you most?</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Select up to 3</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {industries.map((industry) => (
                  <div key={industry.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={industry.id}
                      checked={formData.industriesOfInterest.includes(industry.id)}
                      onCheckedChange={(checked) => {
                        if (checked && formData.industriesOfInterest.length < 3) {
                          updateFormData('industriesOfInterest', [...formData.industriesOfInterest, industry.id])
                        } else if (!checked) {
                          updateFormData('industriesOfInterest', formData.industriesOfInterest.filter(i => i !== industry.id))
                        }
                      }}
                    />
                    <Label htmlFor={industry.id} className="text-sm">
                      {industry.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">What's your main goal?</h3>
              <RadioGroup
                value={formData.mainGoal}
                onValueChange={(value) => updateFormData('mainGoal', value)}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="side_income" id="side-income" />
                  <Label htmlFor="side-income">Side Income - Extra money on the side</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="freelance" id="freelance" />
                  <Label htmlFor="freelance">Freelance - Replace my current job</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="agency" id="agency" />
                  <Label htmlFor="agency">Agency - Build a team and scale</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="replace_income" id="replace-income" />
                  <Label htmlFor="replace-income">Replace Income - Full-time business</Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Where are you located?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="city" className="block text-sm font-medium mb-1">City</Label>
                  <Input
                    id="city"
                    value={formData.location.city}
                    onChange={(e) => updateLocation('city', e.target.value)}
                    placeholder="Enter your city"
                    className="input"
                  />
                </div>
                <div>
                  <Label htmlFor="state" className="block text-sm font-medium mb-1">State</Label>
                  <Input
                    id="state"
                    value={formData.location.state}
                    onChange={(e) => updateLocation('state', e.target.value)}
                    placeholder="Enter your state"
                    className="input"
                  />
                </div>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  const isStepValid = () => {
    switch (currentStep) {
      case 0:
        return formData.skills.length > 0 && formData.experienceLevel
      case 1:
        return formData.hoursPerWeek > 0 && formData.monthlyBudget >= 0
      case 2:
        return formData.riskTolerance && formData.preferredWorkType && formData.industriesOfInterest.length > 0
      case 3:
        return formData.mainGoal && formData.location.city && formData.location.state
      default:
        return false
    }
  }

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Target className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Onboarding Quiz
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Help us understand your background and goals
              </p>
            </div>
          </div>
          
          <Progress value={(currentStep + 1) / steps.length * 100} className="mb-4" />
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
            <span>Step {currentStep + 1} of {steps.length}</span>
            <span>{Math.round((currentStep + 1) / steps.length * 100)}% Complete</span>
          </div>
        </div>

        {/* Step Content */}
        <Card className="card">
          <CardHeader>
            <CardTitle className="text-2xl">{steps[currentStep].title}</CardTitle>
            <CardDescription>{steps[currentStep].description}</CardDescription>
          </CardHeader>
          <CardContent>
            {renderStep()}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className="btn-secondary"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>
          
          <Button
            onClick={handleNext}
            disabled={!isStepValid() || loading}
            className="btn-primary"
          >
            {loading ? 'Saving...' : currentStep === steps.length - 1 ? 'Complete Setup' : 'Next'}
            {!loading && <ArrowRight className="h-4 w-4 ml-2" />}
          </Button>
        </div>
      </div>
    </div>
  )
}
