import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'
import connectDB from '@/lib/mongodb'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

export async function POST(request: NextRequest) {
  try {
    const token = request.cookies.get('auth-token')?.value

    if (!token) {
      return NextResponse.json(
        { error: 'No token provided' },
        { status: 401 }
      )
    }

    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string; email: string }
    
    await connectDB()
    
    const { businessId, type, tone, businessData } = await request.json()

    // Generate AI-powered outreach content
    const outreach = await generateAIOutreach(businessData, type, tone)

    return NextResponse.json(outreach, { status: 200 })
  } catch (error) {
    console.error('Outreach generation error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

async function generateAIOutreach(business: any, type: string, tone: string) {
  // For MVP, return mock outreach content based on business data
  // In production, this would call OpenAI API
  
  const businessName = business.name
  const industry = business.industry
  const painPoints = business.painPoints
  const potentialServices = business.potentialServices
  const ownerName = business.contactInfo?.ownerName || 'there'

  let subject = ''
  let message = ''

  if (type === 'email') {
    subject = `AI Solution for ${businessName} - ${painPoints[0] || 'Business Growth'}`
    
    message = `Hi ${ownerName},

I hope this email finds you well. I came across ${businessName} and was impressed by your work in the ${industry} industry.

I noticed that many ${industry} businesses like yours are facing challenges with ${painPoints.slice(0, 2).join(' and ')}. 

I specialize in helping ${industry} companies leverage AI to solve these exact problems. For example, I've helped similar businesses implement ${potentialServices[0] || 'AI automation solutions'} that have resulted in significant time and cost savings.

Would you be open to a brief 15-minute call to discuss how AI could help ${businessName} streamline operations and increase efficiency?

I'd be happy to share some specific examples of how other ${industry} companies have benefited from AI implementation.

Best regards,
${tone === 'professional' ? 'Best regards' : tone === 'friendly' ? 'Looking forward to hearing from you' : 'Talk soon'}`

  } else if (type === 'linkedin') {
    message = `Hi ${ownerName}! 👋

I came across ${businessName} and was impressed by your work in ${industry}. 

I help ${industry} companies like yours solve ${painPoints[0] || 'operational challenges'} using AI. Many businesses in your industry are seeing great results with ${potentialServices[0] || 'AI automation'}.

Would love to connect and share some insights that might be valuable for ${businessName}! 

Happy to hop on a quick call if you're interested.`

  } else if (type === 'instagram') {
    message = `Hey ${ownerName}! 👋

Love what you're doing with ${businessName}! 

I help ${industry} businesses like yours use AI to solve ${painPoints[0] || 'common challenges'}. 

Would love to connect and share some tips that could help ${businessName} grow! 

DM me if you're interested in a quick chat! 🚀`

  } else if (type === 'facebook') {
    message = `Hi ${ownerName}! 

I came across ${businessName} and was impressed by your work in the ${industry} industry.

I specialize in helping ${industry} businesses like yours leverage AI to solve ${painPoints.slice(0, 2).join(' and ')}.

Would you be interested in a brief conversation about how AI could help ${businessName} streamline operations?

I'd be happy to share some examples of how other ${industry} companies have benefited from AI implementation.

Thanks for your time!`
  }

  // Adjust tone
  if (tone === 'friendly') {
    message = message.replace(/I hope this email finds you well\./g, 'Hope you\'re having a great day!')
    message = message.replace(/Best regards/g, 'Looking forward to connecting!')
  } else if (tone === 'casual') {
    message = message.replace(/I hope this email finds you well\./g, 'Hope you\'re doing well!')
    message = message.replace(/Best regards/g, 'Talk soon!')
    message = message.replace(/Would you be open to/g, 'Would you be down for')
  }

  return {
    subject,
    message
  }
}
