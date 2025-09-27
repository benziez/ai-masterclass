import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'
import connectDB from '@/lib/mongodb'
import Onboarding from '@/models/Onboarding'
import Recommendation from '@/models/Recommendation'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'
const OPENAI_API_KEY = process.env.OPENAI_API_KEY

export async function POST(request: NextRequest) {
  try {
    const token = request.cookies.get('auth-token')?.value

    if (!token) {
      return NextResponse.json(
        { error: 'No token provided' },
        { status: 401 }
      )
    }

    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string; email: string }
    
    await connectDB()
    
    // Get user's onboarding data
    const onboarding = await Onboarding.findOne({ userId: decoded.userId })
    if (!onboarding) {
      return NextResponse.json(
        { error: 'Onboarding data not found' },
        { status: 404 }
      )
    }

    // Generate AI recommendations
    const recommendations = await generateAIRecommendations(onboarding)

    // Save recommendations
    await Recommendation.findOneAndUpdate(
      { userId: decoded.userId },
      {
        userId: decoded.userId,
        recommendations
      },
      { upsert: true, new: true }
    )

    return NextResponse.json({ recommendations }, { status: 200 })
  } catch (error) {
    console.error('Recommendations generation error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

async function generateAIRecommendations(onboarding: any) {
  // For MVP, return mock recommendations based on user profile
  // In production, this would call OpenAI API
  
  const { skills, experienceLevel, hoursPerWeek, monthlyBudget, riskTolerance, mainGoal, industriesOfInterest } = onboarding

  // Mock recommendation templates
  const templates = [
    {
      title: "AI Content Creation Agency",
      description: "Create and manage AI-generated content for businesses including blog posts, social media, and marketing materials.",
      difficulty: "medium" as const,
      rampTime: "2-4 weeks",
      earningPotential: { min: 2000, max: 15000, timeframe: "per month" },
      requiredTools: ["ChatGPT Plus", "Claude", "Canva Pro", "Grammarly"],
      pros: [
        "High demand for content creation",
        "Scalable with team building",
        "Recurring revenue potential",
        "Low technical barriers"
      ],
      cons: [
        "Competitive market",
        "Requires strong writing skills",
        "Client acquisition challenges"
      ],
      marketDemand: "high" as const,
      competition: "medium" as const
    },
    {
      title: "AI Automation Consultant",
      description: "Help businesses automate workflows and processes using AI tools and custom solutions.",
      difficulty: "hard" as const,
      rampTime: "4-8 weeks",
      earningPotential: { min: 5000, max: 25000, timeframe: "per month" },
      requiredTools: ["Zapier", "Make.com", "OpenAI API", "Custom Scripts"],
      pros: [
        "High-value services",
        "Strong ROI for clients",
        "Recurring maintenance contracts",
        "Technical differentiation"
      ],
      cons: [
        "Requires technical expertise",
        "Longer sales cycles",
        "Complex project management"
      ],
      marketDemand: "high" as const,
      competition: "low" as const
    },
    {
      title: "AI Social Media Manager",
      description: "Manage social media accounts using AI for content creation, scheduling, and engagement.",
      difficulty: "easy" as const,
      rampTime: "1-2 weeks",
      earningPotential: { min: 1000, max: 8000, timeframe: "per month" },
      requiredTools: ["ChatGPT", "Buffer", "Canva", "Later"],
      pros: [
        "Quick to start",
        "Low barrier to entry",
        "High client demand",
        "Flexible schedule"
      ],
      cons: [
        "Lower profit margins",
        "High competition",
        "Requires constant updates"
      ],
      marketDemand: "high" as const,
      competition: "high" as const
    }
  ]

  // Customize recommendations based on user profile
  let selectedRecommendations: any[] = [...templates]

  // Adjust based on skills
  if (skills.includes('coding')) {
    selectedRecommendations[0] = {
      ...templates[1],
      title: "AI Development Services",
      description: "Build custom AI applications and integrations for businesses using your coding skills."
    }
  }

  // Adjust based on experience level
  if (experienceLevel === 'beginner') {
    selectedRecommendations = selectedRecommendations.map(rec => ({
      ...rec,
      difficulty: rec.difficulty === 'hard' ? 'medium' : rec.difficulty
    }))
  }

  // Adjust based on budget
  if (monthlyBudget < 250) {
    selectedRecommendations = selectedRecommendations.map(rec => ({
      ...rec,
      requiredTools: rec.requiredTools.filter((tool: string) => 
        !tool.includes('Pro') && !tool.includes('API')
      )
    }))
  }

  // Adjust based on hours available
  if (hoursPerWeek < 15) {
    selectedRecommendations = selectedRecommendations.map(rec => ({
      ...rec,
      earningPotential: {
        ...rec.earningPotential,
        min: Math.round(rec.earningPotential.min * 0.6),
        max: Math.round(rec.earningPotential.max * 0.6)
      }
    }))
  }

  return selectedRecommendations.map((rec, index) => ({
    rank: index + 1,
    ...rec
  }))
}
