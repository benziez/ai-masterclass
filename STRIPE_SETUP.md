# Stripe Integration Setup Guide

## 1. Environment Variables

Create a `.env.local` file in your project root with the following variables:

```bash
# Stripe Configuration
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 2. Stripe Dashboard Setup

### Create Products and Prices

1. Go to your Stripe Dashboard → Products
2. Create 3 products:

**Product 1: AI Masterclass Course**
- Name: AI Masterclass Course
- Price: $97
- Copy the Price ID (starts with `price_`)

**Product 2: VIP Consultation**
- Name: VIP Consultation
- Price: $500
- Copy the Price ID

**Product 3: Done-For-You Package**
- Name: Done-For-You Package
- Price: $1,497
- Copy the Price ID

### Update Price IDs in Code

Replace the placeholder price IDs in `app/pricing/page.tsx`:

```typescript
// Line 137: Course button
onClick={() => handleCheckout('YOUR_COURSE_PRICE_ID')}

// Line 182: Consultation button  
onClick={() => handleCheckout('YOUR_CONSULTATION_PRICE_ID')}
```

## 3. Webhook Setup

1. Go to Stripe Dashboard → Webhooks
2. Add endpoint: `https://yourdomain.com/api/webhook`
3. Select events:
   - `checkout.session.completed`
   - `payment_intent.succeeded`
4. Copy the webhook secret to your `.env.local`

## 4. Test the Integration

1. Use Stripe test cards:
   - Success: `4242 4242 4242 4242`
   - Decline: `4000 0000 0000 0002`

2. Test the full flow:
   - Click pricing button
   - Complete checkout
   - Verify success page loads
   - Check webhook receives events

## 5. Go Live

1. Switch to live mode in Stripe
2. Update environment variables with live keys
3. Update webhook endpoint to production URL
4. Test with real payment methods

## 6. Post-Payment Actions

After successful payment, you can add logic to:
- Send confirmation emails
- Grant course access
- Send PDF download links
- Update user database

The webhook handler is in `app/api/webhook/route.ts` - add your business logic there.










