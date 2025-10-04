import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { email, firstName } = await request.json()

    if (!email) {
      return Response.json({ error: 'Email is required' }, { status: 400 })
    }

    // Note: Contact creation requires special API permissions
    // For now, we'll just send emails and manually add contacts to audience
    console.log('📧 Processing signup for:', email)

    // Add to Resend audience for future communications
    try {
      const { Resend } = await import('resend')
      const resend = new Resend(process.env.RESEND_API_KEY)
      
      await resend.contacts.create({
        email: email,
        firstName: firstName || 'there',
        audienceId: 'general'
      })
      
      console.log('✅ Contact added to Resend audience:', email)
    } catch (error) {
      console.log('ℹ️ Contact may already exist in Resend:', email)
    }

    // For now, we'll just log that follow-up emails should be sent
    // In a production environment, you'd use a proper job scheduler like:
    // - Vercel Cron Jobs
    // - Netlify Scheduled Functions  
    // - External service like Zapier or Make.com
    console.log('📧 Follow-up emails should be sent to:', email, 'on days 1, 3, and 7')

    // Send Email 1 - Delivery (Immediately)
    const { data, error } = await resend.emails.send({
      from: 'AI Masterclass <hello@aimasterclass.info>',
      to: [email],
      subject: 'Your free AI training is ready! 🎥',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #2563eb; font-size: 28px; margin-bottom: 15px;">Your free AI training is ready! 🎥</h1>
          </div>

          <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 25px;">
            Hey ${firstName || 'there'},
          </p>

          <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 25px;">
            Your free training is ready! Click below to watch your exclusive AI training video 👇
          </p>

          <div style="text-align: center; margin-bottom: 30px;">
            <a href="${process.env.NEXT_PUBLIC_SITE_URL}/training" 
               style="display: inline-block; background: linear-gradient(135deg, #9333ea 0%, #3b82f6 100%); color: white; padding: 15px 30px; text-decoration: none; border-radius: 10px; font-weight: bold; font-size: 16px; box-shadow: 0 4px 15px rgba(147, 51, 234, 0.3);">
              🎥 Watch Free Training
            </a>
          </div>

          <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            Inside, you'll see exactly how to:
          </p>

          <ul style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 30px; padding-left: 20px;">
            <li style="margin-bottom: 10px;">✅ How to pick a profitable niche with AI</li>
            <li style="margin-bottom: 10px;">✅ The exact 3-step system to launch your AI side hustle</li>
            <li style="margin-bottom: 10px;">✅ How to get your first clients using AI-powered outreach</li>
          </ul>

          <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 25px;">
            This training is your starting point. If you're serious about building a profitable AI business, this is for you.
          </p>

          <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
            To your success,<br>
            Ben
          </p>


          <div style="text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 14px; color: #6b7280;">
            <p>AI Masterclass | 123 AI Street, Suite 456, Innovation City, AI 78901</p>
            <p>If you no longer wish to receive these emails, please <a href="#" style="color: #2563eb; text-decoration: none;">unsubscribe</a>.</p>
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
      
      // For now, just log that follow-up emails should be scheduled
      // In a production environment, you'd use a proper job scheduler like:
      // - Vercel Cron Jobs
      // - Netlify Scheduled Functions  
      // - External service like Zapier or Make.com
      console.log('📧 Follow-up emails should be scheduled for:', email, 'on days 1, 3, and 7')
      
      // TODO: Implement proper email scheduling
      // For now, users get the welcome email and can be manually added to follow-up sequences
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