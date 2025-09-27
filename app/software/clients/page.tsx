'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '../providers/AuthProvider'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { 
  Search, 
  MapPin, 
  Building, 
  Mail, 
  Phone, 
  Globe,
  Users,
  TrendingUp,
  MessageSquare,
  Star,
  Filter
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

export default function ClientsPage() {
  const { user } = useAuth()
  const [businesses, setBusinesses] = useState<Business[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedIndustry, setSelectedIndustry] = useState('')
  const [selectedCity, setSelectedCity] = useState('')
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedAiReadiness, setSelectedAiReadiness] = useState('')

  const industries = [
    'healthcare', 'finance', 'ecommerce', 'real_estate', 'education', 
    'technology', 'consulting', 'retail', 'manufacturing', 'services'
  ]

  const cities = ['Austin', 'Miami']
  const sizes = ['small', 'medium', 'large']
  const aiReadinessLevels = ['low', 'medium', 'high']

  useEffect(() => {
    fetchBusinesses()
  }, [])

  const fetchBusinesses = async () => {
    try {
      const params = new URLSearchParams()
      if (selectedCity) params.append('city', selectedCity)
      if (selectedIndustry) params.append('industry', selectedIndustry)
      if (selectedSize) params.append('size', selectedSize)
      if (selectedAiReadiness) params.append('aiReadiness', selectedAiReadiness)

      const response = await fetch(`/api/businesses/search?${params}`)
      if (response.ok) {
        const data = await response.json()
        setBusinesses(data.businesses || [])
      }
    } catch (error) {
      console.error('Error fetching businesses:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchBusinesses()
  }, [selectedCity, selectedIndustry, selectedSize, selectedAiReadiness])

  const filteredBusinesses = businesses.filter(business => {
    const matchesSearch = business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         business.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         business.industry.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesSearch
  })

  const getSizeColor = (size: string) => {
    switch (size) {
      case 'small': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
      case 'medium': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
      case 'large': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
    }
  }

  const getAiReadinessColor = (readiness: string) => {
    switch (readiness) {
      case 'low': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
      case 'high': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
    }
  }

  if (loading) {
    return (
      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Users className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Client Finder
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Discover local businesses that need AI services
              </p>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <Card className="card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Search className="h-5 w-5 mr-2" />
              Search & Filter
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Search
                </label>
                <Input
                  placeholder="Search businesses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="input"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  City
                </label>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="input"
                >
                  <option value="">All Cities</option>
                  {cities.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Industry
                </label>
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="input"
                >
                  <option value="">All Industries</option>
                  {industries.map(industry => (
                    <option key={industry} value={industry}>
                      {industry.charAt(0).toUpperCase() + industry.slice(1).replace('_', ' ')}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Size
                </label>
                <select
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="input"
                >
                  <option value="">All Sizes</option>
                  {sizes.map(size => (
                    <option key={size} value={size}>
                      {size.charAt(0).toUpperCase() + size.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  AI Readiness
                </label>
                <select
                  value={selectedAiReadiness}
                  onChange={(e) => setSelectedAiReadiness(e.target.value)}
                  className="input"
                >
                  <option value="">All Levels</option>
                  {aiReadinessLevels.map(level => (
                    <option key={level} value={level}>
                      {level.charAt(0).toUpperCase() + level.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="mb-4">
          <p className="text-gray-600 dark:text-gray-400">
            Found {filteredBusinesses.length} businesses
          </p>
        </div>

        {/* Business Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBusinesses.map((business) => (
            <Card key={business._id} className="card hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <Building className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{business.name}</CardTitle>
                      <div className="flex items-center space-x-2 mt-1">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {business.city}, {business.state}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <Badge className={getSizeColor(business.size)}>
                      {business.size.charAt(0).toUpperCase() + business.size.slice(1)}
                    </Badge>
                    <Badge className={getAiReadinessColor(business.aiReadiness)}>
                      AI {business.aiReadiness}
                    </Badge>
                  </div>
                </div>
                <CardDescription>
                  {business.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Industry */}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Industry</h4>
                    <Badge variant="outline">
                      {business.industry.charAt(0).toUpperCase() + business.industry.slice(1).replace('_', ' ')}
                    </Badge>
                  </div>

                  {/* Pain Points */}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Pain Points</h4>
                    <div className="flex flex-wrap gap-1">
                      {business.painPoints.slice(0, 3).map((pain, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {pain}
                        </Badge>
                      ))}
                      {business.painPoints.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{business.painPoints.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Potential Services */}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">AI Opportunities</h4>
                    <div className="flex flex-wrap gap-1">
                      {business.potentialServices.slice(0, 2).map((service, index) => (
                        <Badge key={index} className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400 text-xs">
                          {service}
                        </Badge>
                      ))}
                      {business.potentialServices.length > 2 && (
                        <Badge className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400 text-xs">
                          +{business.potentialServices.length - 2} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-2">
                    {business.contactInfo.ownerName && (
                      <div className="flex items-center space-x-2 text-sm">
                        <Users className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600 dark:text-gray-400">
                          {business.contactInfo.ownerName}
                        </span>
                      </div>
                    )}
                    {business.email && (
                      <div className="flex items-center space-x-2 text-sm">
                        <Mail className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600 dark:text-gray-400">
                          {business.email}
                        </span>
                      </div>
                    )}
                    {business.website && (
                      <div className="flex items-center space-x-2 text-sm">
                        <Globe className="h-4 w-4 text-gray-400" />
                        <a 
                          href={business.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                        >
                          Website
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2 pt-4">
                    <Link href={`/software/outreach/${business._id}`} className="flex-1">
                      <Button className="btn-primary w-full">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Generate Outreach
                      </Button>
                    </Link>
                    <Button variant="outline" className="btn-secondary">
                      <Star className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredBusinesses.length === 0 && (
          <Card className="card">
            <CardContent className="text-center py-12">
              <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                No businesses found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try adjusting your search criteria or filters
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
