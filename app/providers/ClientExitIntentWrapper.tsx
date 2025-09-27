"use client"

import { usePathname } from 'next/navigation'
import ExitIntentModal from '@/components/ExitIntentModal'

export default function ClientExitIntentWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const suppress = pathname?.startsWith('/get-course')
  return (
    <>
      <ExitIntentModal suppress={suppress} />
      {children}
    </>
  )
}
