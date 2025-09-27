"use client"

import Link from 'next/link'

type Props = {
  priceMain: string
  priceStrike?: string
}

export default function StickyMobileCTA({ priceMain, priceStrike }: Props) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="mx-auto max-w-3xl px-3 pb-3">
        <div className="rounded-xl shadow-2xl border border-blue-200 bg-white">
          <div className="flex items-center justify-between p-3">
            <div className="text-sm font-semibold text-gray-800">
              <span className="mr-2">Get Training Now</span>
              {priceStrike && (
                <span className="line-through text-gray-400 mr-1">{priceStrike}</span>
              )}
              <span className="text-blue-600 font-extrabold">{priceMain}</span>
            </div>
            <Link
              href="/get-course"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-white text-sm font-semibold shadow hover:from-blue-700 hover:to-purple-700"
            >
              Get Training
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}












