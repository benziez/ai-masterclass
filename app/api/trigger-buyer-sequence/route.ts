import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email, firstName } = await request.json()

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    console.log('🎉 Purchase detected for:', email)

    // Start the buyer email sequence
    const sequenceResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3001'}/api/schedule-email-sequence`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        firstName: firstName || 'there',
        userType: 'buyer',
        day: 1
      })
    })

    // Also add them to Resend audience if not already there
    try {
      const { Resend } = await import('resend')
      const resend = new Resend(process.env.RESEND_API_KEY)
      
      await resend.contacts.create({
        email: email,
        firstName: firstName || 'there',
        audienceId: 'general' // or your specific audience ID
      })
      
      console.log('✅ Contact added to Resend audience:', email)
    } catch (error) {
      console.log('ℹ️ Contact may already exist in Resend:', email)
    }

    if (!sequenceResponse.ok) {
      throw new Error('Failed to start buyer sequence')
    }

    console.log('✅ Buyer sequence started for:', email)
    return NextResponse.json({ 
      success: true, 
      message: 'Buyer email sequence started successfully' 
    })

  } catch (error) {
    console.error('❌ Trigger buyer sequence error:', error)
    return NextResponse.json({ error: 'Failed to trigger buyer sequence' }, { status: 500 })
  }
}
