# 📧 Email Setup Guide for AI Masterclass

## ✅ What's Already Done

Your success page now automatically sends course access emails when customers complete their purchase! Here's what happens:

1. **Customer completes payment** → Redirected to `/success` page
2. **Success page loads** → Automatically triggers email sending
3. **Email sent** → Customer receives course access details immediately

## 🔧 Setup Required

### Step 1: Sign up for Resend
1. Go to [https://resend.com](https://resend.com)
2. Create a free account
3. Verify your email

### Step 2: Get Your API Key
1. Go to [Resend Dashboard](https://resend.com/api-keys)
2. Click "Create API Key"
3. Name it "AI Masterclass"
4. Copy the API key (starts with `re_`)

### Step 3: Add API Key to Your Site
1. Create a `.env.local` file in your project root
2. Add this line:
   ```
   RESEND_API_KEY=your_actual_api_key_here
   ```
3. Replace `your_actual_api_key_here` with your real API key

### Step 4: Add Your Domain (Optional but Recommended)
1. In Resend Dashboard, go to "Domains"
2. Add `aimasterclass.info`
3. Follow DNS verification steps
4. This allows emails to come from `noreply@aimasterclass.info`

## 📧 Email Content

The automatic email includes:
- ✅ Welcome message
- ✅ List of course materials
- ✅ Direct link to curriculum page
- ✅ Support contact information
- ✅ Professional HTML formatting

## 🧪 Testing

1. **Test locally:**
   - Go to `http://localhost:3000/success?session_id=test123`
   - Check browser console for email sending status

2. **Test on live site:**
   - Make a test purchase
   - Check if email arrives in your inbox

## 🚀 Deployment

After adding your API key:
1. Run `npm run build` (should work without errors)
2. Deploy to Netlify as usual
3. Add the `RESEND_API_KEY` environment variable in Netlify dashboard

## 💡 Pro Tips

- **Free tier:** Resend gives you 3,000 emails/month free
- **Delivery:** Emails typically arrive within 1-2 seconds
- **Tracking:** Check Resend dashboard for delivery stats
- **Fallback:** If email fails, customer still sees success page with course access

## 🆘 Troubleshooting

**Email not sending?**
- Check API key is correct in `.env.local`
- Verify domain is added to Resend (optional)
- Check browser console for error messages

**Build failing?**
- Make sure `.env.local` exists with valid API key
- Run `npm run build` to test

**Need help?**
- Resend has excellent documentation
- Check their support if you have issues

---

**🎉 You're all set!** Your customers will now receive automatic course access emails immediately after purchase.










