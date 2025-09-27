import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email) {
      return Response.json({ error: 'Email is required' }, { status: 400 })
    }

    // Note: Contact creation requires special API permissions
    // For now, we'll just send emails and manually add contacts to audience
    console.log('📧 Processing signup for:', email)

    // Send Email 1 - Delivery (Immediately)
    const { data, error } = await resend.emails.send({
      from: 'AI Masterclass <hello@aimasterclass.info>',
      to: [email],
      subject: 'Here\'s your free AI Side Hustle guide 🎉',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #2563eb; font-size: 28px; margin-bottom: 15px;">Here's your free AI Side Hustle guide 🎉</h1>
          </div>

          <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 25px;">
            Hey there,
          </p>

          <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 25px;">
            Your download is ready: <strong>3 Steps to Your First AI-Powered Side Hustle</strong> 👇
          </p>

          <div style="text-align: center; margin-bottom: 30px;">
            <a href="${process.env.NEXT_PUBLIC_SITE_URL}/downloads/3steps.pdf" 
               style="display: inline-block; background: linear-gradient(135deg, #9333ea 0%, #3b82f6 100%); color: white; padding: 15px 30px; text-decoration: none; border-radius: 10px; font-weight: bold; font-size: 16px; box-shadow: 0 4px 15px rgba(147, 51, 234, 0.3);">
              📥 Download the guide
            </a>
          </div>

          <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            Inside, you'll see exactly how to:
          </p>

          <ul style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 30px; padding-left: 20px;">
            <li style="margin-bottom: 10px;">✅ Pick a profitable niche with AI prompts</li>
            <li style="margin-bottom: 10px;">✅ Generate an offer people actually want</li>
            <li style="margin-bottom: 10px;">✅ Publish your first post with a proven template</li>
          </ul>

          <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 25px;">
            This guide is your starting point. But it's only the tip of the iceberg.
          </p>

          <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
            If you want the full system—the same one that's helped students build $5K–$15K/mo side hustles—check out AI Masterclass here.
          </p>

          <div style="text-align: center; margin-bottom: 30px;">
            <a href="${process.env.NEXT_PUBLIC_SITE_URL}/get-course" 
               style="display: inline-block; background: linear-gradient(135deg, #dc2626, #b91c1c); color: white; padding: 15px 30px; text-decoration: none; border-radius: 10px; font-weight: bold; font-size: 16px; box-shadow: 0 4px 15px rgba(220, 38, 38, 0.3);">
              👉 Get instant access to AI Masterclass
            </a>
          </div>

          <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            Let's build something exciting,
          </p>

          <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
            – AI Masterclass
          </p>

          <div style="border-top: 1px solid #e5e7eb; padding-top: 15px; text-align: center;">
            <p style="color: #9ca3af; font-size: 12px;">
              This email was sent to ${email} because you requested your free AI guide.<br>
              <a href="#" style="color: #6b7280;">Unsubscribe</a> | <a href="#" style="color: #6b7280;">Update Preferences</a>
            </p>
          </div>
        </div>
      `
    })

    if (error) {
      console.error('Resend error:', error)
      // Don't fail the request - just log the error and continue
      console.log('⚠️ Email delivery failed, but user still gets instant access')
    } else {
      console.log('✅ Free guide email sent successfully:', email)
      
      // Schedule 7-day email sequence
      try {
        for (let day = 1; day <= 6; day++) {
          const followUpResponse = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/schedule-follow-up`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
              email, 
              day: day + 1, // Day 2-7
              delay: day * 24 * 60 * 60 * 1000 // Delay in milliseconds (1 day, 2 days, etc.)
            }),
          })
          
          if (followUpResponse.ok) {
            const result = await followUpResponse.json()
            console.log(`✅ Email ${day + 1} scheduled for day ${day + 1}:`, email, result)
          } else {
            const error = await followUpResponse.text()
            console.log(`⚠️ Failed to schedule email ${day + 1} for:`, email, error)
          }
          
          // Add small delay to prevent rate limiting
          await new Promise(resolve => setTimeout(resolve, 500))
        }
      } catch (followUpError) {
        console.log('⚠️ Error scheduling follow-up emails:', followUpError)
      }
    }

    // Always return success - user gets instant download regardless of email delivery
    return Response.json({ 
      success: true, 
      messageId: data?.id,
      emailDelivered: !error 
    })

  } catch (error) {
    console.error('API error:', error)
    return Response.json({ error: 'Internal server error' }, { status: 500 })
  }
}