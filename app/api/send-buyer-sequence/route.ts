import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// Buyer Email Sequence
const buyerEmails = [
  {
    day: 1,
    subject: "Welcome to AI Masterclass — here's your login 🎓",
    content: `
      <h2>Welcome to AI Masterclass!</h2>
      <p>Hey there!</p>
      <p>Congratulations on joining AI Masterclass! You're now part of an exclusive group of students who are building profitable AI businesses.</p>
      <p><strong>Here's what you get access to:</strong></p>
      <ul>
        <li>✅ 50+ Advanced AI Prompts</li>
        <li>✅ 6 Complete Training Modules</li>
        <li>✅ Lifetime Access</li>
        <li>✅ 30-Day Money Back Guarantee</li>
      </ul>
      <p><strong>Your login details:</strong></p>
      <p>Email: [Your Email]<br>
      Password: [You'll receive this in a separate email]</p>
      <p><a href="https://aimasterclass.info/get-course" style="background: #4F46E5; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">Access Your Course →</a></p>
      <p>Start with Module 1: AI Strategy Engineering. This is where the magic happens!</p>
      <p>Welcome aboard,<br>Ben</p>
    `
  },
  {
    day: 2,
    subject: "How to get results FAST (do this first)",
    content: `
      <h2>Your Fast Track to Results</h2>
      <p>Hey there!</p>
      <p>I wanted to share something important with you...</p>
      <p>Most students make the mistake of trying to learn everything at once. But the winners? They focus on ONE thing first.</p>
      <p><strong>Here's what to do FIRST:</strong></p>
      <ol>
        <li>Complete Module 1: AI Strategy Engineering</li>
        <li>Practice with the first 5 AI prompts</li>
        <li>Choose ONE strategy to focus on</li>
        <li>Take action within 24 hours</li>
      </ol>
      <p>Don't try to master everything at once. Pick one strategy, get good at it, then move to the next.</p>
      <p><strong>Ready to start?</strong></p>
      <p><a href="https://aimasterclass.info/get-course" style="background: #4F46E5; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">Start Module 1 →</a></p>
      <p>Focus beats complexity every time,<br>Ben</p>
    `
  },
  {
    day: 3,
    subject: "Meet others who built 5-figure AI side hustles",
    content: `
      <h2>You're Not Alone in This Journey</h2>
      <p>Hey there!</p>
      <p>I wanted to introduce you to some of your fellow students who are already crushing it...</p>
      <p><strong>Meet Sarah:</strong> Former teacher, now making $8,400/month with AI content creation</p>
      <p><strong>Meet Marcus:</strong> Agency owner who went from $3K to $50K/month using our client acquisition system</p>
      <p><strong>Meet David:</strong> Startup analyst who got promoted to AI Innovation Lead with an $85K salary</p>
      <p>These aren't just success stories. These are real people, just like you, who took action and got results.</p>
      <p><strong>What's their secret?</strong></p>
      <p>They didn't wait for the perfect moment. They started with what they had and improved as they went.</p>
      <p><a href="https://aimasterclass.info/get-course" style="background: #4F46E5; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">Join Their Success →</a></p>
      <p>Your success story starts today,<br>Ben</p>
    `
  },
  {
    day: 4,
    subject: "Secret module most students skip (but shouldn't)",
    content: `
      <h2>The Hidden Gem Most Students Miss</h2>
      <p>Hey there!</p>
      <p>I've noticed something interesting...</p>
      <p>Most students focus on the "sexy" modules like AI Strategy Engineering and Trading Algorithms. But they skip the module that actually makes everything else work.</p>
      <p><strong>Module 4: Market Research AI</strong></p>
      <p>This is where you learn to find profitable niches and opportunities in minutes, not months. It's the foundation that makes all your other strategies profitable.</p>
      <p>Students who master this module see 3x better results than those who skip it.</p>
      <p><strong>Don't make this mistake:</strong></p>
      <p>Don't skip Module 4. It's the difference between making $500 and making $5,000.</p>
      <p><a href="https://aimasterclass.info/get-course" style="background: #4F46E5; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">Master Module 4 →</a></p>
      <p>This is where the real money is made,<br>Ben</p>
    `
  },
  {
    day: 5,
    subject: "How to start getting clients using our templates",
    content: `
      <h2>Your Client Acquisition Blueprint</h2>
      <p>Hey there!</p>
      <p>Ready to start getting paying clients?</p>
      <p>Module 5: Client Acquisition System is where you learn the exact system that helped students land their first $5K+ clients.</p>
      <p><strong>Here's what you'll get:</strong></p>
      <ul>
        <li>✅ Done-for-you outreach templates</li>
        <li>✅ AI-powered lead generation scripts</li>
        <li>✅ Follow-up sequences that convert</li>
        <li>✅ Pricing strategies that work</li>
      </ul>
      <p>These aren't just templates. They're battle-tested systems that have already generated millions in student results.</p>
      <p><strong>Your next step:</strong></p>
      <p>Complete Module 5, then start reaching out to your first 10 prospects using our templates.</p>
      <p><a href="https://aimasterclass.info/get-course" style="background: #4F46E5; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">Get Your First Clients →</a></p>
      <p>Action beats perfection every time,<br>Ben</p>
    `
  },
  {
    day: 6,
    subject: "How to make your first $1,000 this month",
    content: `
      <h2>Your First $1,000 is Closer Than You Think</h2>
      <p>Hey there!</p>
      <p>I want to share something that might surprise you...</p>
      <p>Making your first $1,000 with AI is actually easier than most people think. The hard part isn't the technical stuff. It's taking action.</p>
      <p><strong>Here's the simple formula:</strong></p>
      <ol>
        <li>Find 1 profitable niche (Module 4)</li>
        <li>Create 1 AI-powered service</li>
        <li>Reach out to 50 prospects (Module 5)</li>
        <li>Close 1 client at $1,000</li>
      </ol>
      <p>That's it. No complex systems. No fancy tools. Just one client at $1,000.</p>
      <p><strong>Your action plan:</strong></p>
      <p>This week, focus on completing Modules 4 and 5. Next week, start reaching out to prospects.</p>
      <p><a href="https://aimasterclass.info/get-course" style="background: #4F46E5; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">Start Your First $1K →</a></p>
      <p>Your first $1,000 is waiting,<br>Ben</p>
    `
  },
  {
    day: 7,
    subject: "Unlock the Launchpad Beta — exclusive for students only 🔥",
    content: `
      <h2>Exclusive Access: The Launchpad Beta</h2>
      <p>Hey there!</p>
      <p>As a valued AI Masterclass student, you get exclusive access to something special...</p>
      <p><strong>The Launchpad Beta</strong></p>
      <p>This is my newest project - a complete business launch system that helps you go from idea to $10K/month in 90 days.</p>
      <p><strong>What's included:</strong></p>
      <ul>
        <li>✅ Complete business blueprint</li>
        <li>✅ Done-for-you marketing campaigns</li>
        <li>✅ 1-on-1 strategy calls</li>
        <li>✅ Private community access</li>
      </ul>
      <p>This is normally $2,997, but as a student, you get it for just $497.</p>
      <p><strong>But here's the catch:</strong></p>
      <p>I'm only accepting 50 students for this beta. Once we hit 50, the doors close.</p>
      <p><a href="https://aimasterclass.info/launchpad" style="background: #4F46E5; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">Secure Your Beta Spot →</a></p>
      <p>This is your chance to be part of something special,<br>Ben</p>
    `
  }
]

export async function POST(request: NextRequest) {
  try {
    const { email, firstName, day } = await request.json()

    if (!email || !firstName || !day) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const emailTemplate = buyerEmails.find(e => e.day === day)
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

    console.log(`✅ Buyer email ${day} sent to:`, email)
    return NextResponse.json({ success: true, messageId: data?.id })

  } catch (error) {
    console.error('❌ Buyer email sequence error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
