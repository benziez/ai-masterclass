'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

const lessons = [
  {
    id: 1,
    title: 'Why AI is the Ultimate Business Lever',
    duration: '15 min',
    content: `
      <h2>The New Era of Business</h2>
      
      <p>Starting a business used to mean long hours, big teams, and a lot of upfront cash. You needed developers, designers, marketers, customer service reps, and more. The barrier to entry was massive.</p>

      <p>Today, AI flips that on its head. <strong>One person with a laptop can now run what used to take five or ten employees</strong> — and do it faster, cheaper, and often better.</p>

      <p>Think about what that means:</p>

      <ul>
        <li><strong>Lower overhead</strong> → you don't need to hire as quickly</li>
        <li><strong>Faster launches</strong> → ideas can be tested in days, not months</li>
        <li><strong>More opportunities</strong> → business models that were impossible before AI now exist</li>
      </ul>

      <div class="key-takeaway">
        <h4>💡 The Best Part:</h4>
        <p>You don't have to "invent the next ChatGPT." You just need to use AI to solve a real problem for a real group of people.</p>
        <p>That's it. That's the entire game.</p>
      </div>

      <h3>🎯 The AI Business Advantage</h3>

      <p>Traditional businesses are built on hours. The more hours you put in, the more money you make. But there's a ceiling — you only have 24 hours in a day.</p>

      <p>AI businesses are built on <strong>leverage.</strong> You build systems that work 24/7, even when you're sleeping. That means your income isn't capped by your time.</p>

      <h4>Example: Traditional vs. AI Business</h4>

      <div class="success-story">
        <p><strong>Traditional Copywriter:</strong></p>
        <ul>
          <li>Takes 5 days to write a sales page</li>
          <li>Can handle 4-5 clients per month max</li>
          <li>Income capped at ~$5,000-$8,000/month</li>
        </ul>
      </div>

      <div class="success-story">
        <p><strong>AI-Powered Copywriter:</strong></p>
        <ul>
          <li>Uses AI to draft sales pages in 2 hours</li>
          <li>Can handle 15-20 clients per month</li>
          <li>Income potential: $15,000-$30,000/month</li>
        </ul>
      </div>

      <p>Same skill. Same market. <strong>Completely different results</strong> because of AI leverage.</p>

      <h3>💰 Why NOW is the Perfect Time</h3>

      <p>Every technological revolution has a "gold rush" phase — a window where early adopters have a massive advantage before the market gets saturated.</p>

      <p>We're in that window right now with AI.</p>

      <ul>
        <li>Most businesses <strong>haven't adopted AI yet</strong></li>
        <li>Most people <strong>don't know how to use it effectively</strong></li>
        <li>The tools are <strong>accessible and affordable</strong> (many are even free)</li>
      </ul>

      <p>This window won't last forever. In 2-3 years, everyone will be using AI. But right now? You can be the person who's already an expert while others are still figuring out the basics.</p>

      <div class="key-takeaway">
        <h4>🚀 Bottom Line:</h4>
        <p>AI gives you the ability to compete with companies that have 50-person teams. You can move faster, test more ideas, and pivot quicker than any traditional business.</p>
        <p>That's not hype. That's reality.</p>
      </div>

      <h3>✅ Action Exercise</h3>

      <p>Write down three tasks in your current business (or future business idea) that take the most time.</p>

      <p>For each one, ask: <strong>"Could AI handle 70-80% of this?"</strong></p>

      <p>Circle the one that would free up the most time if automated. That's your starting point.</p>
    `
  },
  {
    id: 2,
    title: 'The 5 Proven AI Business Models',
    duration: '25 min',
    content: `
      <h2>Spotting AI-Driven Opportunities</h2>
      
      <p>You don't need to reinvent the wheel. There are already proven AI business models making people serious money right now. Let me break down the top five so you can pick the one that fits your skills and goals.</p>

      <h3>💼 Model #1: Content Automation</h3>

      <p>Faceless TikTok or YouTube channels are <strong>exploding</strong> right now. With AI, you can create high-quality content without ever showing your face, recording your voice, or spending hours editing.</p>

      <h4>How It Works:</h4>
      <ul>
        <li><strong>Scripts:</strong> ChatGPT writes 60-second video scripts in seconds</li>
        <li><strong>Visuals:</strong> Use stock footage, AI-generated b-roll, or slideshow-style content</li>
        <li><strong>Voiceovers:</strong> ElevenLabs creates professional narration in any voice</li>
        <li><strong>Editing:</strong> CapCut or Runway handles the final polish in minutes</li>
      </ul>

      <div class="success-story">
        <h4>💡 Real Example:</h4>
        <p>A faceless TikTok account posting "motivational finance facts" videos hit <strong>300K followers in six months.</strong> Each video was:</p>
        <ul>
          <li>Scripted by ChatGPT</li>
          <li>Voiced by ElevenLabs</li>
          <li>Edited with stock clips in CapCut</li>
        </ul>
        <p>The creator spent maybe 30 minutes a day managing it. Now they're making <strong>$2,000-$3,000/month</strong> from the Creator Fund and brand deals.</p>
      </div>

      <h4>Best Niches for Faceless Content:</h4>
      <ul>
        <li>History facts / mysteries</li>
        <li>Finance tips / money advice</li>
        <li>Self-improvement / productivity</li>
        <li>True crime / storytelling</li>
        <li>Tech reviews / AI news</li>
      </ul>

      <h3>✍️ Model #2: Freelance Services (Supercharged)</h3>

      <p>Traditional services like copywriting, design, or blog writing still make money. The difference is <strong>speed.</strong> With AI, you can deliver in hours what used to take days.</p>

      <p>This means you can:</p>
      <ul>
        <li>Charge premium prices for fast turnaround</li>
        <li>Handle 2-3x more clients</li>
        <li>Outcompete traditional freelancers who are slower</li>
      </ul>

      <div class="success-story">
        <h4>💡 Real Example:</h4>
        <p>A copywriter was struggling to keep up with demand. Clients wanted blog posts, email sequences, and social media captions, but there weren't enough hours in the day.</p>
        <p>Then she started using ChatGPT to draft first versions of everything. She'd refine the output with her own voice and expertise.</p>
        <p><strong>What used to take 5 days now took 24 hours.</strong></p>
        <p>Result? She doubled her client base and raised her prices because she was "the fastest copywriter they'd ever hired."</p>
      </div>

      <h4>High-Demand AI-Powered Services:</h4>
      <ul>
        <li>Blog writing & SEO content</li>
        <li>Email marketing sequences</li>
        <li>Social media management</li>
        <li>Ad copywriting</li>
        <li>Video editing with captions</li>
        <li>Graphic design & branding</li>
      </ul>

      <h3>🏢 Model #3: Agencies with AI Backbones</h3>

      <p>Agencies used to need staff to manage content calendars, captions, graphics, and analytics. Now AI handles 70% of that workload.</p>

      <p>That means you can serve more clients without growing your team. Or you can be a <strong>one-person agency</strong> that competes with traditional 10-person teams.</p>

      <div class="success-story">
        <h4>💡 Real Example:</h4>
        <p>A two-person social media agency uses AI to:</p>
        <ul>
          <li>Draft captions for all client posts</li>
          <li>Create graphics with Canva AI</li>
          <li>Generate weekly performance reports automatically</li>
        </ul>
        <p>They manage <strong>15 clients</strong> when their competitors max out at 6-8. Each client pays $800/month = <strong>$12,000/month revenue</strong> with minimal overhead.</p>
      </div>

      <h3>🛠 Model #4: AI Tools & Micro-SaaS</h3>

      <p>You don't need to code an enterprise platform. Simple, niche AI-powered tools can make serious money.</p>

      <p>These are "micro-SaaS" products — small software tools that solve one specific problem really well.</p>

      <div class="success-story">
        <h4>💡 Real Example:</h4>
        <p>An AI résumé builder charges <strong>$10/month.</strong> It's a simple tool that uses AI to optimize résumés for job applications.</p>
        <p>Thousands of job seekers pay because it solves a specific, painful problem. That's <strong>recurring revenue</strong> from one simple idea.</p>
      </div>

      <h4>Micro-SaaS Ideas:</h4>
      <ul>
        <li>AI email subject line generator</li>
        <li>Social media caption writer</li>
        <li>AI meeting note summarizer</li>
        <li>Automated video caption tool</li>
        <li>AI-powered niche content generators</li>
      </ul>

      <h3>📦 Model #5: Digital Products</h3>

      <p>Prompt packs, templates, guides, or systems are some of the <strong>most scalable</strong> AI businesses. You build it once, and sell it forever.</p>

      <p>No inventory. No shipping. No customer service nightmares. Just pure digital leverage.</p>

      <div class="success-story">
        <h4>💡 Real Example:</h4>
        <p>Someone sells an "AI Prompt Pack for Real Estate Agents" at <strong>$27.</strong></p>
        <p>They sell 1,000 copies in a year = <strong>$27,000</strong> from one product that took a weekend to create.</p>
      </div>

      <h4>Digital Product Ideas:</h4>
      <ul>
        <li>AI prompt libraries for specific niches</li>
        <li>Canva templates + AI workflows</li>
        <li>Mini-systems on AI tools</li>
        <li>Notion templates with AI integrations</li>
        <li>Social media content calendars (AI-generated)</li>
      </ul>

      <h3>🎯 Which Model Should You Choose?</h3>

      <p>The best business model is the one you'll actually execute on. Here's how to decide:</p>

      <ul>
        <li><strong>Want fast cash flow?</strong> → Go with freelance services or content automation</li>
        <li><strong>Want scalability?</strong> → Build digital products or micro-SaaS</li>
        <li><strong>Want recurring revenue?</strong> → Start an agency or subscription-based tool</li>
      </ul>

      <div class="key-takeaway">
        <h4>💡 Pro Tip:</h4>
        <p>You don't have to pick just one. Many successful AI entrepreneurs start with services (fast cash), then build products (scalable income), then launch tools (recurring revenue).</p>
      </div>

      <h3>✅ Action Exercise: Pick Your AI Business Model</h3>

      <ol>
        <li>List 3 skills or interests you already have. (Example: writing, fitness, marketing)</li>
        <li>Match each one to an AI business model above:
          <ul>
            <li>Writing → Freelance services or digital products</li>
            <li>Fitness → Faceless content brand</li>
            <li>Marketing → Agency with AI backbone</li>
          </ul>
        </li>
        <li>Circle the one that feels fastest to launch</li>
        <li>Write down one concrete step you'll take this week to test it</li>
      </ol>

      <p>Remember: <strong>ideas don't make money — execution does.</strong> Even if your first attempt isn't perfect, you'll learn more in 7 days of testing than in 7 months of overthinking.</p>
    `
  },
  {
    id: 3,
    title: 'Fast Validation Blueprint',
    duration: '20 min',
    content: `
      <h2>The 7-Day Validation Framework</h2>
      
      <p>The biggest mistake people make is overbuilding before testing. They spend months perfecting something that nobody wants.</p>

      <p>Don't do this.</p>

      <p>Instead, <strong>validate in 7 days.</strong> Here's exactly how:</p>

      <h3>📅 Day 1: Brainstorm & Pick</h3>

      <p>Brainstorm 5 business ideas using the models from the previous lesson. Don't overthink it — just write them down.</p>

      <p>Then pick <strong>the one that solves the clearest pain point.</strong></p>

      <p>Ask yourself:</p>
      <ul>
        <li>Is this a problem people actively complain about?</li>
        <li>Are people already paying for solutions (even bad ones)?</li>
        <li>Can I solve this better/faster/cheaper with AI?</li>
      </ul>

      <h3>📅 Day 2: Research with AI</h3>

      <p>Use AI to research demand, competition, and your target audience.</p>

      <h4>Prompts to Use:</h4>
      <div class="prompt-box">
        <p><strong>ChatGPT Prompt:</strong></p>
        <code>"I'm thinking of starting [YOUR BUSINESS IDEA]. Can you help me research:
1. Who is the target customer?
2. What are their biggest pain points?
3. Who are the top 5 competitors?
4. What are common complaints about existing solutions?
5. What price point makes sense?"</code>
      </div>

      <p>This research used to take weeks. With AI, you can get 80% of what you need in 30 minutes.</p>

      <h3>📅 Days 3-4: Build a Simple MVP</h3>

      <p>MVP = Minimum Viable Product. <strong>The simplest version that proves your idea works.</strong></p>

      <p>You don't need a perfect website, a fancy app, or professional branding. You just need something that demonstrates value.</p>

      <h4>Examples of MVPs:</h4>
      <ul>
        <li><strong>Service business:</strong> A simple landing page with your offer + a Calendly link</li>
        <li><strong>Digital product:</strong> A Google Doc or Notion page with your content + a PayPal button</li>
        <li><strong>Content brand:</strong> Post 3-5 pieces of content in your niche</li>
        <li><strong>Micro-SaaS:</strong> A basic prototype or demo video showing what it does</li>
      </ul>

      <p>Use AI to build all of this:</p>
      <ul>
        <li>ChatGPT writes your landing page copy</li>
        <li>Canva AI designs your graphics</li>
        <li>AI tools help you create demo content</li>
      </ul>

      <h3>📅 Day 5: Get Feedback</h3>

      <p>Share your MVP with potential customers. <strong>Don't wait until it's perfect.</strong></p>

      <h4>Where to Share:</h4>
      <ul>
        <li><strong>Reddit</strong> — find subreddits related to your niche</li>
        <li><strong>Discord</strong> — join communities where your target audience hangs out</li>
        <li><strong>LinkedIn</strong> — post about what you're building</li>
        <li><strong>Twitter</strong> — share your journey and ask for feedback</li>
        <li><strong>Facebook Groups</strong> — niche-specific groups are gold</li>
      </ul>

      <p>Ask questions like:</p>
      <ul>
        <li>"Would you use this?"</li>
        <li>"What would you pay for this?"</li>
        <li>"What's missing?"</li>
      </ul>

      <p>The feedback will tell you if you're on the right track or if you need to pivot.</p>

      <h3>📅 Day 6: Adjust Based on Feedback</h3>

      <p>Take the feedback seriously. If 10 people say "I don't understand what this does," you need clearer messaging. If they say "I'd pay $X but not $Y," adjust your pricing.</p>

      <p>Use AI to help refine:</p>
      <ul>
        <li>Rewrite your copy based on feedback</li>
        <li>Adjust your offer to match what people actually want</li>
        <li>Create FAQ sections addressing common questions</li>
      </ul>

      <h3>📅 Day 7: Launch to Your First 10-20 Customers</h3>

      <p>Don't aim for 1,000 customers. Aim for <strong>10.</strong></p>

      <p>Getting your first 10 paying customers proves three things:</p>
      <ol>
        <li>People will actually pay for this</li>
        <li>You can deliver on your promise</li>
        <li>There's demand worth scaling</li>
      </ol>

      <p>Offer a launch discount or bonus to get momentum. Example: "First 10 customers get 50% off + lifetime access."</p>

      <h3>📊 Case Study: Sarah's Content Repurposing Agency</h3>

      <div class="success-story">
        <p>Sarah worked a corporate 9–5 but wanted extra income. She used this exact 7-day framework to launch a content repurposing agency.</p>

        <p><strong>Her offer:</strong> Take a client's long podcast episodes and turn them into 30 short-form clips for TikTok, YouTube Shorts, and Instagram Reels — all using AI for transcription, editing, and captioning.</p>

        <p><strong>Day 1-2:</strong> She validated that podcasters hated editing and wanted more reach on social media.</p>
        
        <p><strong>Day 3-4:</strong> She created a sample using a friend's podcast to show the before/after.</p>
        
        <p><strong>Day 5-6:</strong> She posted in podcasting Facebook groups and got overwhelming interest.</p>
        
        <p><strong>Day 7:</strong> She landed her first 3 clients at <strong>$500/month each.</strong></p>

        <p><strong>Within 90 days,</strong> she had 7 clients = <strong>$3,500/month recurring revenue.</strong></p>

        <p>No team, no office, no overhead. Just her laptop and her AI stack.</p>
      </div>

      <h3>🎯 The Key Lesson</h3>

      <p>You don't need to reinvent the wheel. Pick a clear pain point. Use AI to solve it better and faster than others. People will pay.</p>

      <div class="key-takeaway">
        <h4>💡 Remember:</h4>
        <p>The goal isn't perfection. The goal is <strong>momentum.</strong></p>
        <p>Move fast, test ideas, get feedback, and iterate. That's how you find what works.</p>
      </div>

      <h3>✅ Action Exercise: Your 7-Day Plan</h3>

      <ol>
        <li>Pick one business model from this module</li>
        <li>Write out your 7-day validation plan using the framework above</li>
        <li>Set a calendar reminder for each day's task</li>
        <li>Commit to shipping <em>something</em> by Day 7, even if it's imperfect</li>
      </ol>

      <div class="next-module">
        <p><strong>Ready to automate?</strong> In Module 3, we'll show you how to build AI-powered systems that run your business on autopilot. 🚀</p>
      </div>
    `
  }
]

