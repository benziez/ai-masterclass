"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Link from "next/link"

type ExitIntentModalProps = {
  suppress?: boolean
}

const STORAGE_KEY = "aimc_exit_intent_shown_session"

export default function ExitIntentModal({ suppress }: ExitIntentModalProps) {
  const [open, setOpen] = useState(false)
  const hasBound = useRef(false)

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    if (suppress) return
    if (typeof window === "undefined") return
    if (sessionStorage.getItem(STORAGE_KEY) === "1") return
    if (hasBound.current) return

    const onMouseOut = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        sessionStorage.setItem(STORAGE_KEY, "1")
        setOpen(true)
        removeListeners()
      }
    }

    const onVisibility = () => {
      if (document.visibilityState === "hidden") return
    }

    const onBeforeUnload = () => {
      // no-op: reserved for future
    }

    const onTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0]
      if (!touch) return
      if (touch.clientY < 12) {
        sessionStorage.setItem(STORAGE_KEY, "1")
        setOpen(true)
        removeListeners()
      }
    }

    const addListeners = () => {
      window.addEventListener("mouseout", onMouseOut)
      document.addEventListener("visibilitychange", onVisibility)
      window.addEventListener("beforeunload", onBeforeUnload)
      window.addEventListener("touchstart", onTouchStart, { passive: true })
      hasBound.current = true
    }

    const removeListeners = () => {
      window.removeEventListener("mouseout", onMouseOut)
      document.removeEventListener("visibilitychange", onVisibility)
      window.removeEventListener("beforeunload", onBeforeUnload)
      window.removeEventListener("touchstart", onTouchStart)
      hasBound.current = false
    }

    addListeners()
    return () => removeListeners()
  }, [suppress])

  if (suppress) return null

  return (
    <div
      className={`fixed inset-0 z-[60] ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/50 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
        onClick={close}
      />

      {/* Modal */}
      <div
        className={`absolute left-1/2 top-1/2 w-[92%] max-w-lg -translate-x-1/2 -translate-y-1/2 transform rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-2xl transition-all ${open ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="p-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300 text-sm font-semibold mb-3">
              Limited-Time Offer
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Wait! Get Your Free Advanced Prompt Pack
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              The exact prompts our students used to generate <span className="font-semibold text-green-600 dark:text-green-400">$2.3M+ in profits</span> with AI tools. <span className="font-bold text-blue-600 dark:text-blue-400">100% Free!</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/free-guide" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 font-semibold shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-purple-700 transition">
                Get Free Prompt Pack
              </Link>
              <button onClick={close} className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800">
                No thanks
              </button>
            </div>
            <p className="mt-3 text-xs text-gray-400">Free prompt pack + exclusive follow-up offers.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
