'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

const lessons = [
  {
    id: 1,
    title: 'Why Automation is Power',
    duration: '18 min',
    content: `
      <h2>Automation = Freedom</h2>
      
      <p>If you only take one thing from this module, let it be this: <strong>automation is freedom.</strong></p>

      <p>Think about the tasks you repeat daily or weekly: answering emails, updating spreadsheets, moving data between apps, writing reports, following up with leads. All of those little things eat up hours.</p>

      <p>Most people accept it as "just part of the job." But the truth is, <strong>AI can handle 70–80% of these tasks automatically.</strong></p>

      <p>That means instead of being stuck in the weeds, you're free to work on high-leverage activities — building new products, closing clients, scaling your business, or simply enjoying more free time.</p>

      <div class="key-takeaway">
        <h4>💡 Remember:</h4>
        <p>Successful entrepreneurs don't just work harder. They build systems that do the work for them.</p>
        <p>AI is your secret weapon to make that happen.</p>
      </div>

      <h3>⚡ The Power of Compounding Time</h3>

      <p>Let's say AI saves you 2 hours per day. That's 10 hours per week. 40 hours per month. <strong>480 hours per year.</strong></p>

      <p>That's an entire month of your life back. Every single year.</p>

      <p>But here's where it gets even better: those freed-up hours can be spent on high-value activities that make you money. So automation doesn't just save time — it <strong>multiplies your earning potential.</strong></p>

      <h3>🧠 The Automation Mindset</h3>

      <p>Most people approach work with this mindset: <em>"I need to do this task."</em></p>

      <p>The automation mindset is different: <em>"How can I set up a system so this task does itself?"</em></p>

      <p>It's a small shift, but it changes everything.</p>

      <div class="success-story">
        <h4>💡 Real Example:</h4>
        <p>A coach used to manually send welcome emails to new clients. It took 10 minutes per client, but more importantly, it broke her focus every time someone signed up.</p>
        <p>Then she set up an automation with Zapier:</p>
        <ul>
          <li>New client fills out the form</li>
          <li>Zapier automatically sends a personalized welcome email</li>
          <li>Client gets added to her CRM</li>
          <li>A follow-up email is scheduled for 3 days later</li>
        </ul>
        <p>Now she doesn't think about it. The system runs 24/7. She saved 5+ hours per week and her client experience actually improved because emails go out instantly.</p>
      </div>

      <h3>🎯 Where to Start with Automation</h3>

      <p>Don't try to automate everything at once. Start with the tasks that:</p>

      <ul>
        <li>You do <strong>repeatedly</strong> (daily or weekly)</li>
        <li>Don't require complex human judgment</li>
        <li>Take up mental energy (even if they're quick)</li>
      </ul>

      <h4>Common Tasks Perfect for Automation:</h4>
      <ul>
        <li>Email responses to common questions</li>
        <li>Social media post scheduling</li>
        <li>Data entry and organization</li>
        <li>Report generation</li>
        <li>Lead follow-ups</li>
        <li>File backups and organization</li>
        <li>Invoice creation and sending</li>
      </ul>

      <h3>✅ Action Exercise: Identify Your First Automation</h3>

      <ol>
        <li>Write down 5 tasks you repeat every week</li>
        <li>Circle the one that frustrates you the most or takes the most time</li>
        <li>Google: "Zapier automate [your task]" or "AI tool for [your task]"</li>
        <li>Commit to testing one automation this week</li>
      </ol>

      <p>Even automating just one small process can give you hours back. And once you see the power, you'll want to automate everything.</p>
    `
  },
  {
    id: 2,
    title: 'Core Automation Stack',
    duration: '22 min',
    content: `
      <h2>Your Automation Toolkit</h2>
      
      <p>You don't need to know how to code to build powerful AI-driven systems. These tools make automation accessible to anyone.</p>

      <h3>🛠 The Essential Automation Tools</h3>

      <h4>1. Zapier / Make</h4>
      <p><strong>What they do:</strong> Connect different apps and automate workflows between them.</p>

      <p><strong>Example:</strong> When someone fills out a form on your website, Zapier can automatically:</p>
      <ul>
        <li>Add them to your email list</li>
        <li>Send a personalized thank-you email</li>
        <li>Log them in your CRM</li>
        <li>Notify you in Slack</li>
      </ul>

      <p><strong>Which to choose:</strong></p>
      <ul>
        <li><strong>Zapier:</strong> Easier for beginners, great UI, more expensive</li>
        <li><strong>Make:</strong> More powerful for complex workflows, cheaper, steeper learning curve</li>
      </ul>

      <p><strong>Cost:</strong> Both have free tiers. Paid plans start at $20-30/month.</p>

      <h4>2. Notion / Airtable</h4>
      <p><strong>What they do:</strong> Smart databases that organize information and connect to other tools.</p>

      <p>With AI integrations, they can:</p>
      <ul>
        <li>Summarize notes automatically</li>
        <li>Generate insights from data</li>
        <li>Recommend next steps</li>
        <li>Create reports on autopilot</li>
      </ul>

      <p><strong>Best for:</strong> Project management, client tracking, content calendars, knowledge bases.</p>

      <h4>3. ChatGPT + APIs</h4>
      <p><strong>What it does:</strong> For custom workflows, you can plug AI directly into the apps you already use.</p>

      <p>That means AI isn't just generating ideas — it's taking action.</p>

      <p><strong>Examples:</strong></p>
      <ul>
        <li>AI writes personalized emails based on CRM data</li>
        <li>AI generates social media captions from blog posts</li>
        <li>AI creates weekly performance summaries from your analytics</li>
      </ul>

      <h3>💼 Example Workflow: Automated Coaching Business</h3>

      <p>Let's say you run a coaching business. Normally, this is how things work:</p>

      <ol>
        <li>A potential client fills out your website form</li>
        <li>You manually email them back</li>
        <li>You add their info into a spreadsheet</li>
        <li>You try to remember to follow up a few days later</li>
      </ol>

      <p>That's slow, inconsistent, and exhausting.</p>

      <div class="success-story">
        <h4>🚀 Now here's the AI-powered version:</h4>
        <ol>
          <li>Client fills out your form</li>
          <li>Zapier automatically sends their info to your CRM</li>
          <li>ChatGPT drafts a personalized welcome email and sends it instantly</li>
          <li>AI schedules a follow-up reminder for you in 3 days</li>
          <li>At the end of the week, your CRM auto-generates a performance report with insights powered by AI</li>
        </ol>
        <p>Suddenly, your "manual" business feels like it has a full-time assistant running in the background.</p>
      </div>

      <h3>🔗 How to Build Your First Automation</h3>

      <p>Here's a step-by-step process for creating your first automated workflow:</p>

      <h4>Step 1: Map the Process</h4>
      <p>Write out the current manual process step by step. Example:</p>
      <ul>
        <li>Client emails me a question</li>
        <li>I read the email</li>
        <li>I draft a response</li>
        <li>I send it</li>
        <li>I log the interaction in my notes</li>
      </ul>

      <h4>Step 2: Identify What Can Be Automated</h4>
      <p>Which steps don't need your personal touch? Usually, it's:</p>
      <ul>
        <li>Data transfer (moving info between apps)</li>
        <li>Notifications (letting you know something happened)</li>
        <li>First drafts (AI can generate these)</li>
        <li>Scheduling (AI can handle this)</li>
      </ul>

      <h4>Step 3: Build the Automation</h4>
      <p>Use tools like Zapier to connect the apps. Most automations follow this pattern:</p>
      <ul>
        <li><strong>Trigger:</strong> When X happens... (e.g., form submission)</li>
        <li><strong>Action:</strong> Do Y automatically (e.g., send email, update database)</li>
      </ul>

      <h4>Step 4: Test & Refine</h4>
      <p>Run a few test cases to make sure it works. Adjust as needed. Once it's running smoothly, you can forget about it.</p>

      <h3>💡 Pro Tips for Automation Success</h3>

      <ul>
        <li><strong>Start small:</strong> Automate one workflow at a time. Don't try to rebuild your entire business in a day.</li>
        <li><strong>Test thoroughly:</strong> Make sure your automation actually works before relying on it.</li>
        <li><strong>Add human checkpoints:</strong> For important tasks, have the automation notify you instead of acting completely on its own.</li>
        <li><strong>Document everything:</strong> Write down how your automations work so you can troubleshoot or improve them later.</li>
      </ul>

      <h3>✅ Action Exercise: Build One Automation This Week</h3>

      <ol>
        <li>Pick one repetitive task from your list</li>
        <li>Sign up for Zapier (free plan is fine to start)</li>
        <li>Watch one 5-minute tutorial on how to build a Zap</li>
        <li>Create your first automation</li>
        <li>Test it with real data</li>
      </ol>

      <p>Once you see one automation working, you'll immediately think of ten more things you can automate. That's when the magic happens.</p>
    `
  },
  {
    id: 3,
    title: 'The 3 Levels of AI Automation',
    duration: '20 min',
    content: `
      <h2>Scaling Your Automation Game</h2>
      
      <p>Automation isn't one-size-fits-all. There are different levels, and as you get more comfortable, you'll climb from Level 1 → Level 3.</p>

      <p>Let's break down each level so you know where you are and where you're headed.</p>

      <h3>🥉 Level 1: Personal Productivity</h3>

      <p>This is where everyone starts. You're using AI to make <em>your</em> life easier.</p>

      <h4>What It Looks Like:</h4>
      <ul>
        <li>AI drafts your emails</li>
        <li>AI summarizes long articles or documents</li>
        <li>AI manages your calendar</li>
        <li>AI generates to-do lists based on your goals</li>
      </ul>

      <p><strong>Impact:</strong> Saves you 5-10 hours per week. You're still doing most of the work, but AI makes it faster.</p>

      <div class="success-story">
        <h4>💡 Example:</h4>
        <p>A freelancer used ChatGPT to draft email responses to common client questions. Instead of typing the same things over and over, she'd use AI to generate replies in seconds, then personalize them before sending.</p>
        <p>Time saved: <strong>1 hour per day.</strong></p>
      </div>

      <h3>🥈 Level 2: Business Workflows</h3>

      <p>At this level, you're automating entire business processes. This is where things start to feel like magic.</p>

      <h4>What It Looks Like:</h4>
      <ul>
        <li>Client onboarding runs automatically (welcome emails, contracts, scheduling)</li>
        <li>Lead tracking happens in the background</li>
        <li>Content gets scheduled and published without you touching it</li>
        <li>Reports are generated and sent on autopilot</li>
      </ul>

      <p><strong>Impact:</strong> Your systems run 24/7 without you. You're no longer trading hours for dollars — your business works while you sleep.</p>

      <div class="success-story">
        <h4>💡 Example:</h4>
        <p>James was a freelance consultant constantly drowning in admin work. He used AI to automate his proposal process:</p>
        <ul>
          <li>When a client requested a proposal, AI pulled details from their intake form</li>
          <li>ChatGPT generated a tailored proposal draft</li>
          <li>Zapier sent it automatically as a polished PDF</li>
        </ul>
        <p><strong>What used to take 2 hours per proposal now took 10 minutes.</strong></p>
        <p>That freed him to spend more time closing deals instead of formatting documents. Within three months, his client base grew by 40%.</p>
      </div>

      <h3>🥇 Level 3: Scaled Operations</h3>

      <p>This is the endgame. At Level 3, you're running AI agents that can handle customer service, sales outreach, and even decision-making.</p>

      <h4>What It Looks Like:</h4>
      <ul>
        <li>AI chatbots handle customer support 24/7</li>
        <li>AI sales agents follow up with leads automatically</li>
        <li>AI tools analyze data and recommend strategic decisions</li>
        <li>Entire departments run on AI-powered systems</li>
      </ul>

      <p><strong>Impact:</strong> At this stage, you're managing systems instead of tasks. Your business can scale without adding headcount.</p>

      <div class="success-story">
        <h4>💡 Example:</h4>
        <p>An e-commerce brand uses AI to:</p>
        <ul>
          <li>Answer customer questions via chatbot (handles 80% of inquiries)</li>
          <li>Generate product descriptions for new items</li>
          <li>Create ad copy and test variations automatically</li>
          <li>Analyze sales data and recommend inventory adjustments</li>
        </ul>
        <p>The founder runs a <strong>7-figure business with a team of just 3 people.</strong> The rest is AI.</p>
      </div>

      <h3>🎯 Climbing the Levels</h3>

      <p>You don't jump straight to Level 3. You build your way up:</p>

      <ol>
        <li><strong>Start at Level 1:</strong> Automate your personal tasks. Get comfortable with the tools.</li>
        <li><strong>Move to Level 2:</strong> Once you see the power, start automating business workflows.</li>
        <li><strong>Reach Level 3:</strong> As your business grows, invest in advanced AI systems and agents.</li>
      </ol>

      <p>Wherever you are now, aim to climb one level at a time. Even moving from Level 1 to Level 2 will transform your business.</p>

      <h3>⚙️ Building Multi-Step Automations</h3>

      <p>The real power comes when you chain multiple tools together. Here's a real-world example:</p>

      <div class="success-story">
        <h4>🔗 Automated Content System:</h4>
        <ol>
          <li>ChatGPT writes a blog post every Monday</li>
          <li>Zapier pulls the post and sends it to your WordPress site</li>
          <li>MidJourney generates a featured image</li>
          <li>Zapier publishes the post automatically</li>
          <li>Your email list gets notified via automated email</li>
          <li>Social media posts are scheduled via Buffer</li>
        </ol>
        <p>That's a <strong>fully automated content machine.</strong> You set it up once, and it runs every week without you touching it.</p>
      </div>

      <h3>⚠️ Common Automation Mistakes</h3>

      <p><strong>Mistake 1: Over-Automating Too Fast</strong></p>
      <p>Don't automate everything at once. Start small, test one workflow, then add more.</p>

      <p><strong>Mistake 2: Set It and Forget It (Completely)</strong></p>
      <p>Check your automations occasionally to make sure they're still working as expected. Tools update, APIs change, things break.</p>

      <p><strong>Mistake 3: Automating Bad Processes</strong></p>
      <p>If a process is inefficient, automating it just makes the inefficiency faster. Fix the process first, then automate.</p>

      <div class="key-takeaway">
        <h4>💡 Golden Rule:</h4>
        <p>Automate the repetitive. Optimize the strategic.</p>
        <p>Use AI to handle the boring stuff so you can focus on the high-value work that actually moves your business forward.</p>
      </div>

      <h3>✅ Action Exercise: Map Your Automation Roadmap</h3>

      <ol>
        <li>List 10 tasks you do regularly in your business or work</li>
        <li>Rate each one:
          <ul>
            <li>High automation potential (simple, repetitive)</li>
            <li>Medium (requires some judgment)</li>
            <li>Low (needs human touch)</li>
          </ul>
        </li>
        <li>Pick the top 3 "high automation" tasks</li>
        <li>Commit to automating one per month for the next 90 days</li>
      </ol>

      <p>By the end of 90 days, you'll have freed up 10-15 hours per week. That's like hiring a part-time employee, except it costs almost nothing.</p>

      <div class="next-module">
        <p><strong>Ready to create?</strong> In Module 4, we'll show you how to use AI for content and marketing — including faceless content strategies that are crushing it right now. 🚀</p>
      </div>
    `
  }
]

