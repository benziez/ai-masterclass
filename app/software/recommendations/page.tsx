'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '../providers/AuthProvider'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  TrendingUp, 
  Clock, 
  DollarSign, 
  Target, 
  CheckCircle, 
  XCircle,
  ArrowRight,
  Zap,
  Star
} from 'lucide-react'
import Link from 'next/link'

interface Recommendation {
  rank: number
  title: string
  description: string
  difficulty: 'easy' | 'medium' | 'hard'
  rampTime: string
  earningPotential: {
    min: number
    max: number
    timeframe: string
  }
  requiredTools: string[]
  pros: string[]
  cons: string[]
  marketDemand: 'low' | 'medium' | 'high'
  competition: 'low' | 'medium' | 'high'
}

export default function RecommendationsPage() {
  const { user } = useAuth()
  const router = useRouter()
  const [recommendations, setRecommendations] = useState<Recommendation[]>([])
  const [loading, setLoading] = useState(true)
  const [generating, setGenerating] = useState(false)

  useEffect(() => {
    fetchRecommendations()
  }, [])

  const fetchRecommendations = async () => {
    try {
      const response = await fetch('/api/recommendations/get')
      if (response.ok) {
        const data = await response.json()
        setRecommendations(data.recommendations || [])
      }
    } catch (error) {
      console.error('Error fetching recommendations:', error)
    } finally {
      setLoading(false)
    }
  }

  const generateRecommendations = async () => {
    setGenerating(true)
    try {
      const response = await fetch('/api/recommendations/generate', {
        method: 'POST'
      })
      
      if (response.ok) {
        const data = await response.json()
        setRecommendations(data.recommendations)
      }
    } catch (error) {
      console.error('Error generating recommendations:', error)
    } finally {
      setGenerating(false)
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
      case 'hard': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
    }
  }

  const getDemandColor = (demand: string) => {
    switch (demand) {
      case 'high': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
      case 'low': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
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

  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                AI Business Recommendations
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Personalized income paths based on your profile
              </p>
            </div>
          </div>
        </div>

        {recommendations.length === 0 ? (
          <Card className="card">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl">Generate Your Recommendations</CardTitle>
              <CardDescription className="text-lg">
                Our AI will analyze your profile and recommend the top 3 income paths that match your skills, goals, and preferences.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button
                onClick={generateRecommendations}
                disabled={generating}
                className="btn-primary text-lg px-8 py-4"
              >
                {generating ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Analyzing Your Profile...
                  </>
                ) : (
                  <>
                    <Zap className="h-5 w-5 mr-2" />
                    Generate My Recommendations
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-8">
            {/* Top Recommendation */}
            {recommendations[0] && (
              <Card className="card border-2 border-blue-200 dark:border-blue-800">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">1</span>
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{recommendations[0].title}</CardTitle>
                        <Badge className={`${getDifficultyColor(recommendations[0].difficulty)} mt-2`}>
                          {recommendations[0].difficulty.charAt(0).toUpperCase() + recommendations[0].difficulty.slice(1)} Difficulty
                        </Badge>
                      </div>
                    </div>
                    <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                      Top Pick
                    </Badge>
                  </div>
                  <CardDescription className="text-lg">
                    {recommendations[0].description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                        <DollarSign className="h-5 w-5 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          ${recommendations[0].earningPotential.min.toLocaleString()} - ${recommendations[0].earningPotential.max.toLocaleString()}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {recommendations[0].earningPotential.timeframe}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                        <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {recommendations[0].rampTime}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Time to first client
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
                        <TrendingUp className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {recommendations[0].marketDemand.charAt(0).toUpperCase() + recommendations[0].marketDemand.slice(1)} Demand
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Market opportunity
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Pros
                      </h4>
                      <ul className="space-y-2">
                        {recommendations[0].pros.map((pro, index) => (
                          <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                        <XCircle className="h-4 w-4 text-red-500 mr-2" />
                        Cons
                      </h4>
                      <ul className="space-y-2">
                        {recommendations[0].cons.map((con, index) => (
                          <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href={`/software/launch-plan/${recommendations[0].rank}`}>
                      <Button className="btn-primary flex-1">
                        <Target className="h-4 w-4 mr-2" />
                        Get Launch Plan
                      </Button>
                    </Link>
                    <Link href="/software/clients">
                      <Button variant="outline" className="btn-secondary flex-1">
                        Find Clients
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Other Recommendations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recommendations.slice(1).map((rec, index) => (
                <Card key={rec.rank} className="card">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{rec.rank}</span>
                      </div>
                      <div>
                        <CardTitle className="text-xl">{rec.title}</CardTitle>
                        <Badge className={`${getDifficultyColor(rec.difficulty)} mt-1`}>
                          {rec.difficulty.charAt(0).toUpperCase() + rec.difficulty.slice(1)}
                        </Badge>
                      </div>
                    </div>
                    <CardDescription>
                      {rec.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Earning Potential</span>
                        <span className="font-semibold text-gray-900 dark:text-white">
                          ${rec.earningPotential.min.toLocaleString()} - ${rec.earningPotential.max.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Ramp Time</span>
                        <span className="font-semibold text-gray-900 dark:text-white">{rec.rampTime}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Market Demand</span>
                        <Badge className={getDemandColor(rec.marketDemand)}>
                          {rec.marketDemand.charAt(0).toUpperCase() + rec.marketDemand.slice(1)}
                        </Badge>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2">
                      <Link href={`/software/launch-plan/${rec.rank}`}>
                        <Button variant="outline" className="btn-secondary flex-1">
                          View Plan
                        </Button>
                      </Link>
                      <Link href="/software/clients">
                        <Button variant="outline" className="btn-secondary flex-1">
                          Find Clients
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Regenerate Button */}
            <div className="text-center">
              <Button
                onClick={generateRecommendations}
                disabled={generating}
                variant="outline"
                className="btn-secondary"
              >
                {generating ? 'Regenerating...' : 'Regenerate Recommendations'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
