import mongoose, { Document, Schema } from 'mongoose'

export interface IOnboarding extends Document {
  userId: mongoose.Types.ObjectId
  skills: string[]
  experienceLevel: 'beginner' | 'intermediate' | 'advanced'
  hoursPerWeek: number
  monthlyBudget: number
  riskTolerance: 'low' | 'medium' | 'high'
  preferredWorkType: 'remote' | 'local' | 'hybrid'
  industriesOfInterest: string[]
  mainGoal: 'replace_income' | 'freelance' | 'agency' | 'side_income'
  location: {
    city: string
    state: string
  }
  createdAt: Date
  updatedAt: Date
}

const OnboardingSchema = new Schema<IOnboarding>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  skills: [{
    type: String,
    enum: ['writing', 'design', 'video', 'automation', 'sales', 'marketing', 'coding', 'data_analysis', 'customer_service', 'project_management']
  }],
  experienceLevel: {
    type: String,
    enum: ['beginner', 'intermediate', 'advanced'],
    required: true
  },
  hoursPerWeek: {
    type: Number,
    required: true,
    min: 1,
    max: 80
  },
  monthlyBudget: {
    type: Number,
    required: true,
    min: 0
  },
  riskTolerance: {
    type: String,
    enum: ['low', 'medium', 'high'],
    required: true
  },
  preferredWorkType: {
    type: String,
    enum: ['remote', 'local', 'hybrid'],
    required: true
  },
  industriesOfInterest: [{
    type: String,
    enum: ['healthcare', 'finance', 'ecommerce', 'real_estate', 'education', 'technology', 'consulting', 'retail', 'manufacturing', 'services']
  }],
  mainGoal: {
    type: String,
    enum: ['replace_income', 'freelance', 'agency', 'side_income'],
    required: true
  },
  location: {
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    }
  }
}, {
  timestamps: true
})

export default mongoose.models.Onboarding || mongoose.model<IOnboarding>('Onboarding', OnboardingSchema)
