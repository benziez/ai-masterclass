# AI Masterclass Course Landing Page

A modern, responsive landing page for "Make Money with AI: Beginner's Blueprint for 2025" built with Next.js 14, TypeScript, Tailwind CSS, and shadcn/ui.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Beautiful UI**: shadcn/ui components with Framer Motion animations
- **Mobile-First**: Fully responsive design optimized for all devices
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Performance**: Optimized images, lazy loading, and fast loading times
- **Accessibility**: WCAG compliant with proper alt text and keyboard navigation
- **Email Capture**: API endpoint ready for Supabase/Mailchimp integration
- **Payment Ready**: Stripe checkout integration prepared

## 📁 Project Structure

```
├── app/                    # Next.js 14 app directory
│   ├── api/               # API routes
│   │   ├── subscribe/     # Email subscription endpoint
│   │   └── checkout/      # Payment processing endpoint
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── pricing/           # Pricing page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── MediaHero.tsx     # Hero section with image carousel
│   ├── LifestyleShowcase.tsx # Lifestyle image grid
│   └── NavBar.tsx        # Navigation component
├── content/              # Content data
│   └── lifestyle.json    # Lifestyle images configuration
├── lib/                  # Utility functions
├── public/               # Static assets
│   └── images/           # Image assets
└── package.json          # Dependencies and scripts
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form (ready for integration)
- **Email**: Supabase/Mailchimp (ready for integration)
- **Payments**: Stripe (ready for integration)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ai-freedom-course
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📸 Adding Lifestyle Images

1. **Upload your images** to `public/images/lifestyle/`
   - Use the filenames specified in `content/lifestyle.json`
   - Optimize images for web (compress to <500KB each)
   - Recommended size: 1200x1500px (4:5 aspect ratio)

2. **Update the JSON** if needed:
   ```json
   {
     "src": "/images/lifestyle/your-image.jpg",
     "alt": "Descriptive alt text",
     "tag": "Freedom|Travel|Focus",
     "caption": "Your caption here",
     "priority": true
   }
   ```

3. **Test the website** to ensure images load correctly

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for production:

```env
# Email Service (Supabase)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key

# Email Service (Mailchimp)
MAILCHIMP_API_KEY=your_mailchimp_key
MAILCHIMP_LIST_ID=your_list_id

# Payment Processing (Stripe)
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### Customization

1. **Brand Colors**: Update CSS variables in `app/globals.css`
2. **Content**: Modify text in components and `content/lifestyle.json`
3. **Styling**: Customize Tailwind classes and component styles
4. **SEO**: Update metadata in `app/layout.tsx`

## 📱 Pages & Components

### Homepage (`/`)
- Hero section with lifestyle image carousel
- Features grid with icons and descriptions
- Lifestyle showcase with masonry layout
- Curriculum overview
- Student testimonials
- FAQ section
- Call-to-action sections

### Pricing Page (`/pricing`)
- Course pricing tiers
- Community membership options
- Professional support
- Payment FAQ
- Compliance notices

### Components
- **MediaHero**: Full-screen hero with image carousel
- **LifestyleShowcase**: Masonry grid of lifestyle images
- **NavBar**: Responsive navigation with mobile menu
- **UI Components**: shadcn/ui components (Button, Card, Toast, etc.)

## 🔌 API Endpoints

### `/api/subscribe` (POST)
Handles email subscriptions for the free guide.

**Request Body:**
```json
{
  "email": "user@example.com",
  "name": "User Name"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Successfully subscribed!"
}
```

### `/api/checkout` (POST)
Handles course purchases and community memberships.

**Request Body:**
```json
{
  "productId": "course|community",
  "priceId": "price_course|price_community"
}
```

## 🎨 Design System

### Colors
- **Primary**: Blue (#2563eb)
- **Secondary**: Gray (#6b7280)
- **Success**: Green (#10b981)
- **Warning**: Yellow (#f59e0b)
- **Error**: Red (#ef4444)

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, large scale
- **Body**: Regular weight, readable line height

### Spacing
- Consistent 8px grid system
- Responsive padding and margins
- Mobile-first approach

## 📊 Performance

### Lighthouse Scores (Target: 95+)
- **Performance**: Optimized images, lazy loading
- **Accessibility**: WCAG 2.1 AA compliant
- **Best Practices**: Security headers, HTTPS
- **SEO**: Meta tags, structured data

### Optimization
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- CSS purging with Tailwind
- Bundle analysis and optimization

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Configure environment variables
3. Deploy automatically on push

### Other Platforms
- **Netlify**: Compatible with Next.js
- **Railway**: Easy deployment with database
- **DigitalOcean**: App Platform support

## 🔒 Security & Compliance

### Legal Compliance
- **Income Disclaimers**: Clear "no income guarantees" messaging
- **Privacy Policy**: Required for email collection
- **Terms of Service**: Standard terms for course sales
- **GDPR**: Cookie consent and data handling

### Security Features
- Input validation on all forms
- CSRF protection
- Secure payment processing
- Environment variable protection

## 📈 Analytics & Tracking

### Recommended Tools
- **Google Analytics**: Traffic and conversion tracking
- **Hotjar**: User behavior and heatmaps
- **ConvertKit**: Email marketing and automation
- **Stripe**: Payment analytics and reporting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Email: support@aifreedom.com
- Documentation: [docs.aifreedom.com](https://docs.aifreedom.com)

## 🎯 Roadmap

- [ ] Email automation integration
- [ ] Stripe payment processing
- [ ] User dashboard
- [ ] Course content delivery
- [ ] Community features
- [ ] Mobile app
- [ ] Advanced analytics
- [ ] A/B testing framework

---

**Built with ❤️ for the AI Masterclass community**
 
