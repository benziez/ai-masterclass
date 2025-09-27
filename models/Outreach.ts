import mongoose, { Document, Schema } from 'mongoose'

export interface IOutreach extends Document {
  userId: mongoose.Types.ObjectId
  businessId: mongoose.Types.ObjectId
  type: 'email' | 'linkedin' | 'instagram' | 'facebook'
  subject?: string
  message: string
  status: 'queued' | 'sent' | 'replied' | 'booked' | 'declined'
  notes?: string
  sentAt?: Date
  repliedAt?: Date
  createdAt: Date
  updatedAt: Date
}

const OutreachSchema = new Schema<IOutreach>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  businessId: {
    type: Schema.Types.ObjectId,
    ref: 'Business',
    required: true
  },
  type: {
    type: String,
    enum: ['email', 'linkedin', 'instagram', 'facebook'],
    required: true
  },
  subject: String,
  message: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['queued', 'sent', 'replied', 'booked', 'declined'],
    default: 'queued'
  },
  notes: String,
  sentAt: Date,
  repliedAt: Date
}, {
  timestamps: true
})

// Index for efficient querying
OutreachSchema.index({ userId: 1, status: 1 })
OutreachSchema.index({ businessId: 1 })

export default mongoose.models.Outreach || mongoose.model<IOutreach>('Outreach', OutreachSchema)
