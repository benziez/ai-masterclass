'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

const lessons = [
  {
    id: 1,
    title: 'Why the AI Mindset Matters',
    duration: '20 min',
    content: `
      <h2>Welcome to Your AI Journey</h2>
      
      <p>If you're reading this right now, it means you're ahead of the curve. Most people still treat AI as a novelty — something to play with when they're bored or a fun way to generate a silly image or two. But you're here because you recognize something deeper: <strong>AI isn't just a tool, it's a revolution.</strong></p>

      <p>Before we dive into prompts, tools, or strategies, we need to get one thing crystal clear: <strong>the way you think about AI will determine your results.</strong></p>

      <h3>🚀 AI is a Force Multiplier</h3>
      
      <p>Here's the truth that most people miss: AI is a force multiplier. That means whatever habits, mindset, or systems you bring into it will get amplified.</p>

      <ul>
        <li>If you're <strong>focused and disciplined</strong>, AI will make you 10x faster and 10x more effective.</li>
        <li>If you're <strong>scattered, distracted, or always chasing the next shiny thing</strong>, AI will just multiply that chaos.</li>
      </ul>

      <div class="key-takeaway">
        <h4>💡 Think of it This Way:</h4>
        <p>Imagine AI as a high-performance Ferrari. It's fast, powerful, and capable of incredible things. But if you don't know how to drive, that Ferrari won't get you anywhere. In fact, you might even crash it.</p>
        <p><strong>The problem wasn't the car — it was the driver.</strong></p>
      </div>

      <p>Your goal in this course is to become the driver who knows exactly where they're going and uses the Ferrari for what it's designed to do: <strong>move faster than everyone else on the road.</strong></p>

      <h3>🎯 Why This Matters Right Now</h3>

      <p>Think about every major technological shift in history. Each one created massive opportunities for the people who understood it early:</p>

      <ul>
        <li><strong>The internet</strong> created billion-dollar online businesses. Companies like Amazon, Google, and Facebook didn't exist before it.</li>
        <li><strong>Social media</strong> created influencers, agencies, and entire new industries overnight. People went from zero to millions of followers in months.</li>
        <li><strong>Smartphones</strong> put the world in our pocket and birthed app empires worth billions.</li>
      </ul>

      <p>And now, we're in the <strong>AI era.</strong></p>

      <p>This isn't about replacing humans. This is about <strong>supercharging humans.</strong> With AI, one person can now do what used to take a team of five, ten, or even fifty people. That means:</p>

      <ul>
        <li>✅ <strong>Less overhead</strong> → you don't need to hire as quickly</li>
        <li>✅ <strong>Faster execution</strong> → ideas go from concept to reality in days, not months</li>
        <li>✅ <strong>Bigger opportunities</strong> → business models that were impossible before AI now exist</li>
      </ul>

      <h3>📚 The Tools vs. Strategy Reality Check</h3>

      <p>Here's something most people get wrong: they think having access to the best AI tools will automatically make them successful.</p>

      <p>But here's the truth: <strong>tools alone won't make you successful.</strong></p>

      <p>If that were true, everyone with access to Google Docs would be a bestselling author, and everyone with Canva would be running a million-dollar design agency. But they're not.</p>

      <div class="success-story">
        <p><strong>The difference-maker is strategy.</strong></p>
        <p>This course isn't here to flood you with every possible AI app (because you don't need 500 tools you'll never touch). It's here to give you the <strong>core strategies, systems, and mindsets</strong> to actually build with AI — businesses, income streams, workflows, and skills that make you irreplaceable.</p>
      </div>

      <h3>🧠 What We'll Cover in This Course</h3>

      <p>Over the next modules, we'll cover everything you need to become an AI-first creator, entrepreneur, or professional:</p>

      <ol>
        <li><strong>Module 1:</strong> How to shift your thinking to leverage AI like the top 1% do</li>
        <li><strong>Module 2:</strong> How to build businesses that couldn't exist before AI</li>
        <li><strong>Module 3:</strong> How to automate entire systems so work gets done while you sleep</li>
        <li><strong>Module 4:</strong> How to create and market content without ever showing your face</li>
        <li><strong>Module 5:</strong> How to pick the right tools without drowning in options</li>
        <li><strong>Module 6:</strong> How to make yourself future-proof in the AI-driven economy</li>
        <li><strong>Module 7:</strong> How to scale and monetize your AI-powered business</li>
        <li><strong>Module 8:</strong> How to stay ahead as AI continues to evolve</li>
      </ol>

      <h3>✍️ How This Course Works</h3>

      <p>This isn't a textbook. I'm not going to lecture you with theory and then send you on your way. Instead, I'll be talking to you like a mentor — walking you through exactly how I'd approach this if I were starting from scratch today.</p>

      <p>At the end of each module, you'll get <strong>quick, practical action exercises</strong> so you're applying what you learn as you go. Knowledge without action is useless. This course is designed to get you moving.</p>

      <div class="key-takeaway">
        <h4>🎯 By the Time You Finish This Course:</h4>
        <p>You won't just "understand" AI. You'll be <strong>building with it.</strong></p>
        <p>Whether that's launching your first AI-powered business, automating workflows that save you 10+ hours a week, or positioning yourself as the AI expert in your field — you'll have real, tangible results.</p>
      </div>

      <h3>🔥 The Mindset Shift You Need Right Now</h3>

      <p>Most people approach AI with one of two mindsets:</p>

      <ul>
        <li><strong>Fear:</strong> "AI is going to replace me. I'm going to lose my job."</li>
        <li><strong>Hype:</strong> "AI will do everything for me. I'll just sit back and watch."</li>
      </ul>

      <p>Both of these mindsets are wrong.</p>

      <p>The reality is this: <strong>AI will replace people who don't adapt. But it will empower people who do.</strong></p>

      <p>Think about it like this: when calculators came out, they didn't replace mathematicians. They freed mathematicians to solve bigger, more complex problems. The people who refused to learn calculators? They got left behind.</p>

      <p>AI is the same. It's not your competition. It's your competitive advantage — <strong>if you know how to use it.</strong></p>

      <h3>✅ Action Exercise: Reframe Your Thinking</h3>

      <p>Before moving to the next lesson, take 5 minutes to do this:</p>

      <ol>
        <li>Write down one task you do regularly that feels repetitive or time-consuming.</li>
        <li>Ask yourself: <strong>"Could AI automate or speed this up?"</strong></li>
        <li>Research one AI tool that might solve it. (We'll cover tools in detail later, but just get curious now.)</li>
      </ol>

      <p>This simple exercise will start rewiring your brain. From this point forward, you'll stop saying <em>"This is how I've always done it"</em> and start saying <strong>"How could AI make this faster, easier, or more profitable?"</strong></p>

      <p>That shift is everything.</p>
    `
  },
  {
    id: 2,
    title: 'Shifting from Consumer to Creator',
    duration: '18 min',
    content: `
      <h2>The Consumer vs. Creator Divide</h2>
      
      <p>Most people treat AI like a toy. They type in random prompts, laugh at funny answers, share a screenshot with friends, and then close the app. That's a <strong>consumer mindset.</strong></p>

      <p>You're not here to be a consumer. You're here to be a <strong>creator.</strong></p>

      <p>The shift is simple but powerful. Instead of using AI for entertainment, you use it for <strong>execution.</strong> Let me show you exactly what that looks like.</p>

      <h3>🎭 Two People, Same Tool, Different Results</h3>

      <p>Imagine two people both using ChatGPT:</p>

      <div class="success-story">
        <p><strong>Person A (Consumer):</strong> They ask ChatGPT to write a funny rap about cats. They laugh, share it with a friend, and move on. It was entertaining, but nothing changed in their life.</p>
      </div>

      <div class="success-story">
        <p><strong>Person B (Creator):</strong> They ask ChatGPT to outline 10 viral TikTok ideas in their niche. Then they refine those ideas, script them out, and post one today. A week later, one of those videos goes viral and brings them 20,000 followers. Now they're making money from brand deals.</p>
      </div>

      <p>Same tool. Different mindset. <strong>Completely different results.</strong></p>

      <p>This course is designed to make you like Person B every single time.</p>

      <h3>🧠 The Creator Mindset Framework</h3>

      <p>So how do you actually shift from consumer to creator? It comes down to asking better questions.</p>

      <h4>❌ Consumer Questions:</h4>
      <ul>
        <li>"What funny thing can I make AI say?"</li>
        <li>"Can AI write my homework for me?"</li>
        <li>"Let me see what AI thinks about [random topic]"</li>
      </ul>

      <h4>✅ Creator Questions:</h4>
      <ul>
        <li>"How can AI help me save 10 hours this week?"</li>
        <li>"What content can I create with AI that will grow my audience?"</li>
        <li>"How can I use AI to launch a product faster?"</li>
        <li>"What business model becomes possible with AI that wasn't before?"</li>
      </ul>

      <p>See the difference? Consumer questions lead to entertainment. Creator questions lead to <strong>results.</strong></p>

      <div class="key-takeaway">
        <h4>💡 The Golden Rule:</h4>
        <p>Every time you open an AI tool, ask yourself: <strong>"What am I going to build or accomplish with this?"</strong></p>
        <p>If you don't have an answer, you're about to waste time.</p>
      </div>

      <h3>🚀 Real-World Creator Examples</h3>

      <p>Let me give you some concrete examples of how creators are using AI right now to build real businesses and income streams:</p>

      <h4>Example 1: The Faceless TikTok Creator</h4>
      <p>A 22-year-old college student used AI to start a faceless TikTok account in the "mysterious facts" niche. Here's their process:</p>
      <ul>
        <li>ChatGPT writes scripts for 60-second videos</li>
        <li>ElevenLabs generates a professional voiceover</li>
        <li>Stock footage + CapCut for quick editing</li>
        <li>Posts 2 videos per day</li>
      </ul>
      <p>Result? In 6 months, they hit 500K followers. Now they're making $2,000-$3,000/month from the TikTok Creator Fund and brand deals. They've never shown their face once.</p>

      <h4>Example 2: The AI-Powered Copywriter</h4>
      <p>A freelance copywriter was struggling to keep up with demand. Clients wanted blog posts, email sequences, and social media captions, but there weren't enough hours in the day.</p>
      <p>Then she started using ChatGPT to draft first versions of everything. She'd refine the output with her own voice and expertise. What used to take 5 days now took 24 hours.</p>
      <p>Result? She doubled her client base and raised her prices because she was "the fastest copywriter they'd ever hired."</p>

      <h4>Example 3: The Digital Product Creator</h4>
      <p>An entrepreneur wanted to create a course but didn't have time to write all the lessons. He used AI to:</p>
      <ul>
        <li>Outline the entire curriculum</li>
        <li>Draft lesson scripts</li>
        <li>Generate marketing copy for the sales page</li>
        <li>Create promotional graphics with AI image tools</li>
      </ul>
      <p>Result? He launched his course in 3 weeks instead of 6 months. It made $12,000 in the first month.</p>

      <h3>⚠️ The Trap Most Beginners Fall Into</h3>

      <p>Here's the mistake I see over and over: people try to use AI for everything, all at once, and end up overwhelmed.</p>

      <p>They download 20 AI apps. They try to automate their entire life overnight. They start five projects at once and finish none of them.</p>

      <p>Don't do this.</p>

      <div class="key-takeaway">
        <h4>🎯 The Better Approach:</h4>
        <p>Pick <strong>one thing</strong> you want AI to help with this week. Just one.</p>
        <p>Maybe it's writing better emails. Maybe it's creating social media content. Maybe it's automating a repetitive task.</p>
        <p>Focus on that one thing until you see results. Then move to the next.</p>
      </div>

      <h3>🔄 The Creator Workflow</h3>

      <p>Here's a simple workflow that top AI creators follow:</p>

      <ol>
        <li><strong>Identify the Goal:</strong> What do you want to accomplish? (Grow followers, save time, make money, etc.)</li>
        <li><strong>Choose the Right Tool:</strong> What AI tool is best for this task? (We'll cover this in Module 5)</li>
        <li><strong>Generate the First Draft:</strong> Let AI do the heavy lifting. Don't overthink it.</li>
        <li><strong>Refine with Your Voice:</strong> Add your personality, expertise, and unique perspective.</li>
        <li><strong>Publish and Iterate:</strong> Ship it. Get feedback. Improve next time.</li>
      </ol>

      <p>Most people get stuck on step 4. They think AI's output needs to be perfect. It doesn't. Think of AI as giving you an 80% solution. Your job is to add the final 20% that makes it yours.</p>

      <h3>💪 Building Your Creator Muscle</h3>

      <p>Becoming a creator isn't something that happens overnight. It's a skill you develop by doing.</p>

      <p>The more you use AI to <strong>create</strong> instead of <strong>consume</strong>, the stronger this muscle becomes. Eventually, it becomes second nature.</p>

      <p>You'll open ChatGPT and immediately think: <em>"What can I build with this today?"</em></p>

      <p>You'll see a new AI tool and think: <em>"How can I use this to save time or make money?"</em></p>

      <p>That's when you know you've made the shift.</p>

      <h3>✅ Action Exercise: Your First Creator Project</h3>

      <p>Here's your challenge for this lesson:</p>

      <ol>
        <li>Pick one piece of content you need to create this week. (A social media post, an email, a video script, etc.)</li>
        <li>Use AI to generate a first draft.</li>
        <li>Refine it with your own voice and perspective.</li>
        <li>Publish it.</li>
      </ol>

      <p>Don't aim for perfection. Aim for <strong>completion.</strong> The goal is to prove to yourself that you can use AI to create something real and useful.</p>

      <p>Once you do this once, you'll realize how powerful this shift is. And you'll never go back to being just a consumer.</p>
    `
  },
  {
    id: 3,
    title: 'The 3 Biggest Mistakes & Core Principles',
    duration: '22 min',
    content: `
      <h2>Avoiding the Traps That Kill Momentum</h2>
      
      <p>When people first discover AI, they almost always fall into the same traps. The good news? If you're aware of them now, you can avoid them completely.</p>

      <p>In this lesson, we're going to cover the <strong>three biggest mistakes</strong> beginners make with AI, and the <strong>core principles</strong> you need to follow to stay on track.</p>

      <h3>⚠️ Mistake #1: Shiny Tool Syndrome</h3>

      <p>New AI apps drop <strong>every single week.</strong> It feels like every day there's a "game-changing" tool that promises to revolutionize your life.</p>

      <p>Most beginners run around downloading all of them, thinking the next tool is the "golden ticket." They spend hours setting up accounts, watching tutorials, and testing features.</p>

      <p>But here's what actually happens: <strong>they never master any of them.</strong></p>

      <p>They're constantly switching between tools, chasing the next shiny object, and never building anything real. It <em>feels</em> like progress, but it's just distraction disguised as productivity.</p>

      <div class="key-takeaway">
        <h4>👉 The Fix:</h4>
        <p>Build a <strong>core stack of 3–5 tools</strong> and commit to mastering those.</p>
        <p>You don't need 50 tools. You need a handful of reliable tools that you know inside and out. Once you've mastered your core stack, <em>then</em> you can experiment with new ones.</p>
      </div>

      <h4>Your Core Stack Should Cover:</h4>
      <ul>
        <li><strong>Text/Writing:</strong> ChatGPT or Claude</li>
        <li><strong>Images/Design:</strong> MidJourney or DALL·E</li>
        <li><strong>Video/Editing:</strong> Runway or CapCut</li>
        <li><strong>Voice/Audio:</strong> ElevenLabs</li>
        <li><strong>Automation:</strong> Zapier or Make</li>
      </ul>

      <p>That's it. Five tools. Master those, and you can build anything.</p>

      <h3>⚠️ Mistake #2: Over-Prompting, Under-Executing</h3>

      <p>Here's a trap I see all the time: people spend <strong>hours</strong> writing prompts, generating ideas, and tweaking outputs — but they never actually implement anything.</p>

      <p>They'll generate 50 social media post ideas but never post any of them.</p>
      <p>They'll create 10 business plans but never launch anything.</p>
      <p>They'll draft email sequences but never send them.</p>

      <p>It <em>feels</em> like work. It <em>feels</em> productive. But it's just <strong>procrastination disguised as preparation.</strong></p>

      <div class="key-takeaway">
        <h4>👉 The Fix:</h4>
        <p>Limit your "idea time" and maximize your "execution time."</p>
        <p>Here's a simple rule: <strong>For every hour you spend generating ideas with AI, spend two hours executing on them.</strong></p>
      </div>

      <h4>The 80/20 Rule for AI</h4>
      <p>AI is only valuable when it turns into something real. A prompt sitting in your notes app is worth $0. But that same prompt turned into a published post, a launched product, or a closed deal? That's worth everything.</p>

      <p>So here's what I want you to do: every time you generate something with AI, ask yourself: <strong>"What's the fastest way I can turn this into something real?"</strong></p>

      <p>Then do that. Immediately. Don't wait for it to be perfect. Ship it, test it, and improve it later.</p>

      <h3>⚠️ Mistake #3: Relying on AI for Everything</h3>

      <p>AI is powerful, but it doesn't know your unique context, experience, or vision unless you bring it in.</p>

      <p>Beginners often just copy-paste AI outputs and wonder why everything feels generic or "off." The truth is, AI gives you a <strong>starting point</strong>, not a finished product.</p>

      <div class="success-story">
        <p><strong>Real Example:</strong> A marketer used AI to write ad copy for their product. They copy-pasted it directly into Facebook Ads. The ads flopped.</p>
        <p>Why? Because the copy was generic. It didn't reflect their brand voice, their customer's pain points, or the unique angle that made their product special.</p>
        <p>When they took the AI draft and added their own insights, the ads started converting.</p>
      </div>

      <div class="key-takeaway">
        <h4>👉 The Fix:</h4>
        <p>Always add your perspective. Think of AI as your <strong>assistant, not your boss.</strong></p>
        <p>Use AI to:</p>
        <ul>
          <li>Brainstorm better ideas faster</li>
          <li>Draft content you refine</li>
          <li>Automate repetitive tasks</li>
          <li>Free up time so you can focus on high-value moves</li>
        </ul>
        <p>But <strong>don't let it think for you.</strong> The people who win in this AI wave are the ones who combine human insight with AI horsepower.</p>
      </div>

      <h3>🧠 Core Principle #1: Amplify, Don't Abdicate</h3>

      <p>Here's the golden rule that ties everything together:</p>

      <div class="key-takeaway">
        <p><strong>AI should amplify your thinking, not replace it.</strong></p>
      </div>

      <p>You're not here to let AI "do everything for you." You're here to use AI as leverage so you can focus on what matters most:</p>

      <ul>
        <li>Strategy</li>
        <li>Relationships</li>
        <li>Creativity</li>
        <li>Decision-making</li>
      </ul>

      <p>Think of it like this: a pilot doesn't let autopilot fly the entire plane. Autopilot handles the routine stuff — cruising at altitude, maintaining speed. The pilot handles takeoff, landing, and course corrections.</p>

      <p>That's your relationship with AI. <strong>You're the pilot. AI is the autopilot.</strong></p>

      <h3>🧠 Core Principle #2: Build Systems, Not Hacks</h3>

      <p>A lot of people approach AI looking for "hacks" — quick wins, shortcuts, or one-time tricks.</p>

      <p>But hacks don't scale. Systems do.</p>

      <p>Instead of asking <em>"What's a cool AI trick?"</em>, ask <strong>"How can I build a system that uses AI to run on autopilot?"</strong></p>

      <h4>Example: Content Creation System</h4>
      <p>A hack would be: "Use ChatGPT to write one viral tweet."</p>
      <p>A system would be: "Use ChatGPT to generate 30 tweet ideas every Monday, schedule them with Buffer, and analyze which ones perform best to refine future prompts."</p>

      <p>See the difference? The system is repeatable, scalable, and gets better over time.</p>

      <h3>🧠 Core Principle #3: Focus on Leverage, Not Perfection</h3>

      <p>Perfectionists struggle with AI because AI outputs are rarely perfect on the first try. And that's okay.</p>

      <p>The goal isn't perfection. The goal is <strong>leverage</strong> — getting 80% of the result in 20% of the time.</p>

      <p>Let AI handle the heavy lifting. Then you add the polish.</p>

      <div class="key-takeaway">
        <h4>💡 Remember:</h4>
        <p>A "good enough" piece of content published today is worth more than a "perfect" piece of content sitting in your drafts forever.</p>
      </div>

      <h3>🎯 The Path Forward</h3>

      <p>By now, you should have a clear understanding of:</p>

      <ul>
        <li>✅ Why AI is a force multiplier, not a replacement</li>
        <li>✅ How to shift from consumer to creator mindset</li>
        <li>✅ The three biggest mistakes to avoid</li>
        <li>✅ The core principles that separate winners from everyone else</li>
      </ul>

      <p>This is your foundation. Everything we build from here will be on top of this mindset.</p>

      <p>In the next module, we're going to dive into <strong>Building Businesses with AI</strong> — where we'll explore the proven business models you can start right now, how to validate ideas fast, and real case studies of people making serious money.</p>

      <h3>✅ Action Exercise: Audit Your AI Usage</h3>

      <p>Before moving to Module 2, take 10 minutes to do this:</p>

      <ol>
        <li>Write down every AI tool you've tried in the past month.</li>
        <li>Circle the 3–5 tools you actually use regularly.</li>
        <li>For each tool, write down one concrete way you're using it to create value (not just consume).</li>
        <li>Identify one area where you're "over-prompting but under-executing" and commit to shipping something this week.</li>
      </ol>

      <p>This exercise will give you clarity on where you are right now and what needs to change. Honest self-assessment is the first step to real progress.</p>

      <div class="next-module">
        <p><strong>Ready to build?</strong> In Module 2, we'll show you exactly how to turn AI into a real business that makes real money. 🚀</p>
      </div>
    `
  }
]

