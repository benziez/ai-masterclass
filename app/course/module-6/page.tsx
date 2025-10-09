'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

const lessons = [
  {
    id: 1,
    title: 'Replaceable vs. Irreplaceable',
    duration: '18 min',
    content: `
      <h2>The Harsh Reality</h2>
      
      <p>There's no denying it — <strong>AI will replace some jobs.</strong> Routine data entry? Automated. Basic copywriting? Automated. Simple customer support? Automated.</p>

      <p>But here's the part most people miss: <strong>AI also creates a new wave of opportunities.</strong></p>

      <p>The people who learn to use AI as leverage will be the ones companies, clients, and customers can't live without.</p>

      <div class="key-takeaway">
        <h4>💡 The Core Truth:</h4>
        <p>It's not about competing <em>against</em> AI. It's about becoming the person who knows how to <em>drive</em> it better than anyone else.</p>
      </div>

      <h3>✈️ The Jet Plane Analogy</h3>

      <p>Think of AI like a jet plane.</p>

      <p>Most people are standing on the runway, terrified it will take off without them.</p>

      <p>The smart ones? They're learning to fly it.</p>

      <p>And once you're the <strong>pilot</strong>, you're irreplaceable.</p>

      <h3>🎯 What Makes Someone Irreplaceable?</h3>

      <p>Three things separate the winners from everyone else:</p>

      <h4>1. Speed</h4>
      <p>AI lets you deliver in hours what others take days to do. In business, <strong>speed is value.</strong></p>

      <p>The faster you can execute, the more opportunities you can capture.</p>

      <h4>2. Insight</h4>
      <p>AI gives raw output, but <strong>you add the context, strategy, and creativity.</strong> That's what makes the result unique.</p>

      <p>Anyone can ask ChatGPT to write a sales page. But only <em>you</em> know your customers deeply enough to refine it into something that actually converts.</p>

      <h4>3. Positioning</h4>
      <p>If you brand yourself as <strong>"the AI-first person"</strong> in your field, you instantly stand out from competitors who still do everything manually.</p>

      <div class="success-story">
        <h4>💡 Example:</h4>
        <p>Two freelance writers apply for the same job:</p>
        <ul>
          <li><strong>Writer A:</strong> "I'm a great writer with 5 years of experience."</li>
          <li><strong>Writer B:</strong> "I'm an AI-powered writer who can deliver in 24 hours what others take a week to write — without sacrificing quality."</li>
        </ul>
        <p>Who do you think gets hired?</p>
      </div>

      <h3>🏆 How to Stand Out in Any Industry</h3>

      <p>No matter what field you're in, here's how to position yourself as irreplaceable:</p>

      <h4>If you're in business/entrepreneurship:</h4>
      <p>Offer faster, cheaper, AI-enhanced services that deliver the same or better results than traditional providers.</p>

      <h4>If you're in a career/professional field:</h4>
      <p>Become the <strong>"AI specialist"</strong> on your team. Document workflows, save time, and show your boss/clients you can do the work of three people with AI.</p>

      <h4>If you're in creative industries:</h4>
      <p>Use AI to expand your capacity, not replace your style. Think of it as <strong>"creative steroids"</strong> — your vision, scaled up.</p>

      <div class="success-story">
        <h4>💡 Real Example:</h4>
        <p>A lawyer isn't replaced by AI. But the lawyer who uses AI to draft documents 10x faster while spending more time on <strong>strategy and client relationships?</strong></p>
        <p>They'll outcompete every traditional lawyer around them.</p>
      </div>

      <h3>⚠️ The Questions You Should Be Asking</h3>

      <p>Stop asking:</p>
      <p>❌ <em>"Will AI replace me?"</em></p>

      <p>Start asking:</p>
      <p>✅ <strong>"How can I become the one who knows how to use AI better than anyone else?"</strong></p>

      <p>That single shift will move you from replaceable → irreplaceable.</p>

      <h3>✅ Action Exercise: Your AI Edge</h3>

      <ol>
        <li>Write down one skill you already use in your career or business (e.g., writing, sales, data analysis, design)</li>
        <li>Ask yourself: <strong>"How could AI make me 10x better at this?"</strong></li>
        <li>Research one tool or workflow this week to implement that</li>
        <li>Share the results with your boss, team, or clients so they immediately see your value</li>
      </ol>

      <p>When people recognize that you bring AI leverage into everything you do, you stop being optional. <strong>You become essential.</strong></p>
    `
  },
  {
    id: 2,
    title: 'How to Stand Out',
    duration: '20 min',
    content: `
      <h2>Becoming the AI Expert in Your Field</h2>
      
      <p>You don't need to be the best in the world at AI. You just need to be the best <strong>in your niche</strong> or <strong>on your team.</strong></p>

      <p>That's more achievable than you think, because most people still aren't using AI strategically.</p>

      <h3>🎯 The Positioning Strategy</h3>

      <p>Here's how to position yourself as the AI expert, even if you're just starting out:</p>

      <h4>Step 1: Document What You Learn</h4>

      <p>As you go through this system and test tools, <strong>share your journey.</strong></p>

      <p>Post on LinkedIn, Twitter, or even a simple blog about:</p>
      <ul>
        <li>Tools you're testing</li>
        <li>Workflows you're building</li>
        <li>Results you're getting</li>
      </ul>

      <p>This does two things:</p>
      <ol>
        <li>It positions you as "the AI person" in your network</li>
        <li>It attracts opportunities — clients, partnerships, job offers</li>
      </ol>

      <h4>Step 2: Offer "AI-First" Services</h4>

      <p>Instead of competing on price or experience, compete on <strong>speed and innovation.</strong></p>

      <p><strong>Examples:</strong></p>
      <ul>
        <li>"AI-powered social media management — 10x faster than traditional agencies"</li>
        <li>"24-hour copywriting turnaround using AI systems"</li>
        <li>"Automated video editing for podcasters"</li>
      </ul>

      <p>When you lead with AI, you differentiate yourself immediately.</p>

      <h4>Step 3: Build in Public</h4>

      <p>Share your wins, your experiments, and even your failures. Transparency builds trust and authority.</p>

      <p><strong>Post things like:</strong></p>
      <ul>
        <li>"I used AI to create 100 TikToks in one day. Here's how..."</li>
        <li>"This AI workflow saved me 10 hours this week. Thread 🧵"</li>
        <li>"I made $500 this week using AI tools. Here's my stack..."</li>
      </ul>

      <div class="success-story">
        <h4>💡 Real Example:</h4>
        <p>A marketer started posting daily AI tips on LinkedIn. Nothing fancy — just quick 2-minute posts about tools and workflows.</p>
        <p>Within 3 months:</p>
        <ul>
          <li>His following grew from 500 to 8,000</li>
          <li>He landed 4 consulting gigs from people who saw his posts</li>
          <li>A company hired him as their "Head of AI Strategy" at $120K/year</li>
        </ul>
        <p>All from sharing what he was learning publicly.</p>
      </div>

      <h3>💼 Case Study: Marcus the AI Marketing Specialist</h3>

      <div class="success-story">
        <p>Marcus was a mid-level marketer at a small agency. He wasn't the most experienced on the team, but he was the first to lean into AI.</p>

        <p><strong>What he did:</strong></p>
        <ul>
          <li>Used AI to generate ad copy drafts for clients in minutes</li>
          <li>Built dashboards that pulled campaign data and had AI write reports automatically</li>
          <li>Trained himself on AI design tools and began pitching "AI-powered ad creatives"</li>
        </ul>

        <p>Within six months, he became the <strong>go-to person for anything AI.</strong></p>

        <p>His agency didn't see him as just another marketer — they saw him as the one who made their whole team more competitive.</p>

        <p>He got promoted, given a raise, and became the most irreplaceable person in the company.</p>
      </div>

      <h3>🧠 The "AI + [Your Skill]" Formula</h3>

      <p>The most valuable people in the AI economy aren't AI engineers. They're people who combine AI with domain expertise.</p>

      <p><strong>Examples:</strong></p>
      <ul>
        <li>AI + Real Estate = AI-powered property marketing</li>
        <li>AI + Fitness = Automated coaching workflows</li>
        <li>AI + Law = AI-assisted legal research</li>
        <li>AI + Finance = AI-driven financial analysis</li>
      </ul>

      <p>Whatever your background is, <strong>AI makes you better at it.</strong> That's your competitive edge.</p>

      <h3>🎯 Skills That Pair Best with AI</h3>

      <p>If you want to future-proof yourself, combine AI with these high-value skills:</p>

      <ul>
        <li><strong>Sales:</strong> AI handles research and outreach; you close deals</li>
        <li><strong>Marketing:</strong> AI generates campaigns; you optimize strategy</li>
        <li><strong>Leadership:</strong> AI automates operations; you focus on vision</li>
        <li><strong>Writing:</strong> AI drafts content; you add the unique voice</li>
        <li><strong>Design:</strong> AI generates concepts; you refine the final product</li>
      </ul>

      <div class="key-takeaway">
        <h4>💡 The Golden Combo:</h4>
        <p>AI handles the 80%. You handle the 20% that makes all the difference.</p>
        <p>That's the formula for becoming irreplaceable.</p>
      </div>

      <h3>✅ Action Exercise: Build Your Personal Brand as an AI Expert</h3>

      <ol>
        <li>Pick one platform (LinkedIn, Twitter, or a blog)</li>
        <li>Commit to posting about your AI journey 3x per week</li>
        <li>Share workflows, tools, results, and lessons</li>
        <li>Tag relevant people and use AI-related hashtags</li>
        <li>Track what posts get the most engagement and double down</li>
      </ol>

      <p>Within 90 days, you'll be known as "the AI person" in your niche. And that's when the opportunities start rolling in.</p>

      <div class="next-module">
        <p><strong>Ready to make money?</strong> In Module 7, we'll dive into scaling and monetization strategies so you can turn your AI skills into serious income. 🚀</p>
      </div>
    `
  }
]

export default function Module6Page() {
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

    const progress = localStorage.getItem('module_6_progress')
    if (progress) {
      setCompletedLessons(JSON.parse(progress))
    }
    setIsLoading(false)
  }, [router])

  const markComplete = () => {
    if (!completedLessons.includes(currentLesson)) {
      const updated = [...completedLessons, currentLesson]
      setCompletedLessons(updated)
      localStorage.setItem('module_6_progress', JSON.stringify(updated))
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
          href="/system"
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-6 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to System
        </Link>

        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-gray-300">Module 6: Becoming Irreplaceable with AI</span>
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
              <Link href="/system">
                <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold">
                  Complete Module 6
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

