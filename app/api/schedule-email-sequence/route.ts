import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// Buyer email sequence templates
const getBuyerEmailTemplate = (day: number, email: string, firstName: string) => {
  const templates = {
    1: {
      subject: "Welcome to AI Masterclass — here's your login 🎓",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #2563eb; font-size: 24px; margin-bottom: 15px;">Welcome to AI Masterclass — here's your login 🎓</h1>
          <p>Hey ${firstName},</p>
          <p>Welcome to AI Masterclass! You now have lifetime access to our complete AI business system.</p>
          <p><strong>What you get instantly:</strong></p>
          <ul>
            <li>✅ 50+ Advanced AI Prompts</li>
            <li>✅ 6 Complete Modules</li>
            <li>✅ Lifetime Access</li>
            <li>✅ All Future Updates</li>
          </ul>
          <p><a href="${process.env.NEXT_PUBLIC_SITE_URL}/curriculum" style="background: #4F46E5; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">🎯 Start Learning Now</a></p>
          <p>Your success is our priority. Let's build your AI business together!</p>
          <p>– From AI Masterclass</p>
        </div>
      `
    },
    2: {
      subject: "How to get results FAST (do this first)",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #2563eb; font-size: 24px; margin-bottom: 15px;">How to get results FAST (do this first)</h1>
          <p>Hey ${firstName},</p>
          <p>Want to see results quickly? Start with Module 1 - it's where 90% of our students see their first breakthrough.</p>
          <p><strong>Your action plan for today:</strong></p>
          <ol>
            <li>Watch Module 1 (30 minutes)</li>
            <li>Complete the first exercise</li>
            <li>Set up your first AI tool</li>
          </ol>
          <p><a href="${process.env.NEXT_PUBLIC_SITE_URL}/curriculum" style="background: #4F46E5; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">🚀 Start Module 1</a></p>
          <p>Questions? Just reply to this email!</p>
          <p>– From AI Masterclass</p>
        </div>
      `
    },
    3: {
      subject: "Meet others who built 5-figure AI side hustles",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #2563eb; font-size: 24px; margin-bottom: 15px;">Meet others who built 5-figure AI side hustles</h1>
          <p>Hey ${firstName},</p>
          <p>You're now part of a community of 2,000+ students who are building profitable AI businesses.</p>
          <p><strong>Recent success stories:</strong></p>
          <ul>
            <li>Sarah: $8,400/month as a content creator</li>
            <li>Marcus: $50,000+/month running an agency</li>
            <li>David: $85,000/year as an AI Innovation Lead</li>
          </ul>
          <p>They all started exactly where you are now. Your success story is next!</p>
          <p><a href="${process.env.NEXT_PUBLIC_SITE_URL}/curriculum" style="background: #4F46E5; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">Continue Your Journey</a></p>
          <p>– From AI Masterclass</p>
        </div>
      `
    },
    4: {
      subject: "Secret module most students skip (but shouldn't)",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #2563eb; font-size: 24px; margin-bottom: 15px;">Secret module most students skip (but shouldn't)</h1>
          <p>Hey ${firstName},</p>
          <p>Most students skip Module 4 because it seems "boring" - but it's actually where the magic happens.</p>
          <p>Module 4 teaches you the automation systems that turn your AI skills into a real business that runs without you.</p>
          <p><strong>This is where students go from $1K/month to $10K+/month.</strong></p>
          <p><a href="${process.env.NEXT_PUBLIC_SITE_URL}/curriculum" style="background: #4F46E5; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">Don't Skip Module 4</a></p>
          <p>Trust me on this one,<br>Ben</p>
        </div>
      `
    },
    5: {
      subject: "How to start getting clients using our templates",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #2563eb; font-size: 24px; margin-bottom: 15px;">How to start getting clients using our templates</h1>
          <p>Hey ${firstName},</p>
          <p>Ready to get your first paying client? Module 5 has everything you need.</p>
          <p><strong>You'll get:</strong></p>
          <ul>
            <li>✅ Client outreach templates</li>
            <li>✅ Pricing strategies</li>
            <li>✅ Contract templates</li>
            <li>✅ Onboarding checklists</li>
          </ul>
          <p>These templates have helped our students land over $2.3M in client work.</p>
          <p><a href="${process.env.NEXT_PUBLIC_SITE_URL}/curriculum" style="background: #4F46E5; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">Get Your First Client</a></p>
          <p>– From AI Masterclass</p>
        </div>
      `
    },
    6: {
      subject: "How to make your first $1,000 this month",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #2563eb; font-size: 24px; margin-bottom: 15px;">How to make your first $1,000 this month</h1>
          <p>Hey ${firstName},</p>
          <p>By now you should be seeing some momentum. Let's turn that into your first $1,000.</p>
          <p><strong>Your 30-day plan:</strong></p>
          <ol>
            <li>Week 1: Complete Modules 1-3</li>
            <li>Week 2: Set up your first client outreach</li>
            <li>Week 3: Land your first client</li>
            <li>Week 4: Deliver and get paid</li>
          </ol>
          <p><a href="${process.env.NEXT_PUBLIC_SITE_URL}/curriculum" style="background: #4F46E5; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">Follow the Plan</a></p>
          <p>You've got this!<br>Ben</p>
        </div>
      `
    },
    7: {
      subject: "Unlock the Launchpad Beta — exclusive for students only 🔥",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #dc2626; font-size: 24px; margin-bottom: 15px;">Unlock the Launchpad Beta — exclusive for students only 🔥</h1>
          <p>Hey ${firstName},</p>
          <p>As a valued AI Masterclass student, you get exclusive access to our new Launchpad Beta.</p>
          <p>This is our most advanced AI business automation system - and it's only available to students like you.</p>
          <p><strong>What's included:</strong></p>
          <ul>
            <li>✅ Advanced AI workflow automation</li>
            <li>✅ Custom business templates</li>
            <li>✅ Priority support</li>
            <li>✅ Early access to new features</li>
          </ul>
          <p><a href="${process.env.NEXT_PUBLIC_SITE_URL}/launchpad" style="background: #dc2626; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">Access Launchpad Beta</a></p>
          <p>This is exclusive to AI Masterclass students only.</p>
          <p>– From AI Masterclass</p>
        </div>
      `
    }
  }

  return templates[day as keyof typeof templates]
}

export async function POST(request: Request) {
  try {
    const { email, firstName, userType, day } = await request.json()

    if (!email || !userType) {
      return Response.json({ error: 'Email and userType are required' }, { status: 400 })
    }

    // Only handle buyer sequences for now
    if (userType !== 'buyer') {
      return Response.json({ error: 'Only buyer sequences are supported' }, { status: 400 })
    }

    console.log(`🎉 Starting buyer sequence for: ${email}`)

    // Schedule all 7 buyer emails
    const buyerDays = [1, 2, 3, 4, 5, 6, 7]
    let successful = 0
    let failed = 0

    for (const dayNum of buyerDays) {
      const delayMs = dayNum * 24 * 60 * 60 * 1000 // Convert days to milliseconds
      const scheduledTime = new Date(Date.now() + delayMs).toISOString()

      try {
        const template = getBuyerEmailTemplate(dayNum, email, firstName || 'there')
        if (!template) {
          console.log(`⚠️ No template found for buyer day ${dayNum}`)
          failed++
          continue
        }

        const { data, error } = await resend.emails.send({
          from: 'AI Masterclass <hello@aimasterclass.info>',
          to: [email],
          subject: template.subject,
          html: template.html,
          scheduledAt: scheduledTime
        })

        if (error) {
          console.error(`❌ Failed to schedule buyer email Day ${dayNum} for:`, email, error)
          failed++
        } else {
          console.log(`✅ Buyer email Day ${dayNum} scheduled for:`, email, 'at:', scheduledTime, 'ID:', data?.id)
          successful++
        }
      } catch (error) {
        console.error(`❌ Error scheduling buyer Day ${dayNum} for:`, email, error)
        failed++
      }

      // Small delay between calls
      await new Promise(resolve => setTimeout(resolve, 500))
    }

    console.log(`📧 Buyer sequence complete: ${successful} successful, ${failed} failed for:`, email)

    return Response.json({
      success: true,
      message: `Buyer sequence scheduled: ${successful} emails successful, ${failed} failed`,
      successful,
      failed
    })

  } catch (error) {
    console.error('❌ Buyer sequence API error:', error)
    return Response.json({ error: 'Internal server error' }, { status: 500 })
  }
}