export default function Module1Page() {
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

    const progress = localStorage.getItem('module_1_progress')
    if (progress) {
      setCompletedLessons(JSON.parse(progress))
    }
    setIsLoading(false)
  }, [router])

  const markComplete = () => {
    if (!completedLessons.includes(currentLesson)) {
      const updated = [...completedLessons, currentLesson]
      setCompletedLessons(updated)
      localStorage.setItem('module_1_progress', JSON.stringify(updated))
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
              <span className="text-sm font-medium">Back to Course</span>
            </Link>
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl px-3 py-1">
              <span className="text-green-400 font-semibold text-xs">Access Granted</span>
            </div>
          </div>
          <div className="mt-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-black text-lg">1</span>
              </div>
              <div>
                <h1 className="text-lg font-black text-white">Module 1</h1>
                <p className="text-blue-300 text-xs font-medium">The AI Mindset</p>
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
              Back to Course
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-black text-2xl">1</span>
              </div>
              <div>
                <h1 className="text-2xl font-black text-white">Module 1</h1>
                <p className="text-blue-300 text-sm font-medium">The AI Mindset</p>
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
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <Button
                onClick={prevLesson}
                disabled={currentLesson === 0}
                className="group bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-xl lg:rounded-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 w-full sm:w-auto"
              >
                <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                <span className="text-sm sm:text-base">Previous Lesson</span>
              </Button>

              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl lg:rounded-2xl px-4 lg:px-6 py-2 lg:py-3">
                  <span className="text-gray-300 text-xs sm:text-sm">
                    {currentLesson + 1} of {lessons.length} lessons
                  </span>
                </div>
                
                {currentLesson === lessons.length - 1 ? (
                  <Link href="/course" className="w-full sm:w-auto">
                    <Button className="group bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 hover:from-green-600 hover:via-emerald-600 hover:to-green-700 text-white font-bold px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-xl lg:rounded-2xl shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
                      <span className="text-sm sm:text-base">Complete Module 1</span>
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 ml-2 group-hover:scale-110 transition-transform" />
                    </Button>
                  </Link>
                ) : (
                  <Button
                    onClick={nextLesson}
                    className="group bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 hover:from-blue-600 hover:via-purple-600 hover:to-cyan-600 text-white font-bold px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-xl lg:rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                  >
                    <span className="text-sm sm:text-base">Next Lesson</span>
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 ml-2 group-hover:translate-x-1 transition-transform" />
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