export default function Module3Page() {
  const router = useRouter()
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [currentLesson, setCurrentLesson] = useState(0)
  const [completedLessons, setCompletedLessons] = useState<number[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const unlocked = localStorage.getItem('system_unlocked')
    if (unlocked !== 'true') {
      router.push('/system')
      return
    }
    setIsUnlocked(true)

    const progress = localStorage.getItem('module_3_progress')
    if (progress) {
      setCompletedLessons(JSON.parse(progress))
    }
    setIsLoading(false)
  }, [router])

  const markComplete = () => {
    if (!completedLessons.includes(currentLesson)) {
      const updated = [...completedLessons, currentLesson]
      setCompletedLessons(updated)
      localStorage.setItem('module_3_progress', JSON.stringify(updated))
    }
  }

  const nextLesson = () => {
    markComplete()
    if (currentLesson < lessons.length - 1) {
      setCurrentLesson(currentLesson + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const prevLesson = () => {
    if (currentLesson > 0) {
      setCurrentLesson(currentLesson - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    )
  }

  if (!isUnlocked) {
    return null
  }

  const lesson = lessons[currentLesson]
  const progress = Math.round(((currentLesson + 1) / lessons.length) * 100)

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-x-hidden relative">
      {/* Premium animated background */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-600/20 via-purple-600/10 to-transparent"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-cyan-600/20 via-blue-600/10 to-transparent"></div>
      <div className="fixed inset-0 bg-gradient-to-r from-purple-900/5 via-blue-900/5 to-cyan-900/5"></div>

      <div className="relative z-10 flex h-screen">
        {/* Sidebar Navigation */}
        <div className="w-96 bg-black/40 backdrop-blur-xl border-r border-white/10 shadow-2xl">
          <div className="p-6 border-b border-gray-700/50">
            <Link href="/course" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-4 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to System
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-black text-2xl">3</span>
              </div>
              <div>
                <h1 className="text-2xl font-black text-white">Module 3</h1>
                <p className="text-blue-300 text-sm font-medium">AI for Automation & Systems</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-400">Progress</span>
                <span className="text-xs font-semibold text-cyan-400">{progress}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
          
          <nav className="p-4">
            <h3 className="text-lg font-bold text-white mb-4">Lessons</h3>
            <ul className="space-y-2">
              {lessons.map((l, index) => (
                <li key={l.id}>
                  <button
                    onClick={() => setCurrentLesson(index)}
                    className={`w-full text-left p-3 rounded-lg transition-all duration-200
                      ${currentLesson === index
                        ? 'bg-cyan-500/20 border border-cyan-500/50 text-white shadow-lg'
                        : 'text-gray-300 hover:bg-gray-800/50 hover:text-white border border-transparent'
                      }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`flex-shrink-0 w-6 h-6 rounded-lg flex items-center justify-center ${
                        completedLessons.includes(index)
                          ? 'bg-green-500'
                          : currentLesson === index
                          ? 'bg-cyan-500'
                          : 'bg-gray-700'
                      }`}>
                        {completedLessons.includes(index) ? (
                          <CheckCircle className="h-4 w-4 text-white" />
                        ) : (
                          <span className="text-white font-bold text-xs">{index + 1}</span>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-sm font-medium block">{l.title}</span>
                        <span className="text-xs text-gray-400">{l.duration}</span>
                      </div>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto p-8">
            {/* Lesson Content */}
            <div className="bg-gradient-to-br from-gray-900/95 via-gray-800/50 to-gray-900/95 border-2 border-cyan-500/30 rounded-2xl p-8 backdrop-blur-sm shadow-[0_0_30px_rgba(6,182,212,0.3)] mb-8">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl sm:text-4xl font-black text-white">
                Lesson {currentLesson + 1}: {lesson.title}
              </h1>
              <span className="text-sm text-gray-400">{lesson.duration}</span>
            </div>

              <div 
                className="prose prose-invert prose-lg max-w-none lesson-content"
                dangerouslySetInnerHTML={{ __html: lesson.content }}
              />
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between">
              <Button
                onClick={prevLesson}
                disabled={currentLesson === 0}
                variant="outline"
                className="border-2 border-gray-700 text-white hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Previous
              </Button>

              {currentLesson === lessons.length - 1 ? (
                <Link href="/course">
                  <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold">
                    Complete Module 3
                    <CheckCircle className="h-5 w-5 ml-2" />
                  </Button>
                </Link>
              ) : (
                <Button
                  onClick={nextLesson}
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold"
                >
                  Next Lesson
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .lesson-content h2 {
          font-size: 2rem;
          font-weight: 800;
          color: white;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .lesson-content h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #22d3ee;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }
        .lesson-content h4 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #67e8f9;
          margin-top: 1.25rem;
          margin-bottom: 0.5rem;
        }
        .lesson-content p {
          color: #d1d5db;
          line-height: 1.75;
          margin-bottom: 1rem;
        }
        .lesson-content ul, .lesson-content ol {
          color: #d1d5db;
          margin-bottom: 1rem;
          padding-left: 1.5rem;
        }
        .lesson-content li {
          margin-bottom: 0.5rem;
        }
        .lesson-content strong {
          color: white;
          font-weight: 600;
        }
        .lesson-content .success-story {
          background: linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(59, 130, 246, 0.1));
          border: 2px solid rgba(34, 197, 94, 0.3);
          border-radius: 1rem;
          padding: 1.5rem;
          margin: 1.5rem 0;
        }
        .lesson-content .key-takeaway {
          background: linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1));
          border: 2px solid rgba(6, 182, 212, 0.3);
          border-radius: 1rem;
          padding: 1.5rem;
          margin: 2rem 0;
        }
        .lesson-content .next-module {
          background: linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(6, 182, 212, 0.1));
          border: 2px solid rgba(34, 197, 94, 0.3);
          border-radius: 1rem;
          padding: 1.5rem;
          margin: 2rem 0;
          text-align: center;
        }
      `}</style>
    </main>
  )
}
