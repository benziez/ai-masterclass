import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, name } = body

    // Log the subscription data
    console.log('New subscription:', { email, name, timestamp: new Date().toISOString() })

    // TODO: Connect to Supabase/Mailchimp later
    // Example Supabase integration:
    // const { data, error } = await supabase
    //   .from('subscribers')
    //   .insert([{ email, name, created_at: new Date().toISOString() }])

    // Example Mailchimp integration:
    // await mailchimp.lists.addListMember(process.env.MAILCHIMP_LIST_ID, {
    //   email_address: email,
    //   status: 'subscribed',
    //   merge_fields: { FNAME: name }
    // })

    return NextResponse.json({ 
      success: true, 
      message: 'Successfully subscribed! Check your email for the free guide.' 
    })
  } catch (error) {
    console.error('Subscription error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to subscribe. Please try again.' },
      { status: 500 }
    )
  }
}

