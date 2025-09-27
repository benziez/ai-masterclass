const mongoose = require('mongoose')
require('dotenv').config({ path: '.env.local' })

// Business schema
const businessSchema = new mongoose.Schema({
  name: String,
  industry: String,
  city: String,
  state: String,
  website: String,
  email: String,
  phone: String,
  description: String,
  size: { type: String, enum: ['small', 'medium', 'large'] },
  aiReadiness: { type: String, enum: ['low', 'medium', 'high'], default: 'medium' },
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
}, { timestamps: true })

const Business = mongoose.model('Business', businessSchema)

const businesses = [
  // Healthcare
  {
    name: "Downtown Family Medical",
    industry: "healthcare",
    city: "Austin",
    state: "Texas",
    website: "downtownfamilymedical.com",
    email: "info@downtownfamilymedical.com",
    phone: "(512) 555-0101",
    description: "Family medical practice serving the downtown Austin community for over 15 years.",
    size: "medium",
    aiReadiness: "low",
    painPoints: ["Patient scheduling", "Medical record management", "Insurance processing"],
    potentialServices: ["AI scheduling assistant", "Medical record automation", "Insurance claim processing"],
    contactInfo: {
      ownerName: "Dr. Sarah Johnson",
      ownerEmail: "sarah@downtownfamilymedical.com",
      ownerLinkedIn: "linkedin.com/in/sarah-johnson-md"
    }
  },
  {
    name: "Wellness Plus Clinic",
    industry: "healthcare",
    city: "Miami",
    state: "Florida",
    website: "wellnessplusclinic.com",
    email: "contact@wellnessplusclinic.com",
    phone: "(305) 555-0202",
    description: "Holistic wellness clinic offering integrative medicine and preventive care.",
    size: "small",
    aiReadiness: "medium",
    painPoints: ["Patient education", "Appointment reminders", "Treatment tracking"],
    potentialServices: ["AI patient education", "Automated reminders", "Health tracking app"],
    contactInfo: {
      ownerName: "Dr. Maria Rodriguez",
      ownerEmail: "maria@wellnessplusclinic.com"
    }
  },

  // Finance
  {
    name: "Austin Financial Advisors",
    industry: "finance",
    city: "Austin",
    state: "Texas",
    website: "austinfinancialadvisors.com",
    email: "info@austinfinancialadvisors.com",
    phone: "(512) 555-0303",
    description: "Independent financial advisory firm helping individuals and families plan for retirement.",
    size: "small",
    aiReadiness: "medium",
    painPoints: ["Client onboarding", "Portfolio analysis", "Market research"],
    potentialServices: ["AI client onboarding", "Automated portfolio analysis", "Market research automation"],
    contactInfo: {
      ownerName: "Michael Chen",
      ownerEmail: "michael@austinfinancialadvisors.com",
      ownerLinkedIn: "linkedin.com/in/michael-chen-cfa"
    }
  },
  {
    name: "Miami Business Credit",
    industry: "finance",
    city: "Miami",
    state: "Florida",
    website: "miamibusinesscredit.com",
    email: "info@miamibusinesscredit.com",
    phone: "(305) 555-0404",
    description: "Business credit and lending services for small to medium enterprises.",
    size: "medium",
    aiReadiness: "high",
    painPoints: ["Credit analysis", "Loan processing", "Risk assessment"],
    potentialServices: ["AI credit scoring", "Automated loan processing", "Risk assessment tools"],
    contactInfo: {
      ownerName: "Carlos Mendez",
      ownerEmail: "carlos@miamibusinesscredit.com"
    }
  },

  // E-commerce
  {
    name: "Austin Artisan Goods",
    industry: "ecommerce",
    city: "Austin",
    state: "Texas",
    website: "austinartisangoods.com",
    email: "hello@austinartisangoods.com",
    phone: "(512) 555-0505",
    description: "Online marketplace for local artisan products and handmade goods.",
    size: "small",
    aiReadiness: "medium",
    painPoints: ["Product descriptions", "Customer service", "Inventory management"],
    potentialServices: ["AI product descriptions", "Chatbot customer service", "Inventory optimization"],
    contactInfo: {
      ownerName: "Jennifer Walsh",
      ownerEmail: "jennifer@austinartisangoods.com",
      socialMedia: {
        instagram: "@austinartisangoods"
      }
    }
  },
  {
    name: "Miami Fashion Hub",
    industry: "ecommerce",
    city: "Miami",
    state: "Florida",
    website: "miamifashionhub.com",
    email: "info@miamifashionhub.com",
    phone: "(305) 555-0606",
    description: "Trendy fashion e-commerce store specializing in Miami-inspired clothing and accessories.",
    size: "medium",
    aiReadiness: "high",
    painPoints: ["Product recommendations", "Size fitting", "Return processing"],
    potentialServices: ["AI size recommendations", "Virtual try-on", "Automated returns"],
    contactInfo: {
      ownerName: "Isabella Santos",
      ownerEmail: "isabella@miamifashionhub.com",
      socialMedia: {
        instagram: "@miamifashionhub",
        facebook: "MiamiFashionHub"
      }
    }
  },

  // Real Estate
  {
    name: "Austin Premier Properties",
    industry: "real_estate",
    city: "Austin",
    state: "Texas",
    website: "austinpremierproperties.com",
    email: "info@austinpremierproperties.com",
    phone: "(512) 555-0707",
    description: "Luxury real estate agency specializing in high-end residential properties.",
    size: "medium",
    aiReadiness: "low",
    painPoints: ["Property matching", "Lead qualification", "Market analysis"],
    potentialServices: ["AI property matching", "Lead scoring", "Market analysis automation"],
    contactInfo: {
      ownerName: "David Thompson",
      ownerEmail: "david@austinpremierproperties.com",
      ownerLinkedIn: "linkedin.com/in/david-thompson-realtor"
    }
  },
  {
    name: "Miami Beach Realty",
    industry: "real_estate",
    city: "Miami",
    state: "Florida",
    website: "miamibeachrealty.com",
    email: "contact@miamibeachrealty.com",
    phone: "(305) 555-0808",
    description: "Full-service real estate agency serving Miami Beach and surrounding areas.",
    size: "large",
    aiReadiness: "medium",
    painPoints: ["Client communication", "Property valuation", "Document processing"],
    potentialServices: ["AI client communication", "Automated valuations", "Document processing"],
    contactInfo: {
      ownerName: "Ana Martinez",
      ownerEmail: "ana@miamibeachrealty.com"
    }
  },

  // Education
  {
    name: "Austin Learning Center",
    industry: "education",
    city: "Austin",
    state: "Texas",
    website: "austinlearningcenter.com",
    email: "info@austinlearningcenter.com",
    phone: "(512) 555-0909",
    description: "Private tutoring and test preparation center for K-12 students.",
    size: "small",
    aiReadiness: "medium",
    painPoints: ["Student progress tracking", "Curriculum personalization", "Parent communication"],
    potentialServices: ["AI progress tracking", "Personalized learning paths", "Parent communication automation"],
    contactInfo: {
      ownerName: "Dr. Lisa Park",
      ownerEmail: "lisa@austinlearningcenter.com"
    }
  },
  {
    name: "Miami Tech Academy",
    industry: "education",
    city: "Miami",
    state: "Florida",
    website: "miamitechacademy.com",
    email: "hello@miamitechacademy.com",
    phone: "(305) 555-1010",
    description: "Coding bootcamp and technology training for adults looking to change careers.",
    size: "medium",
    aiReadiness: "high",
    painPoints: ["Student assessment", "Job placement", "Curriculum updates"],
    potentialServices: ["AI student assessment", "Job matching platform", "Curriculum optimization"],
    contactInfo: {
      ownerName: "Roberto Silva",
      ownerEmail: "roberto@miamitechacademy.com",
      ownerLinkedIn: "linkedin.com/in/roberto-silva-tech"
    }
  },

  // Technology
  {
    name: "Austin Software Solutions",
    industry: "technology",
    city: "Austin",
    state: "Texas",
    website: "austinsoftwaresolutions.com",
    email: "info@austinsoftwaresolutions.com",
    phone: "(512) 555-1111",
    description: "Custom software development company specializing in web and mobile applications.",
    size: "medium",
    aiReadiness: "high",
    painPoints: ["Code documentation", "Testing automation", "Client communication"],
    potentialServices: ["AI code documentation", "Automated testing", "Client communication tools"],
    contactInfo: {
      ownerName: "Alex Kim",
      ownerEmail: "alex@austinsoftwaresolutions.com",
      ownerLinkedIn: "linkedin.com/in/alex-kim-dev"
    }
  },
  {
    name: "Miami Digital Agency",
    industry: "technology",
    city: "Miami",
    state: "Florida",
    website: "miamidigitalagency.com",
    email: "contact@miamidigitalagency.com",
    phone: "(305) 555-1212",
    description: "Full-service digital marketing agency offering web design, SEO, and social media management.",
    size: "large",
    aiReadiness: "high",
    painPoints: ["Content creation", "Campaign optimization", "Client reporting"],
    potentialServices: ["AI content creation", "Campaign optimization", "Automated reporting"],
    contactInfo: {
      ownerName: "Sofia Herrera",
      ownerEmail: "sofia@miamidigitalagency.com"
    }
  },

  // Consulting
  {
    name: "Austin Business Consulting",
    industry: "consulting",
    city: "Austin",
    state: "Texas",
    website: "austinbusinessconsulting.com",
    email: "info@austinbusinessconsulting.com",
    phone: "(512) 555-1313",
    description: "Management consulting firm helping small businesses improve operations and growth.",
    size: "small",
    aiReadiness: "medium",
    painPoints: ["Client analysis", "Report generation", "Market research"],
    potentialServices: ["AI business analysis", "Automated reporting", "Market research tools"],
    contactInfo: {
      ownerName: "James Wilson",
      ownerEmail: "james@austinbusinessconsulting.com",
      ownerLinkedIn: "linkedin.com/in/james-wilson-consultant"
    }
  },
  {
    name: "Miami Strategy Group",
    industry: "consulting",
    city: "Miami",
    state: "Florida",
    website: "miamistrategygroup.com",
    email: "hello@miamistrategygroup.com",
    phone: "(305) 555-1414",
    description: "Strategic consulting firm specializing in business transformation and digital strategy.",
    size: "medium",
    aiReadiness: "high",
    painPoints: ["Data analysis", "Presentation creation", "Client onboarding"],
    potentialServices: ["AI data analysis", "Automated presentations", "Client onboarding automation"],
    contactInfo: {
      ownerName: "Elena Vasquez",
      ownerEmail: "elena@miamistrategygroup.com"
    }
  },

  // Retail
  {
    name: "Austin Outdoor Gear",
    industry: "retail",
    city: "Austin",
    state: "Texas",
    website: "austinoutdoorgear.com",
    email: "info@austinoutdoorgear.com",
    phone: "(512) 555-1515",
    description: "Outdoor gear and equipment store serving Austin's active community.",
    size: "small",
    aiReadiness: "low",
    painPoints: ["Inventory management", "Customer recommendations", "Staff scheduling"],
    potentialServices: ["AI inventory optimization", "Product recommendations", "Staff scheduling automation"],
    contactInfo: {
      ownerName: "Mark Johnson",
      ownerEmail: "mark@austinoutdoorgear.com"
    }
  },
  {
    name: "Miami Beauty Supply",
    industry: "retail",
    city: "Miami",
    state: "Florida",
    website: "miamibeautysupply.com",
    email: "contact@miamibeautysupply.com",
    phone: "(305) 555-1616",
    description: "Beauty and cosmetics supply store serving Miami's diverse community.",
    size: "medium",
    aiReadiness: "medium",
    painPoints: ["Product recommendations", "Customer service", "Trend analysis"],
    potentialServices: ["AI beauty recommendations", "Chatbot customer service", "Trend analysis tools"],
    contactInfo: {
      ownerName: "Carmen Lopez",
      ownerEmail: "carmen@miamibeautysupply.com",
      socialMedia: {
        instagram: "@miamibeautysupply"
      }
    }
  },

  // Manufacturing
  {
    name: "Austin Precision Manufacturing",
    industry: "manufacturing",
    city: "Austin",
    state: "Texas",
    website: "austinprecisionmfg.com",
    email: "info@austinprecisionmfg.com",
    phone: "(512) 555-1717",
    description: "Precision manufacturing company specializing in aerospace and automotive components.",
    size: "large",
    aiReadiness: "medium",
    painPoints: ["Quality control", "Predictive maintenance", "Supply chain optimization"],
    potentialServices: ["AI quality control", "Predictive maintenance", "Supply chain optimization"],
    contactInfo: {
      ownerName: "Robert Davis",
      ownerEmail: "robert@austinprecisionmfg.com"
    }
  },
  {
    name: "Miami Electronics Corp",
    industry: "manufacturing",
    city: "Miami",
    state: "Florida",
    website: "miamielectronics.com",
    email: "info@miamielectronics.com",
    phone: "(305) 555-1818",
    description: "Electronics manufacturing company producing consumer and industrial electronic devices.",
    size: "medium",
    aiReadiness: "high",
    painPoints: ["Production optimization", "Quality assurance", "Demand forecasting"],
    potentialServices: ["Production optimization", "AI quality assurance", "Demand forecasting"],
    contactInfo: {
      ownerName: "Patricia Gonzalez",
      ownerEmail: "patricia@miamielectronics.com"
    }
  },

  // Services
  {
    name: "Austin Cleaning Services",
    industry: "services",
    city: "Austin",
    state: "Texas",
    website: "austincleaningservices.com",
    email: "info@austincleaningservices.com",
    phone: "(512) 555-1919",
    description: "Professional cleaning services for residential and commercial properties.",
    size: "small",
    aiReadiness: "low",
    painPoints: ["Scheduling optimization", "Customer communication", "Quality tracking"],
    potentialServices: ["AI scheduling optimization", "Customer communication automation", "Quality tracking"],
    contactInfo: {
      ownerName: "Maria Garcia",
      ownerEmail: "maria@austincleaningservices.com"
    }
  },
  {
    name: "Miami Event Planning",
    industry: "services",
    city: "Miami",
    state: "Florida",
    website: "miamieventplanning.com",
    email: "hello@miamieventplanning.com",
    phone: "(305) 555-2020",
    description: "Full-service event planning company specializing in weddings and corporate events.",
    size: "medium",
    aiReadiness: "medium",
    painPoints: ["Vendor coordination", "Timeline management", "Client communication"],
    potentialServices: ["Vendor coordination automation", "AI timeline management", "Client communication tools"],
    contactInfo: {
      ownerName: "Victoria Rodriguez",
      ownerEmail: "victoria@miamieventplanning.com",
      socialMedia: {
        instagram: "@miamieventplanning"
      }
    }
  }
]

async function seedBusinesses() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ai-launchpad')
    console.log('Connected to MongoDB')

    // Clear existing businesses
    await Business.deleteMany({})
    console.log('Cleared existing businesses')

    // Insert new businesses
    const insertedBusinesses = await Business.insertMany(businesses)
    console.log(`Inserted ${insertedBusinesses.length} businesses`)

    // Create indexes
    await Business.collection.createIndex({ city: 1, state: 1, industry: 1 })
    console.log('Created indexes')

    console.log('Seeding completed successfully!')
  } catch (error) {
    console.error('Seeding error:', error)
  } finally {
    await mongoose.disconnect()
    console.log('Disconnected from MongoDB')
  }
}

seedBusinesses()
