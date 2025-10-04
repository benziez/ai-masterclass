import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// Simple follow-up sequence for free training viewers
const followUpEmails = [
  {
    day: 1,
    subject: "Did you watch the training? Here's what to do next...",
    content: `
      <h2>Your Next Steps</h2>
      <p>Hey there!</p>
      <p>I hope you enjoyed the free training video. If you haven't watched it yet, make sure to check it out - it's packed with valuable strategies.</p>
      <p><strong>What to do next:</strong></p>
      <ol>
        <li>Watch the full training video</li>
        <li>Take notes on the key strategies</li>
        <li>Start implementing what you learned</li>
      </ol>
      <p><a href="https://aimasterclass.info/training" style="background: #4F46E5; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">Watch Training →</a></p>
      <p>Questions? Just reply to this email!</p>
      <p>Talk soon,<br>Ben</p>
    `
  },
  {
    day: 3,
    subject: "Quick question about the training...",
    content: `
      <h2>How's It Going?</h2>
      <p>Hey there!</p>
      <p>I wanted to check in and see how you're doing with the training.</p>
      <p>Have you had a chance to watch it yet? If so, what did you think?</p>
      <p>I'm always curious to hear feedback from students who are just getting started with AI side hustles.</p>
      <p><strong>If you haven't watched it yet:</strong></p>
      <p><a href="https://aimasterclass.info/training" style="background: #4F46E5; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">Watch Now →</a></p>
      <p><strong>If you're ready for the complete system:</strong></p>
      <p>The training shows you the basics, but the full AI Masterclass gives you everything you need to build a $5K-$15K/month business.</p>
      <p><a href="https://aimasterclass.info/training" style="background: #10B981; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">Get Complete System →</a></p>
      <p>Let me know how it's going!</p>
      <p>Ben</p>
    `
  },
  {
    day: 7,
    subject: "Last chance to get the complete AI system...",
    content: `
      <h2>Don't Miss Out</h2>
      <p>Hey there!</p>
      <p>This is my final email about the AI Masterclass.</p>
      <p>If you've been thinking about getting the complete system, now's the time. The price goes up soon, and I don't want you to miss out.</p>
      <p><strong>What you get in the complete system:</strong></p>
      <ul>
        <li>✅ 50+ Advanced AI Prompts</li>
        <li>✅ 6 Complete Training Modules</li>
        <li>✅ Lifetime Access</li>
        <li>✅ 30-Day Money Back Guarantee</li>
      </ul>
      <p><strong>Special offer:</strong> Get it now for just $197 (regular price $1,497)</p>
      <p><a href="https://aimasterclass.info/training" style="background: #EF4444; color: white; padding: 15px 30px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: bold;">Get AI Masterclass Now - $197 →</a></p>
      <p>This is your last chance at this price.</p>
      <p>Best of luck with your AI journey!</p>
      <p>Ben</p>
    `
  }
]

export async function POST(request: NextRequest) {
  try {
    const { email, firstName, day } = await request.json()

    if (!email || !firstName || !day) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const emailTemplate = followUpEmails.find(e => e.day === day)
    if (!emailTemplate) {
      return NextResponse.json({ error: 'Invalid day' }, { status: 400 })
    }

    const { data, error } = await resend.emails.send({
      from: 'AI Masterclass <hello@aimasterclass.info>',
      to: [email],
      subject: emailTemplate.subject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #4F46E5; margin: 0;">AI Masterclass</h1>
          </div>
          <div style="background: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            ${emailTemplate.content}
          </div>
          <div style="text-align: center; margin-top: 30px; color: #666; font-size: 12px;">
            <p>AI Masterclass | <a href="https://aimasterclass.info">aimasterclass.info</a></p>
            <p><a href="https://aimasterclass.info/unsubscribe?email=${email}">Unsubscribe</a></p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('❌ Resend error:', error)
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }

    console.log(`✅ Follow-up email ${day} sent to:`, email)
    return NextResponse.json({ success: true, messageId: data?.id })

  } catch (error) {
    console.error('❌ Follow-up email error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
