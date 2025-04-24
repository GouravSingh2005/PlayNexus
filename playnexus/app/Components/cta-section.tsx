"use client"

import { motion } from "framer-motion"

export function CTASection() {
  return (
    <section className="container py-12 md:py-24 lg:py-32">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center"
      >
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Ready to Start Streaming?
        </h2>
        <p className="max-w-[85%] leading-normal text-gray-600 dark:text-gray-400 sm:text-lg sm:leading-7">
          Join thousands of creators and viewers on Playnexus today.
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <button className="mt-4 inline-flex h-12 items-center justify-center rounded-md bg-violet-600 px-8 text-base font-medium text-white shadow transition-colors hover:bg-violet-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-violet-500 disabled:pointer-events-none disabled:opacity-50 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus-visible:ring-violet-400">
            Sign Up Now
          </button>
        </motion.div>
      </motion.div>
    </section>
  )
}
