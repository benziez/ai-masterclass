import mongoose, { Document, Schema } from 'mongoose'

export interface IRecommendation extends Document {
  userId: mongoose.Types.ObjectId
  recommendations: {
    rank: number
    title: string
    description: string
    difficulty: 'easy' | 'medium' | 'hard'
    rampTime: string
    earningPotential: {
      min: number
      max: number
      timeframe: string
    }
    requiredTools: string[]
    pros: string[]
    cons: string[]
    marketDemand: 'low' | 'medium' | 'high'
    competition: 'low' | 'medium' | 'high'
  }[]
  createdAt: Date
  updatedAt: Date
}

const RecommendationSchema = new Schema<IRecommendation>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  recommendations: [{
    rank: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    difficulty: {
      type: String,
      enum: ['easy', 'medium', 'hard'],
      required: true
    },
    rampTime: {
      type: String,
      required: true
    },
    earningPotential: {
      min: {
        type: Number,
        required: true
      },
      max: {
        type: Number,
        required: true
      },
      timeframe: {
        type: String,
        required: true
      }
    },
    requiredTools: [String],
    pros: [String],
    cons: [String],
    marketDemand: {
      type: String,
      enum: ['low', 'medium', 'high'],
      required: true
    },
    competition: {
      type: String,
      enum: ['low', 'medium', 'high'],
      required: true
    }
  }]
}, {
  timestamps: true
})

export default mongoose.models.Recommendation || mongoose.model<IRecommendation>('Recommendation', RecommendationSchema)
