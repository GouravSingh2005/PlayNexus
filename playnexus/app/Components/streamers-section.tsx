"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function StreamersSection() {
  return (
    <section
      id="streamers"
      className="container py-12 md:py-24 lg:py-32 bg-violet-50 dark:bg-violet-900/10 rounded-3xl my-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center mb-12"
      >
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Featured Streamers
        </h2>
        <p className="max-w-[85%] leading-normal text-gray-600 dark:text-gray-400 sm:text-lg sm:leading-7">
          Join these amazing artists and creators on Playnexus
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6 shadow-sm"
        >
          <div className="relative h-[250px] w-[250px] overflow-hidden rounded-full">
            <Image src="/diljit.jpg" alt="Diljit Dosanjh" fill className="object-cover" />
          </div>
          <h3 className="text-2xl font-bold mt-4 text-gray-900 dark:text-white">Diljit Dosanjh</h3>
          <p className="text-center text-gray-600 dark:text-gray-400">
            Join Diljit's exclusive streams featuring behind-the-scenes content, live performances, and interactive Q&A
            sessions with fans.
          </p>
          <div className="flex gap-2 mt-2">
            <button className="inline-flex h-9 items-center justify-center rounded-md bg-violet-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-violet-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-violet-500 disabled:pointer-events-none disabled:opacity-50 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus-visible:ring-violet-400">
              Follow
            </button>
            <button className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300">
              View Schedule
            </button>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-8 w-8 rounded-full bg-violet-200 dark:bg-violet-800 border-2 border-white dark:border-gray-950"
                />
              ))}
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">2.4M followers</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6 shadow-sm"
        >
          <div className="relative h-[250px] w-[250px] overflow-hidden rounded-full">
            <Image src="/karan.jpg" alt="Karan Aujla" fill className="object-cover" />
          </div>
          <h3 className="text-2xl font-bold mt-4 text-gray-900 dark:text-white">Karan Aujla</h3>
          <p className="text-center text-gray-600 dark:text-gray-400">
            Watch Karan's live music sessions, get exclusive previews of upcoming tracks, and participate in fan events
            and giveaways.
          </p>
          <div className="flex gap-2 mt-2">
            <button className="inline-flex h-9 items-center justify-center rounded-md bg-violet-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-violet-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-violet-500 disabled:pointer-events-none disabled:opacity-50 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus-visible:ring-violet-400">
              Follow
            </button>
            <button className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300">
              View Schedule
            </button>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-8 w-8 rounded-full bg-violet-200 dark:bg-violet-800 border-2 border-white dark:border-gray-950"
                />
              ))}
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">1.8M followers</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
