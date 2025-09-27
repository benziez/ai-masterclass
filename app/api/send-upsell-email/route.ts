import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY || 'dummy_key_for_build')
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aimasterclass.info'

export async function POST(req: NextRequest) {
  try {
    const { email, name } = await req.json()

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'dummy_key_for_build') {
      console.log('Resend API key not configured, skipping email send')
      return NextResponse.json({ success: true, message: 'Email service not configured' })
    }

    // Send upsell email
    const { data, error } = await resend.emails.send({
      from: 'AI Masterclass <noreply@aimasterclass.info>',
      to: [email],
      subject: '🔥 Exclusive Offer: Complete AI Masterclass System (24hrs only)',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 20px;">
            <h1 style="color: #dc2626; font-size: 24px; margin-bottom: 10px;">🔥 EXCLUSIVE OFFER</h1>
            <p style="color: #6b7280; font-size: 16px;">${name ? `Hi ${name},` : 'Hi there,'} I hope you enjoyed your free AI Strategy Guide!</p>
          </div>

          <div style="background: #fef2f2; padding: 20px; border-radius: 8px; margin-bottom: 20px; border: 2px solid #fecaca;">
            <h2 style="color: #dc2626; margin-bottom: 15px; font-size: 20px; text-align: center;">⏰ 24-Hour Exclusive Offer</h2>
            <p style="color: #374151; text-align: center; font-size: 16px; margin: 0;">
              Since you downloaded our free guide, you get <strong>exclusive access</strong> to the complete AI Masterclass system at a special price.
            </p>
          </div>

          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #1f2937; margin-bottom: 15px; font-size: 18px;">🎯 What You Get in the Complete System:</h2>
            <ul style="color: #374151; line-height: 1.6; margin: 0; padding-left: 20px;">
              <li>✅ <strong>AI Strategy Guide</strong> (the one you already have)</li>
              <li>✅ <strong>Advanced Prompt Pack</strong> - 50+ high-converting prompts</li>
              <li>✅ <strong>AI Automation Blueprints</strong> - Step-by-step automation guides</li>
              <li>✅ <strong>Bonuses Bundle</strong> - Extra tools and templates</li>
              <li>✅ <strong>Private Community Access</strong> - Connect with other AI entrepreneurs</li>
              <li>✅ <strong>Lifetime Updates</strong> - New content added regularly</li>
            </ul>
          </div>

          <div style="background: #fff7ed; padding: 20px; border-radius: 8px; margin: 20px 0; border: 2px solid #fed7aa;">
            <div style="text-align: center;">
              <p style="color: #9a3412; margin: 0 0 10px 0; font-size: 16px;">
                <span style="text-decoration: line-through; color: #6b7280;">Regular Price: $497</span>
              </p>
              <p style="color: #dc2626; font-size: 32px; font-weight: bold; margin: 0 0 10px 0;">
                Your Price: $97
              </p>
              <p style="color: #9a3412; margin: 0; font-size: 14px;">
                <strong>80% OFF - Limited Time Only!</strong>
              </p>
            </div>
          </div>

          <div style="text-align: center; margin: 30px 0;">
            <a href="https://buy.stripe.com/4gMeVc9xcdv964h7tt5gc03" 
               style="display: inline-block; background: linear-gradient(45deg, #2563eb, #7c3aed); color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 18px; box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);">
              🚀 Get Complete System - $97
            </a>
          </div>

          <div style="background: #ecfdf5; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #047857; margin-bottom: 10px; font-size: 16px;">💡 Why This Offer is Special:</h3>
            <ul style="color: #047857; margin: 0; padding-left: 20px; font-size: 14px;">
              <li>You've already seen the value in our free guide</li>
              <li>This offer is only available to people who downloaded the free guide</li>
              <li>You get everything for less than the cost of a nice dinner</li>
              <li>Start making money with AI within 7 days</li>
            </ul>
          </div>

          <div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0; border: 1px solid #f59e0b;">
            <p style="color: #92400e; margin: 0; font-size: 14px; text-align: center;">
              <strong>⏰ This offer expires in 24 hours</strong><br>
              After that, the price goes back to $497
            </p>
          </div>

          <div style="border-top: 1px solid #e5e7eb; padding-top: 15px; margin-top: 20px; text-align: center;">
            <p style="color: #6b7280; font-size: 12px; margin: 0;">
              Questions? Reply to this email - I personally read every message!
            </p>
            <p style="color: #6b7280; font-size: 12px; margin: 5px 0 0 0;">
              Ready to start your AI income journey? 🚀
            </p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }

    console.log('Upsell email sent successfully:', data?.id)
    return NextResponse.json({ success: true, messageId: data?.id })

  } catch (error) {
    console.error('Email API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}










