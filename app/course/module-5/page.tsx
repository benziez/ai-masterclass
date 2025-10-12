'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

const lessons = [
  {
    id: 1,
    title: 'Building Your Core Stack',
    duration: '20 min',
    content: `
      <h2>Why Tools Matter (But Not as Much as You Think)</h2>
      
      <p>Every week, it feels like a new AI app goes viral. Some promise to replace your entire job. Others are just fun gimmicks.</p>

      <p>The danger is falling into <strong>"tool collector mode"</strong> — downloading everything but mastering nothing.</p>

      <p>Here's the truth: <strong>you don't need 100 tools. You need a core stack of 3–5 that cover the essentials.</strong></p>

      <p>Once you're fluent with those, you'll be more productive than 99% of people still chasing the "next big thing."</p>

      <div class="key-takeaway">
        <h4>💡 Think of It This Way:</h4>
        <p>Tools are like weapons in your arsenal. You don't need every weapon — just the sharpest ones that fit your strategy.</p>
      </div>

      <h3>🔑 The Core AI Stack</h3>

      <p>Let's break down the categories of tools you actually need and the best options in each:</p>

      <h4>1. Text & Workflows: ChatGPT (or Claude, Gemini)</h4>
      
      <p><strong>What it does:</strong> Your Swiss Army knife for everything text-related.</p>

      <p>You'll use it for:</p>
      <ul>
        <li>Brainstorming ideas</li>
        <li>Drafting content (emails, posts, articles)</li>
        <li>Summarizing documents</li>
        <li>Analyzing data</li>
        <li>Writing code</li>
        <li>Creating workflows</li>
      </ul>

      <p><strong>Cost:</strong> Free (GPT-3.5) or $20/month (GPT-4)</p>

      <p><strong>Alternatives:</strong></p>
      <ul>
        <li><strong>Claude:</strong> Great for long documents and research-heavy tasks</li>
        <li><strong>Perplexity AI:</strong> Best for real-time web research</li>
      </ul>

      <h4>2. Images: MidJourney / DALL·E</h4>

      <p><strong>What it does:</strong> Creates professional graphics, ad creatives, or social media content in minutes.</p>

      <p>Need a product mockup, YouTube thumbnail, or custom illustration? Done.</p>

      <p><strong>Best for:</strong></p>
      <ul>
        <li>Ad creatives</li>
        <li>Social media visuals</li>
        <li>Branding elements</li>
        <li>YouTube thumbnails</li>
        <li>Website graphics</li>
      </ul>

      <p><strong>Cost:</strong></p>
      <ul>
        <li><strong>MidJourney:</strong> $10/month</li>
        <li><strong>DALL·E:</strong> Pay-per-image ($0.04-$0.08 per image)</li>
        <li><strong>Canva AI:</strong> Free tier available</li>
      </ul>

      <h4>3. Voice: ElevenLabs</h4>

      <p><strong>What it does:</strong> Studio-quality voiceovers without a microphone.</p>

      <p>Perfect for faceless content, narrations, or client work. Natural, emotional voices in any language.</p>

      <p><strong>Cost:</strong> Free tier (10,000 characters/month) or $5-$22/month for more</p>

      <h4>4. Video: Runway / Pika / CapCut</h4>

      <p><strong>What they do:</strong> Help you generate b-roll, edit clips, add captions, or create full animations.</p>

      <p>What used to take hours in Premiere Pro now takes minutes.</p>

      <p><strong>Best tools:</strong></p>
      <ul>
        <li><strong>Runway:</strong> Advanced AI video editing ($12-$28/month)</li>
        <li><strong>Pika:</strong> Text-to-video creation ($8-$28/month)</li>
        <li><strong>CapCut:</strong> Free, beginner-friendly, great for TikTok/Shorts</li>
      </ul>

      <h4>5. Automation: Zapier / Make</h4>

      <p><strong>What they do:</strong> Connect all the above tools together so they work as one system.</p>

      <p>Imagine this workflow:</p>
      <ol>
        <li>ChatGPT writes a blog post</li>
        <li>MidJourney generates images for it</li>
        <li>Zapier publishes it to your WordPress site</li>
        <li>Your email list is automatically notified</li>
      </ol>

      <p>That's a <strong>fully automated content machine.</strong></p>

      <p><strong>Cost:</strong> Free tier available, paid plans $20-30/month</p>

      <h3>🎯 Your Starter Stack (Free or Cheap)</h3>

      <p>If you're just getting started, here's the minimum you need:</p>

      <ul>
        <li><strong>ChatGPT Free</strong> → $0/month</li>
        <li><strong>Canva Free</strong> → $0/month</li>
        <li><strong>CapCut</strong> → $0/month</li>
        <li><strong>ElevenLabs Free Tier</strong> → $0/month</li>
      </ul>

      <p><strong>Total cost: $0/month</strong></p>

      <p>Once you're making money, upgrade to the paid versions for better quality and faster results.</p>

      <h3>✅ Action Exercise: Build Your Core Stack</h3>

      <ol>
        <li>Write down all the AI tools you've tried so far</li>
        <li>Circle the 3–5 you'll commit to mastering</li>
        <li>Delete or unsubscribe from the rest (reduce distraction)</li>
        <li>Set one project you'll complete with each tool this month</li>
      </ol>

      <div class="key-takeaway">
        <h4>💡 Remember:</h4>
        <p>Mastery beats variety. Five tools you know inside-out will always beat fifty tools you barely understand.</p>
      </div>
    `
  },
  {
    id: 2,
    title: 'Tool Tiers & Mastery Framework',
    duration: '18 min',
    content: `
      <h2>Free vs. Paid: When to Upgrade</h2>
      
      <p>Not every tool is worth paying for. Here's a good rule of thumb for when to stay free vs. when to upgrade:</p>

      <h3>💵 Tool Tiers Explained</h3>

      <h4>Tier 1: Free (Perfect for Starting Out)</h4>

      <p><strong>Use free tools when:</strong></p>
      <ul>
        <li>You're just experimenting or learning</li>
        <li>You're building personal projects (not client work)</li>
        <li>You're validating an idea before investing money</li>
      </ul>

      <p><strong>Examples:</strong> ChatGPT Free, Canva Free, CapCut, Zapier Free</p>

      <h4>Tier 2: Paid ($10–30/month) — Worth It for Businesses</h4>

      <p><strong>Upgrade when:</strong></p>
      <ul>
        <li>You're running a business and need higher quality</li>
        <li>You need faster results or more features</li>
        <li>The time saved justifies the cost</li>
      </ul>

      <p><strong>Examples:</strong> ChatGPT Plus, MidJourney, ElevenLabs Pro, Zapier Paid</p>

      <div class="key-takeaway">
        <h4>💡 The ROI Test:</h4>
        <p>If a $20/month tool saves you 5 hours per month, and your time is worth more than $4/hour, it's a no-brainer.</p>
        <p>Even better: if that tool helps you land <em>one</em> extra client or sale, it pays for itself many times over.</p>
      </div>

      <h4>Tier 3: Pro/Enterprise ($50+/month) — Skip Unless You're at Scale</h4>

      <p><strong>Only upgrade when:</strong></p>
      <ul>
        <li>You're managing teams</li>
        <li>You need enterprise features (API access, unlimited usage, etc.)</li>
        <li>You're making 5-figures+ per month and need premium tools</li>
      </ul>

      <p>Don't fall into the trap of paying for expensive tools "just in case." Start cheap, upgrade only when you've outgrown the free/basic versions.</p>

      <h3>🧠 How to Master a Tool (Instead of Dabbling)</h3>

      <p>Most people "try" dozens of tools but never actually master any. Here's how to become an expert:</p>

      <h4>Step 1: Pick One Tool</h4>
      <p>Don't move on until you're comfortable with it. Focus beats variety.</p>

      <h4>Step 2: Set a Real Project</h4>
      <p>Don't just "play around." Build something real.</p>
      <p><strong>Examples:</strong></p>
      <ul>
        <li>"Make 10 TikTok videos with AI voiceovers"</li>
        <li>"Write and publish a 2,000-word blog post with ChatGPT"</li>
        <li>"Create 20 ad creatives with MidJourney"</li>
      </ul>

      <h4>Step 3: Push Its Limits</h4>
      <p>Try advanced features, plugins, or integrations. Watch tutorials. Read guides. Get curious about what's possible.</p>

      <h4>Step 4: Document Your Workflow</h4>
      <p>Create a repeatable system so you don't have to "relearn" every time.</p>

      <p><strong>Example workflow doc:</strong></p>
      <ul>
        <li>"How I use ChatGPT to write emails in 5 minutes"</li>
        <li>"My MidJourney prompt formula for ad creatives"</li>
        <li>"Step-by-step: Faceless TikTok creation process"</li>
      </ul>

      <div class="success-story">
        <h4>💡 Real Example:</h4>
        <p>Lena was a graphic designer tired of trading hours for dollars. Instead of panicking that "AI was replacing designers," she leaned in.</p>
        <p>She mastered:</p>
        <ul>
          <li>MidJourney for concept generation</li>
          <li>Photoshop's AI features for refinement</li>
          <li>Canva AI for quick client deliverables</li>
        </ul>
        <p>She offered "AI-powered branding kits" for startups at <strong>$300 each.</strong></p>
        <p>What took her 8 hours before now took 2. Her clients loved the speed and affordability.</p>
        <p>Within 4 months, she had booked over <strong>$10K in projects.</strong></p>
      </div>

      <p>The lesson? <strong>Tools don't replace you — they elevate you.</strong></p>

      <h3>⚠️ Common Tool Mistakes</h3>

      <p><strong>Mistake 1: Paying for Tools You Don't Use</strong></p>
      <p>Audit your subscriptions monthly. If you haven't used a tool in 30 days, cancel it.</p>

      <p><strong>Mistake 2: Not Learning Keyboard Shortcuts/Features</strong></p>
      <p>Spending 30 minutes learning shortcuts can save you hours over the next month.</p>

      <p><strong>Mistake 3: Using AI Output Without Editing</strong></p>
      <p>Always refine. Raw AI output is good, but refined output is great.</p>

      <h3>✅ Action Exercise: Master One Tool This Month</h3>

      <ol>
        <li>Pick one tool from your core stack</li>
        <li>Set a concrete project to complete with it (e.g., "Create 30 social posts")</li>
        <li>Watch 2-3 advanced tutorials to learn pro techniques</li>
        <li>Document your workflow in a Google Doc or Notion</li>
        <li>Use it daily for 30 days</li>
      </ol>

      <p>By the end of the month, you'll have not just "played" with AI — you'll have <strong>actual outputs</strong> that move your business forward.</p>
    `
  },
  {
    id: 3,
    title: 'Tool Combinations & Workflows',
    duration: '22 min',
    content: `
      <h2>The Power of Stacking Tools</h2>
      
      <p>Individual tools are powerful. But when you combine them? That's when the magic happens.</p>

      <p>The best AI creators don't just use tools in isolation. They build <strong>workflows</strong> where multiple tools work together seamlessly.</p>

      <h3>🔗 Workflow Example 1: Automated Content Engine</h3>

      <div class="success-story">
        <p><strong>The System:</strong></p>
        <ol>
          <li><strong>Monday morning:</strong> ChatGPT generates 10 blog post outlines</li>
          <li><strong>Monday afternoon:</strong> You pick the best 3 and have ChatGPT write full drafts</li>
          <li><strong>Tuesday:</strong> MidJourney creates featured images for each post</li>
          <li><strong>Wednesday:</strong> Zapier auto-publishes posts to your blog</li>
          <li><strong>Thursday:</strong> Your email list gets notified automatically</li>
          <li><strong>Friday:</strong> AI generates social media snippets from the posts and schedules them</li>
        </ol>
        <p>That's <strong>3 blog posts, 3 email campaigns, and 30+ social posts</strong> — all created in a few hours of setup work.</p>
      </div>

      <h3>🔗 Workflow Example 2: Faceless Video Factory</h3>

      <div class="success-story">
        <p><strong>The System:</strong></p>
        <ol>
          <li><strong>ChatGPT:</strong> Generates 20 video scripts (takes 10 minutes)</li>
          <li><strong>ElevenLabs:</strong> Creates voiceovers for all 20 (takes 15 minutes)</li>
          <li><strong>Stock footage library:</strong> You've pre-downloaded 100 clips in your niche</li>
          <li><strong>CapCut:</strong> Batch edit all videos with templates (takes 2 hours)</li>
          <li><strong>Result:</strong> 20 videos ready to post = 10 days of content</li>
        </ol>
        <p>Total time: <strong>3 hours for 10 days of content.</strong></p>
      </div>

      <h3>🔗 Workflow Example 3: AI-Powered Client Onboarding</h3>

      <div class="success-story">
        <p><strong>The System:</strong></p>
        <ol>
          <li><strong>Client fills out intake form</strong></li>
          <li><strong>Zapier triggers:</strong> Sends form data to Notion and Airtable</li>
          <li><strong>ChatGPT:</strong> Generates a personalized welcome email</li>
          <li><strong>Email sent automatically</strong> with contract + onboarding docs</li>
          <li><strong>Calendar link</strong> included for kickoff call</li>
          <li><strong>Follow-up sequence</strong> scheduled automatically</li>
        </ol>
        <p>What used to take 2 hours of manual work per client now takes <strong>zero time.</strong> The system runs itself.</p>
      </div>

      <h3>🛠 How to Build Your Own Workflows</h3>

      <h4>Step 1: Map Your Process</h4>
      <p>Write out every step of a task you do regularly.</p>

      <h4>Step 2: Identify the Automation Points</h4>
      <p>Which steps can AI handle? Which tools would you need?</p>

      <h4>Step 3: Build It in Stages</h4>
      <p>Don't try to automate everything at once. Start with 2-3 connected tools, test it, then add more.</p>

      <h4>Step 4: Test & Refine</h4>
      <p>Run it a few times to catch bugs. Adjust as needed. Once it works smoothly, let it run on autopilot.</p>

      <h3>🎯 Advanced Tool Combinations</h3>

      <p>Here are some powerful combinations:</p>

      <ul>
        <li><strong>ChatGPT + Notion + Zapier</strong> = Auto-updated knowledge base</li>
        <li><strong>MidJourney + Canva + Buffer</strong> = Automated social media graphics</li>
        <li><strong>ElevenLabs + CapCut + TikTok API</strong> = Faceless video publishing system</li>
        <li><strong>ChatGPT + Gmail + Calendar</strong> = AI email assistant with auto-scheduling</li>
      </ul>

      <div class="key-takeaway">
        <h4>💡 The Stack Effect:</h4>
        <p>Each tool you master makes the next one more powerful. That's why starting with a core stack and building from there is so effective.</p>
      </div>

      <h3>📊 Case Study: Marcus the Marketing Automation King</h3>

      <div class="success-story">
        <p>Marcus was a mid-level marketer at a small agency. He wasn't the most experienced on the team, but he was the first to lean into AI.</p>

        <p><strong>His stack:</strong></p>
        <ul>
          <li>ChatGPT for ad copy drafts</li>
          <li>MidJourney for ad creatives</li>
          <li>Zapier to connect campaign data to reporting dashboards</li>
          <li>Notion AI to generate client reports automatically</li>
        </ul>

        <p>Within six months, he became the <strong>go-to person for anything AI.</strong></p>

        <p>His agency didn't see him as just another marketer — they saw him as the one who made their whole team more competitive.</p>

        <p>He got promoted, given a raise, and became the most irreplaceable person in the company.</p>
      </div>

      <h3>✅ Action Exercise: Document Your First Workflow</h3>

      <ol>
        <li>Pick one repetitive task you do weekly</li>
        <li>Write out each step in detail</li>
        <li>Identify which AI tools could handle each step</li>
        <li>Build the workflow using those tools</li>
        <li>Document it so you can repeat it effortlessly</li>
      </ol>

      <div class="next-module">
        <p><strong>Ready to future-proof yourself?</strong> In Module 6, we'll show you how to become irreplaceable in the AI economy. 🚀</p>
      </div>
    `
  }
]

