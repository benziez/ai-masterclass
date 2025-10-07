import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  try {
    // create the $27 one-time payment
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price: "price_1SFfmPCRBdugvqELVNRHd4ht", // $27 one-time payment (LIVE)
          quantity: 1,
        },
      ],
      success_url: "https://aimasterclass.info/success?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: "https://aimasterclass.info/cancel",
      payment_method_types: ["card"],
    });


    // return the checkout URL
    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error("Stripe error:", err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
