'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '../providers/AuthProvider'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { 
  MessageSquare, 
  Search, 
  Filter,
  Mail,
  Users,
  TrendingUp,
  CheckCircle,
  Clock,
  XCircle,
  Eye,
  Edit,
  Download
} from 'lucide-react'
import Link from 'next/link'

interface Outreach {
  _id: string
  businessId: {
    _id: string
    name: string
    industry: string
    city: string
    state: string
  }
  type: 'email' | 'linkedin' | 'instagram' | 'facebook'
  subject?: string
  message: string
  status: 'queued' | 'sent' | 'replied' | 'booked' | 'declined'
  notes?: string
  sentAt?: string
  repliedAt?: string
  createdAt: string
}

export default function OutreachPage() {
  const { user } = useAuth()
  const [outreach, setOutreach] = useState<Outreach[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('')

  const statusOptions = [
    { value: '', label: 'All Status' },
    { value: 'queued', label: 'Queued' },
    { value: 'sent', label: 'Sent' },
    { value: 'replied', label: 'Replied' },
    { value: 'booked', label: 'Booked' },
    { value: 'declined', label: 'Declined' }
  ]

  useEffect(() => {
    fetchOutreach()
  }, [])

  const fetchOutreach = async () => {
    try {
      const response = await fetch('/api/outreach/get')
      if (response.ok) {
        const data = await response.json()
        setOutreach(data.outreach || [])
      }
    } catch (error) {
      console.error('Error fetching outreach:', error)
    } finally {
      setLoading(false)
    }
  }

  const filteredOutreach = outreach.filter(item => {
    const matchesSearch = item.businessId.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.businessId.industry.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (item.subject && item.subject.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesStatus = !statusFilter || item.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'queued': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
      case 'sent': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
      case 'replied': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
      case 'booked': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400'
      case 'declined': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'queued': return <Clock className="h-4 w-4" />
      case 'sent': return <Mail className="h-4 w-4" />
      case 'replied': return <CheckCircle className="h-4 w-4" />
      case 'booked': return <Users className="h-4 w-4" />
      case 'declined': return <XCircle className="h-4 w-4" />
      default: return <MessageSquare className="h-4 w-4" />
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'email': return <Mail className="h-4 w-4" />
      case 'linkedin': return <Users className="h-4 w-4" />
      case 'instagram': return <MessageSquare className="h-4 w-4" />
      case 'facebook': return <MessageSquare className="h-4 w-4" />
      default: return <MessageSquare className="h-4 w-4" />
    }
  }

  const stats = {
    total: outreach.length,
    queued: outreach.filter(o => o.status === 'queued').length,
    sent: outreach.filter(o => o.status === 'sent').length,
    replied: outreach.filter(o => o.status === 'replied').length,
    booked: outreach.filter(o => o.status === 'booked').length,
    conversionRate: outreach.length > 0 ? Math.round((outreach.filter(o => o.status === 'booked').length / outreach.length) * 100) : 0
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
              <MessageSquare className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                My Outreach
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Track and manage your client outreach campaigns
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <Card className="card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Outreach</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.total}</p>
                </div>
                <MessageSquare className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Queued</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.queued}</p>
                </div>
                <Clock className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Sent</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.sent}</p>
                </div>
                <Mail className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Replied</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.replied}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Conversion Rate</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.conversionRate}%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Search
                </label>
                <Input
                  placeholder="Search by business name, industry, or subject..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="input"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Status
                </label>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="input"
                >
                  {statusOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Outreach List */}
        <div className="space-y-4">
          {filteredOutreach.map((item) => (
            <Card key={item._id} className="card">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="flex items-center space-x-2">
                        {getTypeIcon(item.type)}
                        <span className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                          {item.type}
                        </span>
                      </div>
                      <Badge className={getStatusColor(item.status)}>
                        <div className="flex items-center space-x-1">
                          {getStatusIcon(item.status)}
                          <span className="capitalize">{item.status}</span>
                        </div>
                      </Badge>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {item.businessId.name}
                    </h3>
                    
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {item.businessId.industry.charAt(0).toUpperCase() + item.businessId.industry.slice(1).replace('_', ' ')} • {item.businessId.city}, {item.businessId.state}
                    </p>

                    {item.subject && (
                      <p className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                        Subject: {item.subject}
                      </p>
                    )}

                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                      {item.message.substring(0, 150)}...
                    </p>

                    <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
                      <span>Created: {new Date(item.createdAt).toLocaleDateString()}</span>
                      {item.sentAt && (
                        <span>Sent: {new Date(item.sentAt).toLocaleDateString()}</span>
                      )}
                      {item.repliedAt && (
                        <span>Replied: {new Date(item.repliedAt).toLocaleDateString()}</span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 ml-4">
                    <Button variant="outline" size="sm" className="btn-secondary">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="btn-secondary">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="btn-secondary">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredOutreach.length === 0 && (
          <Card className="card">
            <CardContent className="text-center py-12">
              <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                No outreach found
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {outreach.length === 0 
                  ? "You haven't created any outreach yet. Start by finding clients and generating personalized messages."
                  : "Try adjusting your search criteria or filters"
                }
              </p>
              {outreach.length === 0 && (
                <Link href="/software/clients">
                  <Button className="btn-primary">
                    Find Clients
                  </Button>
                </Link>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
