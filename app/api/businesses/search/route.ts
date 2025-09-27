import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'
import connectDB from '@/lib/mongodb'
import Business from '@/models/Business'

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
    
    const { searchParams } = new URL(request.url)
    const city = searchParams.get('city')
    const state = searchParams.get('state')
    const industry = searchParams.get('industry')
    const size = searchParams.get('size')
    const aiReadiness = searchParams.get('aiReadiness')

    // Build query
    const query: any = {}
    
    if (city) query.city = city
    if (state) query.state = state
    if (industry) query.industry = industry
    if (size) query.size = size
    if (aiReadiness) query.aiReadiness = aiReadiness

    const businesses = await Business.find(query).sort({ createdAt: -1 }).limit(50)

    return NextResponse.json({ businesses }, { status: 200 })
  } catch (error) {
    console.error('Business search error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