export default function Module2Page() {
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

    const progress = localStorage.getItem('module_2_progress')
    if (progress) {
      setCompletedLessons(JSON.parse(progress))
    }
    setIsLoading(false)
  }, [router])

  const markComplete = () => {
    if (!completedLessons.includes(currentLesson)) {
      const updated = [...completedLessons, currentLesson]
      setCompletedLessons(updated)
      localStorage.setItem('module_2_progress', JSON.stringify(updated))
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

      <div className="relative z-10 flex flex-col lg:flex-row h-screen">
        {/* Mobile Header - Only visible on mobile */}
        <div className="lg:hidden bg-black/40 backdrop-blur-xl border-b border-white/10 shadow-2xl p-4">
          <div className="flex items-center justify-between">
            <Link href="/course" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group">
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Back to System</span>
            </Link>
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl px-3 py-1">
              <span className="text-green-400 font-semibold text-xs">Access Granted</span>
            </div>
          </div>
          <div className="mt-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-black text-lg">2</span>
              </div>
              <div>
                <h1 className="text-lg font-black text-white">Module 2</h1>
                <p className="text-blue-300 text-xs font-medium">Building Businesses with AI</p>
              </div>
            </div>
            <div className="mt-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-blue-300 font-semibold text-xs">Progress</span>
                <span className="text-blue-400 font-bold text-xs">{progress}%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500 shadow-lg"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Premium Sidebar - Hidden on mobile, shown on desktop */}
        <div className="hidden lg:block w-96 bg-black/40 backdrop-blur-xl border-r border-white/10 shadow-2xl">
          <div className="p-8 border-b border-white/10">
            <Link href="/course" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6 transition-colors group">
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to System
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-black text-2xl">2</span>
              </div>
              <div>
                <h1 className="text-2xl font-black text-white">Module 2</h1>
                <p className="text-blue-300 text-sm font-medium">Building Businesses with AI</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-4 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="text-blue-300 font-semibold text-sm">Progress</span>
                <span className="text-blue-400 font-bold text-sm">{progress}%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-500 shadow-lg"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
          
          <nav className="p-6">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              Lessons
            </h3>
            <div className="space-y-3">
              {lessons.map((l, index) => (
                <button
                  key={l.id}
                  onClick={() => setCurrentLesson(index)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-300 group relative
                    ${currentLesson === index
                      ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/50 text-white shadow-lg shadow-blue-500/25'
                      : 'bg-white/5 backdrop-blur-sm border border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20 hover:text-white'
                    }`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-sm opacity-0 transition-opacity duration-300 ${
                    currentLesson === index ? 'opacity-100' : 'group-hover:opacity-100'
                  }`}></div>
                  <div className="relative flex items-start gap-4">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center shadow-lg transition-all ${
                      completedLessons.includes(index)
                        ? 'bg-green-500 group-hover:shadow-green-500/25'
                        : currentLesson === index
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 group-hover:shadow-blue-500/25'
                        : 'bg-gray-700 group-hover:bg-gray-600'
                    }`}>
                      {completedLessons.includes(index) ? (
                        <CheckCircle className="h-5 w-5 text-white" />
                      ) : (
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-semibold text-sm mb-1 group-hover:text-blue-300 transition-colors">
                        {l.title}
                      </h4>
                      <p className="text-gray-400 text-xs">{l.duration}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </nav>
        </div>

        {/* Premium Main Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-12">
            {/* Mobile Lesson Navigation - Only visible on mobile */}
            <div className="lg:hidden mb-6">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  Lessons
                </h3>
                <div className="space-y-2">
                  {lessons.map((l, index) => (
                    <button
                      key={l.id}
                      onClick={() => setCurrentLesson(index)}
                      className={`w-full text-left p-3 rounded-xl transition-all duration-300 group relative
                        ${currentLesson === index
                          ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/50 text-white shadow-lg'
                          : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20 hover:text-white'
                        }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center shadow-lg transition-all ${
                          completedLessons.includes(index)
                            ? 'bg-green-500'
                            : currentLesson === index
                            ? 'bg-gradient-to-r from-blue-500 to-purple-500'
                            : 'bg-gray-700 group-hover:bg-gray-600'
                        }`}>
                          {completedLessons.includes(index) ? (
                            <CheckCircle className="h-4 w-4 text-white" />
                          ) : (
                            <span className="text-white font-bold text-xs">{index + 1}</span>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-white font-semibold text-sm mb-1 group-hover:text-blue-300 transition-colors">
                            {l.title}
                          </h4>
                          <p className="text-gray-400 text-xs">{l.duration}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Lesson Header */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 mb-6 lg:mb-8 hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 lg:mb-6 gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-1 lg:mb-2">
                    Lesson {currentLesson + 1}
                  </h1>
                  <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    {lesson.title}
                  </h2>
                </div>
                <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-xl lg:rounded-2xl px-3 lg:px-4 py-2 backdrop-blur-sm self-start">
                  <span className="text-blue-300 font-semibold text-xs sm:text-sm">{lesson.duration}</span>
                </div>
              </div>
            </div>

            {/* Lesson Content */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-10 mb-6 lg:mb-8 hover:bg-white/10 transition-all duration-300">
              <div 
                className="prose prose-invert prose-sm sm:prose-base lg:prose-lg max-w-none lesson-content"
                dangerouslySetInnerHTML={{ __html: lesson.content }}
              />
            </div>

            {/* Premium Navigation */}
            <div className="flex justify-between items-center">
              <Button
                onClick={prevLesson}
                disabled={currentLesson === 0}
                className="group bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
              >
                <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                Previous Lesson
              </Button>

              <div className="flex items-center gap-4">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-3">
                  <span className="text-gray-300 text-sm">
                    {currentLesson + 1} of {lessons.length} lessons
                  </span>
                </div>
                
                {currentLesson === lessons.length - 1 ? (
                  <Link href="/course">
                    <Button className="group bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 hover:from-green-600 hover:via-emerald-600 hover:to-green-700 text-white font-bold px-8 py-4 rounded-2xl shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105">
                      Complete Module 2
                      <CheckCircle className="h-5 w-5 ml-2 group-hover:scale-110 transition-transform" />
                    </Button>
                  </Link>
                ) : (
                  <Button
                    onClick={nextLesson}
                    className="group bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 hover:from-blue-600 hover:via-purple-600 hover:to-cyan-600 text-white font-bold px-8 py-4 rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
                  >
                    Next Lesson
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                )}
              </div>
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
        .lesson-content .prompt-box {
          background: rgba(0, 0, 0, 0.5);
          border: 2px solid rgba(6, 182, 212, 0.3);
          border-radius: 0.75rem;
          padding: 1rem;
          margin: 1rem 0;
        }
        .lesson-content code {
          display: block;
          background: rgba(0, 0, 0, 0.8);
          color: #22d3ee;
          padding: 1rem;
          border-radius: 0.5rem;
          font-size: 0.9rem;
          line-height: 1.6;
          white-space: pre-wrap;
          margin-top: 0.5rem;
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
