"use client"

import { Twitch, Users, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

const featureVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.5,
    },
  }),
}

export function FeaturesSection() {
  return (
    <section id="features" className="container space-y-6 py-8 md:py-12 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center"
      >
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Revolutionizing Live Streaming
        </h2>
        <p className="max-w-[85%] leading-normal text-gray-600 dark:text-gray-400 sm:text-lg sm:leading-7">
          Playnexus combines cutting-edge technology with user-friendly features to create the ultimate streaming
          experience.
        </p>
      </motion.div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={featureVariants}
          whileHover={{ scale: 1.05 }}
          className="relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6 shadow-sm transition-all hover:shadow-lg"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-100 dark:bg-violet-900/20">
            <Twitch className="h-6 w-6 text-violet-600 dark:text-violet-500" />
          </div>
          <div className="mt-4 space-y-2">
            <h3 className="font-bold text-gray-900 dark:text-white">High-Quality Streaming</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Stream in 4K with ultra-low latency for the best viewing experience.
            </p>
          </div>
        </motion.div>
        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={featureVariants}
          whileHover={{ scale: 1.05 }}
          className="relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6 shadow-sm transition-all hover:shadow-lg"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-100 dark:bg-violet-900/20">
            <Users className="h-6 w-6 text-violet-600 dark:text-violet-500" />
          </div>
          <div className="mt-4 space-y-2">
            <h3 className="font-bold text-gray-900 dark:text-white">Interactive Community</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Engage with viewers through live chat, polls, and interactive elements.
            </p>
          </div>
        </motion.div>
        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={featureVariants}
          whileHover={{ scale: 1.05 }}
          className="relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6 shadow-sm transition-all hover:shadow-lg"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-100 dark:bg-violet-900/20">
            <CheckCircle className="h-6 w-6 text-violet-600 dark:text-violet-500" />
          </div>
          <div className="mt-4 space-y-2">
            <h3 className="font-bold text-gray-900 dark:text-white">Monetization Tools</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Multiple revenue streams with subscriptions, donations, and ad partnerships.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
