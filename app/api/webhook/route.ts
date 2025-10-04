import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    console.log('📧 Webhook received:', {
      type: body.type,
      data: body.data,
      timestamp: new Date().toISOString()
    })

    // Handle different webhook events
    switch (body.type) {
      case 'email.delivered':
        console.log('✅ Email delivered to:', body.data?.to)
        // You can add logic here to update user status, send notifications, etc.
        break
        
      case 'email.opened':
        console.log('👀 Email opened by:', body.data?.to)
        // Track engagement, update user engagement score, etc.
        break
        
      case 'email.clicked':
        console.log('🔗 Link clicked by:', body.data?.to, 'URL:', body.data?.url)
        // Track which links are being clicked, update user behavior, etc.
        
        // Check if this is a purchase link click
        if (body.data?.url && body.data.url.includes('buy.stripe.com')) {
          console.log('💰 Purchase link clicked by:', body.data?.to)
          // You could trigger additional tracking or notifications here
        }
        break
        
      default:
        console.log('❓ Unknown webhook type:', body.type)
    }

    // Always return 200 to acknowledge receipt
    return NextResponse.json({ success: true })
    
  } catch (error) {
    console.error('❌ Webhook error:', error)
    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 })
  }
}

// Handle GET requests (for webhook verification)
export async function GET() {
  return NextResponse.json({ message: 'Webhook endpoint is active' })
}
