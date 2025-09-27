'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '../../providers/AuthProvider'
import { useParams } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { 
  MessageSquare, 
  Mail, 
  Send, 
  Building, 
  MapPin, 
  Users,
  ArrowLeft,
  Copy,
  Check
} from 'lucide-react'
import Link from 'next/link'

interface Business {
  _id: string
  name: string
  industry: string
  city: string
  state: string
  website?: string
  email?: string
  phone?: string
  description: string
  size: 'small' | 'medium' | 'large'
  aiReadiness: 'low' | 'medium' | 'high'
  painPoints: string[]
  potentialServices: string[]
  contactInfo: {
    ownerName?: string
    ownerEmail?: string
    ownerLinkedIn?: string
    socialMedia?: {
      facebook?: string
      instagram?: string
      linkedin?: string
    }
  }
}

export default function OutreachPage() {
  const { user } = useAuth()
  const params = useParams()
  const businessId = params.businessId as string
  
  const [business, setBusiness] = useState<Business | null>(null)
  const [loading, setLoading] = useState(true)
  const [generating, setGenerating] = useState(false)
  const [outreachType, setOutreachType] = useState<'email' | 'linkedin' | 'instagram' | 'facebook'>('email')
  const [tone, setTone] = useState<'professional' | 'friendly' | 'casual'>('professional')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (businessId) {
      fetchBusiness()
    }
  }, [businessId])

  const fetchBusiness = async () => {
    try {
      const response = await fetch(`/api/businesses/${businessId}`)
      if (response.ok) {
        const data = await response.json()
        setBusiness(data.business)
      }
    } catch (error) {
      console.error('Error fetching business:', error)
    } finally {
      setLoading(false)
    }
  }

  const generateOutreach = async () => {
    if (!business) return

    setGenerating(true)
    try {
      const response = await fetch('/api/outreach/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          businessId: business._id,
          type: outreachType,
          tone,
          businessData: business
        })
      })

      if (response.ok) {
        const data = await response.json()
        setSubject(data.subject || '')
        setMessage(data.message)
      }
    } catch (error) {
      console.error('Error generating outreach:', error)
    } finally {
      setGenerating(false)
    }
  }

  const saveOutreach = async () => {
    if (!business || !message) return

    try {
      const response = await fetch('/api/outreach/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          businessId: business._id,
          type: outreachType,
          subject,
          message
        })
      })

      if (response.ok) {
        // Redirect to outreach dashboard
        window.location.href = '/software/outreach'
      }
    } catch (error) {
      console.error('Error saving outreach:', error)
    }
  }

  const copyToClipboard = async () => {
    const text = outreachType === 'email' ? `Subject: ${subject}\n\n${message}` : message
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (loading) {
    return (
      <div className="p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </div>
    )
  }

  if (!business) {
    return (
      <div className="p-8">
        <div className="max-w-4xl mx-auto">
          <Card className="card">
            <CardContent className="text-center py-12">
              <Building className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Business not found
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                The business you're looking for doesn't exist or has been removed.
              </p>
              <Link href="/software/app/clients">
                <Button className="btn-primary">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Client Finder
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
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <Link href="/software/clients">
              <Button variant="outline" size="sm" className="btn-secondary">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
            </Link>
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <MessageSquare className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Generate Outreach
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Create personalized outreach for {business.name}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Business Info */}
          <div className="lg:col-span-1">
            <Card className="card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Building className="h-5 w-5 mr-2" />
                  Business Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                    {business.name}
                  </h3>
                  <div className="flex items-center space-x-2 mt-1">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {business.city}, {business.state}
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Industry</h4>
                  <Badge variant="outline">
                    {business.industry.charAt(0).toUpperCase() + business.industry.slice(1).replace('_', ' ')}
                  </Badge>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Description</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {business.description}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Pain Points</h4>
                  <div className="flex flex-wrap gap-1">
                    {business.painPoints.map((pain, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {pain}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">AI Opportunities</h4>
                  <div className="flex flex-wrap gap-1">
                    {business.potentialServices.map((service, index) => (
                      <Badge key={index} className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400 text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>

                {business.contactInfo.ownerName && (
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Contact</h4>
                    <div className="flex items-center space-x-2 text-sm">
                      <Users className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-600 dark:text-gray-400">
                        {business.contactInfo.ownerName}
                      </span>
                    </div>
                    {business.email && (
                      <div className="flex items-center space-x-2 text-sm mt-1">
                        <Mail className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600 dark:text-gray-400">
                          {business.email}
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Outreach Generator */}
          <div className="lg:col-span-2">
            <Card className="card">
              <CardHeader>
                <CardTitle>Outreach Generator</CardTitle>
                <CardDescription>
                  Customize your outreach message for {business.name}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Outreach Type */}
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Outreach Type</h4>
                  <RadioGroup
                    value={outreachType}
                    onValueChange={(value: any) => setOutreachType(value)}
                    className="flex space-x-6"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="email" id="email" />
                      <Label htmlFor="email">Email</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="linkedin" id="linkedin" />
                      <Label htmlFor="linkedin">LinkedIn</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="instagram" id="instagram" />
                      <Label htmlFor="instagram">Instagram</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="facebook" id="facebook" />
                      <Label htmlFor="facebook">Facebook</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Tone */}
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Tone</h4>
                  <RadioGroup
                    value={tone}
                    onValueChange={(value: any) => setTone(value)}
                    className="flex space-x-6"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="professional" id="professional" />
                      <Label htmlFor="professional">Professional</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="friendly" id="friendly" />
                      <Label htmlFor="friendly">Friendly</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="casual" id="casual" />
                      <Label htmlFor="casual">Casual</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Generate Button */}
                <Button
                  onClick={generateOutreach}
                  disabled={generating}
                  className="btn-primary w-full"
                >
                  {generating ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Generating...
                    </>
                  ) : (
                    <>
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Generate Outreach
                    </>
                  )}
                </Button>

                {/* Generated Content */}
                {message && (
                  <div className="space-y-4">
                    {outreachType === 'email' && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Subject Line
                        </label>
                        <Input
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          className="input"
                          placeholder="Enter subject line"
                        />
                      </div>
                    )}

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Message
                      </label>
                      <Textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="input min-h-[200px]"
                        placeholder="Generated message will appear here..."
                      />
                    </div>

                    <div className="flex space-x-3">
                      <Button
                        onClick={copyToClipboard}
                        variant="outline"
                        className="btn-secondary flex-1"
                      >
                        {copied ? (
                          <>
                            <Check className="h-4 w-4 mr-2" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="h-4 w-4 mr-2" />
                            Copy
                          </>
                        )}
                      </Button>
                      <Button
                        onClick={saveOutreach}
                        className="btn-primary flex-1"
                      >
                        <Send className="h-4 w-4 mr-2" />
                        Save & Track
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
