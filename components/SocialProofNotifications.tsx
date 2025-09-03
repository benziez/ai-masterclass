'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Notification {
  id: number
  name: string
  location: string
  time: string
}

export default function SocialProofNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  const fakeNotifications: Notification[] = [
    { id: 1, name: "Sarah M.", location: "New York", time: "2 minutes ago" },
    { id: 2, name: "Mike R.", location: "Los Angeles", time: "5 minutes ago" },
    { id: 3, name: "Jessica L.", location: "Chicago", time: "8 minutes ago" },
    { id: 4, name: "David K.", location: "Miami", time: "12 minutes ago" },
    { id: 5, name: "Emma W.", location: "Seattle", time: "15 minutes ago" },
    { id: 6, name: "Alex T.", location: "Austin", time: "18 minutes ago" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % fakeNotifications.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 100, scale: 0.8 }}
          transition={{ duration: 0.5 }}
          className="bg-white text-gray-800 p-4 rounded-lg shadow-lg border border-gray-200 max-w-sm"
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">✓</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold">
                {fakeNotifications[currentIndex].name} from {fakeNotifications[currentIndex].location}
              </p>
              <p className="text-xs text-gray-600">
                just purchased the AI Masterclass • {fakeNotifications[currentIndex].time}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}



