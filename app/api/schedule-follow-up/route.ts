import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// Email templates for the 7-day sequence
const getEmailTemplate = (day: number, email: string) => {
  const templates = {
    2: {
      subject: 'From zero experience → $3K/month with AI 💻',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 25px;">
            Hey there,
          </p>

          <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 25px;">
            Meet Jordan. He had no tech background. No audience. Just curiosity about AI.
          </p>

          <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 25px;">
            He grabbed the same 3-step guide you just downloaded… and within 4 weeks he landed his first paying client for $700. Fast-forward, and he's now bringing in over $3,000/month using nothing but AI prompts + the system inside AI Masterclass.
          </p>

          <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 25px;">
            The best part? He built it all without showing his face online.
          </p>

          <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
            If you've been waiting for proof that this is possible, here it is.
          </p>

          <div style="text-align: center; margin-bottom: 30px;">
            <a href="${process.env.NEXT_PUBLIC_SITE_URL}/get-course" 
               style="display: inline-block; background: linear-gradient(135deg, #dc2626, #b91c1c); color: white; padding: 15px 30px; text-decoration: none; border-radius: 10px; font-weight: bold; font-size: 16px; box-shadow: 0 4px 15px rgba(220, 38, 38, 0.3);">
              👉 Click here to see how AI Masterclass can shortcut your journey
            </a>
          </div>

          <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            Talk soon,
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
    },
    3: {
      subject: '"But I\'m not techy…" 🤔',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 25px;">
            Hey there,
          </p>

          <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 25px;">
            I hear this all the time: "I'm not technical. Can I really do this?"
          </p>

          <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 25px;">
            Here's the truth: you don't need coding skills, fancy tools, or hours of free time.
          </p>

          <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 25px;">
            Inside AI Masterclass, everything is broken into plug-and-play templates.
          </p>

          <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 25px;">
            Just copy → paste → edit.
          </p>

          <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 25px;">
            Follow the prompts.
          </p>

          <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 25px;">
            Launch your first AI income stream.
          </p>

          <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
            If you can write an email, you can follow this system.
          </p>

          <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
            So don't let "I'm not techy" hold you back.
          </p>

          <div style="text-align: center; margin-bottom: 30px;">
            <a href="${process.env.NEXT_PUBLIC_SITE_URL}/get-course" 
               style="display: inline-block; background: linear-gradient(135deg, #dc2626, #b91c1c); color: white; padding: 15px 30px; text-decoration: none; border-radius: 10px; font-weight: bold; font-size: 16px; box-shadow: 0 4px 15px rgba(220, 38, 38, 0.3);">
              👉 Enroll now and see how simple it actually is
            </a>
          </div>

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
    },
    4: {
      subject: 'A 60-second AI trick to save hours 🚀',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 25px;">
            Hey there,
          </p>

          <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 25px;">
            Here's a quick win for you:
          </p>

          <div style="background: #f8fafc; padding: 20px; border-radius: 12px; margin-bottom: 25px; border-left: 4px solid #3b82f6;">
            <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
              👉 Paste this prompt into ChatGPT:
            </p>
            <p style="color: #1e40af; font-size: 14px; line-height: 1.5; font-family: monospace; background: #e0e7ff; padding: 15px; border-radius: 8px; margin: 0;">
              "Act as a social media manager. Write me 7 Instagram captions that teach [topic] in a way that's simple, engaging, and curiosity-driven."
            </p>
          </div>

          <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 25px;">
            In 60 seconds, you'll have a week's worth of content done.
          </p>

          <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 25px;">
            This is just one of the 50+ prompt frameworks inside AI Masterclass.
          </p>

          <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
            If this little trick just saved you hours, imagine what a full system could do.
          </p>

          <div style="text-align: center; margin-bottom: 30px;">
            <a href="${process.env.NEXT_PUBLIC_SITE_URL}/get-course" 
               style="display: inline-block; background: linear-gradient(135deg, #dc2626, #b91c1c); color: white; padding: 15px 30px; text-decoration: none; border-radius: 10px; font-weight: bold; font-size: 16px; box-shadow: 0 4px 15px rgba(220, 38, 38, 0.3);">
              👉 Click here to get AI Masterclass today
            </a>
          </div>

          <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            Keep winning,
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
    },
    5: {
      subject: 'How Marcus made $1,366 in a few weeks with AI 🚀',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 25px;">
            Hey there,
          </p>

          <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 25px;">
            A lot of people think "AI income" is just hype. Let me show you otherwise.
          </p>

          <div style="background: #f0fdf4; padding: 20px; border-radius: 12px; margin-bottom: 25px; border-left: 4px solid #10b981;">
            <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 15px; font-weight: bold;">
              Marcus had been learning how to run his agency for months but struggled to land his first paying client.
            </p>
            
            <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
              After completing the AI course, he used the outreach and automation techniques to book meetings more consistently. Within a few weeks, he closed his very first client for <strong style="color: #059669;">$1,366</strong>—proof that his agency finally had momentum.
            </p>
            
            <div style="text-align: center; margin-bottom: 15px;">
              <img src="${process.env.NEXT_PUBLIC_SITE_URL}/images/money2.JPG" 
                   alt="Marcus's $1,366 PayPal screenshot" 
                   style="max-width: 100%; height: auto; border-radius: 8px; border: 2px solid #10b981; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
            </div>
            
            <p style="color: #059669; font-size: 18px; font-weight: bold; margin: 0; text-align: center;">
              $1,366 in his first few weeks using AI automation
            </p>
          </div>

          <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 25px;">
            This works because it's not about chasing trends—it's about using proven frameworks that get people to buy.
          </p>

          <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
            Inside AI Masterclass, you'll get those frameworks, templates, and strategies step-by-step.
          </p>

          <div style="text-align: center; margin-bottom: 30px;">
            <a href="${process.env.NEXT_PUBLIC_SITE_URL}/get-course" 
               style="display: inline-block; background: linear-gradient(135deg, #dc2626, #b91c1c); color: white; padding: 15px 30px; text-decoration: none; border-radius: 10px; font-weight: bold; font-size: 16px; box-shadow: 0 4px 15px rgba(220, 38, 38, 0.3);">
              👉 See what's possible when you enroll today
            </a>
          </div>

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
    },
    6: {
      subject: '3 common questions about AI Masterclass',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 25px;">
            Hey there,
          </p>

          <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 25px;">
            You might be wondering…
          </p>

          <div style="background: #f8fafc; padding: 20px; border-radius: 12px; margin-bottom: 25px;">
            <div style="margin-bottom: 20px;">
              <p style="color: #1e40af; font-size: 16px; font-weight: bold; margin-bottom: 8px;">1. Do I need money upfront?</p>
              <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0;">No. You can start with free tools and the prompts I give you.</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <p style="color: #1e40af; font-size: 16px; font-weight: bold; margin-bottom: 8px;">2. What if I don't have a business idea yet?</p>
              <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0;">We cover exactly how to pick a profitable niche, even if you're starting from zero.</p>
            </div>
            
            <div>
              <p style="color: #1e40af; font-size: 16px; font-weight: bold; margin-bottom: 8px;">3. Won't AI get saturated?</p>
              <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0;">Not if you're ahead of the curve. Most people don't know how to actually use AI to make money. You will.</p>
            </div>
          </div>

          <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
            If you've been on the fence, now's the time to move.
          </p>

          <div style="text-align: center; margin-bottom: 30px;">
            <a href="${process.env.NEXT_PUBLIC_SITE_URL}/get-course" 
               style="display: inline-block; background: linear-gradient(135deg, #dc2626, #b91c1c); color: white; padding: 15px 30px; text-decoration: none; border-radius: 10px; font-weight: bold; font-size: 16px; box-shadow: 0 4px 15px rgba(220, 38, 38, 0.3);">
              👉 Enroll in AI Masterclass today
            </a>
          </div>

          <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            Talk soon,
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
    },
    7: {
      subject: 'Last chance: enrollment closes tonight ⏰',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #dc2626; font-size: 28px; margin-bottom: 15px;">⏰ LAST CHANCE</h1>
          </div>

          <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 25px;">
            Hey there,
          </p>

          <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 25px;">
            This is it—the final reminder.
          </p>

          <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 25px;">
            Enrollment for AI Masterclass closes tonight at midnight. After that, the bonuses and discounted pricing go away.
          </p>

          <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            If you want to:
          </p>

          <ul style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 30px; padding-left: 20px;">
            <li style="margin-bottom: 10px;">✅ Build an AI-powered side hustle this month</li>
            <li style="margin-bottom: 10px;">✅ Follow proven templates instead of guessing</li>
            <li style="margin-bottom: 10px;">✅ Join a growing group of students already making it happen</li>
          </ul>

          <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
            …then now is your moment.
          </p>

          <div style="text-align: center; margin-bottom: 30px;">
            <a href="${process.env.NEXT_PUBLIC_SITE_URL}/get-course" 
               style="display: inline-block; background: linear-gradient(135deg, #dc2626, #b91c1c); color: white; padding: 15px 30px; text-decoration: none; border-radius: 10px; font-weight: bold; font-size: 16px; box-shadow: 0 4px 15px rgba(220, 38, 38, 0.3);">
              👉 Enroll here before midnight
            </a>
          </div>

          <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            See you inside,
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
    }
  }

  return templates[day as keyof typeof templates]
}

export async function POST(request: Request) {
  try {
    const { email, day, delay } = await request.json()

    if (!email || !day) {
      return Response.json({ error: 'Email and day are required' }, { status: 400 })
    }

    const template = getEmailTemplate(day, email)
    if (!template) {
      return Response.json({ error: 'Invalid day' }, { status: 400 })
    }

    // Calculate scheduled time (default to 24 hours if no delay provided)
    const scheduledTime = delay ? new Date(Date.now() + delay).toISOString() : new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()

    // Send the scheduled email
    const { data, error } = await resend.emails.send({
      from: 'AI Masterclass <hello@aimasterclass.info>',
      to: [email],
      subject: template.subject,
      html: template.html,
      scheduledAt: scheduledTime
    })

    if (error) {
      console.error('Resend scheduling error:', error)
      return Response.json({ error: 'Failed to schedule email' }, { status: 500 })
    }

    console.log(`✅ Email ${day} scheduled successfully:`, email, 'for:', scheduledTime)
    return Response.json({ 
      success: true, 
      messageId: data?.id,
      scheduledFor: scheduledTime,
      day: day
    })

  } catch (error) {
    console.error('API error:', error)
    return Response.json({ error: 'Internal server error' }, { status: 500 })
  }
}