"use client"

import Link from "next/link"
import { Play } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="border-t border-gray-200 dark:border-gray-800 py-6 md:py-0"
    >
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Play className="h-6 w-6 text-violet-600 dark:text-violet-500" />
          <p className="text-center text-sm leading-loose text-gray-600 dark:text-gray-400 md:text-left">
            &copy; {new Date().getFullYear()} Playnexus. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          <Link href="#" className="text-sm text-gray-600 dark:text-gray-400 underline underline-offset-4">
            Terms
          </Link>
          <Link href="#" className="text-sm text-gray-600 dark:text-gray-400 underline underline-offset-4">
            Privacy
          </Link>
        </div>
      </div>
    </motion.footer>
  )
}
