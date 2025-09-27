# AI Masterclass: Launchpad

A comprehensive SaaS web application that helps users launch and scale their AI businesses. After completing the AI Masterclass, Launchpad becomes the execution tool that identifies the best income-ready AI service and provides qualified local prospects with personalized outreach.

## 🎯 Core Features

### Three Pillars
1. **Path** - AI recommends the best income path based on skills, time, budget, and risk tolerance
2. **Plan** - Step-by-step launch plans with assets, pricing, and offer packaging
3. **Pipeline** - Local client discovery + personalized cold emails/DMs + tracking

### Key Functionality
- **Onboarding Quiz** - Captures user skills, interests, hours, budget, risk tolerance, and goals
- **AI Recommendations** - Generates top 3 income paths with difficulty, ramp time, and earning potential
- **Launch Plans** - 14/30-day plans with deliverables, pricing, and offer packaging
- **Client Finder** - Search and filter local businesses by city, industry, size, and AI readiness
- **Outreach Generator** - 1-click personalized cold emails/DMs with tone/style options
- **CRM Dashboard** - Track leads, status updates, notes, and export functionality
- **Account Management** - Free vs Pro plan gating with usage tracking

## 🛠 Tech Stack

- **Frontend**: Next.js 14 (App Router) + TypeScript + Tailwind CSS
- **Backend**: Next.js Route Handlers + Mongoose (MongoDB)
- **AI**: OpenAI API (GPT-4o/GPT-4) via server-side endpoints
- **Auth**: JWT-based authentication with email/password
- **Forms**: React Hook Form + Zod validation
- **UI**: Radix UI + Tailwind CSS
- **State**: Minimal client-side state with server actions

## 📁 Project Structure

```
ai/
├── app/
│   ├── software/                 # Launchpad app
│   │   ├── app/                  # Main app pages
│   │   │   ├── page.tsx          # Dashboard
│   │   │   ├── onboarding/       # Onboarding quiz
│   │   │   ├── recommendations/  # AI recommendations
│   │   │   ├── clients/          # Client finder
│   │   │   ├── outreach/         # Outreach generator & CRM
│   │   │   └── account/          # Account settings
│   │   └── components/           # App-specific components
│   ├── api/                      # API routes
│   │   ├── auth/                 # Authentication
│   │   ├── onboarding/           # Onboarding data
│   │   ├── recommendations/      # AI recommendations
│   │   ├── businesses/           # Business search
│   │   └── outreach/             # Outreach management
│   └── ...                       # Main site pages
├── models/                       # Mongoose schemas
├── components/ui/                # Reusable UI components
├── lib/                          # Utilities
└── scripts/                      # Database seeding
```

## 🚀 Setup Instructions

### Prerequisites
- Node.js 18+ 
- MongoDB (local or cloud)
- OpenAI API key (optional for MVP)

### 1. Clone and Install
```bash
git clone <repository-url>
cd ai
npm install
```

### 2. Environment Variables
Create `.env.local`:
```env
MONGODB_URI=mongodb://localhost:27017/ai-launchpad
JWT_SECRET=your-super-secret-jwt-key
OPENAI_API_KEY=your-openai-api-key
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 3. Database Setup
```bash
# Start MongoDB (if running locally)
mongod

# Seed the database with sample businesses
node scripts/seed-businesses.js
```

### 4. Run Development Server
```bash
npm run dev
```

Visit `http://localhost:3000/software` to access the Launchpad app.

## 📊 Database Models

### User
- Email, password, name, plan (free/pro), onboarding status

### Onboarding
- Skills, experience level, hours per week, budget, risk tolerance
- Preferred work type, industries of interest, main goal, location

### Recommendation
- Top 3 AI business recommendations with difficulty, earning potential
- Required tools, pros/cons, market demand, competition level

### Business
- Name, industry, location, contact info, size, AI readiness
- Pain points, potential AI services, social media links

### Outreach
- User ID, business ID, type (email/LinkedIn/Instagram/Facebook)
- Subject, message, status (queued/sent/replied/booked/declined)
- Notes, timestamps

## 🔑 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user
- `POST /api/auth/logout` - User logout

### Onboarding
- `POST /api/onboarding/save` - Save onboarding data

### Recommendations
- `POST /api/recommendations/generate` - Generate AI recommendations
- `GET /api/recommendations/get` - Get user recommendations

### Businesses
- `GET /api/businesses/search` - Search businesses with filters
- `GET /api/businesses/[id]` - Get specific business

### Outreach
- `POST /api/outreach/generate` - Generate personalized outreach
- `POST /api/outreach/save` - Save outreach message
- `GET /api/outreach/get` - Get user's outreach history

## 🎨 UI Components

Built with Radix UI primitives and Tailwind CSS:
- Cards, Buttons, Inputs, Textareas
- Badges, Progress bars, Radio groups
- Checkboxes, Labels, Toasts
- Responsive design with dark mode support

## 🔐 Authentication

JWT-based authentication with:
- Email/password registration and login
- Secure cookie-based session management
- Protected API routes with middleware
- User context provider for client-side auth state

## 📱 Responsive Design

- Mobile-first approach with Tailwind CSS
- Responsive grid layouts and navigation
- Touch-friendly interface elements
- Optimized for desktop and mobile usage

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms
- Ensure MongoDB connection string is updated
- Set all environment variables
- Build and deploy the Next.js application

## 🔧 Development

### Adding New Features
1. Create API routes in `app/api/`
2. Add database models in `models/`
3. Build UI components in `components/`
4. Update navigation in `Sidebar.tsx`

### Database Seeding
The seed script creates 20+ sample businesses across different industries and cities. To add more:
1. Edit `scripts/seed-businesses.js`
2. Add new business objects to the `businesses` array
3. Run `node scripts/seed-businesses.js`

## 📈 Future Enhancements

- **Stripe Integration** - Payment processing for Pro subscriptions
- **Advanced AI** - Real OpenAI API integration for recommendations
- **Email Automation** - Automated outreach sending
- **Analytics Dashboard** - Detailed performance metrics
- **Team Collaboration** - Multi-user workspaces
- **API Integrations** - CRM and email service connections

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is proprietary software. All rights reserved.

---

**AI Masterclass: Launchpad** - Your AI business execution tool for finding clients and generating personalized outreach.