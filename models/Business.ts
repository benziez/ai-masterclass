import mongoose, { Document, Schema } from 'mongoose'

export interface IBusiness extends Document {
  name: string
  industry: string
  city: string
  state: string
  website?: string
  email?: string
  phone?: string
  description: string
  size: 'small' | 'medium' | 'large'
  aiReadiness: 'low' | 'medium' | 'high'
  painPoints: string[]
  potentialServices: string[]
  contactInfo: {
    ownerName?: string
    ownerEmail?: string
    ownerLinkedIn?: string
    socialMedia?: {
      facebook?: string
      instagram?: string
      linkedin?: string
    }
  }
  createdAt: Date
  updatedAt: Date
}

const BusinessSchema = new Schema<IBusiness>({
  name: {
    type: String,
    required: true
  },
  industry: {
    type: String,
    required: true,
    enum: ['healthcare', 'finance', 'ecommerce', 'real_estate', 'education', 'technology', 'consulting', 'retail', 'manufacturing', 'services', 'restaurant', 'fitness', 'beauty', 'legal', 'accounting']
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  website: String,
  email: String,
  phone: String,
  description: {
    type: String,
    required: true
  },
  size: {
    type: String,
    enum: ['small', 'medium', 'large'],
    required: true
  },
  aiReadiness: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium'
  },
  painPoints: [String],
  potentialServices: [String],
  contactInfo: {
    ownerName: String,
    ownerEmail: String,
    ownerLinkedIn: String,
    socialMedia: {
      facebook: String,
      instagram: String,
      linkedin: String
    }
  }
}, {
  timestamps: true
})

// Index for efficient searching
BusinessSchema.index({ city: 1, state: 1, industry: 1 })

export default mongoose.models.Business || mongoose.model<IBusiness>('Business', BusinessSchema)
