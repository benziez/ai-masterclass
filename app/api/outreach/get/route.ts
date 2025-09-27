import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'
import connectDB from '@/lib/mongodb'
import Outreach from '@/models/Outreach'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

export async function GET(request: NextRequest) {
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
    
    const outreach = await Outreach.find({ userId: decoded.userId })
      .populate('businessId', 'name industry city state')
      .sort({ createdAt: -1 })

    return NextResponse.json({ outreach }, { status: 200 })
  } catch (error) {
    console.error('Get outreach error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
