import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-08-27.basil',
})

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(request: NextRequest) {
  try {
    const body = await request.text()
    const signature = request.headers.get('stripe-signature')!

    let event: Stripe.Event

    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
    } catch (err) {
      console.error('❌ Webhook signature verification failed:', err)
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
    }

    console.log('🔔 Stripe webhook received:', event.type)

    // Handle successful payment
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session
      
      console.log('💰 Purchase completed:', {
        customerEmail: session.customer_email,
        amount: session.amount_total,
        currency: session.currency,
        sessionId: session.id
      })

      // Extract customer email
      const customerEmail = session.customer_email || session.customer_details?.email
      
      if (customerEmail) {
        // Trigger buyer email sequence
        try {
          const sequenceResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3001'}/api/trigger-buyer-sequence`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: customerEmail,
              firstName: session.customer_details?.name?.split(' ')[0] || 'there'
            })
          })

          if (sequenceResponse.ok) {
            console.log('✅ Buyer sequence triggered for:', customerEmail)
          } else {
            console.error('❌ Failed to trigger buyer sequence for:', customerEmail)
          }
        } catch (error) {
          console.error('❌ Error triggering buyer sequence:', error)
        }
      } else {
        console.error('❌ No customer email found in session:', session.id)
      }
    }

    // Handle payment intent succeeded (alternative event)
    if (event.type === 'payment_intent.succeeded') {
      const paymentIntent = event.data.object as Stripe.PaymentIntent
      
      console.log('💰 Payment succeeded:', {
        amount: paymentIntent.amount,
        currency: paymentIntent.currency,
        customerEmail: paymentIntent.receipt_email
      })

      // If we have customer email, trigger buyer sequence
      if (paymentIntent.receipt_email) {
        try {
          const sequenceResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3001'}/api/trigger-buyer-sequence`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: paymentIntent.receipt_email,
              firstName: 'there'
            })
          })

          if (sequenceResponse.ok) {
            console.log('✅ Buyer sequence triggered for:', paymentIntent.receipt_email)
          }
        } catch (error) {
          console.error('❌ Error triggering buyer sequence:', error)
        }
      }
    }

    return NextResponse.json({ received: true })

  } catch (error) {
    console.error('❌ Stripe webhook error:', error)
    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 })
  }
}