export default function Module5Page() {
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

    const progress = localStorage.getItem('module_5_progress')
    if (progress) {
      setCompletedLessons(JSON.parse(progress))
    }
    setIsLoading(false)
  }, [router])

  const markComplete = () => {
    if (!completedLessons.includes(currentLesson)) {
      const updated = [...completedLessons, currentLesson]
      setCompletedLessons(updated)
      localStorage.setItem('module_5_progress', JSON.stringify(updated))
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

      <div className="relative z-10 container mx-auto px-4 py-8">
        <Link 
          href="/course"
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-6 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to System
        </Link>

        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-gray-300">Module 5: AI Tools Mastery</span>
            <span className="text-sm font-semibold text-cyan-400">{progress}% Complete</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {lessons.map((l, index) => (
              <button
                key={l.id}
                onClick={() => setCurrentLesson(index)}
                className={`p-4 rounded-xl border-2 transition-all text-left ${
                  currentLesson === index
                    ? 'border-cyan-500 bg-cyan-500/10'
                    : 'border-gray-700 bg-gray-900/50 hover:border-gray-600'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${
                    completedLessons.includes(index)
                      ? 'bg-green-500'
                      : currentLesson === index
                      ? 'bg-cyan-500'
                      : 'bg-gray-700'
                  }`}>
                    {completedLessons.includes(index) ? (
                      <CheckCircle className="h-5 w-5 text-white" />
                    ) : (
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-white mb-1">{l.title}</h3>
                    <p className="text-xs text-gray-400">{l.duration}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900/95 via-gray-800/50 to-gray-900/95 border-2 border-cyan-500/30 rounded-2xl p-8 sm:p-12 backdrop-blur-sm shadow-[0_0_30px_rgba(6,182,212,0.3)] mb-8">
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

          <div className="flex items-center justify-between gap-4">
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
                  Complete Module 5
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

