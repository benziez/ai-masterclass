import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// Email templates for the 7-day sequence
const getEmailTemplate = (day: number, email: string) => {
  const templates = {
    1: {
      subject: "🎥 Your free AI training is unlocked (watch before it's taken down)",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #2563eb; font-size: 24px; margin-bottom: 15px;">🎥 Your free AI training is unlocked (watch before it's taken down)</h1>
          <p style="color: #6b7280; font-size: 14px; margin-bottom: 20px;">12,000+ people already watched this before it gets removed…</p>
          <p>Hey there,</p>
          <p>Here's your free AI Side Hustle training — it's finally unlocked.</p>
          <p><strong>In this video, you'll see:</strong></p>
          <ul>
            <li>✅ How students are making $5K–$15K/mo using AI (no coding)</li>
            <li>✅ The exact system they followed step-by-step</li>
            <li>✅ Why 2025 is the biggest opportunity window for AI freelancers</li>
          </ul>
          <p><a href="${process.env.NEXT_PUBLIC_SITE_URL}/training" style="background: #4F46E5; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">👉 Watch the free training now before it expires</a></p>
          <p>By the end, you'll see exactly how to turn AI tools into your first real income stream.</p>
          <p>– From AI Masterclass</p>
        </div>
      `
    },
    2: {
      subject: "He made $7,200 last month with ChatGPT 😳",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #2563eb; font-size: 24px; margin-bottom: 15px;">He made $7,200 last month with ChatGPT 😳</h1>
          <p style="color: #6b7280; font-size: 14px; margin-bottom: 20px;">No ads. No coding. Just using AI the right way.</p>
          <p>One of our students — Marcus — started this exact training 2 months ago.</p>
          <p>He had zero experience, but followed the system…</p>
          <p>Now he's averaging $7,200/mo using AI to help small businesses automate social media.</p>
          <p>You don't need to be "techy."</p>
          <p>You just need the right prompts, tools, and systems — exactly what's inside AI Masterclass.</p>
          <p><a href="${process.env.NEXT_PUBLIC_SITE_URL}/training" style="background: #4F46E5; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">👉 Watch the training replay & see how he did it</a></p>
          <p>– From AI Masterclass</p>
        </div>
      `
    },
    3: {
      subject: "Most people will ignore this and stay broke 💀",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #2563eb; font-size: 24px; margin-bottom: 15px;">Most people will ignore this and stay broke 💀</h1>
          <p style="color: #6b7280; font-size: 14px; margin-bottom: 20px;">Harsh truth: AI isn't coming — it's already here.</p>
          <p>Every day, AI replaces another "safe" job.</p>
          <p>Yet most people scroll right past the opportunity to use it instead of fight it.</p>
          <p>The truth is — AI won't replace people.</p>
          <p>People using AI will replace people not using AI.</p>
          <p>That's why we built AI Masterclass — to help you be on the winning side.</p>
          <p><a href="${process.env.NEXT_PUBLIC_SITE_URL}/training" style="background: #4F46E5; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">👉 Watch the free training again — it could change your income forever</a></p>
          <p>– From AI Masterclass</p>
        </div>
      `
    },
    4: {
      subject: "3 AI tools printing money in 2025 🚀",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #2563eb; font-size: 24px; margin-bottom: 15px;">3 AI tools printing money in 2025 🚀</h1>
          <p style="color: #6b7280; font-size: 14px; margin-bottom: 20px;">These are the exact tools we use to run our business.</p>
          <p>Everyone talks about AI… but very few actually make money with it.</p>
          <p><strong>Here are our top 3 income-generating tools:</strong></p>
          <ul>
            <li>1️⃣ ChatGPT — the brain behind everything (when prompted right)</li>
            <li>2️⃣ Midjourney — turns visuals into content clients pay for</li>
            <li>3️⃣ Runway / OpusClip — repurpose videos into viral clips</li>
          </ul>
          <p>Inside AI Masterclass, you'll learn to turn these into a full business that pays monthly.</p>
          <p><a href="${process.env.NEXT_PUBLIC_SITE_URL}/training" style="background: #4F46E5; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">👉 Join AI Masterclass today & get instant access to every tool + prompt we use</a></p>
          <p>– From AI Masterclass</p>
        </div>
      `
    },
    5: {
      subject: "This 1-minute clip might change your life ⚡️",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #2563eb; font-size: 24px; margin-bottom: 15px;">This 1-minute clip might change your life ⚡️</h1>
          <p style="color: #6b7280; font-size: 14px; margin-bottom: 20px;">Once you see it, you can't unsee what's coming.</p>
          <p>We just uploaded a short clip from the training — and it's the part that wakes people up.</p>
          <p>It shows how AI is creating a new class of entrepreneurs who use automation instead of working 10-hour shifts.</p>
          <p>You can either ride that wave… or get crushed by it.</p>
          <p><a href="${process.env.NEXT_PUBLIC_SITE_URL}/training" style="background: #4F46E5; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">👉 Watch the 1-minute clip now</a></p>
          <p>Ready to go all in? AI Masterclass is open — you'll get our entire system, templates, and case studies.</p>
          <p>– From AI Masterclass</p>
        </div>
      `
    },
    6: {
      subject: "Before you join AI Masterclass — read this 👇",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #2563eb; font-size: 24px; margin-bottom: 15px;">Before you join AI Masterclass — read this 👇</h1>
          <p style="color: #6b7280; font-size: 14px; margin-bottom: 20px;">The 3 biggest questions people ask us — answered.</p>
          <p>Here are the 3 questions we get most often:</p>
          <div style="background: #f8fafc; padding: 20px; border-radius: 12px; margin-bottom: 25px;">
            <div style="margin-bottom: 20px;">
              <p style="color: #1e40af; font-size: 16px; font-weight: bold; margin-bottom: 8px;">1️⃣ Do I need tech skills?</p>
              <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0;">No. This program is for beginners. If you can type prompts, you can do this.</p>
            </div>
            <div style="margin-bottom: 20px;">
              <p style="color: #1e40af; font-size: 16px; font-weight: bold; margin-bottom: 8px;">2️⃣ How fast can I make money?</p>
              <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0;">Most students see their first client or income within 2-4 weeks after applying what they learn.</p>
            </div>
            <div>
              <p style="color: #1e40af; font-size: 16px; font-weight: bold; margin-bottom: 8px;">3️⃣ Is it worth it?</p>
              <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0;">Well… how much longer do you want to "wait and see" while others profit from AI?</p>
            </div>
          </div>
          <p><a href="${process.env.NEXT_PUBLIC_SITE_URL}/training" style="background: #4F46E5; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">👉 Join AI Masterclass before the next price increase</a></p>
          <p>– From AI Masterclass</p>
        </div>
      `
    },
    7: {
      subject: "⏳ Final call — doors close tonight (then price goes up)",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #dc2626; font-size: 24px; margin-bottom: 15px;">⏳ Final call — doors close tonight (then price goes up)</h1>
          <p style="color: #6b7280; font-size: 14px; margin-bottom: 20px;">Last reminder before AI Masterclass closes.</p>
          <p>This is it.</p>
          <p>In a few hours, enrollment for AI Masterclass closes. When it reopens, the price goes up.</p>
          <p>You've seen what's possible — $5K, $10K, even $15K/mo side hustles powered by AI.</p>
          <p>All from people who started exactly where you are right now.</p>
          <p>Don't be the person who looks back in 6 months and says "I should've joined."</p>
          <p><a href="${process.env.NEXT_PUBLIC_SITE_URL}/training" style="background: #dc2626; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">👉 Join AI Masterclass now before it's too late</a></p>
          <p>– From AI Masterclass</p>
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