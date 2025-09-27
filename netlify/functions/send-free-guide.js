const { Resend } = require('resend')

const resend = new Resend(process.env.RESEND_API_KEY || 'dummy_key_for_build')
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aimasterclass.info'

exports.handler = async (event, context) => {
  // Handle CORS
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
      },
      body: '',
    }
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ error: 'Method not allowed' }),
    }
  }

  try {
    const { email } = JSON.parse(event.body)

    if (!email) {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ error: 'Email is required' }),
      }
    }

    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'dummy_key_for_build') {
      console.log('Resend API key not configured, skipping email send')
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ success: true, message: 'Email service not configured' }),
      }
    }

    // Send free guide email
    const { data, error } = await resend.emails.send({
      from: 'AI Masterclass <noreply@aimasterclass.info>',
      to: [email],
      subject: '🎁 Your Free Advanced Prompt Pack is Here!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 20px;">
            <h1 style="color: #2563eb; font-size: 24px; margin-bottom: 10px;">🎁 Your Free Advanced Prompt Pack!</h1>
            <p style="color: #6b7280; font-size: 16px;">The exact prompts that generated $2.3M+ in profits</p>
          </div>

          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #1f2937; margin-bottom: 15px; font-size: 18px;">📚 What's Inside Your Prompt Pack:</h2>
            <ul style="color: #374151; line-height: 1.6; margin: 0; padding-left: 20px;">
              <li>✅ Proven AI prompts that generate instant results</li>
              <li>✅ Copy-paste templates for content creation, marketing, and sales</li>
              <li>✅ Advanced prompt engineering techniques</li>
              <li>✅ Industry-specific prompts for different niches</li>
              <li>✅ Prompt optimization strategies for maximum output</li>
            </ul>
          </div>

          <div style="background: #fff7ed; padding: 15px; border-radius: 8px; margin: 20px 0; border: 1px solid #fed7aa;">
            <h3 style="color: #9a3412; margin-bottom: 10px; font-size: 16px;">⬇️ Download Your Free Prompt Pack:</h3>
            <div style="text-align: center; margin: 15px 0;">
              <a href="${siteUrl}/downloads/advanced-prompts.pdf" 
                 style="display: inline-block; background: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
                📥 Download Advanced Prompt Pack (PDF)
              </a>
            </div>
          </div>

          <div style="background: #ecfdf5; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="color: #047857; margin: 0; font-size: 14px;">
              <strong>💡 Pro Tip:</strong> This prompt pack contains the exact prompts our students used to generate $2.3M+ in profits. Use them immediately and start seeing results today!
            </p>
          </div>

          <div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0; border: 1px solid #f59e0b;">
            <h3 style="color: #92400e; margin-bottom: 10px; font-size: 16px;">🚀 Ready for More?</h3>
            <p style="color: #92400e; margin: 0 0 10px 0; font-size: 14px;">
              Tomorrow, I'll send you an exclusive offer for the complete AI Masterclass system - including advanced prompts, automation blueprints, and bonus materials.
            </p>
            <p style="color: #92400e; margin: 0; font-size: 14px;">
              <strong>Keep an eye on your inbox!</strong> 📧
            </p>
          </div>

          <div style="border-top: 1px solid #e5e7eb; padding-top: 15px; margin-top: 20px; text-align: center;">
            <p style="color: #6b7280; font-size: 12px; margin: 0;">
              Need help? Reply to this email or contact support@aimasterclass.info
            </p>
            <p style="color: #6b7280; font-size: 12px; margin: 5px 0 0 0;">
              Welcome to the AI Masterclass family! 🚀
            </p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return {
        statusCode: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ error: 'Failed to send email' }),
      }
    }

    console.log('Free guide email sent successfully:', data?.id)

    // TODO: Implement scheduling for the upsell email (e.g., using a cron job or a separate service)
    // For now, we'll just log that it would be scheduled.
    console.log(`Scheduling upsell email for ${email} in 1 day...`)

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ success: true, messageId: data?.id }),
    }

  } catch (error) {
    console.error('Email API error:', error)
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ error: 'Internal server error' }),
    }
  }
}










