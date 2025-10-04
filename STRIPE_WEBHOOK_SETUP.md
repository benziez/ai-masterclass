# Stripe Webhook Setup Guide

## Environment Variables Needed

Add these to your `.env.local` file:

```bash
# Stripe Keys
STRIPE_SECRET_KEY=sk_test_... # Your Stripe secret key
STRIPE_WEBHOOK_SECRET=whsec_... # Your webhook secret (from Stripe dashboard)

# Base URL (for production)
NEXT_PUBLIC_BASE_URL=https://aimasterclass.info
```

## How to Set Up Stripe Webhook

### 1. Go to Stripe Dashboard
- Visit: https://dashboard.stripe.com/webhooks
- Click "Add endpoint"

### 2. Configure Webhook
- **Endpoint URL:** `https://aimasterclass.info/api/stripe-webhook`
- **Events to send:**
  - `checkout.session.completed`
  - `payment_intent.succeeded`

### 3. Get Webhook Secret
- After creating the webhook, click on it
- Copy the "Signing secret" (starts with `whsec_`)
- Add it to your `.env.local` as `STRIPE_WEBHOOK_SECRET`

## How It Works

1. **Customer buys course** → Stripe processes payment
2. **Stripe sends webhook** → To your `/api/stripe-webhook` endpoint
3. **Your code detects purchase** → Automatically triggers buyer email sequence
4. **Customer gets welcome email** → Within minutes of purchase

## Testing

### Test Mode
- Use Stripe test mode for testing
- Test webhook with Stripe CLI or test payments

### Production
- Update webhook URL to your live domain
- Use live Stripe keys

## What Happens Automatically

✅ **Purchase detected** → Webhook receives payment confirmation
✅ **Buyer sequence triggered** → Customer gets welcome email
✅ **Added to Resend** → Contact added to your audience
✅ **7-day sequence** → Customer gets onboarding emails

## No Manual Work Required!

Once set up, the system is completely automated. Every purchase automatically triggers the buyer email sequence.
