"use client"

import { CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

const pricingVariants = {
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

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="container py-12 md:py-24 lg:py-32 bg-violet-50 dark:bg-violet-900/10 rounded-3xl my-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center"
      >
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Simple, Transparent Pricing
        </h2>
        <p className="max-w-[85%] leading-normal text-gray-600 dark:text-gray-400 sm:text-lg sm:leading-7">
          Choose the plan that's right for you.
        </p>
      </motion.div>
      <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={pricingVariants}
          whileHover={{ scale: 1.03 }}
          className="relative flex flex-col rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6 shadow-sm"
        >
          <div className="space-y-2">
            <h3 className="font-bold text-gray-900 dark:text-white">Free</h3>
            <p className="text-gray-600 dark:text-gray-400">Perfect for getting started</p>
          </div>
          <div className="mt-4 flex items-baseline">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">$0</span>
            <span className="ml-1 text-gray-600 dark:text-gray-400">/month</span>
          </div>
          <ul className="mt-6 space-y-3">
            <li className="flex items-center">
              <CheckCircle className="mr-2 h-4 w-4 text-violet-600 dark:text-violet-500" />
              <span className="text-gray-700 dark:text-gray-300">720p streaming</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="mr-2 h-4 w-4 text-violet-600 dark:text-violet-500" />
              <span className="text-gray-700 dark:text-gray-300">Basic analytics</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="mr-2 h-4 w-4 text-violet-600 dark:text-violet-500" />
              <span className="text-gray-700 dark:text-gray-300">Up to 2 hours per stream</span>
            </li>
          </ul>
          <button className="mt-8 inline-flex h-10 items-center justify-center rounded-md bg-violet-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-violet-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-violet-500 disabled:pointer-events-none disabled:opacity-50 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus-visible:ring-violet-400">
            Get Started
          </button>
        </motion.div>
        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={pricingVariants}
          whileHover={{ scale: 1.03 }}
          className="relative flex flex-col rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6 shadow-sm"
        >
          <div className="absolute -top-4 right-4 rounded-full bg-violet-600 dark:bg-violet-500 px-3 py-1 text-xs font-medium text-white">
            Popular
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-gray-900 dark:text-white">Pro</h3>
            <p className="text-gray-600 dark:text-gray-400">For serious streamers</p>
          </div>
          <div className="mt-4 flex items-baseline">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">$19</span>
            <span className="ml-1 text-gray-600 dark:text-gray-400">/month</span>
          </div>
          <ul className="mt-6 space-y-3">
            <li className="flex items-center">
              <CheckCircle className="mr-2 h-4 w-4 text-violet-600 dark:text-violet-500" />
              <span className="text-gray-700 dark:text-gray-300">1080p streaming</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="mr-2 h-4 w-4 text-violet-600 dark:text-violet-500" />
              <span className="text-gray-700 dark:text-gray-300">Advanced analytics</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="mr-2 h-4 w-4 text-violet-600 dark:text-violet-500" />
              <span className="text-gray-700 dark:text-gray-300">Unlimited streaming time</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="mr-2 h-4 w-4 text-violet-600 dark:text-violet-500" />
              <span className="text-gray-700 dark:text-gray-300">Custom overlays</span>
            </li>
          </ul>
          <button className="mt-8 inline-flex h-10 items-center justify-center rounded-md bg-violet-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-violet-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-violet-500 disabled:pointer-events-none disabled:opacity-50 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus-visible:ring-violet-400">
            Subscribe
          </button>
        </motion.div>
        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={pricingVariants}
          whileHover={{ scale: 1.03 }}
          className="relative flex flex-col rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6 shadow-sm"
        >
          <div className="space-y-2">
            <h3 className="font-bold text-gray-900 dark:text-white">Business</h3>
            <p className="text-gray-600 dark:text-gray-400">For professional creators</p>
          </div>
          <div className="mt-4 flex items-baseline">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">$49</span>
            <span className="ml-1 text-gray-600 dark:text-gray-400">/month</span>
          </div>
          <ul className="mt-6 space-y-3">
            <li className="flex items-center">
              <CheckCircle className="mr-2 h-4 w-4 text-violet-600 dark:text-violet-500" />
              <span className="text-gray-700 dark:text-gray-300">4K streaming</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="mr-2 h-4 w-4 text-violet-600 dark:text-violet-500" />
              <span className="text-gray-700 dark:text-gray-300">Premium analytics</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="mr-2 h-4 w-4 text-violet-600 dark:text-violet-500" />
              <span className="text-gray-700 dark:text-gray-300">Multi-platform streaming</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="mr-2 h-4 w-4 text-violet-600 dark:text-violet-500" />
              <span className="text-gray-700 dark:text-gray-300">Priority support</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="mr-2 h-4 w-4 text-violet-600 dark:text-violet-500" />
              <span className="text-gray-700 dark:text-gray-300">Revenue sharing options</span>
            </li>
          </ul>
          <button className="mt-8 inline-flex h-10 items-center justify-center rounded-md bg-violet-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-violet-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-violet-500 disabled:pointer-events-none disabled:opacity-50 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus-visible:ring-violet-400">
            Contact Sales
          </button>
        </motion.div>
      </div>
    </section>
  )
}
