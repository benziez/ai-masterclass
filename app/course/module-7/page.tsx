'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

const lessons = [
  {
    id: 1,
    title: 'The 3 Monetization Models',
    duration: '22 min',
    content: `
      <h2>Turning AI Into Real Income</h2>
      
      <p>Up until now, we've focused on mindset, business models, tools, and workflows. That's the foundation.</p>

      <p>But here's the part most people are waiting for: <strong>how do you actually turn this into money?</strong></p>

      <p>AI gives you leverage, but leverage without direction is wasted energy. To monetize, you need to decide:</p>

      <p><strong>Am I selling services, selling products, or selling attention?</strong></p>

      <p>Those are the three main pathways to profit in the AI economy. Let's break down each one.</p>

      <h3>💼 Model #1: Services (Fast Cash Flow)</h3>

      <p>If you want to start making money <strong>quickly</strong>, services are the fastest route.</p>

      <p>This is where you use AI to do something faster, cheaper, or better than others — and sell it as a service.</p>

      <h4>Examples of AI-Powered Services:</h4>
      <ul>
        <li>AI-powered copywriting agency</li>
        <li>Social media management with AI-driven content calendars</li>
        <li>Video editing with AI captioning and automation</li>
        <li>Email marketing with AI-generated sequences</li>
        <li>Graphic design using AI tools</li>
        <li>Virtual assistant services supercharged by AI</li>
      </ul>

      <p><strong>Why it works:</strong> Businesses are already spending money on these tasks. If you can do it faster and charge less (or the same price for better results), they'll pay you immediately.</p>

      <div class="success-story">
        <h4>💡 Real Example:</h4>
        <p>A freelancer offered "AI-powered blog writing" at $100 per post. He could deliver in 3 hours what traditional writers took 2 days to finish.</p>
        <p>He landed 10 clients at $400/month each = <strong>$4,000/month recurring revenue.</strong></p>
        <p>All from one service, powered by ChatGPT and his editing skills.</p>
      </div>

      <h4>How to Price AI Services:</h4>
      <ul>
        <li><strong>Don't charge by the hour.</strong> Charge by the value or deliverable.</li>
        <li><strong>Position on speed:</strong> "24-hour turnaround" is worth more than "cheap"</li>
        <li><strong>Bundle for recurring revenue:</strong> $500/month retainers beat one-time $200 projects</li>
      </ul>

      <h3>📦 Model #2: Products (Scalable Income)</h3>

      <p>Once you've validated your skills with services, <strong>package them into products.</strong></p>

      <p>Digital products are perfect because you build them once and sell them forever.</p>

      <h4>Examples of AI-Powered Digital Products:</h4>
      <ul>
        <li>Courses teaching AI workflows</li>
        <li>E-books or guides written with AI</li>
        <li>Prompt libraries for specific niches</li>
        <li>Templates (social media, email, Notion, etc.)</li>
        <li>Micro-SaaS tools that solve niche problems</li>
      </ul>

      <p><strong>Why it works:</strong> Your time is no longer tied to money. One sale or one thousand sales — the product doesn't take you more time to deliver.</p>

      <div class="success-story">
        <h4>💡 Real Example:</h4>
        <p>Someone created an "AI Prompt Pack for Real Estate Agents" and sold it at <strong>$27.</strong></p>
        <p>They sold 1,000 copies in a year = <strong>$27,000</strong> from one product that took a weekend to create.</p>
        <p>No customer service. No inventory. Just passive income.</p>
      </div>

      <h4>How to Price Digital Products:</h4>
      <ul>
        <li><strong>$7-$27:</strong> Impulse buy range (prompt packs, templates)</li>
        <li><strong>$47-$97:</strong> Mini-courses or comprehensive guides</li>
        <li><strong>$197-$497:</strong> Full courses with community or coaching</li>
      </ul>

      <h3>📢 Model #3: Attention (Long-Term Play)</h3>

      <p>The third path is building an audience. This takes the longest but creates the biggest upside.</p>

      <h4>How to Build Attention:</h4>
      <ul>
        <li>Growing a faceless TikTok channel</li>
        <li>Running a YouTube automation channel</li>
        <li>Building a newsletter or blog using AI to generate content</li>
        <li>Creating a personal brand on LinkedIn or Twitter</li>
      </ul>

      <p><strong>Why it works:</strong> Once you have attention, you can monetize through ads, sponsorships, affiliate marketing, or even your own products.</p>

      <div class="success-story">
        <h4>💡 Real Example:</h4>
        <p>A faceless "AI news" TikTok account grew to <strong>200K followers</strong> in 8 months.</p>
        <p>Monetization:</p>
        <ul>
          <li>TikTok Creator Fund: $800/month</li>
          <li>Affiliate links to AI tools: $1,200/month</li>
          <li>Sponsored posts: $500-$1,000 per post</li>
        </ul>
        <p>Total: <strong>$3,000-$4,000/month</strong> from content created in 30 minutes per day.</p>
      </div>

      <h3>🎯 The Smartest Path: Combine All Three</h3>

      <p>The best strategy? <strong>Don't pick just one.</strong> Layer them:</p>

      <div class="key-takeaway">
        <h4>📈 The Scaling Progression:</h4>
        <ol>
          <li><strong>Stage 1: Services</strong> → Get immediate cash flow ($500-$2,000/month retainer clients)</li>
          <li><strong>Stage 2: Products</strong> → Package what you've learned and sell it ($47 prompt packs, $197 courses)</li>
          <li><strong>Stage 3: Attention</strong> → Scale your brand, bringing in sponsorships, partnerships, and passive income</li>
        </ol>
        <p>This progression means you're never stuck waiting. You're building cash flow <em>and</em> long-term assets at the same time.</p>
      </div>

      <h3>✅ Action Exercise: Your 90-Day Monetization Goal</h3>

      <ol>
        <li>Pick your starting path: services, products, or attention</li>
        <li>Write down one clear 90-day goal:
          <ul>
            <li>"Land 3 clients at $500/month using AI services"</li>
            <li>"Sell 50 copies of my AI-generated template pack"</li>
            <li>"Grow a TikTok account to 10,000 followers using faceless content"</li>
          </ul>
        </li>
        <li>Break it down into 3 steps you'll take this week</li>
        <li>Put it on your calendar and commit</li>
      </ol>

      <p>Remember: <strong>money follows momentum.</strong> Even small wins compound quickly when you're consistent.</p>
    `
  },
  {
    id: 2,
    title: 'The Scaling Framework',
    duration: '25 min',
    content: `
      <h2>From $0 to $5K to $15K/Month</h2>
      
      <p>Scaling isn't about working more hours. It's about building systems that multiply your output without multiplying your time.</p>

      <p>Here's exactly how to scale your AI-powered business from zero to five figures per month.</p>

      <h3>📊 The Scaling Roadmap</h3>

      <h4>Stage 1: $0 → $2K/Month (Months 1-3)</h4>

      <p><strong>Focus: Services + Validation</strong></p>

      <p>Your goal in the first 90 days is simple: <strong>get paying customers.</strong></p>

      <ul>
        <li>Offer AI-powered services (copywriting, video editing, social media management)</li>
        <li>Charge $400-$800/month per client</li>
        <li>Land 3-5 clients</li>
      </ul>

      <p><strong>Why this works:</strong> Services give you immediate cash flow and teach you what people actually want.</p>

      <h4>Stage 2: $2K → $5K/Month (Months 4-6)</h4>

      <p><strong>Focus: Systemize + Add Products</strong></p>

      <p>Now that you have clients, it's time to work smarter:</p>

      <ul>
        <li>Automate your service delivery with AI workflows</li>
        <li>Take on 2-3 more clients (you can handle more because you're faster)</li>
        <li>Launch your first digital product (prompt pack, template, mini-course)</li>
      </ul>

      <p><strong>Revenue breakdown:</strong></p>
      <ul>
        <li>6 clients at $600/month = $3,600/month</li>
        <li>Digital product sales = $500-$1,500/month</li>
        <li><strong>Total: $4,000-$5,000/month</strong></li>
      </ul>

      <h4>Stage 3: $5K → $15K/Month (Months 7-12)</h4>

      <p><strong>Focus: Scale + Attention</strong></p>

      <p>This is where you shift from "doing everything" to "building a brand."</p>

      <ul>
        <li>Raise your prices (you're in demand now)</li>
        <li>Build an audience (faceless content, LinkedIn, newsletter)</li>
        <li>Add higher-ticket offers ($1,000+ consulting, premium courses)</li>
        <li>Create recurring revenue streams (memberships, subscriptions)</li>
      </ul>

      <p><strong>Revenue breakdown:</strong></p>
      <ul>
        <li>8 clients at $800/month = $6,400/month</li>
        <li>Digital products + course sales = $3,000-$5,000/month</li>
        <li>Sponsorships/affiliates from audience = $1,000-$3,000/month</li>
        <li><strong>Total: $10,000-$15,000/month</strong></li>
      </ul>

      <h3>📊 Case Study: Julia's $0 → $15K Journey</h3>

      <div class="success-story">
        <p>Julia started freelancing as a social media manager. Using AI, she handled content calendars, captions, and reports for <strong>$400/month per client.</strong></p>

        <p><strong>Month 1-3:</strong> She landed 6 clients = <strong>$2,400/month</strong></p>

        <p><strong>Month 4-6:</strong> She packaged her workflows into a $47 "AI Social Media Toolkit." She sold 300 copies = <strong>$14,100 in digital product income.</strong></p>

        <p><strong>Month 7-12:</strong> She grew her faceless TikTok account sharing AI tips, hitting 80K followers. She now earns affiliate commissions and sponsorship deals on top of her services and products.</p>

        <p><strong>Current income: $15,000/month</strong></p>

        <p>All built in less than a year, using AI leverage.</p>
      </div>

      <h3>🧩 Systems for Scaling</h3>

      <p>To scale past $5K/month, you need systems, not just hustle. Here's what that looks like:</p>

      <h4>System 1: Automated Delivery</h4>
      <p>Use AI and tools so services run without you constantly involved.</p>
      <ul>
        <li>Templates for common deliverables</li>
        <li>AI-generated first drafts</li>
        <li>Automation for routine tasks</li>
      </ul>

      <h4>System 2: Standardized Products</h4>
      <p>Don't do custom work for every customer. Build once, sell many times.</p>
      <ul>
        <li>Courses with pre-recorded lessons</li>
        <li>Templates and toolkits</li>
        <li>SaaS tools with self-service onboarding</li>
      </ul>

      <h4>System 3: Consistent Marketing</h4>
      <p>AI can schedule posts, write ads, and analyze what's working. Use it to stay visible without constant manual effort.</p>

      <div class="key-takeaway">
        <h4>💡 The Goal:</h4>
        <p>Shift from working <em>in</em> your business to working <em>on</em> it.</p>
        <p>Build systems that run without you. That's when you truly scale.</p>
      </div>

      <h3>✅ Action Exercise: Your Scaling Plan</h3>

      <ol>
        <li>Write down where you are now (revenue-wise)</li>
        <li>Pick your next milestone ($2K, $5K, or $10K/month)</li>
        <li>Identify what you need to add:
          <ul>
            <li>More clients?</li>
            <li>A digital product?</li>
            <li>An audience?</li>
          </ul>
        </li>
        <li>Set a 90-day deadline and reverse-engineer the steps</li>
      </ol>

      <p>Scaling happens when you have a plan and execute consistently. AI gives you the tools. Your job is to use them strategically.</p>
    `
  },
  {
    id: 2,
    title: 'Pricing & Positioning Strategy',
    duration: '20 min',
    content: `
      <h2>How to Price Your AI Services & Products</h2>
      
      <p>Pricing is one of the biggest challenges for beginners. Charge too little, and you attract low-quality clients. Charge too much too soon, and no one buys.</p>

      <p>Here's how to price strategically using AI as your differentiator.</p>

      <h3>💰 Pricing AI-Powered Services</h3>

      <h4>The Value-Based Pricing Formula:</h4>

      <p>Don't charge based on how long it takes <em>you</em>. Charge based on the <strong>value you deliver to the client.</strong></p>

      <p><strong>Example:</strong></p>
      <ul>
        <li>A sales page might take you 2 hours with AI</li>
        <li>But if that sales page generates $10,000 for your client, it's worth way more than $200</li>
        <li>You could charge $1,000-$2,000 and it's still a steal for them</li>
      </ul>

      <h4>Positioning Around Speed:</h4>

      <p>Speed is a premium feature. Market it.</p>

      <p><strong>Instead of:</strong> "I write blog posts for $100"</p>
      <p><strong>Say:</strong> "24-hour blog post delivery — AI-powered quality at traditional speeds would cost you 3x more"</p>

      <h4>Service Pricing Tiers:</h4>
      <ul>
        <li><strong>Starter projects:</strong> $300-$500 one-time</li>
        <li><strong>Monthly retainers:</strong> $500-$1,500/month</li>
        <li><strong>Premium packages:</strong> $2,000-$5,000+ for comprehensive work</li>
      </ul>

      <h3>📦 Pricing Digital Products</h3>

      <h4>The Pricing Sweet Spots:</h4>

      <ul>
        <li><strong>$7-$27:</strong> Impulse buys (prompt packs, checklists, templates)
          <ul><li>Low barrier, high volume potential</li></ul>
        </li>
        <li><strong>$47-$97:</strong> Mini-courses or comprehensive toolkits
          <ul><li>Feels like a "deal" but generates real revenue</li></ul>
        </li>
        <li><strong>$197-$497:</strong> Full courses with bonuses or community access
          <ul><li>Premium pricing for transformation-level content</li></ul>
        </li>
      </ul>

      <div class="key-takeaway">
        <h4>💡 Pricing Psychology:</h4>
        <p>People don't buy based on what it cost you to create. They buy based on the <strong>value they receive.</strong></p>
        <p>A $27 product that saves someone 10 hours is a no-brainer purchase.</p>
      </div>

      <h3>🎯 Positioning Yourself in the Market</h3>

      <p>Don't compete on price. Compete on <strong>unique positioning.</strong></p>

      <h4>Positioning Examples:</h4>
      <ul>
        <li><strong>"The AI-First Agency"</strong> — for businesses that want cutting-edge marketing</li>
        <li><strong>"24-Hour Copywriting"</strong> — for clients who need speed</li>
        <li><strong>"Faceless Content Systems"</strong> — for creators who don't want to be on camera</li>
        <li><strong>"AI Tools for [Specific Niche]"</strong> — for real estate agents, coaches, consultants, etc.</li>
      </ul>

      <p>The more specific and unique your positioning, the easier it is to charge premium prices.</p>

      <h3>🚀 When to Raise Your Prices</h3>

      <p>Raise your prices when:</p>
      <ul>
        <li>You have more demand than you can handle</li>
        <li>You've delivered great results and have testimonials</li>
        <li>You've added new skills or tools to your stack</li>
        <li>You want to work with better clients (higher prices filter out low-quality leads)</li>
      </ul>

      <p>Don't be afraid to increase rates every 3-6 months as you improve.</p>

      <div class="success-story">
        <h4>💡 Real Example:</h4>
        <p>A video editor started at $200 per project. After mastering AI editing tools, he raised his rate to $500.</p>
        <p>Half his clients left. But the ones who stayed valued speed and quality. He made the same money with half the workload.</p>
        <p>Six months later, he raised it again to $800. His income went up while his stress went down.</p>
      </div>

      <h3>✅ Action Exercise: Set Your Pricing Strategy</h3>

      <ol>
        <li>Write down what you're currently charging (or plan to charge)</li>
        <li>Research 3 competitors and note their pricing</li>
        <li>Identify your unique positioning (What makes you different?)</li>
        <li>Set your pricing based on value, not time</li>
        <li>Test it with your next 3 clients or customers</li>
      </ol>

      <p>Pricing is never "set it and forget it." Test, iterate, and raise your rates as you deliver more value.</p>

      <div class="next-module">
        <p><strong>Almost there!</strong> In Module 8, we'll cover future-proofing, advanced resources, and your 30-day action plan. 🚀</p>
      </div>
    `
  }
]

export default function Module7Page() {
  const router = useRouter()
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [currentLesson, setCurrentLesson] = useState(0)
  const [completedLessons, setCompletedLessons] = useState<number[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const unlocked = localStorage.getItem('course_unlocked')
    if (unlocked !== 'true') {
      router.push('/course')
      return
    }
    setIsUnlocked(true)

    const progress = localStorage.getItem('module_7_progress')
    if (progress) {
      setCompletedLessons(JSON.parse(progress))
    }
    setIsLoading(false)
  }, [router])

  const markComplete = () => {
    if (!completedLessons.includes(currentLesson)) {
      const updated = [...completedLessons, currentLesson]
      setCompletedLessons(updated)
      localStorage.setItem('module_7_progress', JSON.stringify(updated))
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
          Back to Course
        </Link>

        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-gray-300">Module 7: Scaling & Monetization</span>
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
                  Complete Module 7
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

