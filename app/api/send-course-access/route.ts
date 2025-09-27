import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY || 'dummy_key_for_build')

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

    // Resolve base site URL for absolute download links
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aimasterclass.info'

    // Send course access email
    const { data, error } = await resend.emails.send({
      from: 'AI Masterclass <noreply@aimasterclass.info>',
      to: [email],
      subject: '🎉 Welcome to AI Masterclass - Your Access is Ready!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 20px;">
            <h1 style="color: #2563eb; font-size: 24px; margin-bottom: 10px;">🎉 Welcome to AI Masterclass!</h1>
            <p style="color: #6b7280; font-size: 16px;">Your course access is ready!</p>
          </div>

          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #1f2937; margin-bottom: 15px; font-size: 18px;">📚 Your Course Materials:</h2>
            <ul style="color: #374151; line-height: 1.6; margin: 0; padding-left: 20px;">
              <li>✅ AI Strategy Guide (PDF Download)</li>
              <li>✅ Advanced Prompt Pack (PDF Download)</li>
              <li>✅ AI Automation Blueprints (PDF Download)</li>
              <li>✅ Bonuses Bundle (PDF Download)</li>
            </ul>
          </div>

          <div style="background: #fff7ed; padding: 15px; border-radius: 8px; margin: 20px 0; border: 1px solid #fed7aa;">
            <h3 style="color: #9a3412; margin-bottom: 10px; font-size: 16px;">⬇️ Download Your Files:</h3>
            <ul style="line-height: 1.6; padding-left: 18px; margin: 0;">
              <li><a href="${siteUrl}/downloads/ai-strategy-guide.pdf" style="color: #2563eb; text-decoration: none; font-weight: bold;">AI Strategy Guide (PDF)</a></li>
              <li><a href="${siteUrl}/downloads/advanced-prompts.pdf" style="color: #2563eb; text-decoration: none; font-weight: bold;">Advanced Prompt Pack (PDF)</a></li>
              <li><a href="${siteUrl}/downloads/ai-automation-blueprints.pdf" style="color: #2563eb; text-decoration: none; font-weight: bold;">AI Automation Blueprints (PDF)</a></li>
              <li><a href="${siteUrl}/downloads/bonuses.pdf" style="color: #2563eb; text-decoration: none; font-weight: bold;">Bonuses Bundle (PDF)</a></li>
            </ul>
          </div>


          <div style="background: #ecfdf5; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="color: #047857; margin: 0; font-size: 14px;">
              <strong>💡 Start with the AI Strategy Guide</strong> - it contains the exact framework our students used to generate $2.3M+ in profits.
            </p>
          </div>

          <div style="border-top: 1px solid #e5e7eb; padding-top: 15px; margin-top: 20px; text-align: center;">
            <p style="color: #6b7280; font-size: 12px; margin: 0;">
              Need help? Reply to this email or contact support@aimasterclass.info
            </p>
            <p style="color: #6b7280; font-size: 12px; margin: 5px 0 0 0;">
              Welcome to the AI Masterclass family! 🚀
            </p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }

    console.log('Course access email sent successfully:', data?.id)
    return NextResponse.json({ success: true, messageId: data?.id })

  } catch (error) {
    console.error('Email API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
