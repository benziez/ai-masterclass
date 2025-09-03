'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import lifestyleData from '@/content/lifestyle.json'

export default function LifestyleShowcase() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Live the AI Masterclass Lifestyle
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            See how our students are working from anywhere in the world while building their AI-powered businesses
          </p>
        </motion.div>

        {/* Mobile-First Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {lifestyleData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={index < 3}
                  />
                  {/* Mobile-friendly overlay that's always visible on mobile */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Content overlay - always visible on mobile, hover on desktop */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white transform sm:translate-y-full sm:group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-block px-2 sm:px-3 py-1 bg-blue-600/90 backdrop-blur-sm rounded-full text-xs font-medium">
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {item.caption}
                  </p>
                </div>

                {/* Mobile touch indicator */}
                <div className="absolute top-3 right-3 sm:hidden">
                  <div className="w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:hidden"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Tap any image to see more details
          </p>
        </motion.div>
      </div>
    </section>
  )
}
