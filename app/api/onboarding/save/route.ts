import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'
import connectDB from '@/lib/mongodb'
import Onboarding from '@/models/Onboarding'
import User from '@/models/User'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

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
    
    const onboardingData = await request.json()

    // Save or update onboarding data
    const onboarding = await Onboarding.findOneAndUpdate(
      { userId: decoded.userId },
      {
        userId: decoded.userId,
        ...onboardingData
      },
      { upsert: true, new: true }
    )

    // Mark user as onboarding completed
    await User.findByIdAndUpdate(decoded.userId, {
      onboardingCompleted: true
    })

    return NextResponse.json(onboarding, { status: 200 })
  } catch (error) {
    console.error('Onboarding save error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
