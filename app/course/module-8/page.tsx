'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

const lessons = [
  {
    id: 1,
    title: 'Future-Proofing & Staying Ahead',
    duration: '20 min',
    content: `
      <h2>The Next 3–5 Years</h2>
      
      <p>Here's what you need to understand: <strong>AI today is powerful, but it's just the beginning.</strong></p>

      <p>The tools we're using now are like the "iPhone 1" of AI. The next few years will completely change how businesses and individuals operate.</p>

      <h3>🔮 What to Expect</h3>

      <h4>Shift 1: From Assistants → Agents</h4>
      <p>Today, AI helps you brainstorm or draft. Soon, <strong>AI will act for you</strong> — booking meetings, negotiating deals, running ads, even closing sales.</p>

      <p>You won't just "ask AI to do something." You'll give AI goals, and it will figure out how to achieve them autonomously.</p>

      <h4>Shift 2: Industry-Wide Adoption</h4>
      <p>Every sector — law, healthcare, finance, education, real estate — will become <strong>"AI-first."</strong></p>

      <p>Companies that don't adapt will disappear. The ones that do will dominate.</p>

      <h4>Shift 3: The Rise of AI Natives</h4>
      <p>Just like Gen Z grew up with smartphones, a new generation will grow up with AI. They'll expect everything to be faster, personalized, and automated.</p>

      <p>If you're not fluent with AI by then, you'll be at a massive disadvantage.</p>

      <h3>🛡 How to Stay Ahead</h3>

      <p>You don't need to chase every new tool. You just need a <strong>system for staying current.</strong></p>

      <h4>Strategy 1: Follow AI Updates Weekly</h4>
      <p>Subscribe to 1–2 good newsletters or YouTube channels that cover AI trends. Spend 15 minutes a week scanning what's new.</p>

      <p><strong>Recommended:</strong></p>
      <ul>
        <li><strong>The Rundown AI</strong> — Daily newsletter (2-minute read)</li>
        <li><strong>Matt Wolfe (YouTube)</strong> — Weekly AI news and tool reviews</li>
        <li><strong>Ben's Bites</strong> — AI news for builders</li>
      </ul>

      <h4>Strategy 2: Experiment Constantly</h4>
      <p>When you hear about a new tool, don't just read about it — <strong>test it.</strong></p>

      <p>Even 30 minutes of hands-on use teaches you more than 3 hours of reading.</p>

      <h4>Strategy 3: Network with Other AI Builders</h4>
      <p>Join Discords, LinkedIn groups, or mastermind communities of people using AI in real businesses.</p>

      <p>Insights spread faster in communities than in headlines.</p>

      <h4>Strategy 4: Keep Learning Skills Around AI</h4>
      <p>AI alone isn't enough — combine it with high-value skills like:</p>
      <ul>
        <li><strong>Sales:</strong> Close deals while AI handles outreach</li>
        <li><strong>Leadership:</strong> Manage AI-powered teams</li>
        <li><strong>Marketing:</strong> AI creates campaigns; you optimize strategy</li>
        <li><strong>Coding:</strong> Build custom AI tools and integrations</li>
      </ul>

      <p>That combination makes you unstoppable.</p>

      <div class="success-story">
        <h4>💡 Case Study: Omar the AI-First Real Estate Agent</h4>
        <p>Omar was a real estate agent. Instead of worrying about AI "stealing jobs," he leaned into it.</p>
        <ul>
          <li>He used AI to draft property listings 5x faster</li>
          <li>He built an AI-powered chatbot for his website to answer client questions instantly</li>
          <li>He used AI video tools to create short property walkthroughs for TikTok</li>
        </ul>
        <p>When the market slowed down, most agents struggled. Omar stood out because he was the <strong>"AI-first agent."</strong></p>
        <p>His leads increased while others complained about the economy.</p>
      </div>

      <h3>✅ Action Exercise: Build Your AI Routine</h3>

      <ol>
        <li>Pick one newsletter (e.g., "The Rundown AI") and subscribe</li>
        <li>Commit to testing one new AI tool per month</li>
        <li>Write down how you'll share what you learn — with your team, clients, or audience</li>
      </ol>

      <p><strong>Consistency beats hype.</strong> The people who make AI part of their routine will always be ahead.</p>
    `
  },
  {
    id: 2,
    title: '30-Day AI Business Roadmap',
    duration: '25 min',
    content: `
      <h2>Your Action Plan: Zero to Launch in 30 Days</h2>
      
      <p>This is a step-by-step plan to go from zero to launching your first AI-powered business in just 30 days.</p>

      <p>Keep it simple. Focus on speed. <strong>Learn by doing.</strong></p>

      <h3>📅 Week 1: Foundation & Mindset</h3>

      <h4>Day 1-2: Choose Your Path</h4>
      <ul>
        <li>✅ Pick your focus: services, products, or attention</li>
        <li>✅ List your skills and interests</li>
        <li>✅ Match them to an AI business model</li>
      </ul>

      <h4>Day 3-4: Build Your Core Stack</h4>
      <ul>
        <li>✅ Sign up for 3–5 essential AI tools</li>
        <li>✅ Spend 30 minutes with each tool to get familiar</li>
        <li>✅ Pick one tool to master first</li>
      </ul>

      <h4>Day 5-7: Automate One Task</h4>
      <ul>
        <li>✅ Identify one time-draining task to automate</li>
        <li>✅ Build your first simple automation with Zapier or AI</li>
        <li>✅ Test it and refine</li>
      </ul>

      <div class="key-takeaway">
        <h4>🎯 Week 1 Goal:</h4>
        <p>Finish the week with a clear business idea, a working AI stack, and one automated workflow.</p>
      </div>

      <h3>📅 Week 2: Idea Validation</h3>

      <h4>Day 8-10: Research & Brainstorm</h4>
      <ul>
        <li>✅ Brainstorm 5 business ideas with AI</li>
        <li>✅ Narrow to 1 idea that solves a real pain point</li>
        <li>✅ Use AI to research demand, competitors, and target audience</li>
      </ul>

      <h4>Day 11-14: Build an MVP</h4>
      <ul>
        <li>✅ Create a simple MVP (landing page, demo, or sample content)</li>
        <li>✅ Use AI to write copy, create graphics, and build the offer</li>
        <li>✅ Don't aim for perfection — aim for "good enough to test"</li>
      </ul>

      <div class="key-takeaway">
        <h4>🎯 Week 2 Goal:</h4>
        <p>Have a validated idea and a simple MVP you can show to potential customers.</p>
      </div>

      <h3>📅 Week 3: Launch & Execution</h3>

      <h4>Day 15-17: Share Your MVP</h4>
      <ul>
        <li>✅ Post in communities (Reddit, Discord, LinkedIn, TikTok)</li>
        <li>✅ Ask for feedback: "Would you use this? What would you pay?"</li>
        <li>✅ Collect responses and take notes</li>
      </ul>

      <h4>Day 18-21: Refine & Improve</h4>
      <ul>
        <li>✅ Adjust based on feedback</li>
        <li>✅ Use AI to rewrite messaging or tweak your offer</li>
        <li>✅ Get your first 5–10 users or clients</li>
      </ul>

      <div class="key-takeaway">
        <h4>🎯 Week 3 Goal:</h4>
        <p>Launch publicly and get your first paying customers (even if it's just $50).</p>
      </div>

      <h3>📅 Week 4: Scale & Monetize</h3>

      <h4>Day 22-25: Content & Marketing</h4>
      <ul>
        <li>✅ Create 1 piece of AI-powered content daily (posts, videos, emails)</li>
        <li>✅ Share your journey publicly</li>
        <li>✅ Build momentum and visibility</li>
      </ul>

      <h4>Day 26-28: Add a Paid Offer</h4>
      <ul>
        <li>✅ Create a simple paid product (template, toolkit, service package)</li>
        <li>✅ Price it between $27-$97</li>
        <li>✅ Promote it to your initial audience</li>
      </ul>

      <h4>Day 29-30: Document & Plan Next 90 Days</h4>
      <ul>
        <li>✅ Write down what worked and what didn't</li>
        <li>✅ Set a 90-day goal (clients, revenue, audience size)</li>
        <li>✅ Build 1–2 simple automations to save time</li>
      </ul>

      <div class="key-takeaway">
        <h4>🎯 Week 4 Goal:</h4>
        <p>End the month with a real launch, real results, and a clear plan for the next 90 days.</p>
      </div>

      <h3>💡 Pro Tips for Success</h3>

      <ul>
        <li><strong>Don't aim for perfection.</strong> Aim for momentum.</li>
        <li><strong>Publish messy.</strong> You'll learn more from real feedback than from endless tweaking.</li>
        <li><strong>Focus on one thing at a time.</strong> Don't try to build five businesses at once.</li>
        <li><strong>Track your progress daily.</strong> Even small wins build confidence.</li>
      </ul>

      <div class="success-story">
        <h4>🚀 The Bottom Line:</h4>
        <p>Your first AI-powered business won't be flawless — but if you follow this 30-day roadmap, you'll have a <strong>real launch, real results, and real momentum</strong> before most people have even finished "researching tools."</p>
      </div>

      <h3>✅ Action Exercise: Start Your 30-Day Plan Today</h3>

      <ol>
        <li>Print or save this roadmap somewhere visible</li>
        <li>Block time on your calendar for each week's tasks</li>
        <li>Start Day 1 today (not "next Monday" — today)</li>
        <li>Share your progress publicly to create accountability</li>
      </ol>

      <p>The difference between dreamers and doers is action. You have the plan. Now execute.</p>
    `
  },
  {
    id: 3,
    title: 'Resource Directory & Final Steps',
    duration: '15 min',
    content: `
      <h2>Your AI Resource Library</h2>
      
      <p>Here's a hand-picked list of the best AI tools, communities, and learning resources. Bookmark this — tools change fast, but these are the essentials that give you the most leverage right now.</p>

      <h3>📝 Text, Writing & Workflows</h3>
      <ul>
        <li><strong>ChatGPT</strong> — Best all-purpose AI assistant for writing, brainstorming, coding, and custom workflows</li>
        <li><strong>Claude</strong> — Great for long documents, research, and thoughtful writing</li>
        <li><strong>Perplexity AI</strong> — Combines AI with live web search, perfect for research</li>
      </ul>

      <h3>🎨 Images & Design</h3>
      <ul>
        <li><strong>MidJourney</strong> — Best for high-quality, artistic visuals (ads, branding, storytelling)</li>
        <li><strong>DALL·E 3</strong> — Fast and flexible image generation, good for illustrations</li>
        <li><strong>Canva (AI features)</strong> — User-friendly templates + text-to-image</li>
      </ul>

      <h3>🎤 Voice & Audio</h3>
      <ul>
        <li><strong>ElevenLabs</strong> — Most natural AI voiceovers for faceless content and narrations</li>
        <li><strong>Play.ht</strong> — Affordable AI voices for podcasting and YouTube</li>
        <li><strong>Adobe Podcast Enhance</strong> — Cleans up bad audio into studio-quality sound automatically</li>
      </ul>

      <h3>🎥 Video Creation & Editing</h3>
      <ul>
        <li><strong>Runway</strong> — AI-powered video editor for b-roll, green screen, and effects</li>
        <li><strong>Pika</strong> — Text-to-video creation for ads and explainer clips</li>
        <li><strong>CapCut (AI features)</strong> — Beginner-friendly, perfect for TikTok/Shorts</li>
      </ul>

      <h3>⚡ Automation & Productivity</h3>
      <ul>
        <li><strong>Zapier</strong> — Automates workflows across 5,000+ apps</li>
        <li><strong>Make</strong> — Visual workflow automation, more advanced than Zapier</li>
        <li><strong>Notion AI</strong> — Adds AI to Notion for note summarization and project management</li>
      </ul>

      <h3>🌍 Communities & Learning</h3>
      <ul>
        <li><strong>The Rundown AI</strong> — Free daily newsletter with AI news and tool drops</li>
        <li><strong>Futurepedia</strong> — Massive directory of AI tools, updated constantly</li>
        <li><strong>Reddit: r/Artificial</strong> — Community discussing breakthroughs and use cases</li>
      </ul>

      <div class="key-takeaway">
        <h4>👉 Pro Tip:</h4>
        <p>Don't get overwhelmed. Pick one tool per category and master it before adding more. That's how you actually build results.</p>
      </div>

      <h3>📖 Bonus: Glossary of AI Terms</h3>

      <p>Quick reference for key terms you'll encounter:</p>

      <ul>
        <li><strong>AI (Artificial Intelligence):</strong> Technology that mimics human thinking, learning, or problem-solving</li>
        <li><strong>LLM (Large Language Model):</strong> A type of AI trained on massive amounts of text (e.g., ChatGPT, Claude)</li>
        <li><strong>Prompt:</strong> The input or question you give to an AI model</li>
        <li><strong>Prompt Engineering:</strong> The skill of designing prompts to get better results</li>
        <li><strong>Hallucination:</strong> When AI generates false information that sounds convincing</li>
        <li><strong>API:</strong> A way for different software to communicate (lets AI connect to other apps)</li>
        <li><strong>Agent:</strong> An AI system that can take actions automatically (like sending emails)</li>
        <li><strong>Automation:</strong> Using AI and tools to make tasks run without human input</li>
        <li><strong>Generative AI:</strong> AI that creates new content (text, images, video, music)</li>
      </ul>

      <h3>⚠️ Common Mistakes to Avoid</h3>

      <div class="success-story">
        <h4>❌ Tool Hopping</h4>
        <p><strong>Mistake:</strong> Downloading every new AI app and never mastering one.</p>
        <p><strong>Fix:</strong> Pick a core stack (3–5 tools) and commit to mastering them.</p>
      </div>

      <div class="success-story">
        <h4>❌ Over-Prompting, Under-Executing</h4>
        <p><strong>Mistake:</strong> Spending hours generating ideas but never acting on them.</p>
        <p><strong>Fix:</strong> Use AI to get drafts fast → then publish, launch, or sell.</p>
      </div>

      <div class="success-story">
        <h4>❌ Perfection Paralysis</h4>
        <p><strong>Mistake:</strong> Waiting until your idea, product, or content is "perfect."</p>
        <p><strong>Fix:</strong> Speed beats perfection. Launch messy, improve as you go.</p>
      </div>

      <div class="success-story">
        <h4>❌ Copy-Pasting Without Context</h4>
        <p><strong>Mistake:</strong> Using AI's raw output as-is, leading to generic results.</p>
        <p><strong>Fix:</strong> Always add your own expertise, style, or real-world examples.</p>
      </div>

      <div class="success-story">
        <h4>❌ Relying on AI for Everything</h4>
        <p><strong>Mistake:</strong> Thinking AI will "run your business" by itself.</p>
        <p><strong>Fix:</strong> AI is leverage, not a replacement. It's your assistant, not your CEO.</p>
      </div>

      <h3>✨ Your Next Steps</h3>

      <p>If you've made it all the way here — <strong>congratulations.</strong></p>

      <p>Most people will skim, procrastinate, or quit halfway. But you've gone through the entire guide. That shows you're serious about building with AI and staying ahead of the curve.</p>

      <div class="key-takeaway">
        <h4>🚀 Remember:</h4>
        <p>This isn't the end. It's just the beginning.</p>
        <p>AI is moving fast, but you now have the mindset, the strategies, and the tools to not just keep up — but to <strong>lead.</strong></p>
      </div>

      <p>The opportunities are everywhere. The only thing left is to <strong>take action.</strong></p>

      <p>Whether you start with a small automation, launch your first AI-powered business, or grow a faceless content brand, every step you take compounds over time.</p>

      <p>A month from now, you'll look back and realize how much momentum you've built. Six months from now, you won't even recognize where you started.</p>

      <div class="success-story">
        <h4>💪 The Challenge:</h4>
        <ol>
          <li>Pick <strong>one exercise</strong> from this system</li>
          <li>Do it within the <strong>next 24 hours</strong></li>
          <li>Keep building, step by step, every week</li>
        </ol>
        <p>Six months from now, you'll look back and realize this wasn't just a guide. It was the start of a new chapter in your business, your career, and your life.</p>
      </div>

      <p>The tools are here. The strategies are here. The only thing left is <strong>execution.</strong></p>

      <h3>🎯 Final Words</h3>

      <p>Stay curious. Stay consistent. And most importantly — <strong>stay in motion and NEVER STOP MOVING FORWARD.</strong></p>

      <p>The future belongs to the doers. And now, you're one of them.</p>

      <div class="key-takeaway">
        <p style="text-align: center; font-size: 1.5rem; margin-top: 2rem;">
          <strong>Here's to your success 🚀</strong>
        </p>
        <p style="text-align: center; color: #22d3ee; font-weight: 600;">
          — The AI Masterclass Team
        </p>
      </div>

      <h3>✅ Final Action Exercise: Your Commitment</h3>

      <ol>
        <li>Write down the #1 thing you're going to build or accomplish with AI in the next 30 days</li>
        <li>Share it publicly (LinkedIn, Twitter, or even just text a friend)</li>
        <li>Set a calendar reminder to check in on your progress every week</li>
        <li>Come back to this system whenever you need a refresher or motivation</li>
      </ol>

      <p>Now go build something amazing. We're rooting for you! 🔥</p>
    `
  }
]

export default function Module8Page() {
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

    const progress = localStorage.getItem('module_8_progress')
    if (progress) {
      setCompletedLessons(JSON.parse(progress))
    }
    setIsLoading(false)
  }, [router])

  const markComplete = () => {
    if (!completedLessons.includes(currentLesson)) {
      const updated = [...completedLessons, currentLesson]
      setCompletedLessons(updated)
      localStorage.setItem('module_8_progress', JSON.stringify(updated))
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
            <span className="text-sm font-semibold text-gray-300">Module 8: Future-Proofing & Resources</span>
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
                <Button className="bg-gradient-to-r from-green-500 via-cyan-500 to-blue-500 hover:from-green-600 hover:via-cyan-600 hover:to-blue-600 text-white font-black px-8 py-4 shadow-[0_0_30px_rgba(34,197,94,0.5)]">
                  🎉 Complete System
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
      `}</style>
    </main>
  )
}

