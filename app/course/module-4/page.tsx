'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

const lessons = [
  {
    id: 1,
    title: 'Faceless Content Strategy',
    duration: '20 min',
    content: `
      <h2>Why Content Matters More Than Ever</h2>
      
      <p>In today's world, <strong>content is currency.</strong> The brands, businesses, and creators that win are the ones who publish consistently, capture attention, and stay top of mind.</p>

      <p>But let's be real — creating content takes time. Writing posts, editing videos, designing graphics… it's a full-time job on its own. Most people give up because they can't keep up with the demand.</p>

      <p>This is where AI gives you an unfair advantage.</p>

      <div class="key-takeaway">
        <h4>💡 The AI Content Edge:</h4>
        <p>AI won't just help you create faster — it will help you create <strong>better.</strong></p>
        <p>Smarter scripts, scroll-stopping visuals, optimized captions, and even entire content calendars can now be built in minutes instead of weeks.</p>
      </div>

      <h3>🎥 Faceless Content: The No-Excuse Business Model</h3>

      <p>Not everyone wants to be on camera. And the good news? <strong>You don't have to be.</strong></p>

      <p>AI makes it possible to run entire faceless brands that generate traffic, followers, and income. Here's how:</p>

      <h4>The Faceless Content Formula:</h4>

      <ol>
        <li><strong>Scripts:</strong> Use ChatGPT to generate short, punchy scripts for TikToks, YouTube Shorts, or Reels</li>
        <li><strong>Visuals:</strong> Pull stock clips, AI-generated b-roll, or slideshow-style animations</li>
        <li><strong>Voiceovers:</strong> Use ElevenLabs or other AI voice tools to narrate without ever recording yourself</li>
        <li><strong>Editing:</strong> Tools like Pika, Runway, or CapCut streamline editing to minutes</li>
      </ol>

      <div class="success-story">
        <h4>💡 Real Example:</h4>
        <p>A "history facts" TikTok account grew to over <strong>1M followers in under a year.</strong></p>
        <p>The creator never once showed their face. Every script was AI-generated, visuals were stock footage, and voiceovers were synthetic.</p>
        <p>Yet the account pulls in ad revenue and brand deals monthly — earning <strong>$3,000-$5,000/month.</strong></p>
      </div>

      <h3>🎯 Best Niches for Faceless Content</h3>

      <p>Not all niches work well for faceless content. The best ones are:</p>

      <ul>
        <li><strong>Educational/Informational:</strong> History, science, finance tips, productivity hacks</li>
        <li><strong>Storytelling:</strong> True crime, mysteries, motivational stories</li>
        <li><strong>Entertainment:</strong> Fun facts, "did you know" content, satisfying videos</li>
        <li><strong>How-To/Tutorials:</strong> Screen recordings, step-by-step guides</li>
      </ul>

      <p>Pick a niche you're genuinely interested in. You'll be creating a lot of content, so passion helps with consistency.</p>

      <h3>📝 The Content Creation Process</h3>

      <p>Here's exactly how to create faceless content with AI:</p>

      <h4>Step 1: Script Generation (5 minutes)</h4>
      <div class="prompt-box">
        <p><strong>ChatGPT Prompt:</strong></p>
        <code>"Write 10 viral TikTok scripts about [YOUR NICHE]. Each script should:
- Be 45-60 seconds when read aloud
- Start with a scroll-stopping hook
- Deliver one key insight or story
- End with a call-to-action (like, follow, comment)

Niche: [e.g., strange historical events]
Tone: [e.g., mysterious, engaging]"</code>
      </div>

      <h4>Step 2: Voiceover Creation (3 minutes)</h4>
      <ul>
        <li>Copy your script into ElevenLabs</li>
        <li>Choose a voice that fits your brand</li>
        <li>Generate the voiceover</li>
        <li>Download the audio file</li>
      </ul>

      <h4>Step 3: Visual Assembly (10 minutes)</h4>
      <ul>
        <li>Find stock footage on Pexels, Pixabay, or Unsplash (all free)</li>
        <li>Or use AI tools like Runway to generate custom b-roll</li>
        <li>Import into CapCut</li>
        <li>Add captions (CapCut does this automatically)</li>
      </ul>

      <h4>Step 4: Publish & Optimize (2 minutes)</h4>
      <ul>
        <li>Export the video</li>
        <li>Upload to TikTok, Instagram Reels, or YouTube Shorts</li>
        <li>Use AI to generate hashtags and captions</li>
      </ul>

      <p><strong>Total time: 20 minutes per video.</strong> Do this 2x per day, and you'll have 60 videos per month.</p>

      <h3>📊 The Numbers Game</h3>

      <p>Faceless content is a volume game. Not every video will go viral, but:</p>

      <ul>
        <li>Post consistently (1-2 times per day)</li>
        <li>Test different hooks and styles</li>
        <li>Analyze what works and double down</li>
      </ul>

      <p>One viral video can bring you 50K-100K followers overnight. That's real audience and real opportunity.</p>

      <h3>✅ Action Exercise: Create Your First Faceless Video</h3>

      <ol>
        <li>Pick your niche</li>
        <li>Use ChatGPT to generate 5 script ideas</li>
        <li>Pick the best one and refine it</li>
        <li>Create the voiceover with ElevenLabs (free trial)</li>
        <li>Find or generate visuals</li>
        <li>Edit in CapCut and publish today</li>
      </ol>

      <p>Don't aim for perfection. Aim for <strong>completion.</strong> Your first video won't be perfect, and that's okay. The goal is to prove to yourself that you can do this.</p>
    `
  },
  {
    id: 2,
    title: 'Copywriting That Converts',
    duration: '25 min',
    content: `
      <h2>AI-Powered Marketing Copy</h2>
      
      <p>Content isn't just about volume — it's about <strong>impact.</strong> AI can help you write marketing copy that actually sells.</p>

      <p>Whether you're writing Facebook ads, email sequences, landing pages, or social media captions, AI can give you a massive head start.</p>

      <h3>📝 What You Can Generate with AI</h3>

      <ul>
        <li><strong>Facebook and Instagram ad copy</strong></li>
        <li><strong>Landing page headlines and subheads</strong></li>
        <li><strong>Email sequences</strong> (welcome series, sales funnels, nurture campaigns)</li>
        <li><strong>Sales scripts</strong> for calls or videos</li>
        <li><strong>Social captions</strong> tailored for engagement</li>
      </ul>

      <p>The key isn't to copy-paste. It's to let AI give you <strong>strong first drafts</strong> that you refine with your own personality and market insight.</p>

      <h3>✍️ High-Converting Copy Formulas</h3>

      <p>Good copy follows proven formulas. Here are the ones that work best with AI:</p>

      <h4>Formula 1: PAS (Problem-Agitate-Solution)</h4>
      <div class="prompt-box">
        <p><strong>ChatGPT Prompt:</strong></p>
        <code>"Write ad copy using the PAS framework:

Problem: [What problem does your audience have?]
Agitate: [Why is this problem painful/urgent?]
Solution: [How does your product solve it?]

Product: [Your product]
Target audience: [Who you're selling to]
Tone: [Conversational, professional, etc.]"</code>
      </div>

      <h4>Formula 2: AIDA (Attention-Interest-Desire-Action)</h4>
      <div class="prompt-box">
        <p><strong>ChatGPT Prompt:</strong></p>
        <code>"Write a landing page using the AIDA framework:

Attention: Scroll-stopping headline
Interest: Build curiosity about the solution
Desire: Show transformation/results
Action: Clear CTA

Product: [Your product]
Main benefit: [Primary value]"</code>
      </div>

      <h4>Formula 3: Before-After-Bridge</h4>
      <div class="prompt-box">
        <p><strong>ChatGPT Prompt:</strong></p>
        <code>"Write sales copy using Before-After-Bridge:

Before: Where the customer is now (pain/frustration)
After: Where they want to be (desired outcome)
Bridge: How your product gets them there

Product: [Your product]
Target customer: [Description]"</code>
      </div>

      <h3>📧 Email Sequences That Sell</h3>

      <p>Email is still one of the highest-ROI marketing channels. AI makes it easy to build entire sequences in minutes.</p>

      <div class="prompt-box">
        <p><strong>ChatGPT Prompt for Email Sequences:</strong></p>
        <code>"Create a 7-email welcome sequence for my email list.

Goal: Build trust and sell [YOUR PRODUCT]

Email 1: Welcome + free value
Email 2: Share my story
Email 3: Address their biggest problem
Email 4: Introduce my solution
Email 5: Social proof (testimonials/results)
Email 6: Handle objections
Email 7: Limited-time offer

Keep each email under 250 words and conversational.
Include clear subject lines for each."</code>
      </div>

      <div class="success-story">
        <h4>💡 Real Example:</h4>
        <p>A fitness coach used AI to write a 7-email nurture sequence for new leads. She tweaked the tone slightly to sound like her, and the result?</p>
        <p>Her email open rates jumped from <strong>19% to 42%</strong>, and she booked <strong>5 new coaching clients</strong> in a single week.</p>
      </div>

      <h3>📱 Social Media Captions</h3>

      <p>AI can generate months of social media content in one sitting. Here's how:</p>

      <div class="prompt-box">
        <p><strong>ChatGPT Prompt:</strong></p>
        <code>"Generate 30 Instagram captions for [YOUR NICHE].

Each caption should:
- Start with a hook (first line grabs attention)
- Be 100-150 words
- Include a call-to-action
- Use 5-10 relevant hashtags
- Vary in style (some educational, some storytelling, some motivational)

Niche: [Your niche]
Brand voice: [Your style]"</code>
      </div>

      <p>Now you have a month's worth of content. Just customize, schedule, and you're done.</p>

      <h3>🎯 The Refinement Process</h3>

      <p>AI gives you 80% of the way there. Your job is to add the final 20%:</p>

      <ul>
        <li><strong>Add your voice:</strong> Make it sound like you, not a robot</li>
        <li><strong>Inject personality:</strong> Add humor, stories, or unique angles</li>
        <li><strong>Customize for your audience:</strong> AI doesn't know your customers like you do</li>
        <li><strong>Test and iterate:</strong> See what performs well and double down</li>
      </ul>

      <div class="key-takeaway">
        <h4>💡 Remember:</h4>
        <p>AI-generated copy is a starting point, not the finish line. The best marketers use AI for speed, then add human insight for impact.</p>
      </div>

      <h3>✅ Action Exercise: Write Your First AI-Powered Campaign</h3>

      <ol>
        <li>Pick one marketing goal (e.g., promote a product, grow your email list, drive traffic)</li>
        <li>Choose a copy formula from this lesson</li>
        <li>Use ChatGPT to generate the first draft</li>
        <li>Refine it with your voice and brand</li>
        <li>Launch it today</li>
      </ol>

      <p>Even if it doesn't go viral, you'll learn more from publishing one piece than from writing ten drafts that never see the light of day.</p>
    `
  },
  {
    id: 3,
    title: 'Branding & Design with AI',
    duration: '18 min',
    content: `
      <h2>Professional Design Without a Designer</h2>
      
      <p>Branding used to require expensive designers and weeks of back-and-forth. Today, AI tools can help you create professional-looking assets <strong>instantly.</strong></p>

      <p>This doesn't mean you'll never hire a designer. But it does mean you can get started with great visuals from day one, even with zero budget.</p>

      <h3>🎨 What AI Can Do for Your Brand</h3>

      <ul>
        <li>Generate logos and brand color palettes</li>
        <li>Create ad creatives in bulk</li>
        <li>Mock up product packaging or website designs</li>
        <li>Build social media templates ready to post</li>
        <li>Design presentations and pitch decks</li>
      </ul>

      <h3>🛠 Top AI Design Tools</h3>

      <h4>1. Canva (with AI Features)</h4>
      <p><strong>Best for:</strong> Social media graphics, presentations, simple logos</p>
      <p><strong>AI Features:</strong></p>
      <ul>
        <li>Text-to-image generation</li>
        <li>Magic resize (adapt designs for different platforms)</li>
        <li>Background removal</li>
        <li>Brand kit auto-generation</li>
      </ul>
      <p><strong>Cost:</strong> Free (Pro plan is $12.99/month)</p>

      <h4>2. MidJourney</h4>
      <p><strong>Best for:</strong> High-quality, artistic visuals for ads, branding, storytelling</p>
      <p><strong>What you can create:</strong></p>
      <ul>
        <li>Product mockups</li>
        <li>Ad creatives</li>
        <li>Brand illustrations</li>
        <li>YouTube thumbnails</li>
      </ul>
      <p><strong>Cost:</strong> $10/month</p>

      <h4>3. Looka / Brandmark (AI Logo Generators)</h4>
      <p><strong>Best for:</strong> Creating professional logos in minutes</p>
      <p>You answer a few questions about your brand, and AI generates dozens of logo options. Pick one, customize it, and you're done.</p>
      <p><strong>Cost:</strong> $20-60 one-time fee</p>

      <h3>🎨 Building Your Visual Brand</h3>

      <p>Your brand isn't just a logo — it's the entire visual identity. Here's how to build it with AI:</p>

      <h4>Step 1: Define Your Brand Personality</h4>
      <p>Use ChatGPT to help brainstorm:</p>
      <div class="prompt-box">
        <p><strong>Prompt:</strong></p>
        <code>"Help me define my brand identity:

Business: [What you do]
Target audience: [Who you serve]
Competitors: [Similar brands]
Personality traits I want: [e.g., professional, playful, bold]

Based on this, suggest:
- 3 brand color palettes
- Typography styles
- Visual themes
- Brand voice guidelines"</code>
      </div>

      <h4>Step 2: Generate Visual Assets</h4>
      <p>Use MidJourney or Canva AI to create:</p>
      <ul>
        <li>Logo variations</li>
        <li>Social media templates</li>
        <li>Ad creatives</li>
        <li>Brand patterns or textures</li>
      </ul>

      <h4>Step 3: Create Templates</h4>
      <p>Build reusable templates in Canva for:</p>
      <ul>
        <li>Instagram posts</li>
        <li>TikTok thumbnails</li>
        <li>Email headers</li>
        <li>Presentations</li>
      </ul>

      <p>Now you can create on-brand content in seconds instead of starting from scratch every time.</p>

      <h3>📊 Case Study: Daniel's Faceless YouTube Channel</h3>

      <div class="success-story">
        <p>Daniel wanted to start a side hustle but didn't want to be on camera. Using AI, he built a faceless YouTube channel around tech tutorials.</p>

        <p><strong>His process:</strong></p>
        <ul>
          <li>ChatGPT wrote his scripts</li>
          <li>ElevenLabs provided professional voiceover</li>
          <li>Runway generated graphics and b-roll</li>
          <li>CapCut handled the editing</li>
        </ul>

        <p>In 6 months, his channel reached <strong>50K subscribers.</strong></p>

        <p>He monetized with YouTube ads and affiliate links, pulling in around <strong>$2,000/month.</strong> All while staying completely anonymous.</p>
      </div>

      <h3>🎯 Content Consistency > Perfection</h3>

      <p>The biggest mistake people make is waiting for their content to be "perfect." Meanwhile, competitors are posting daily and building audiences.</p>

      <div class="key-takeaway">
        <h4>💡 Remember:</h4>
        <p>A "good enough" post published today beats a "perfect" post sitting in your drafts.</p>
        <p>Use AI to move fast. Iterate and improve as you go.</p>
      </div>

      <h3>✅ Action Exercise: Publish with AI Today</h3>

      <ol>
        <li>Pick one platform (TikTok, YouTube Shorts, or Instagram)</li>
        <li>Use ChatGPT to draft a 30–60 second script in your niche</li>
        <li>Generate a voiceover with ElevenLabs or record yourself</li>
        <li>Find stock visuals or create with AI</li>
        <li>Edit and post it today</li>
      </ol>

      <p>Don't overthink it. The goal is to publish and see the results. Once you see how fast AI makes this process, you'll never look at content the same way again.</p>

      <div class="next-module">
        <p><strong>Ready to master the tools?</strong> In Module 5, we'll dive deep into the exact AI tools you need and how to use them like a pro. 🚀</p>
      </div>
    `
  }
]

export default function Module4Page() {
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

    const progress = localStorage.getItem('module_4_progress')
    if (progress) {
      setCompletedLessons(JSON.parse(progress))
    }
    setIsLoading(false)
  }, [router])

  const markComplete = () => {
    if (!completedLessons.includes(currentLesson)) {
      const updated = [...completedLessons, currentLesson]
      setCompletedLessons(updated)
      localStorage.setItem('module_4_progress', JSON.stringify(updated))
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
            <span className="text-sm font-semibold text-gray-300">Module 4: Content & Marketing with AI</span>
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
                  Complete Module 4
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
