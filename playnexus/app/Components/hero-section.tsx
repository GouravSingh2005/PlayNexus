"use client"

import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl bg-violet-100 dark:bg-violet-900/20 px-4 py-1.5 text-sm font-medium text-violet-800 dark:text-violet-300"
        >
          The Ultimate Streaming Platform
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white"
        >
          Stream and Connect with <span className="text-violet-600 dark:text-violet-500">Playnexus</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="max-w-[42rem] leading-normal text-gray-600 dark:text-gray-400 sm:text-xl sm:leading-8"
        >
          The next generation platform where streamers create amazing content and viewers join interactive streams in
          real-time.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="space-x-4"
        >
          <button className="inline-flex h-10 items-center justify-center rounded-md bg-violet-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-violet-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-violet-500 disabled:pointer-events-none disabled:opacity-50 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus-visible:ring-violet-400 group">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  )
}
