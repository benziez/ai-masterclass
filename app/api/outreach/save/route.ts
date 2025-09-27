import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'
import connectDB from '@/lib/mongodb'
import Outreach from '@/models/Outreach'

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
    
    const { businessId, type, subject, message } = await request.json()

    // Save outreach
    const outreach = await Outreach.create({
      userId: decoded.userId,
      businessId,
      type,
      subject,
      message,
      status: 'queued'
    })

    return NextResponse.json(outreach, { status: 201 })
  } catch (error) {
    console.error('Save outreach error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
